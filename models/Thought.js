const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./Reaction');

// new thought schema creation

const ThoughtSchema = new Schema(
	{
		thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
		createdAt: {
			type: Date,
			default: Date.now,
			// importing date format method
			get: (timestamp) => dateFormat(timestamp),
		},
		username: { type: String, required: true },
		reactions: [reactionSchema],
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
		id: false,
	}
);

// virtual reaction Count that gets the length of the thoughts reactions

ThoughtSchema.virtual('reactionCount').get(function () {
	return this.reactions.length;
});

// initialize model
const Thought = model('thought', ThoughtSchema);
module.exports = Thought;
