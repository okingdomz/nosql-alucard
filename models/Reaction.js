// schema only

const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = new Schema(
    {
        reactionId:
        {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: { type: String, required: true, maxlength: 280 },
        username: { type: String, required: true },
        createdAt: {
            type: Date,
            default: Date.now,
            // creating get method for time
            get: (timestamp) => dateFormat(timestamp),
        },
    },
        {
            toJSON: {
                getters: true,
            },
            id: false,
        }
);

// getter method to create timestamp on query

reactionSchema.get(function () {
    return this.createdAt.Date.now;
});
module.exports = reactionSchema;