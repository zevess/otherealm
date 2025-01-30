import { Box, IconButton, TextField } from "@mui/material"
import { PopupWithTrigger } from "../../utils/Popup.tsx"
import React, { FC } from "react"
import AddIcon from '@mui/icons-material/Add';
import axios from '../../axios.ts'


interface CreateSectionProps{
    updateFavourites: () => void
}

export const CreateSection:FC<CreateSectionProps> = ({updateFavourites}) => {

    const [title, setTitle] = React.useState('');

    const onSubmit = async () => {
        try {
            const fields = {title}
            await axios.post('/favourite', fields)
        } catch (err) {
            console.warn(err);
            alert('ошибка при создании раздела')
        }
        updateFavourites();
    }

    return (
        <PopupWithTrigger id="popup-with-portal" buttonLabel="СОЗДАТЬ РАЗДЕЛ">
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <TextField variant="outlined" placeholder="название раздела" onChange={(event) => {
                    setTitle(event.target.value);
                }}></TextField>
                <IconButton onClick={onSubmit}>
                    <AddIcon />
                </IconButton>
            </Box>
        </PopupWithTrigger>
    )
}


