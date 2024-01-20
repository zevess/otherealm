import { TextField } from "@mui/material"

export const DiscussInput = () =>{
    return(
        <TextField variant="outlined" placeholder="найти обсуждение" sx={{ backgroundColor: 'white', textAlign: 'left', marginBottom: '20px', width: '60%', borderRadius: '30px' }} InputProps={{
            style: {
                fontSize: '30px', padding: '5px', lineHeight: '1.4', minHeight: '50px', height: '80px', borderRadius: '30px'
            }
        }}></TextField>
    )
}