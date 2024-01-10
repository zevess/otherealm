import { Box } from "@mui/material"
import { Header } from "../Header"

export const HeaderLogin = () => {
    return (
        <Header>
            <a href="">
                инфо
            </a>
            
            <Box component={'img'} sx={{ width: '150px' }} src="/src/assets/img/ЛОГО.svg"></Box>
            
            <a href="">
                вход
            </a>
            
        </Header>
    )
}