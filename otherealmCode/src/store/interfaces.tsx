
export interface filmResultProps{
    total: number,
    limit: number,
    pages: number,
    docs: [
        {
            id: number,
            name: string,
            alternativeName?: string,
            enName?: string,
            type? : string,
            year?: number ,
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

export interface currentFilmItemProps{
    id: number,
    alternativeName?: string,
    name?: string,
    enName?: string,
    countries?: [
        {
            name?: string
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
    genres?: [
        {
            name?: string
        }
    ]
}

export interface bookResultProps{
    totalItems: number,
    items: [
        {
            id?: string,
            selfLink?: string,
            volumeInfo?:{
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


export interface currentBookProps{
    id?: string,
    volumeInfo?:{
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


export interface gameResultProps{
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
export interface currentGameItemProps{
    id?: number,
    name?: string,
    name_original?: string,
    description?: string,
    description_raw: string,
    released?: string,
    rating?: number,
    background_image?: string
}