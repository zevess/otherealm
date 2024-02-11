import { Box } from "@mui/material"
import { DiscussInput } from "./DiscussInput"
import { DiscussButton } from "./DiscussButton"
import { ModalWindow } from "../../ModalWindow"
import React from "react"
import { DiscussModal } from "../../DiscussModal/DiscussModal"
import { DiscussLinkItem } from "./DiscussLinkItem"

export const DiscussSection = () => {
    const [modalOpen, setModalOpen] = React.useState(false)
    const handleClose = () => setModalOpen(false);

    return (
        <Box display={'flex'} flexDirection={'column'} >
            <Box display={'flex'} justifyContent={'space-around'} >
                <DiscussInput />
                <DiscussButton setModalOpen={setModalOpen} />
                <ModalWindow open={modalOpen} handleClose={handleClose}>
                    <DiscussModal/>
                </ModalWindow>
            </Box>
            <Box>
                <DiscussLinkItem/>
                <DiscussLinkItem/>
                <DiscussLinkItem/>
                <DiscussLinkItem/>
            </Box>
        </Box>
    )
}