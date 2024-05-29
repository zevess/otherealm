import { Box } from "@mui/material"
import { SearchToggleGroup } from "../Toggles/SearchToggleGroup"
import { SearchResult } from "./SearchResultList"
import { FC } from "react"
import { searchToggleItems } from "../../utils/itemTypes"
import { handleChange } from "../../utils/handleChange"
import { InputText } from "../InputText"

interface MediaSearchProps {
    downSearchAlignment: string,
    setDownSearchAlignment: React.Dispatch<React.SetStateAction<string>>,
    text: string,
    setText: React.Dispatch<React.SetStateAction<string>>,
    onClick: ()=> void,
}


export const MediaSearch: FC<MediaSearchProps> = ({ setDownSearchAlignment, downSearchAlignment, text, setText, onClick }) => {
    return (
        <div className="mediaSearch">
            <InputText forComments={false} setText={setText} onClick={onClick} placeholder="поиск фильма, игры, литературы" text={text} />
            <SearchToggleGroup items={searchToggleItems} handleChange={(event, newAlignment) => handleChange(event, newAlignment, setDownSearchAlignment)} alignment={downSearchAlignment} ></SearchToggleGroup>
            <div className="searchSource">
                <p className="searchSourceText">Все результаты взяты из открытых источников:</p>
                <Box display={'flex'} justifyContent={'space-evenly'} flexWrap={'wrap'}>
                    <a className="searchSourceLink" href="https://api.kinopoisk.dev/documentation">api.kinopoisk.dev </a>
                    <p className="searchSourceText">|</p>
                    <a className="searchSourceLink" href="https://rawg.io">rawg.io</a>
                    <p className="searchSourceText">|</p>
                    <a className="searchSourceLink" href="https://developers.google.com/books?hl=ru">developers.google.com/books</a>
                </Box>
                <p className="searchSourceText">соответственно</p>
                <p className="searchSourceText">Результаты могут отличаться от ожидаемых.</p>
                <p className="searchSourceText">Для получения более точных вводите полные названия на оригинальном языке.</p>
            </div>

            <SearchResult />
        </div>

    )
}