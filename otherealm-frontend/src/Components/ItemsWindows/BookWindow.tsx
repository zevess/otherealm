import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import React from "react";
import { bookItemFetch } from "../../store/fetches/bookFetch";
import { useAppSelector } from "../../store";
import { Box, CircularProgress, Divider, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { ItemType } from "./ItemComponents/ItemType";
import { ItemTitle } from "./ItemComponents/ItemTitle";
import { ItemDescription } from "./ItemComponents/ItemDescription";
import { CommentSection } from "./CommentWindow/CommentSection";
import { DiscussSection } from "./DiscussWindow/DiscussSection";
import { handleChange } from "../../utils/handleChange";
import { AddToSection } from "../SectionsPopup/AddToSections";
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';


export const BookWindow = () => {

    const dispatch = useAppDispatch();
    const params = useParams();
    const bookId = String(params.id);


    const gbToken = useAppSelector((state) => state.bookData.gbToken)
    React.useEffect(() => {
        dispatch(bookItemFetch({ bookId }));
    }, [])

    const [alignment, setAlignment] = React.useState('comments');

    const currentBookItem = useAppSelector((state) => state.bookData.currentBookItem)


    const title = `${currentBookItem?.volumeInfo?.title}`;
    let fontSize;
    if (title.length > 100) fontSize = '20px';


    if (currentBookItem == undefined) {
        return <CircularProgress />
    }

    const currentUrl = window.location.href;
    const parts = currentUrl.split('/');
    const postId = String(parts.slice(-2).join(''))

    window.localStorage.setItem('currentObjectTitle', `${currentBookItem?.volumeInfo?.title}`)

    return (

        <div className="searchItemWrapper">

            <div className="searchItem" >

                <div className="searchItemContent" >
                    <div className="searchItemContent__left">
                        <img className="searchItemPoster" src={`${currentBookItem?.volumeInfo?.imageLinks?.thumbnail}` ? `${currentBookItem?.volumeInfo?.imageLinks?.thumbnail}` : '../src/assets/img/noImg.png'} alt="" />
                        <AddToSection />
                    </div>


                    <div className="searchItemNames">
                        <ItemType itemType={`book`} />
                        <ItemTitle title={`${title}`} />
                    </div>


                    <div className="searchItemContent__details">

                        <div className="searchItemContent__details-item">
                            <Typography fontWeight={'bold'} variant='h5' paddingRight={'10px'}>автор: </Typography>
                            {currentBookItem?.volumeInfo?.authors?.map((author, index) => (
                                <Typography paddingRight={'10px'} variant="h5" key={index++}>{author}</Typography>
                            ))}
                        </div>
                        <div className="searchItemContent__details-item">
                            <Typography fontWeight={'bold'} variant='h5' paddingRight={'10px'}>дата публикации: </Typography>
                            <Typography paddingRight={'10px'} variant="h5">{currentBookItem.volumeInfo?.publishedDate}</Typography>
                        </div>

                        <div className="searchItemContent__details-item">
                            <Typography fontWeight={'bold'} variant='h5' paddingRight={'10px'}>количество страниц: </Typography>
                            <Typography paddingRight={'10px'} variant="h5">{currentBookItem.volumeInfo?.pageCount}</Typography>
                        </div>
                    </div>


                </div>
                {currentBookItem.volumeInfo?.description !== null && (
                    <>
                        <Divider sx={{ marginTop: '16px', marginBottom: '16px' }} />
                        <ItemDescription description={`${currentBookItem.volumeInfo?.description}`} />
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
