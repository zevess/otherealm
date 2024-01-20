import { Box, Typography } from "@mui/material"

export const DiscussItem = () =>{
    return(
        <Box maxWidth={'100%'} bgcolor={'white'} minHeight={'140px'} border={'solid 3px black'} borderRadius={'30px'} padding={'10px'} margin={'20px'}>
            <Typography variant="h6" textAlign={'left'}>автор: ник автора</Typography>
            <Typography variant="h2">название обсуждения</Typography>
        </Box>
    )
}