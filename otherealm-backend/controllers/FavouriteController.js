import FavouriteModel from "../models/Favourite.js";


export const createFavourite = async (req, res) => {
    try {

        const existingFavourite = await FavouriteModel.findOne({
            user: req.userId,
            title: req.body.title
        })

        if (existingFavourite) {
            return res.status(400).json({ message: 'Раздел с таким названием уже существует' });
        }

        const doc = new FavouriteModel({
            user: req.userId,
            title: req.body.title,
        })

        const favourite = await doc.save();
        res.json(favourite)

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'не удалось создать раздел'
        })
    }
}







export const updateFavourite = async (req, res) => {
    try {
        const favId = req.body.favId;
        const editTitle = req.body.editTitle;
        const userId = req.params.userId;

        const existingFavourite = await FavouriteModel.findOne({
            user: userId,
            title: editTitle,
        });

        if (existingFavourite) {
            return res.status(400).json({ message: 'Раздел с таким названием уже существует' });
        }

        await FavouriteModel.updateOne(
            { _id: favId },
            {
                title: editTitle,
                user: req.userId
            }
        );

        res.json(existingFavourite);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'не удалось обновить статью'
        });
    }
}


export const removeFavourite = async (req, res) => {
    try {

        const favId = req.params.favId;

        const deleteFav = await FavouriteModel.findOneAndDelete({
            _id: favId
        }).exec();

        if (!deleteFav) {
            return res.status(404).json({
                message: "раздел не найден"
            });
        }

        res.json({
            success: true
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'не удалось удалить раздел'
        })
    }
}











export const addItemToFavourite = async (req, res) => {
    try {
        const favouriteId = req.params.id
        const favouriteItems = {
            itemId: req.body.itemId,
            itemTitle: req.body.itemTitle,
            itemBackgroundImage: req.body.itemBackgroundImage,
            itemType: req.body.itemType
        }

        const updatedFavourite = await FavouriteModel.findByIdAndUpdate(favouriteId,
            { $push: { items: favouriteItems } },
            { new: true })
        res.json(updatedFavourite)

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'не удалось добавить в раздел'
        })
    }
}

export const removeItemFromFavourite = async (req, res) => {
    try {
        const favouriteId = req.params.id
        const favouriteItems = {
            itemId: req.body.itemId,
            itemTitle: req.body.itemTitle,
            itemBackgroundImage: req.body.itemBackgroundImage,
            itemType: req.body.itemType
        }

        const updatedFavourite = await FavouriteModel.findByIdAndUpdate(favouriteId,
            { $pull: { items: favouriteItems } },
            { new: true })
        res.json(updatedFavourite)

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'не удалось добавить в раздел'
        })
    }
}

export const getFavourites = async (req, res) => {
    try {
        const userId = req.params.userId;
        const favourites = await FavouriteModel.find({
            user: userId
        }).exec();

        if (favourites.length === 0) {
            return res.status(404).json({
                message: "разделы не найдены"
            })
        }

        res.json(favourites);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'не удалось получить разделы'
        })
    }
}

export const getAllFavourites = async (req, res) => {
    try {
        
        const favourites = await FavouriteModel.find().exec();

        if (favourites.length === 0) {
            return res.status(404).json({
                message: "разделы не найдены"
            })
        }

        res.json(favourites);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'не удалось получить разделы'
        })
    }
}