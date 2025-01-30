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

import { ItemDescription } from "./ItemComponents/ItemDescription";
import { gameItemFetch } from "../../store/fetches/gameFetch";

import { AddToSection } from "../SectionsPopup/AddToSections";
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';

export const GameWindow = () => {

    const dispatch = useAppDispatch();
    const params = useParams();
    const gameId = String(params.id);

    const rawgToken = useAppSelector((state) => state.gameData.rawgToken);
    React.useEffect(() => {
        dispatch(gameItemFetch({ gameId, rawgToken }));
    }, [])

    const [alignment, setAlignment] = React.useState('comments');

    const currentGameItem = useAppSelector((state) => state.gameData.currentGameItem)


    const title = `${currentGameItem?.name}`;
    let fontSize;
    if (title.length > 100) fontSize = '20px';

    if (currentGameItem == undefined) {
        return <CircularProgress />
    }


    const currentUrl = window.location.href;
    const parts = currentUrl.split('/');
    const postId = String(parts.slice(-2).join(''))

    window.localStorage.setItem('currentObjectTitle', `${currentGameItem?.name}`)

    return (

        <div className="searchItemWrapper">
            <div className="searchItem" >

                <div className="searchItemContent" >
                    <div className="searchItemContent__left">
                        <img className="searchItemPoster" src={`${currentGameItem?.background_image}` ? `${currentGameItem?.background_image}` : 'https://i.ibb.co/tbwz7KG/noImg.png'} alt="" />
                        <AddToSection />
                    </div>


                    <div className="searchItemNames">
                        <ItemType itemType={`game`} />
                        <ItemTitle title={`${title}`} originalTitle={`${currentGameItem?.name_original}`} />
                    </div>

                    <div className="searchItemContent__details">

                        <div className="searchItemContent__details-item">
                            <Typography fontWeight={'bold'} variant='h5' paddingRight={'10px'} className="detailsItemText">оценка METACRITIC: </Typography>
                            <Typography variant='h5' paddingRight={'10px'} className="detailsItemText">{currentGameItem.metacritic}</Typography>
                        </div>

                        <div className="searchItemContent__details-item">
                            <Typography fontWeight={'bold'} variant='h5' paddingRight={'10px'} className="detailsItemText">дата выхода: </Typography>
                            <Typography variant='h5' paddingRight={'10px'} className="detailsItemText">{currentGameItem.released}</Typography>
                        </div>
                        <div className="searchItemContent__details-item">
                            <Typography fontWeight={'bold'} variant="h5" paddingRight={'10px'} className="detailsItemText">разработчики: </Typography>
                            {currentGameItem.developers.map((devs, index) => (
                                <Typography paddingRight={'10px'} variant="h5" key={index} className="detailsItemText">{devs.name}</Typography>
                            ))}
                        </div>
                        <div className="searchItemContent__details-item">
                            <Typography fontWeight={'bold'} variant="h5" paddingRight={'10px'} className="detailsItemText">издатели: </Typography>
                            {currentGameItem.publishers.map((publisher, index) => (
                                <Typography paddingRight={'10px'} variant="h5" key={index} className="detailsItemText">{publisher.name}</Typography>
                            ))}
                        </div>
                        <div className="searchItemContent__details-item">
                            <Typography fontWeight={'bold'} variant="h5" paddingRight={'10px'} className="detailsItemText">жанры: </Typography>
                            {currentGameItem.genres.map((genre, index) => (
                                <Typography paddingRight={'10px'} variant="h5" key={index} className="detailsItemText">{genre.name}</Typography>
                            ))}
                        </div>
                        <div className="searchItemContent__details-item">
                            <Typography fontWeight={'bold'} variant="h5" paddingRight={'10px'} className="detailsItemText">платформы: </Typography>
                            {currentGameItem.platforms.map((platform, index) => (
                                <Typography paddingRight={'10px'} variant="h5" key={index} className="detailsItemText">{platform.platform.name},</Typography>
                            ))}
                        </div>
                    </div>


                </div>
                {currentGameItem?.description_raw !== null && (
                    <>
                        <Divider sx={{ marginTop: '16px', marginBottom: '16px' }} />
                        <ItemDescription description={`${currentGameItem?.description_raw}`} />
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
