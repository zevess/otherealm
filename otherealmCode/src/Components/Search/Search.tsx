import { Box } from "@mui/material"
import { InputText, inputStyles } from "../InputText"
import { ItemCard } from "../Cards/ItemCard"
import { itemArr } from "../../utils/itemsArr"
import React from "react"
import { addFilmTitle } from "../../store/reducers/filmDataReducer"
import { useAppSelector } from "../../store"
import { booksFetch, filmFetch } from "../../store/filmFetch/filmFetch"
import { useAppDispatch } from "../../store/hooks"
import { SearchToggleGroup } from "../Toggles/SearchToggleGroup"
import { searchToggleItems, sections } from "../../utils/itemTypes"
import { handleChange } from "../../utils/handleChange"
import { SectionToggleGroup } from "../Toggles/SectionToggleGroup"

export const Search = () => {

    const dispatch = useAppDispatch();

    const filmTitle = useAppSelector((state) => state.filmData.searchTitle)
    const filmTitleNoSpace = filmTitle.replace(' ', '_');

    const token = useAppSelector((state) => state.filmData.kpToken)

    const gbToken = useAppSelector((state) => state.filmData.gbToken)
    const getFilms = (filmTitle: string) => {
        if (filmTitle !== null) {
            dispatch(filmFetch({ filmTitle, token }))
        }
    }

    const getBooks = (filmTitle: string) => {
        if (filmTitle !== null) {
            dispatch(booksFetch({ filmTitle, gbToken }))
        }
    }

    const result = useAppSelector((state) => state.filmData.filmResult?.docs)
    

    const bookResult = useAppSelector((state) => state.filmData.bookResult?.items)

    const [text, setText] = React.useState('');
    const [searchAlignment, setSearchAlignment] = React.useState(Object.keys(searchToggleItems)[0]);
    React.useEffect(() => {
        dispatch(addFilmTitle(text));
    }, [text])


    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <InputText setText={setText} onClick={() => {
                // console.log(text)
                getBooks(filmTitleNoSpace);

            }} placeholder="поиск фильма, игры, книги или франшизы" sx={inputStyles} />
            <Box  width={'60%'} alignItems={'flex-start'}>
                <SearchToggleGroup items={searchToggleItems} handleChange={(event, newAlignment) => handleChange(event, newAlignment, setSearchAlignment)} alignment={searchAlignment}></SearchToggleGroup>
                {/* <Box display={'flex'} flexWrap={'wrap'} alignItems={'flex-start'}>
                    {result !== undefined && result.map((item) => (
                        <ItemCard itemPoster={item.poster?.url ? item.poster.url : '../src/assets/img/noImg.png'} itemTitle={item.name} id={item.id} key={item.id} itemType={item.type} />
                    ))}
                </Box> */}
                <Box display={'flex'} flexWrap={'wrap'} alignItems={'flex-start'}>
                    {bookResult !== undefined && bookResult.map((item) => (
                        <ItemCard itemPoster={item?.volumeInfo?.imageLinks?.thumbnail ? item?.volumeInfo?.imageLinks?.thumbnail : '../src/assets/img/noImg.png'} itemTitle={item?.volumeInfo?.title} id={item?.id} key={item?.id} />
                    ))}
                </Box>


            </Box>

        </Box>

    )
}
