import { Box, Button, TextField, Typography } from "@mui/material";
import { ModalWindow } from "../ModalWindow";
import { ColorButton } from "../CustomButton";
import { FC } from "react";

interface ModalSectionProps {
    isOpen: boolean,
    handleClose: React.Dispatch<React.SetStateAction<boolean>>,
    alinment: any,
    text: string,
    setEditText: React.Dispatch<React.SetStateAction<string>>,
    buttonOnClick: () => void,
    secondButtonOnClick: () => void,
}

export const ModalSection: FC<ModalSectionProps> = ({ isOpen, handleClose, alinment, setEditText, buttonOnClick, secondButtonOnClick, text }) => {
    return (
        <ModalWindow open={isOpen} handleClose={() => handleClose(false)}>
            <div className="sectionToggleSettings">
                <Box width={'100%'}>
                    <Typography textAlign={'center'} variant="h4">{alinment}</Typography>

                    <div className="sectionToggleSettings-inputs">
                        <TextField onChange={(event) => setEditText(event.target.value)} size="medium" placeholder="редактировать комментарий" className="sectionToggleSettings-inputs__textfield" value={text}></TextField>

                        <div className="sectionToggleSettings-inputs__buttons">
                            <ColorButton onClick={buttonOnClick} >удалить</ColorButton>
                            <Button variant="contained" onClick={secondButtonOnClick}>сохранить</Button>
                        </div>
                    </div>
                </Box>


            </div>
        </ModalWindow>
    )
}