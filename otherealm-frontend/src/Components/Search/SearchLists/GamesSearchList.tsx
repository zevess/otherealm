import { Box, CircularProgress, Pagination, Typography } from "@mui/material";
import { useAppSelector } from "../../../store";
import { useAppDispatch } from "../../../store/hooks";
import { ItemCard } from "../../Cards/ItemCard";
import { setGamePage } from "../../../store/reducers/stateReducer";
import { gameFetch } from "../../../store/fetches/gameFetch";

export const GamesSearchList = () => {
    const dispatch = useAppDispatch();

    const searchTitleSelector = useAppSelector((state) => state.state.searchTitle)
    const searchTitle = searchTitleSelector.replace(' ', '_');
    const rawgToken = useAppSelector((state) => state.gameData.rawgToken);
    const gamesResult = useAppSelector(state => state.gameData.gameResult?.results)
    const currentGamePageSelector = useAppSelector(state => state.state.currentGamePage);
    const totalGamePage = useAppSelector(state => state.state.totalGamePage);
    const gamesLoadingStatus = useAppSelector(state => state.gameData.gamesLoadingStatus)

    if (gamesLoadingStatus == 'loading') {
        return <CircularProgress />
    }


    if ( !gamesResult) {
        return (
            <Box>
                <Typography variant="h2">
                    Ничего не найдено
                    Повторите позже или измените запрос
                </Typography>
            </Box>
        )
    }

    return (
        <div className="searchResult">
            <div className="searchResultItems">
                {gamesResult !== undefined && gamesResult.map((item: any) => (
                    <ItemCard itemPoster={item.background_image ? item.background_image : '../src/assets/img/noImg.png'} id={item.id} key={item.id} itemTitle={item.name} itemType="game" itemAltenativeTitle={item.alternativeName} />
                ))}
            </div>
            <Pagination page={currentGamePageSelector} count={totalGamePage} onChange={(_event, value) => {
                dispatch(setGamePage(value));
                dispatch(gameFetch({ searchTitle, rawgToken, currentGamePage: value }))
            }} />
        </div>
    )
}