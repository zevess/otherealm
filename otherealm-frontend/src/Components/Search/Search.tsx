import React from "react"
import { useAppSelector } from "../../store"
import { filmFetch } from "../../store/fetches/filmFetch"
import { useAppDispatch } from "../../store/hooks"
import { SearchToggleGroup } from "../Toggles/SearchToggleGroup"
import { searchToggleItems, searchTypes, sections } from "../../utils/itemTypes"
import { handleChange } from "../../utils/handleChange"
import { booksFetch } from "../../store/fetches/bookFetch"
import { addItemTitle, setSearchSection, setTotalBookPage, setTotalGamePage, setTotalMediaPage } from "../../store/reducers/stateReducer"
import { gameFetch } from "../../store/fetches/gameFetch"
import { MediaSearch } from "./MediaSearch"
import { UserSearch } from "./UserSearch"


export const Search = () => {

    const dispatch = useAppDispatch();

    const [text, setText] = React.useState('');

    const [upSearchAlignment, setUpSearchAlignment] = React.useState(Object.keys(searchTypes)[0]);
    const [downSearchAlignment, setDownSearchAlignment] = React.useState(Object.keys(searchToggleItems)[0]);

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

    if (bookState.bookResult?.totalItems !== undefined) {
        dispatch(setTotalBookPage(Math.ceil(Number(bookState.bookResult.totalItems / 120))))
    }

    if (gameState.gameResult?.count !== undefined) {
        dispatch(setTotalGamePage(Math.ceil(gameState.gameResult.count / 20)))
    }

    if (filmState.filmResult?.pages !== undefined) {
        dispatch(setTotalMediaPage(filmState.filmResult.pages))
    }


    React.useEffect(() => {
        dispatch(addItemTitle(text));
    }, [text, downSearchAlignment])
    dispatch(setSearchSection(downSearchAlignment));


    const getFilms = (searchTitle: string, currentMediaPage: number, kpToken: string) => {
        if (searchTitle !== (null || '')) {
            dispatch(filmFetch({ searchTitle, currentMediaPage, kpToken }))
        } else {
            alert("поле ввода не должно быть пустым!")
            return
        }
    }

    const getBooks = (searchTitle: string, gbToken: string, currentBookPage: number) => {
        if (searchTitle !== (null || '')) {
            dispatch(booksFetch({ searchTitle, gbToken, currentBookPage }))
        } else {
            alert("поле ввода не должно быть пустым!")
            return
        }
    }

    const getGame = (searchTitle: string, rawgToken: string, currentGamePage: number) => {
        if (searchTitle !== (null || '')) {
            dispatch(gameFetch({ searchTitle, rawgToken, currentGamePage }))
        } else {
            alert("поле ввода не должно быть пустым!")
            return
        }
    }

    return (
        <div className="searchWrapper">

            <div className="searchContent">
                { }
                <SearchToggleGroup items={searchTypes} handleChange={(event, newAlignment) => handleChange(event, newAlignment, setUpSearchAlignment)} alignment={upSearchAlignment}></SearchToggleGroup>
                {upSearchAlignment == 'media' &&
                    (<>
                        <MediaSearch text={text} setText={setText} onClick={()=>{
                            getFilms(searchTitle, currentMediaPage, kpToken)
                            getBooks(searchTitle, gbToken, currentBookPage)
                            getGame(searchTitle, rawgToken, currentGamePage)
                        }} setDownSearchAlignment={setDownSearchAlignment} downSearchAlignment={downSearchAlignment}></MediaSearch>
                    </>)
                }

                {upSearchAlignment == 'users' && <UserSearch />}

            </div>
        </div>
    )
}

