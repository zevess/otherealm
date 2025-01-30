import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors'
import { commentCreateValidation, discussCreateValidation, loginValidation, postCreateValidation, registerValidation } from './validations.js';
import { checkAuth, handleValidationErrors } from './utils/index.js';
import { CommentContoller, DiscuccController, FavouriteController, PostController, UserController } from './controllers/index.js';
import multer from 'multer';
import axios from 'axios';


dotenv.config();
const uri = process.env.MONGODB_CONNECT_URI
const imgbbUri = process.env.IMGBB_CONNECT_URI

mongoose.connect(uri)
    .then(() => console.log("db ok"))
    .catch((err) => console.log("db err", err));

const app = express();
const port = process.env.PORT || 8000;

const uploads = multer({storage: multer.memoryStorage()})

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
    res.send('hello world');
})    

app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login)
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register)
app.get('/auth/me', checkAuth, UserController.getMe);

app.post('/comments', checkAuth, commentCreateValidation, handleValidationErrors, CommentContoller.createComment)
app.get('/comments/:postId', CommentContoller.getComments)
app.get('/comments', CommentContoller.getAllComments)
app.patch('/comments/:commentId', checkAuth, commentCreateValidation, handleValidationErrors, CommentContoller.editComment)
app.delete('/comments/:commentId', checkAuth, CommentContoller.deleteComment)

app.post('/upload', checkAuth, uploads.single('image'), async(req, res) => {
    try{
        const formData = new FormData();
        formData.append('image', req.file.buffer.toString('base64'));
        
        const response = await axios.post(imgbbUri, formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
        res.json(response.data)

    } catch(err){
        console.error('Error uploading to imgbb:', err);
        res.status(500).json({ error: 'Error uploading to imgbb' });
    }
})

app.patch('/profile/avatar/:userId', checkAuth, UserController.updateAvatar)
app.patch('/profile/background/:userId', checkAuth, UserController.updateBackground)
app.patch('/profile/follow/:userId', checkAuth, UserController.followUser);
app.patch('/profile/unfollow/:userId', checkAuth, UserController.unfollowUser);
app.get('/profile/findUsers/:name', checkAuth, UserController.userSearch);
app.get('/profile/getUser/:nick', UserController.getUser);

app.get('/posts/feed/:userId', checkAuth, PostController.getFollowsPosts);

app.post('/posts', checkAuth, postCreateValidation, handleValidationErrors, PostController.createPost);
app.get('/posts/:userId', PostController.getPostsByUser);
app.get('/posts', PostController.getAllPosts);
app.get('/post/:postId', PostController.getOnePost);
app.patch('/post/:postId', checkAuth, handleValidationErrors, PostController.editPost);
app.delete('/post/:postId', checkAuth, PostController.deletePost);

app.post('/discuss', checkAuth, discussCreateValidation, handleValidationErrors, DiscuccController.createDiscuss);
app.get('/discuss/:itemId', DiscuccController.getDiscuss)
app.get('/discuss', DiscuccController.getAllDiscuss)
app.get('/discuss/:itemId/:discussId', DiscuccController.getOneDiscuss)
app.patch('/discuss/:itemId/:discussId', checkAuth, discussCreateValidation, handleValidationErrors, DiscuccController.editDiscuss);
app.delete('/discuss/:itemId/:discussId', checkAuth,  DiscuccController.deleteDiscuss);

app.post('/favourite', checkAuth, FavouriteController.createFavourite);
app.get('/favourite', FavouriteController.getAllFavourites);
app.post('/favourite/edit/:userId', FavouriteController.updateFavourite);
app.delete('/favourite/remove/:favId', FavouriteController.removeFavourite);
app.get('/favourite/:userId', FavouriteController.getFavourites);
app.patch('/favourite/add/:id', checkAuth, FavouriteController.addItemToFavourite);
app.patch('/favourite/remove/:id', checkAuth, FavouriteController.removeItemFromFavourite);

app.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("server ok");
})
