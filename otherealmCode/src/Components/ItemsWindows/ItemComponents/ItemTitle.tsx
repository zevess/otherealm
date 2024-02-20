import { Box, Typography } from "@mui/material"
import { FC } from "react"

interface ItemTitleProps{
    title: string,
    originalTitle?: string
}

export const ItemTitle:FC<ItemTitleProps> = ({title, originalTitle}) => {
    return (
        <Box maxHeight={'168px'} maxWidth={'600px'} width={'600px'} border={'solid 3px black'} position={'absolute'} borderRadius={'30px'} bgcolor={'white'} marginLeft={'450px'} marginTop={'80px'} padding={'10px'}>
            <Typography variant="h4">{title}</Typography>
            <hr />
            <Typography variant="h6">{originalTitle}</Typography>
        </Box>
    )
}