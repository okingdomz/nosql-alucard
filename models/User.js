const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: { type: String, Unique: true, required: true, trimmed: true},
        thoughts: [{ type: Schema.Types.Array, ref: 'thought',}],
        email: { type: String, required: true, unique: true},
        friends: [{ type: Schema.Types.Array, ref: 'thought',}],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema
    .virtual('friendCount')
    .get(function () {
        const numberOfFriends = this.friends.length;
        return numberOfFriends
    })

    const User = model('user', userSchema);

    module.exports = User;