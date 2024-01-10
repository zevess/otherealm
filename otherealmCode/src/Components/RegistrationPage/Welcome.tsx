import { Box, Paper, Typography } from "@mui/material"

export const Welcome = () => {
    return(
        <Box sx={{ opacity: '80%', marginTop: '20%', marginBottom: '300px'}}>
            <Paper elevation={3} sx={{width: '470px', border: ' solid 2px black ', borderRadius: '40px', backgroundColor: 'white'}}>
                <Typography variant="h2">
                добро пожаловать на OTHEREALM
                </Typography>
                <Typography variant="h6"> — социальную сеть для людей, объединённых интересами</Typography>
            </Paper>
        </Box>
    )
}