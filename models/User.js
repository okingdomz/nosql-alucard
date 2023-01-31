const { Schema, model } = require('mongoose');


// may need to change types of array to the ObjectId
const UserSchema = new Schema(
    {
        username: { type: String, Unique: true, required: true, trimmed: true},
        thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought',}],
        email: { type: String, required: true, unique: true},
        friends: [{ type: Schema.Types.ObjectId, ref: 'User',}],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
// virtual friend count, retrieves the users friend count in query
UserSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length
        
    })

    const User = model('User', UserSchema);

    module.exports = User;