import { ThemeProvider } from "@mui/material"
import { FranchiseCard } from "./Cards/FranchiseCard"
import { Welcome } from "./RegistrationPage/Welcome"
import { HeaderLogin } from "./RegistrationPage/HeaderLogin"
import { RegistrationWrapper } from "./RegistrationPage/RegistrationWrapper"
import { Profile } from "./Profile/Profile"
import { ItemCard } from "./Cards/ItemCard"
import { ListWindow } from "./Profile/ListWindow"
import { ItemWindows } from "./ItemsWindows/ItemWindow"
import { layoutTheme } from "../assets/theme"
import { FranchiseWindow } from "./FranchiseWindow/FranchiseWindow"
import { Search } from "./Search/Search"
import { Outlet } from "react-router-dom"



export const Layout = () => {
    return (
        <ThemeProvider theme={layoutTheme}>
            <HeaderLogin />
            <Outlet />
        </ThemeProvider>
    )
}

