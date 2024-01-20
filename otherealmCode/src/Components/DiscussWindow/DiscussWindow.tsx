import { Box, Typography } from "@mui/material"
import { DiscussItem } from "../ItemsWindows/DiscussWindow/DiscussItem"
import { InputText, inputStyles } from "../ItemsWindows/CommentWindow/InputText"
import { Comment } from "../ItemsWindows/CommentWindow/Comment"

export const DiscussWindow = () =>{
    return(
        <Box height={'auto'}>
            <DiscussItem/>
            <hr style={{ borderTop: '6px solid black', width: '90%', marginTop: '50px', marginBottom: '50px' }}></hr>
            <Typography sx={{marginBottom: '200px'}} variant="h4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis numquam reprehenderit sapiente tempore, hic illum modi, quo, officiis similique aliquid iure enim iste distinctio assumenda ipsam nemo inventore quisquam earum.</Typography>
            <InputText placeholder="ответить" sx={inputStyles}/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </Box>        
    )
}