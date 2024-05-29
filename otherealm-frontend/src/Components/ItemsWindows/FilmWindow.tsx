import { Box, CircularProgress, Divider, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"

import React from "react";

import { CommentSection } from "./CommentWindow/CommentSection";
import { DiscussSection, } from "./DiscussWindow/DiscussSection";
import { ItemTitle } from "./ItemComponents/ItemTitle";
import { handleChange } from "../../utils/handleChange";
import { ItemType } from "./ItemComponents/ItemType";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store";
import { useAppDispatch } from "../../store/hooks";
import { filmItemFetch } from "../../store/fetches/filmFetch";
import { ItemDescription } from "./ItemComponents/ItemDescription";
import { AddToSection } from "../SectionsPopup/AddToSections";
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';

export const FilmWindow = () => {

    const dispatch = useAppDispatch();
    const params = useParams();
    const paramsId = String(params.id);
    const [alignment, setAlignment] = React.useState('comments');

    const token = useAppSelector((state) => state.filmData.kpToken)
    React.useEffect(() => {
        dispatch(filmItemFetch({ paramsId, token }));
    }, [paramsId])
    const currentFilmItem = useAppSelector((state) => state.filmData.currentFilmItem)

    const title = `${currentFilmItem?.name}`;
    let fontSize;
    if (title.length > 100) fontSize = '20px';

    console.log(`${currentFilmItem?.type}`)

    if (currentFilmItem == undefined) {
        return <CircularProgress />
    }

    const currentUrl = window.location.href;
    const parts = currentUrl.split('/');
    const postId = String(parts.slice(-2).join(''))
    console.log(postId);

    window.localStorage.setItem('currentObjectTitle', `${currentFilmItem.name}`)

    return (
        <div className="searchItemWrapper">

            <div className="searchItem" >

                <div className="searchItemContent" >
                    <div className="searchItemContent__left">
                        <img className="searchItemPoster" src={`${currentFilmItem.poster?.url}`} alt="" />
                        <AddToSection />
                    </div>


                    <div className="searchItemNames">
                        <ItemType itemType={`${currentFilmItem.type}`} />
                        <ItemTitle title={`${currentFilmItem.name}`} originalTitle={`${currentFilmItem.alternativeName}`} />
                    </div>


                    <div className="searchItemContent__details">

                        <div className="searchItemContent__details-item">
                            <Typography fontWeight={'bold'} variant='h5' paddingRight={'10px'} className="detailsItemText">страны: </Typography>
                            {currentFilmItem?.countries?.map((country, index) => (
                                <Typography paddingRight={'10px'} variant="h5" key={index++} className="detailsItemText">{country.name}{index !== currentFilmItem.countries?.length - 1 && ", "}</Typography>
                            ))}
                        </div>
                        <Typography fontWeight={'bold'} paddingBottom={'15px'} variant="h5" >год: {currentFilmItem.year}</Typography>
                        <div className="searchItemContent__details-item">
                            <Typography fontWeight={'bold'} variant="h5" paddingRight={'10px'} className="detailsItemText">жанры: </Typography>
                            {currentFilmItem.genres?.map((genre, index) => (
                                <Typography paddingRight={'10px'} variant="h5" key={index} className="detailsItemText">{genre.name}{index !== currentFilmItem.genres?.length - 1 && ','}</Typography>
                            ))}
                        </div>
                        <div className="searchItemContent__details-item">
                            <Typography fontWeight={'bold'} variant="h5" paddingRight={'10px'} className="detailsItemText" >режиссер: </Typography>
                            {currentFilmItem.persons?.map((person, index) => (
                                person.enProfession == 'director' && <Typography paddingRight={'10px'} variant="h5" key={index} className="detailsItemText">{person.name}</Typography>

                            ))}
                        </div>
                        <div className="searchItemContent__details-item">
                            <Typography fontWeight={'bold'} variant="h5" paddingRight={'10px'} className="detailsItemText">актеры: </Typography>
                            {currentFilmItem.persons?.map((person, index) => (
                                (person.enProfession == 'actor') && <Typography paddingRight={'10px'} variant="h5" key={index++} className="detailsItemText">{person.name},</Typography>
                            ))}
                        </div>
                    </div>


                </div>
                {currentFilmItem.description !== null && (
                    <>
                        <Divider sx={{ marginTop: '16px', marginBottom: '16px' }} />
                        <ItemDescription description={`${currentFilmItem.description}`} />
                    </>
                )}

            </div>

            <div className="socialSection">
                <ToggleButtonGroup color="primary" exclusive onChange={(event, newAlignment) => handleChange(event, newAlignment, setAlignment)} value={alignment} className="toggleGroup">
                    <ToggleButton className="toggleGroupItem" value={'comments'}>
                        комментарии <InsertCommentOutlinedIcon />
                    </ToggleButton>
                    <ToggleButton className="toggleGroupItem" value={'discuss'} style={{ borderLeft: '1px solid rgba(0, 0, 0, 0.12)' }}>
                        обсуждения <ForumOutlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>

                <Box width={'90%'}>
                    {alignment == 'comments' ? <CommentSection postId={postId} /> : <DiscussSection />}
                </Box>
            </div>
        </div>
    )
}
