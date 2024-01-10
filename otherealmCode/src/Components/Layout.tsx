import { ThemeProvider } from "@mui/material"

import { createTheme } from '@mui/material/styles'
import { FranchiseCard } from "./Cards/FranchiseCard"
import { Welcome } from "./RegistrationPage/Welcome"
import { HeaderLogin } from "./RegistrationPage/HeaderLogin"
import { RegistrationWrapper } from "./RegistrationPage/RegistrationWrapper"
import { Profile } from "./Profile/Profile"
import { SectionButton } from "./Cards/SectionButton"
import { ItemCard } from "./Cards/ItemCard"
import { ListWindow } from "./Profile/ListWindow"

const theme = createTheme({
    typography: {
        fontFamily: 'Comfortaa',
        allVariants: {
            color: 'black'
        }
    },

})

export const Layout = () => {
    return (
        <ThemeProvider theme={theme}>
            <HeaderLogin />
            {/* <ListWindow/> */}

            {/* <FranchiseCard title={"Wizarding world"} image={"src/assets/img/Wizarding_World_logo.svg.png"}/>
            <FranchiseCard title="Marvel" image="src/assets/img/5d8326726990392fe3d42652404eacfa.png"/> */}
            {/* <RegistrationWrapper/> */}

            <Profile/>    
        </ThemeProvider>
    )
}

