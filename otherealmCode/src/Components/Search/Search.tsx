import { Box, Pagination, Typography } from "@mui/material"
import { InputText, inputStyles } from "../InputText"
import { ItemCard } from "../Cards/ItemCard"
import { itemArr } from "../../utils/itemsArr"
import React from "react"
import { useAppSelector } from "../../store"
import { filmFetch } from "../../store/fetches/filmFetch"
import { useAppDispatch } from "../../store/hooks"
import { SearchToggleGroup } from "../Toggles/SearchToggleGroup"
import { searchToggleItems, sections } from "../../utils/itemTypes"
import { handleChange } from "../../utils/handleChange"
import { SectionToggleGroup } from "../Toggles/SectionToggleGroup"
import { booksFetch } from "../../store/fetches/bookFetch"
import { addItemTitle, setMediaPage, setSearchSection, setTotalBookPage, setTotalGamePage, setTotalMediaPage } from "../../store/reducers/stateReducer"
import { SearchResult } from "./SearchResultList"
import { gameFetch } from "../../store/fetches/gameFetch"
import { gameFetchTest } from "../../utils/test"

export const Search = () => {

    const dispatch = useAppDispatch();

    const [text, setText] = React.useState('');

    const [searchAlignment, setSearchAlignment] = React.useState(Object.keys(searchToggleItems)[0]);

    const searchTitleSelector = useAppSelector((state) => state.state.searchTitle)
    const searchTitle = searchTitleSelector.replace(' ', '_');

    const kpToken = useAppSelector((state) => state.filmData.kpToken)
    const gbToken = useAppSelector((state) => state.bookData.gbToken)
    const rawgToken = useAppSelector((state) => state.gameData.rawgToken);
    const currentMediaPage = useAppSelector((state) => state.state.currentMediaPage);
    const currentBookPage = useAppSelector((state) => state.state.currentBookPage);
    const currentGamePage = useAppSelector((state) => state.state.currentGamePage);
    
    const bookState = useAppSelector((state) => state.bookData)
    const filmState = useAppSelector((state) => state.filmData)
    const gameState = useAppSelector((state) => state.gameData)

    if(bookState.bookResult?.totalItems !== undefined){
        dispatch(setTotalBookPage(Math.ceil(Number(bookState.bookResult.totalItems / 20))))
    }

    if(gameState.gameResult?.count !== undefined){
        dispatch(setTotalGamePage(Math.ceil(gameState.gameResult.count / 20)))
    }
   
    if(filmState.filmResult?.pages !== undefined){
        dispatch(setTotalMediaPage(filmState.filmResult.pages))
    }


    React.useEffect(() => {
        dispatch(addItemTitle(text));
    }, [text, searchAlignment])
    dispatch(setSearchSection(searchAlignment));


    const getFilms = (searchTitle: string, currentMediaPage: number, kpToken: string) => {
        if (searchTitle !== (null || '')) {
            dispatch(filmFetch({ searchTitle, currentMediaPage, kpToken }))
        } else{
            alert("поле ввода не должно быть пустым!")
            return
        }
    }
    
    const getBooks = (searchTitle: string, gbToken: string, currentBookPage: number) => {
        if (searchTitle !== (null || '')) {
            dispatch(booksFetch({ searchTitle, gbToken, currentBookPage }))
        }else{
            alert("поле ввода не должно быть пустым!")
            return
        }
    }
    
    const getGame = (searchTitle: string, rawgToken: string, currentGamePage: number) => {
        if (searchTitle !== (null || '')) {
            dispatch(gameFetch({ searchTitle, rawgToken, currentGamePage }))
        }else{
            alert("поле ввода не должно быть пустым!")
            return
        }
    }
    
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <InputText setText={setText} onClick={() => {
                getFilms(searchTitle, currentMediaPage, kpToken)
                getBooks(searchTitle, gbToken, currentBookPage);
                getGame(searchTitle, rawgToken, currentGamePage);
            }} placeholder="поиск фильма, игры, литературы" sx={inputStyles} />
            <Box width={'60%'}>
                <SearchToggleGroup items={searchToggleItems} handleChange={(event, newAlignment) => handleChange(event, newAlignment, setSearchAlignment)} alignment={searchAlignment}></SearchToggleGroup>
                <Box marginLeft={'auto'} marginRight={'auto'} width={'auto'} maxWidth={'700px'} height={'auto'} border={'solid 1px black'} bgcolor={'white'}>
                    <Typography variant="h5">Все результаты взяты из открытых источников:</Typography>
                    <Box display={'flex'} justifyContent={'space-evenly'}>
                        <a href="https://api.kinopoisk.dev/documentation">api.kinopoisk.dev</a>
                        <a href="https://rawg.io">rawg.io</a>
                        <a href="https://developers.google.com/books?hl=ru">developers.google.com/books</a>
                    </Box>
                    <Typography variant="h5">соответственно</Typography>
                    <Typography variant="h5">Результаты могут отличаться от ожидаемых.</Typography>
                    <Typography variant="h5">Для получения более точных вводите названия на оригинальном языке.</Typography>
                </Box>
                <SearchResult />
            </Box>
        </Box>
    )
}

