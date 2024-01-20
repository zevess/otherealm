import { Box, Typography } from "@mui/material"

export const FranchiseTitleAndLogo = () => {
    return (
        <Box marginTop={'-11%'} display={'flex'} alignItems={'flex-start'}>
            <Box width={'295px'} height={'295px'} bgcolor={'white'} border={'solid 2px black'} borderRadius={'60px'} display={'flex'} alignItems={'center'} justifyContent={'center'} marginRight={'40px'}>
                <Box component={'img'} src="src\assets\img\Wizarding_World_logo.svg.png" maxWidth={'90%'} height={'auto'}></Box>
            </Box>

            <Box maxHeight={'168px'} maxWidth={'600px'} width={'auto'} border={'solid 3px black'} borderRadius={'30px'} bgcolor={'white'} marginTop={'auto'} padding={'20px'}>
                <Typography variant="h2">Wizarding world</Typography>
            </Box>
        </Box>

    )
}