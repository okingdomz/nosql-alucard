const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// new thought schema creation

const thoughtSchema = new Schema(
    {
        thoughtText: { type: String, required: true, minlenght: 1, maxlength: 200 },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: { type: String, required: true },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// virtual reaction Count that gets the length of the thoughts reactions

thoughtSchema.virtual('reactionCount')
.get(function () {
    const numberOfReactions = this.reactions.length;
    return numberOfReactions;
})

// initialize model
const Thought = model('thought', thoughtSchema)
module.exports = Thought;