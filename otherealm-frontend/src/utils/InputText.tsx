import { IconButton, InputAdornment, TextField } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { FC } from "react";
import { useAppSelector } from "../store";

export const inputStyles = {
    backgroundColor: 'white', textAlign: 'left', marginBottom: '20px', width: '40%'
}

interface InputTextProps {
    placeholder: string,
    text: any,
    sx?: object,
    setText: React.Dispatch<React.SetStateAction<string>>,
    onClick: () => void,
    forComments: boolean
}

export const InputText: FC<InputTextProps> = ({placeholder, text, setText, onClick, forComments}) => {
    const isAuth = useAppSelector((state) => state.authData.data);
    return (
        <TextField value={text} variant="outlined" multiline={true}  placeholder={placeholder} inputProps={{
            style: {
                padding: '5px', lineHeight: '1.4'
            }
        }} InputProps={{
            
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton color="primary" disabled={forComments} onClick={onClick}>
                        <SendIcon sx={{ width: '50px', height: '50px' }} />
                    </IconButton>
                </InputAdornment>
            )
        }} className={forComments ? "commentInputField": 'searchInputField'} disabled={forComments} onChange={(event) =>{
            setText(event.target.value)
        }}></TextField>
    )
}