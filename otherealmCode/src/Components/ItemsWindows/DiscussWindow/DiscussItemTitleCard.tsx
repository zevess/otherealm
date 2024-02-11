import { Box, Typography } from "@mui/material"

export const DiscussItemTitleCard = () => {
    return (

        <Box maxWidth={'100%'} bgcolor={'white'} minHeight={'140px'} border={'solid 3px black'} borderRadius={'30px'} padding={'20px'} margin={'20px'}>
            <Typography variant="h6" textAlign={'left'}>автор: ник автора</Typography>
            <Typography variant="h2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum maiores officia illo tenetur autem ad maxime iste atque quis, accusamus a laborum, quam odit ratione dicta omnis? Ut, quos tenetur!</Typography>
        </Box>

    )
}