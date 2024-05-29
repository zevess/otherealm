import mongoose from "mongoose";

const DiscussSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    text:{
        type: String,
        required: true,
    },
    viewsCount: {
        type: Number,
        default: 0,
    },
    imageUrl: String,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    itemId: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

export default mongoose.model('Discuss', DiscussSchema);