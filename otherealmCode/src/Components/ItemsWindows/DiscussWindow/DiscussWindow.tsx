import { Box } from "@mui/material"
import { DiscussInput } from "./DiscussInput"
import { DiscussButton } from "./DiscussButton"
import { DiscussItem } from "./DiscussItem"

export const DiscussWindow = () => {
    return (
        <Box display={'flex'} flexDirection={'column'}>
            <Box display={'flex'} justifyContent={'space-around'}>
                <DiscussInput />
                <DiscussButton />
            </Box>
            <Box>
                <DiscussItem />
                <DiscussItem />
                <DiscussItem />
            </Box>
        </Box>
    )
}