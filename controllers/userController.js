
// const User = require('../models/User');

const { User } = require("../models");

module.exports = {
  getUsers(req, res) {
    User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No User with that ID' })
          : res.json(
            user
            )
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new student
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a student and remove them from the course
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No such user exists' })
          : res.json({ message: 'deleted'})
          
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

//   update user
updateUser(req, res ) {
    User.findOneAndUpdate(
        { _id: req.params.userId},
        { $set: req.body },
        { new:true}
    )
    .then((user)=>
        !user
        ? res.status(404).json({ message: 'No such user exists' })
        : res.json({ message: 'deleted'})
    )
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
},


  // Add an friend to a user
  addFriend(req, res) {
// usings params because we are pulling from id?
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No user found with that ID :(' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Remove frineds from a student
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friend: { friendId: req.params.friendId } } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No user found with that ID :(' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};