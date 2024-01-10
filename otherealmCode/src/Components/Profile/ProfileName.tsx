import { Avatar, Box, Typography } from "@mui/material"
import { deepOrange } from "@mui/material/colors"
import { FC } from "react"

interface ProfileNameProps {
    name: string
}

export const ProfileName: FC<ProfileNameProps> = ({ name }) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px'}}>
            <div className="profileHead"></div>
            <div style={{ width: '70%',maxWidth: '1060px', padding: '20px' }}>    
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Avatar sx={{ bgcolor: deepOrange, width: '170px', height: '170px' }}></Avatar>
                    <Typography variant="h2" sx={{ marginTop: 'auto', marginLeft: '25px' }}>{name}</Typography>
                </Box>
                <hr style={{ borderTop: '6px solid black', width: 'auto' }}></hr>
            </div>
        </div>

    )
}