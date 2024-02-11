import { Box } from "@mui/material"
import { InputText } from "../../InputText"
import { Comment } from "./Comment"
import React from "react"

export const commentInputStyles = {
    backgroundColor: 'white', textAlign: 'left', marginBottom: '20px', width: '100%'
}

export const CommentSection = () => {

    const [commentText, setCommentText] = React.useState('');

    return (
        <Box display={'flex'} flexDirection={'column'}>
            <InputText setText={setCommentText} onClick={()=> alert(commentText)} placeholder={"комментарий"} sx={commentInputStyles} />
            <Box>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </Box>


        </Box>
    )
}