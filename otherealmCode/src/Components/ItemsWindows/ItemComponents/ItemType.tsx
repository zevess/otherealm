import { Box, Typography } from "@mui/material"
import { FC } from "react"

interface ItemTypeProps{
    itemType: string
}

export const ItemType:FC<ItemTypeProps> = ({itemType}) => {
    let typeColor
    let itemTypeRu;

    if (itemType == 'cartoon' ) {
        typeColor = '#92D4AC'
        itemTypeRu = 'мультфильм'
    }

    if (itemType == 'animated-series') {
        typeColor = '#92D4AC'
        itemTypeRu = 'мультфильм'
    }

    if (itemType == 'tv-series') {
        typeColor = '#D46161'
        itemTypeRu = 'сериал'
    }
    if (itemType == 'movie') {
        typeColor = '#61B8D4'
        itemTypeRu = 'фильм'
    }
    if (itemType == 'anime') {
        typeColor = '#D461CF'
        itemTypeRu = 'аниме'
    }
    if (itemType == 'game') {
        typeColor = '#7161D4'
        itemTypeRu = 'игра'
    }
    if (itemType == 'book') {
        typeColor = '#D49F61'
        itemTypeRu = 'книга'
    }
    
    if (itemType == 'франшиза') {
        typeColor = '#7C94B0'
    }

    return (
        <Box sx={{ aspectRatio: '200/57', width: '200px', backgroundColor: typeColor, position: 'absolute', marginLeft: '1100px', marginTop: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px 0px 6px 6px', border: 'solid 2px black' }}>
            <Typography variant="h5" borderColor={'solid 1px black'}>{itemTypeRu}</Typography>
        </Box>
    )
}