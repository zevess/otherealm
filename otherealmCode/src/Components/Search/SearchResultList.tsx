import { Box, Pagination } from "@mui/material"
import { ItemCard } from "../Cards/ItemCard"
import { useAppSelector } from "../../store"
import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { setBookPage, setGamePage, setMediaPage } from "../../store/reducers/stateReducer";
import { filmFetch } from "../../store/fetches/filmFetch";

export const SearchResult = () => {

    const searchSection = useAppSelector(state => state.state.currentSearchSection);
    return (
        <>
            {searchSection == 'media' && <FilmsSearchList />}
            {searchSection == 'books' && <BooksSearchList />}
            {searchSection == 'games' && <GamesSearchList />}
        </>
    )

}

export const FilmsSearchList = () => {
    const dispatch = useAppDispatch();
    const searchTitleSelector = useAppSelector((state) => state.state.searchTitle)
    const searchTitle = searchTitleSelector.replace(' ', '_');
    const kpToken = useAppSelector((state) => state.filmData.kpToken)
    const filmResult = useAppSelector(state => state.filmData.filmResult?.docs);
    const currentMediaPageSelector = useAppSelector(state => state.state.currentMediaPage);
    const totalMediaPage = useAppSelector(state => state.state.totalMediaPage)
    const [currentMediaPage, setCurrentMediaPage] = React.useState(currentMediaPageSelector);
    React.useEffect(() => {
        dispatch(setMediaPage(currentMediaPage))
        if(searchTitle !== ''){
            dispatch(filmFetch({searchTitle, currentMediaPage, kpToken}))
        }
    }, [currentMediaPage, currentMediaPage, kpToken])
    return (
        <>
            <Box display={'flex'} flexWrap={'wrap'} alignItems={'flex-start'}>
                {filmResult !== undefined && filmResult.map((item) => (
                    <ItemCard itemPoster={item.poster?.url ? item.poster.url : '../src/assets/img/noImg.png'} itemTitle={item.name} id={item.id} key={item.id} itemType={item.type} itemAltenativeTitle={item.alternativeName} />
                ))}
            </Box>
            <Pagination page={currentMediaPageSelector} count={totalMediaPage} onChange={(event, value) => {
                setCurrentMediaPage(value);
                
            }} />
        </>
    )
}

export const BooksSearchList = () => {
    const dispatch = useAppDispatch();

    const searchTitle = useAppSelector((state) => state.state.searchTitle)
    const searchTitleNoSpace = searchTitle.replace(' ', '_');

    const gbToken = useAppSelector((state) => state.bookData.gbToken)

    const currentBookPage = useAppSelector(state => state.state.currentBookPage);
    const bookResult = useAppSelector(state => state.bookData.bookResult?.items);
    const totalBookPage = useAppSelector(state => state.state.totalBookPage)

    const [page, setPage] = React.useState(currentBookPage);
    React.useEffect(() => {
        dispatch(setBookPage(page))
    }, [page])
    
    return (
        <>
            <Box display={'flex'} flexWrap={'wrap'} alignItems={'flex-start'}>
                {bookResult !== undefined && bookResult.map((item: any) => (
                    <ItemCard itemPoster={item?.volumeInfo?.imageLinks?.thumbnail ? item?.volumeInfo?.imageLinks?.thumbnail : '../src/assets/img/noImg.png'} itemTitle={item?.volumeInfo?.title} id={item?.id} key={item?.id} itemType="book" itemAltenativeTitle={item.alternativeName} />
                ))}
            </Box>
            <Pagination page={currentBookPage} count={totalBookPage} onChange={(event, value) => {
                setPage(value);
            }} />
        </>

    )
}

export const GamesSearchList = () => {
    const dispatch = useAppDispatch();


    const searchTitle = useAppSelector((state) => state.state.searchTitle)
    const searchTitleNoSpace = searchTitle.replace(' ', '_');

    const rawgToken = useAppSelector((state) => state.gameData.rawgToken);


    const gamesResult = useAppSelector(state => state.gameData.gameResult?.results)
    const currentGamePage = useAppSelector(state => state.state.currentGamePage);
    const totalGamePage = useAppSelector(state => state.state.totalGamePage);

    const [page, setPage] = React.useState(currentGamePage);
    
    React.useEffect(() => {
        dispatch(setGamePage(page))
    }, [page])


    return (
        <>
            <Box display={'flex'} flexWrap={'wrap'} alignItems={'flex-start'}>
                {gamesResult !== undefined && gamesResult.map((item: any) => (
                    <ItemCard itemPoster={item.background_image ? item.background_image : '../src/assets/img/noImg.png'} id={item.id} key={item.id} itemTitle={item.name} itemType="game" itemAltenativeTitle={item.alternativeName} />
                ))}
            </Box>
            <Pagination page={currentGamePage} count={20} onChange={(event, value) => {
                setPage(value);
                
            }} />
        </>

    )
}