import { Box, Modal } from "@mui/material"
import { FC, ReactNode } from "react"

interface ModalProps {
    open: boolean,
    handleClose: () => void,
    children: ReactNode
}

export const ModalWindow:FC<ModalProps> = ({open, handleClose, children}) => {

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}>
                <Box>
                    {children}
                </Box>
            </Modal>
        </div>
    );
}