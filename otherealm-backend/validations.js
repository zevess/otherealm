import {body} from 'express-validator'

export const loginValidation = [
    body('email', 'неверный формат почты').isEmail(),
    body('password', 'пароль должен быть минимум 5 символов').isLength({min: 5})
]

export const registerValidation = [
    body('email', 'неверный формат почты').isEmail(),
    body('password', 'пароль должен быть минимум 5 символов').isLength({min: 5}),
    body('name', 'имя').isLength({min: 4}),
    body('nick', 'укажите никнейм').isLength({min: 4}),
    body('avatarUrl', 'неверная ссылка').optional().isURL(),
]

export const commentCreateValidation = [
    body('postId', 'введите id страницы').isLength({min: 5}),
    body('text', 'введите текст коммента').isLength({min: 3}).isString()
]

export const discussCreateValidation = [
    body('title', 'введите заголовок обсуждения').isLength({min: 5}).isString(),
    body('itemId', 'введите id страницы').isLength({min: 5}),
    body('itemTag', 'введите id страницы').isLength({min: 5}),
    body('text', 'введите текст обсуждения').optional().isString(),
    body('imageUrl', 'неверная ссылка на изображение').optional().isString()
]

export const favouriteCreateValidation = [
    body('title', 'название раздела должно быть уникальным!').isLength({min: 3}).isString()
]

export const postCreateValidation = [
    body('title', 'введите заголовок поста').isLength({min: 5}).isString(),
    body('text', 'ошибка при вводе текста').optional().isString(),
    body('imageUrl', 'неверная ссылка на изображение').optional().isString()
]