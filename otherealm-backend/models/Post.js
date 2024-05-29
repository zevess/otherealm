import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
    },
    viewsCount: {
        type: Number,
        default: 0
    },
    imageUrl: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true
})

export default mongoose.model('Post', PostSchema)