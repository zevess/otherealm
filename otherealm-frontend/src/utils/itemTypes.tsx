interface objectProps {
    [key: string]: string
}

export const itemTypes: objectProps = {
    "all": "все",
    "movie": "фильмы",
    "tv-series": "сериалы",
    "cartoon": "мультфильмы",
    "anime": "аниме",
    "game": "игры",
    "book": "книги"
}


export const sections: objectProps = {
    "posts": "посты",
    "list": "списки",
    "follows": "подписки"
}




export const divideItems: objectProps = {
    "буду смотреть": "буду смотреть ",
    "любимое": "любимое"
}


export const searchToggleItems: objectProps = {
    "cinema": "поиск по фильмам/сериалам/мультфильмам/аниме",
    "games": "поиск по играм",
    "books": "поиск по книгам"
}

export const searchTypes: objectProps = {
    "media": "поиск по медиа",
    "users": "поиск пользователей"
}