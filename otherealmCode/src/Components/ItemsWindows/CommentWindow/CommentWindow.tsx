import { Box } from "@mui/material"
import { InputText } from "./InputText"
import { Comment } from "./Comment"

export const CommentWindow = () => {
    return (
        <Box display={'flex'} flexDirection={'column'}>
            <InputText />
            <Box>
                <Comment />
            </Box>


        </Box>
    )
}