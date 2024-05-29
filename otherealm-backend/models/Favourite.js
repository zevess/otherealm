import mongoose from "mongoose";

const FavouriteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    items: [{
        itemId: {
            type: String,
            required: true
        },
        itemTitle: {
            type: String,
            required: true
        },
        itemBackgroundImage: {
            type: String,
            required: true
        },
        itemType: {
            type: String,
            required: true
        }
    }]
}, {
    timestamps: true,
})

export default mongoose.model('Favourite', FavouriteSchema);
