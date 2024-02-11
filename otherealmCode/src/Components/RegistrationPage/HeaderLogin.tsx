import { Box } from "@mui/material"
import { Header } from "../Header"
import { Link } from "react-router-dom"

export const HeaderLogin = () => {
    return (
        <Header>
            <Link to={"/search"}>поиск</Link>
            <Box component={'img'} sx={{ width: '150px' }} src="/src/assets/img/ЛОГО.svg"></Box>
            <Link to={"/profile"}>профиль</Link>
        </Header>
    )
}