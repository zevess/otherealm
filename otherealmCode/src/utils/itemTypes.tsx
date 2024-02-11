interface objectProps {
    [key: string]: string
}

export const itemTypes: objectProps = {
    "all": "все",
    "films": "фильмы",
    "tvseries": "сериалы",
    "cartoons": "мультфильмы",
    "anime": "аниме",
    "games": "игры",
    "books": "книги"
}


export const sections: objectProps = {
    "list": "списки",
    "franchises": "франшизы"
}




export const divideItems: objectProps = {
    "буду смотреть": "буду смотреть ",
    "любимое": "любимое"
}


export const searchToggleItems: objectProps = {
    "media": "поиск по фильмам/сериалам/мультфильмам/аниме",
    "games": "поиск по играм",
    "books": "поиск по книгам"
}