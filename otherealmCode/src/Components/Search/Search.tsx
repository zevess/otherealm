import { Box } from "@mui/material"
import { InputText, inputStyles } from "../ItemsWindows/CommentWindow/InputText"
import { SearchItem } from "./SearchItem"
import { ItemCard } from "../Cards/ItemCard"

export const Search = () => {
    return (
        <Box>
            <InputText placeholder="поиск фильма, игры, книги или франшизы" sx={inputStyles} />
            {/* <SearchItem /> */}
            <ItemCard itemPoster="src\assets\img\Wizarding_World_logo.svg.png" itemType="франшиза" itemTitle="Wizarding World" />
            <ItemCard itemPoster="src\assets\img\image 1.png" itemType="мультфильм" itemTitle="Рик и Морти" />
        </Box>

    )
}