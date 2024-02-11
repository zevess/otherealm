import { Box, Modal, TextField, Typography } from "@mui/material"
import { ButtonUsage } from "../Button"

export const DiscussModal = () => {
    return (
        <Box bgcolor={"white"} width={'1500px'} padding={'20px'} height={'auto'} position={'absolute'} top={'50%'} left={'50%'} sx={{ transform: 'translate(-50%, -50%)', borderRadius: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h1" textAlign={'center'} marginBottom={'80px'} padding={'15px'}>создать обсуждение</Typography>
            <TextField variant="outlined" multiline placeholder="введите название обсуждения" inputProps={{
                style: {
                    fontSize: '50px', padding: '5px', lineHeight: '2', minHeight: '80px', overflow: 'visible'
                }
            }} InputProps={{
                style: {
                    borderRadius: '30px'
                }
            }} sx={{ width: '100%', marginBottom: '40px' }}></TextField>
            <TextField variant="outlined" multiline placeholder="введите текст обсуждения" inputProps={{
                style: {
                    fontSize: '30px', padding: '5px', lineHeight: '1.4', minHeight: '200px', overflow: 'visible'
                }
            }} InputProps={{
                style: {
                    borderRadius: '30px'
                }
            }} sx={{ width: '100%', marginBottom: '40px' }}></TextField>

            <ButtonUsage children={"создать обсуждение"} onClick={() => alert("@")} style={{height: '86px', fontSize: '22px', backgroundColor: '#ad45ad'}}></ButtonUsage>
        </Box>

    )
}