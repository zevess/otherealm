import { Box, CircularProgress, Pagination, Typography } from "@mui/material";
import { useAppSelector } from "../../../store";
import { useAppDispatch } from "../../../store/hooks";
import { ItemCard } from "../../Cards/ItemCard";
import { setBookPage } from "../../../store/reducers/stateReducer";
import { booksFetch } from "../../../store/fetches/bookFetch";

export const BooksSearchList = () => {
    const dispatch = useAppDispatch();

    const searchTitleSelector = useAppSelector((state) => state.state.searchTitle)
    const searchTitle = searchTitleSelector.replace(' ', '_');

    const gbToken = useAppSelector((state) => state.bookData.gbToken)

    const currentBookPage = useAppSelector(state => state.state.currentBookPage);
    const bookResult = useAppSelector(state => state.bookData.bookResult?.items);
    const bookResultLength = useAppSelector(state => state.bookData.bookResult?.totalItems);
    const totalBookPage = useAppSelector(state => state.state.totalBookPage)
    const booksLoadingStatus = useAppSelector(state => state.bookData.booksLoadingStatus)

    if (booksLoadingStatus == 'loading') {
        return <CircularProgress />
    }

    if (bookResultLength == 0) {
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
                {bookResult !== undefined && bookResult.map((item: any) => (
                    <ItemCard itemPoster={item?.volumeInfo?.imageLinks?.thumbnail ? item?.volumeInfo?.imageLinks?.thumbnail : '../src/assets/img/noImg.png'} itemTitle={item?.volumeInfo?.title} id={item?.id} key={item?.id} itemType="book" itemAltenativeTitle={item.alternativeName} />
                ))}
            </div>
            <Pagination page={currentBookPage} count={4} onChange={(_event, value) => {
                dispatch(setBookPage(value))
                dispatch(booksFetch({ searchTitle, gbToken, currentBookPage: value }))
            }} />
        </div>


    )
}
