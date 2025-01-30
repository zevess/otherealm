import { Box } from "@mui/material";
import { useAppDispatch } from "../../store/hooks";
import { Comment } from "../ItemsWindows/CommentWindow/Comment";
import { useAppSelector } from "../../store";
import { clearComments, fetchGetAllComments } from "../../store/comment";
import React from "react";

export const AllComents = () =>{
    const dispatch = useAppDispatch();
    const commentsData = useAppSelector(state => state.commentsData.comments.items)
    
    React.useEffect(() => {
        dispatch(clearComments())
        dispatch(fetchGetAllComments())

    }, [])

    return (
        <Box display={'flex'} flexDirection={'column'}>
            <Box>
                {commentsData !== undefined && commentsData.map((item) => (
                    <Comment key={item._id} id={item._id} date={item.createdAt} avatar={item.user ? item?.user.avatarUrl : ''} name={item.user ? item?.user.name : 'пользователь удален'} nick={item.user ? item?.user.nick : 'пользователь удален'} text={item.text} commentUserId={item.user ? item.user._id : 'undefined'} postId={item.postId} />
                ))}
            </Box>
        </Box>
    )
}