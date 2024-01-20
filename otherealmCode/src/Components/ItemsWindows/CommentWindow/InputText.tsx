import { IconButton, InputAdornment, TextField } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { FC } from "react";

export const inputStyles = {
    backgroundColor: 'white', textAlign: 'left', marginBottom: '20px', width: '40%'
}

interface InputTextProps {
    placeholder: string,
    sx: object
}

export const InputText: FC<InputTextProps> = ({placeholder, sx}) => {
    return (
        <TextField variant="outlined" multiline maxRows={2} placeholder={placeholder} sx={sx} inputProps={{
            style: {
                fontSize: '30px', padding: '5px', lineHeight: '1.4', minHeight: '50px', maxHeight: '400px', overflow: 'visible'
            }
        }} InputProps={{
            style: {
                borderRadius: '30px'
            },
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton color="primary">
                        <SendIcon sx={{ width: '50px', height: '50px' }} />
                    </IconButton>
                </InputAdornment>
            )
        }}></TextField>
    )
}