import { Box } from "@mui/material"
import { SectionButton } from "../Cards/SectionButton"
import { ProfileName } from "./ProfileName"
import { ListWindow } from "./ListWindow"

export const Profile = () =>{
    return(
        <>
            <ProfileName name="ник"/>
            <Box display={"flex"} justifyContent={'center'}>
                <Box display={'flex'} flexDirection={'column'} marginRight={'20px'}>
                    <SectionButton children={"списки"} onClick={() => console.log('w')}></SectionButton>
                    <SectionButton children={"франшизы"} onClick={() => console.log('w')}></SectionButton>
                </Box>
                <ListWindow/>
            </Box>
        </>
        

    )
}
