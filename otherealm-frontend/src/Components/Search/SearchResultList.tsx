import { useAppSelector } from "../../store"
import { FilmsSearchList } from "./SearchLists/FilmsSearchList";
import { BooksSearchList } from "./SearchLists/BooksSearchList";
import { GamesSearchList } from "./SearchLists/GamesSearchList";

export const SearchResult = () => {

    const searchSection = useAppSelector(state => state.state.currentSearchSection);
    return (
        <>
            {searchSection == 'cinema' && <FilmsSearchList />}
            {searchSection == 'books' && <BooksSearchList />}
            {searchSection == 'games' && <GamesSearchList />}
        </>
    )
}




