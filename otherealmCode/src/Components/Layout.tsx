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



export const Layout = () => {
    return (
        <ThemeProvider theme={layoutTheme}>
            <HeaderLogin />
            {/* <ListWindow/> */}

            {/* <FranchiseCard title={"Wizarding world"} image={"src/assets/img/Wizarding_World_logo.svg.png"}/>
            <FranchiseCard title="Marvel" image="src/assets/img/5d8326726990392fe3d42652404eacfa.png"/> */}
            {/* <RegistrationWrapper/> */}

            <Profile/>    
            {/* <ItemWindows /> */}
            {/* <FranchiseWindow/> */}
            <Search/>
        </ThemeProvider>
    )
}

