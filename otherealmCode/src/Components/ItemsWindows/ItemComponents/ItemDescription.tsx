import { Box, Typography } from "@mui/material"
import { FC } from "react"

interface ItemDescriptionProps{
    description: string
}

export const ItemDescription: FC<ItemDescriptionProps> = ({description}) => {
    return (
        <Box width={'80%'} display={'flex'} marginLeft={'auto'} marginRight={'auto'}>
            <Typography variant="h6">
                {description}
            </Typography>
        </Box>
    )
}