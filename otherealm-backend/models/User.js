import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    nick: {
        type: String,
        required: true,
        unique: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    avatarUrl: String,
    backgroundUrl: String,
    follows: [
        {
            nick: String,
            name: String,
            avatarUrl: String,
            _id: String,
        }
    ]
}, {
    timestamps: true
})

export default mongoose.model('User', UserSchema);