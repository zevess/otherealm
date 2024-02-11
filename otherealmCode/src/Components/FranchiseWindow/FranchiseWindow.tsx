import { Box, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import React from "react";
import { ItemCard } from "../Cards/ItemCard";
import { FranchiseDiscuss } from "./FranchiseDiscuss";
import { FranchiseInfo } from "./FranchiseInfo";
import { FranchiseTitleAndLogo } from "./FranchiseTitleAndLogo";
import { handleChange } from "../../utils/handleChange";

export const FranchiseWindow = () => {
    const [alignment, setAlignment] = React.useState('info')
    console.log(alignment)


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1500px', marginLeft: 'auto', marginRight: 'auto' }} >
            <Box maxWidth={'1200px'} width={'1200px'}>
                <Box bgcolor={'rgba(227, 218, 218, 1)'} width={'100%'} height={'483px'} borderRadius={'16px'}></Box>
                <Box display={'flex'} marginLeft={'10%'} marginBottom={'40px'}>
                    <FranchiseTitleAndLogo/>                

                </Box>
                <Box bgcolor={'white'} border={'solid 5px black'} height={'auto'} borderRadius={'50px'} >
                    {/* <DiscussWindow/> */}
                    <ToggleButtonGroup color="primary" exclusive onChange={(event, newAlignment) => handleChange(event, newAlignment, setAlignment)} value={alignment} sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
                        <ToggleButton value={'info'} sx={{ borderRadius: '50px 0px 0px 0px', width: '100%' }}>инфо</ToggleButton>
                        <ToggleButton value={'discuss'} sx={{ borderRadius: '0px 50px 0px 0px', borderLeft: '1px solid rgba(0, 0, 0, 0.12)', width: '100%' }}>обсуждения</ToggleButton>
                    </ToggleButtonGroup>

                    {alignment === 'info' ? <FranchiseInfo/> : <FranchiseDiscuss/>}                    
                </Box>
            </Box>
        </div>
    )
}