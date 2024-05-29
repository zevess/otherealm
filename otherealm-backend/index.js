import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import { commentCreateValidation, discussCreateValidation, loginValidation, postCreateValidation, registerValidation } from './validations.js';
import { checkAuth, handleValidationErrors } from './utils/index.js';
import { CommentContoller, DiscuccController, FavouriteController, PostController, UserController } from './controllers/index.js';
import multer from 'multer';


//'mongodb+srv://admin:mTicEooXH4YI8fbG@otherealmdbcluster.inhudla.mongodb.net/data?retryWrites=true&w=majority&appName=otherealmDBCluster'
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("db ok"))
    .catch((err) => console.log("db err", err));

const app = express();
const port = process.env.PORT || 4000;

const storage = multer.diskStorage({
    destination:(_, __, cb) =>{
        cb(null, 'uploads')
    },
    filename: (_, file, cb) =>{
        file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf-8');
        cb(null, file.originalname)
    }
})

const uploads = multer({storage})

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
app.patch('/comments/:commentId', checkAuth, commentCreateValidation, handleValidationErrors, CommentContoller.editComment)
app.delete('/comments/:commentId', checkAuth, CommentContoller.deleteComment)

app.post('/upload', checkAuth, uploads.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`
    })
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
app.get('/post/:postId', PostController.getOnePost);
app.patch('/post/:postId', checkAuth, handleValidationErrors, PostController.editPost);
app.delete('/post/:postId', checkAuth, PostController.deletePost);

app.post('/discuss', checkAuth, discussCreateValidation, handleValidationErrors, DiscuccController.createDiscuss);
app.get('/discuss/:itemId', DiscuccController.getDiscuss)
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
