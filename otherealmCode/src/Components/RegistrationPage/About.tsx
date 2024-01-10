import { Box, Paper, Typography } from "@mui/material"
import { ButtonUsage } from "../Button"

export const About = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', opacity: '80%' }}>
            <Box>
                <Paper style={{ borderRadius: '30px', border: 'solid 3px', borderColor: 'black', display: 'inline-block', marginBottom: '200px' }} elevation={3}>
                    <Typography sx={{ textAlign: 'center', padding: '20px' }} variant="h2">что такое OTHEREALM?</Typography>
                </Paper>

            </Box>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                <Box sx={{ maxWidth: '630px' }}>
                    <Paper style={{ borderRadius: '30px', border: 'solid 3px', borderColor: 'black' }} elevation={3}>
                        <Typography sx={{ padding: '15px' }} variant="h6">
                            — это платформа, сочитающая в себе элементы социальной сети, энциклопедии и списка обожаемых интересов

                            Общайтесь с единомышленниками, объединяйтесь в группы-фэндомы, изучайте интересующую вас вселенную в энциклопедии и составляйте списки по всем предметам попкультуры
                        </Typography>
                    </Paper>
                </Box>
                <Box>
                    <ButtonUsage onClick={()=>(alert("_"))} style={{fontSize: '40px', borderRadius: '60px'}}>зарегистрироваться</ButtonUsage>
                </Box>
            </div>

        </div>
    )
}