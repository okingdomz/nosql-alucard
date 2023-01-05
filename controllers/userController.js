// functionality of the database

const User = require('../models/User');
const Thought = require('../models/Thought');
const Reaction = require('../models/Reaction');

const app = require('express').Router();

// get a single user by id

app.get('/users/:_id', async (req, res) => {
    try {
        const oneUser = await User.findOne({ _id: req.params._id });
        res.status(200).json(oneUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

//  get all users

app.get('/users', async (req, res) => {
    try {
        const allUsers = await User.findAll();
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(500).json(err);
    }
});


// create a new user
// 3001/api/users
app.post('/users', async (req, res) => {
    try {
        const newUser = await User.create({ username: req.body.username, email: req.body.email });
        res.status(200).json(newUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete users
// 3001/api/users/:_id
app.delete('/users/:_id', async (req, res) => {
    try {
        const deletedUser = await User.findOneAndDelete({_id: req.params._id });
        res.status(200).json(deletedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

//updating User by id
// 3001/api/users
app.put('/users/:_id', async (req, res) => {
    try{
        const updatedUser = await User.findOneAndUpdate({_id: req.params._id}, { email: req.body.email, username: req.body.username });
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get one thought from its id
// 3001/api/thoughts/:id
app.get('/thoughts/:_id', async (req, res) => {
    try {
        const oneThought = await Thought.findOne({ _id: req.params._id });
        res.status(200).json(oneThought);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get thoughts of all users
// 3001/api/thoughts
app.get('/thoughts', (req, res) => {
    Thought.find({}, (err, result) => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(500).json({ error: 'could not get thoughts, sorry -_-'});
        }
    });
});

// create a thought and adding it to the users array/previous thoughts
// 3001/api/thoughts
app.post('/thoughts', async (req, res) => {
    try {
        const newThought = await Thought.create(req.body);
        const updateUser = await User.findOneAndUpdate(
            { username: req.body.username }, 
            { $push: { thoughts: newThought } });
            res.status(200).json(updateUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete thoughts by user id
// 3001/api/thoughts/:id
app.delete('/thoughts/:_id', async (req, res) => {
    try {
        const deletedThought = await Thought.findOneAndDelete({ _id: req.params._id });
        res.status(200).json(deletedThought);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update thoughts by user id
// 3001/api/thoughts/:id
app.put('/thoughts/:_id', async (req, res) => {
    try {
        const updatedThought = await Thought.findOneAndUpdate({ _id: req.params._id }, { thoughtText: req.body.thoughtText, createdAt: req.body.createdAt });
        res.status(200).json(updatedThought);
    } catch (err) {
        res.status(500).json(err);
    }
});

// post a reaction to a thought
// 3001/api/thoughts/:thoughtId/reactions
app.post('/thoughts/:_id/reactions', async (req, res) => {
    try {
        const newReaction = await Thought.findOneAndUpdate({ _id: req.params._id }, {reactions: { reactionBody: req.body.reactionBody }});
        res.status(200).json(newReaction);
    } catch (err) {
        res.status(500).json(err);
    }
});



// delete a reaction to a thought
// 3001/api/thoughts/:thoughtId/:reactionId

app.delete('/thoughts/:_id/:_id', async (req, res) => {
    try {
        const deleteReaction = await Thought.findOneAndUpdate({ _id: req.params._id }, { $pull: { reactions: { _id: req.params._id }}}, { new: true });
        res.status(200).json(deleteReaction);
    } catch (err) {
        res.status(500).json(err);
    }
});

// add friends of a user
// 3001/api/users/:id/friends/:friendsId
app.put('/users/:_id/friends/:friendsId', async (req, res) => {
    try {
        const newFriend = await User.findOneAndUpdate({ _id: req.params._id }, { friends: req.params.friendId });
        res.status(200).json(newFriend);
    } catch (err) {
        res.status(500).json(err);
    }
});
// delete a friend of a user
// 3001/api/users/:_id/friends/:friendId
app.delete('/users/:_id/friends/:friendId', async (req, res) => {
    try {
        const deletedFriend = await User.findOneAndUpdate({ _id: req.params._id }, { $pull: { friends: req.params.friendId }}, { new: true});
        res.status(200).json(deletedFriend);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = app;