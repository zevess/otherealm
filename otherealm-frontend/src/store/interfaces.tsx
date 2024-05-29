
export interface filmResultProps {
    total: number,
    limit: number,
    pages: number,
    docs: [
        {
            id: number,
            name: string,
            alternativeName?: string,
            enName?: string,
            type?: string,
            year?: number,
            poster?:
            {
                url?: string
            }
            ,
            rating?: {
                kp?: number,
                imdb?: number
            }
        }
    ]
}

export interface currentFilmItemProps {
    id: number,
    alternativeName?: string,
    name?: string,
    enName?: string,
    countries: [
        {
            name: string
        },
    ],
    description?: string,
    rating?: {
        imdb?: number,
        kp?: number
    },
    poster?: {
        url?: string
    },
    type?: string,
    year?: number,
    genres: [
        {
            name?: string
        }
    ],
    persons: [
        {
            id: number,
            name: string,
            enName: string
            profession: string,
            enProfession: string
        }
    ]
}

export interface bookResultProps {
    totalBooksItems: number,
    totalItems: number,
    items: [
        {
            id?: string,
            selfLink?: string,
            volumeInfo?: {
                title?: string,
                description?: string,
                authors?: [

                ],
                imageLinks?: {
                    thumbnail?: string
                }
            }
        }
    ]
}


export interface currentBookProps {
    id?: string,
    volumeInfo?: {
        title?: string,
        authors?: string[],
        publishedDate?: string,
        description?: string,
        pageCount?: number,
        imageLinks?: {
            thumbnail?: string
        }
    }
}


export interface gameResultProps {
    count: number
    results: [
        {
            slug?: string,
            name?: string,
            background_image?: string,
            id?: number,
        }
    ]
}
export interface currentGameItemProps {
    id?: number,
    name?: string,
    name_original?: string,
    description?: string,
    description_raw: string,
    released?: string,
    rating?: number,
    background_image?: string
    metacritic: number,
    developers: [
        {
            id: number,
            name: string
        }
    ],
    publishers: [
        {
            id: number,
            name: string
        }
    ],
    genres: [
        {
            id: number,
            name: string
        }
    ]
    platforms: [
        {
            platform: {
                name: string
            }
        }
    ],
}

export interface authDataProps {
    name: string,
    email: string,
    nick?: string,
    _id: string,
    avatarUrl: string,
    backgroundUrl: string,
    follows: string[]
}

export interface usersProps {
    users: [
        {
            name: string,
            email: string,
            nick?: string,
            _id: string,
            avatarUrl: string,
            backgroundUrl: string,
            follows: string[]
        }
    ]

}

export interface userPosts {
    posts: [
        {
            _id: string,
            title: string,
            text: string,
            viewsCount: number,
            imageUrl: string,
            user: string,
            createdAt: string,
            updatedAt: string,
        }
    ]
}

export interface postProps {
    _id: string,
    title: string,
    text: string,
    viewsCount: number,
    imageUrl: string,
    createdAt: string,
    updatedAt: string,
    user: {
        _id: string,
        name: string,
        nick: string,
        avatarUrl: string,
        email: string,
        passwordHash: string,
        createdAt: string,
        updatedAt: string,
        __v: 0
    },

}

export interface CommentsProps {


    _id: string,
    user: {
        _id: string,
        name: string,
        nick: string,
        avatarUrl: string
        email: string,
        passwordHash: string,
        createdAt: string,
        updatedAt: string,
        __v: 0
    },
    postId: string,
    text: string,
    createdAt: string,
    updatedAt: string,
    __v: 0


}

export interface CommentProps {
    _id: string,
    user: {
        _id: string,
        name: string,
        nick: string,
        avatarUrl: string,
        email: string,
        passwordHash: string,
        createdAt: string,
        updatedAt: string,
        __v: 0
    },
    postId: string,
    text: string,
    createdAt: string,
    updatedAt: string,
    __v: 0


}

export interface discussProps {
    _id: string,
    title: string,
    text: string,
    viewsCount: number,
    imageUrl: string,
    itemId: string,
    user: {
        _id: string,
        name: string,
        nick: string,
        avatarUrl: string
        email: string,
        passwordHash: string,
        createdAt: string,
        updatedAt: string,
        __v: 0
    },
    createdAt: string,
    updatedAt: string,
}

// export interface favouriteItemProps{
//     createdAt: string,
//     items: [
//         {
//             itemBackgroundImage: string,
//             itemId: string,
//             itemTitle: string,
//             itemType: string,
//             _id: string
//         }
//     ],
//     title: string,
//     _id: string,
//     user: string
// }
export interface favouriteItemProps {
    itemBackgroundImage: string,
    itemId: string,
    itemTitle: string,
    itemType: string,
    _id: string
}

export interface favouriteProps {
    _id: string,
    createdAt: string,
    updatedAt: string,
    title: string,
    user: string,
    items: favouriteItemProps[]
}

