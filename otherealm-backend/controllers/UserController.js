import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import UserModel from '../models/User.js'

export const register = async (req, res) => {
    try {
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const doc = new UserModel({
            name: req.body.name,
            nick: req.body.nick,
            email: req.body.email,
            passwordHash: hash,
            avatarUrl: req.body.avatarUrl,
        })

        const user = await doc.save();

        const token = jwt.sign({
            _id: user._id,
        }, 'secret123', {
            expiresIn: '30d'
        })

        const { passwordHash, ...userData } = user._doc

        res.json({
            ...userData,
            token
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'не удалось зарегистрироваться'
        })
    }
}

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({
            email: req.body.email
        });

        if (!user) {
            return res.status(404).json({
                message: "пользователь не найден"
            })
        }

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash)

        if (!isValidPass) {
            return res.status(400).json({
                message: "неверный логин или пароль"
            })
        }

        const token = jwt.sign({
            _id: user._id,
        }, 'secret123', {
            expiresIn: '30d'
        })

        const { passwordHash, ...userData } = user._doc

        res.json({
            ...userData,
            token
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'не удалось авторизоваться'
        })
    }
}

export const getMe = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                message: 'пользователь не найден'
            })
        }

        const { passwordHash, ...userData } = user._doc;

        res.json(userData);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'нет доступа'
        })
    }
}

export const getUser = async (req, res) => {
    try {
        const nick = req.params.nick;
        const user = await UserModel.findOne({
            nick: nick
        }).exec();

        if (!user) {
            return res.status(404).json({
                message: 'пользователь не найден'
            });
        }

        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'нет доступа'
        });
    }
}

export const updateAvatar = async (req, res) => {
    try {
        const userId = req.params.userId;
        await UserModel.updateOne({
            _id: userId
        },
            {
                avatarUrl: req.body.avatarUrl,
            },
        )

        res.json({
            success: true
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'не удалось обновить профиль'
        })
    }
}

export const updateBackground = async (req, res) => {
    try {
        const userId = req.params.userId;
        await UserModel.updateOne({
            _id: userId
        },
            {
                backgroundUrl: req.body.backgroundUrl,
            },
        )

        res.json({
            success: true
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'не удалось обновить профиль'
        })
    }
}

export const followUser = async (req, res) => {
    try {

        const userId = req.params.userId;

        const follow = {
            name: req.body.name,
            nick: req.body.nick,
            avatarUrl: req.body.avatarUrl,
            _id: req.body.id
        }

        const updatedFollows = await UserModel.findByIdAndUpdate(userId,
            {
                $push: {
                    follows: follow
                },
            },
            { new: true }
        )
        res.json(updatedFollows)

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'не удалось подписаться'
        })
    }
}





export const unfollowUser = async (req, res) => {
    try {

        const userId = req.params.userId;

        const follow = {
            name: req.body.name,
            nick: req.body.nick,
            avatarUrl: req.body.avatarUrl,
            _id: req.body.id
        }

        const updatedFollows = await UserModel.findByIdAndUpdate(userId,
            {
                $pull: {
                    follows: follow
                },
            },
            { new: true }
        )
        res.json(updatedFollows)


    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'не удалось подписаться'
        })
    }
}

export const userSearch = async (req, res) => {
    try {
        
        const name = req.params.name;
        const foundUsers = await UserModel.find({
            name: name
        }).exec()

        if(!foundUsers){
            return res.status(404).json({
                message: 'пользователи не найдены'
            });
        }

        res.json(foundUsers)

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'не удалось найти пользователя'
        })
    }
}
