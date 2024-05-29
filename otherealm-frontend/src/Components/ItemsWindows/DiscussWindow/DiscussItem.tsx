import { Avatar, Box, Divider, IconButton, Typography } from "@mui/material"
import ReactMarkdown from 'react-markdown'
import { CommentSection } from "../../ItemsWindows/CommentWindow/CommentSection";
import { useAppDispatch } from "../../../store/hooks";
import React from "react";
import { Link, useParams } from "react-router-dom";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useAppSelector } from "../../../store";
import { clearComments } from "../../../store/comment";
import { fetchOneDiscuss } from "../../../store/discuss";
import { ItemTitle } from "../ItemComponents/ItemTitle";

export const DiscussItem = () => {

    const dispatch = useAppDispatch();

    // const [post, setPost] = React.useState<postProps | null>(null);

    const discussSelector = useAppSelector(state => state.discussData.currentDiscuss.currentDiscuss)

    // const bookSelector = useAppSelector((state) => state.bookData.currentBookItem);
    // const filmSelector = useAppSelector((state) => state.filmData.currentFilmItem);
    // const gameSelector = useAppSelector((state) => state.gameData.currentGameItem);

        
    const discussObjectTitle = window.localStorage.getItem('currentObjectTitle');
    // let discussObjectTitle
    // if ((filmSelector?.name || gameSelector?.name || bookSelector?.volumeInfo?.title) == undefined) {
    //     discussObjectTitle = window.localStorage.getItem('currentObjectTitle');
    // }
    const params = useParams();
    const discussId = String(params.discussId);


    const userId = (useAppSelector((state) => state.authData.data?._id));

    const authId = window.localStorage.getItem('authId');
    const currentUserId = window.localStorage.getItem('currentUser')

    const isSameUser = (authId == currentUserId)

    // const isSameUser = (userId === discussSelector?.user._id)



    const currentUrl = window.location.href;
    const parts = currentUrl.split('/');
    const itemId = `${parts[4]}${parts[5]}`;
    const itemIdSlash = `${parts[4]}/${parts[5]}`
    // const postId = String(parts.slice(-2).join(''))
    console.log(discussId, itemId)

    React.useEffect(() => {
        if (discussId !== undefined) {
            dispatch(clearComments())
            dispatch(fetchOneDiscuss({ itemId, discussId }));

            // axios.get(`/post/${postId}`).then(res => {
            //     setPost(res.data);

            // })
        }
    }, [discussId])

    const dateToForm = discussSelector ? new Date(discussSelector.createdAt) : null;
    const options = {
        weekdays: 'short' as const,
        year: 'numeric' as const,
        month: 'short' as const,
        day: 'numeric' as const
    }

    const formatedDate = dateToForm ? dateToForm.toLocaleString('ru-RU', options) : null

    const time = dateToForm ? dateToForm.toTimeString().slice(0, 8) : null;

    if (discussSelector) return (
        <div className="fullPostWrapper">
            <div className="fullPost">

                <div className="fullPostTop">
                    <ItemTitle title={`${discussObjectTitle}`} sx={{ margin: '0 auto' }} />
                    <Divider sx={{marginTop: '12px', marginBottom: '12px'}} />
                    <div className="postItemDetails-user">
                        <Link to={`/profile/${discussSelector.user.nick}`} style={{ display: 'flex', alignItems: 'flex-end' }}>
                            <Avatar src={`${import.meta.env.VITE_API_URL}${discussSelector.user.avatarUrl}`} className="postItemDetails-user__avatar" />
                            <div className="postItemDetails-user__info">
                                <p className="postUserInfo nick">{discussSelector.user.name}</p>
                                <Divider sx={{ width: '100%' }} />
                                <p className="postUserInfo date">{formatedDate + '; ' + time}</p>

                            </div>
                        </Link>

                        <Box marginLeft={'auto'} display={'flex'}>
                            <VisibilityOutlinedIcon sx={{ paddingRight: '10px' }} />
                            <p style={{ margin: 0 }}>{discussSelector.viewsCount}</p>
                        </Box>


                        {isSameUser && <Box marginLeft={'auto'}>
                            <Link to={`/item/${itemIdSlash}/discuss/${discussId}/edit`}>
                                <IconButton >
                                    <EditOutlinedIcon />
                                </IconButton>
                            </Link>

                        </Box>}

                    </div>


                    <hr className="hrHorizontal"></hr>

                </div>

                {discussSelector.imageUrl &&
                    <img src={`${import.meta.env.VITE_API_URL}${discussSelector.imageUrl}`} className="fullPostImg"></img>
                }

                <Typography variant="h4" className="fullPostTitle">{discussSelector.title}</Typography>
                <Divider sx={{ width: '60%', margin: '0 auto' }} />
                <ReactMarkdown children={discussSelector.text} />
                <Divider sx={{ marginBottom: '20px' }} />
                {discussId !== undefined && <CommentSection postId={discussId} />}
            </div>


        </div>
    )
}