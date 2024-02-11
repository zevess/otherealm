import { Box, Typography } from "@mui/material"
import { DiscussItemTitleCard } from "./DiscussItemTitleCard"

import { Comment } from "../CommentWindow/Comment"
import React from "react"
import { InputText } from "../../InputText"


export const discussInputStyles = {
    backgroundColor: 'white', textAlign: 'left', marginBottom: '20px', width: '100%'
}


export const ItemDiscussWindow = () =>{

    const [commentText, setCommentText] = React.useState('')

    return(
        <Box height={'auto'} width={'1200px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} marginLeft={'auto'} marginRight={'auto'}>
            <DiscussItemTitleCard/>
            <hr style={{ borderTop: '6px solid black', width: '90%', marginTop: '50px', marginBottom: '50px' }}></hr>
            <Typography sx={{marginBottom: '200px'}} variant="h4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis numquam reprehenderit sapiente tempore, hic illum modi, quo, officiis similique aliquid iure enim iste distinctio assumenda ipsam nemo inventore quisquam earum.</Typography>
            <InputText setText={setCommentText} onClick={()=>alert(commentText)} placeholder="ответить" sx={discussInputStyles}/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </Box>        
    )
}