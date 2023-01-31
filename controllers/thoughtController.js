const {Thought, User} = require('../models');

module.exports = {
  // Get all students
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single student
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thoughts with that ID' })
          : res.json(
            thought
            )
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a student and remove them from the course
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No such thought exists' })
        //   might need to change this to deleting one function
         : User.deleteMany({ _id: { $in: thought.users } })
          
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

//   update user
updateThought(req, res ) {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId},
        { $set: req.body },
        { runValidators: true, new: true }
    )
    .then((thought)=>
        !thought
        ? res.status(404).json({ message: 'No such thought exists' })
        : res.json(thought)
    )
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
},


  // Add an friend to a user
  addThoughtReaction(req, res) {

    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: 'No thought found with that ID :(' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Remove frineds from a student
  removeThoughtReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: 'No thought found with that ID :(' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};