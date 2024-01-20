import { Box, Typography } from "@mui/material"

export const SearchItem = () => {
    return (
        // <Box width={'350px'} height={'444px'} borderRadius={'40px'} border={'solid 2px black'} bgcolor={'white'}>
        // </Box>
        <div className="searchItem" style={{width: '350px', height: '444px', borderRadius: '40px', border: 'solid 2px black', backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{height: '52px', width:'180px', border:'solid 1px black', borderRadius: '0px 0px 6px 6px', backgroundColor: '#7C94B0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography variant="h5">франшиза</Typography>
            </div>
        </div>
    )
}