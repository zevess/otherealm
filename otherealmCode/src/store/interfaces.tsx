
export interface filmResultProps{
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