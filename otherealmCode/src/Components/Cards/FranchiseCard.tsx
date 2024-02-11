import { Box, Typography } from "@mui/material"
import { ButtonUsage } from "../Button"
import { FC } from "react"
import { Link } from "react-router-dom"

interface FranchiseCardProps {
    title: string,
    image: string
}

export const FranchiseCard: FC<FranchiseCardProps> = ({ title, image }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '14px', margin: '30px', aspectRatio: '500/155', height: '155px', backgroundColor: 'white', borderRadius: '40px', border: 'solid 2px black' }}>
            <Box component={'img'} sx={{ width: '166px', objectFit: 'contain' }} src={image}></Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <Typography variant="h4" sx={{ marginTop: '10%' }}>{title}</Typography>

                <Link to={'/franchise'}>
                    <ButtonUsage onClick={() => console.log("@")}>
                        смотреть франшизу
                    </ButtonUsage>
                </Link>


            </Box>
        </Box>
    )
}