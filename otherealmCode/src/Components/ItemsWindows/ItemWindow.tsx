import { Avatar, Box, IconButton, InputAdornment, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { FranchiseCard } from "../Cards/FranchiseCard"
import { ButtonUsage } from "../Button"
import React from "react";
import { deepOrange } from "@mui/material/colors";
import { InputText } from "./CommentWindow/InputText";
import { Comment } from "./CommentWindow/Comment";
import { CommentWindow } from "./CommentWindow/CommentWindow";
import { DiscussWindow } from "./DiscussWindow/DiscussWindow";


export const ItemWindows = () => {

    const [alignment, setAlignment] = React.useState('comments');
    console.log(alignment)
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        console.log(newAlignment)
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1500px', marginLeft: 'auto', marginRight: 'auto' }} >
            <Box maxWidth={'1500px'} width={'1500px'}>
                <Box bgcolor={'rgba(227, 218, 218, 1)'} width={'100%'} height={'483px'} borderRadius={'16px'}></Box>

                <Box bgcolor={'white'} border={'solid 2px black'} height={'850px'} >
                    <Box display={'flex'} justifyContent={'flex-end'}>
                        <Box marginTop={'-20%'} display={'flex'} alignItems={'flex-start'}>
                            <Box component={'img'} src="src\assets\img\image 2.png"></Box>
                            <Box maxHeight={'168px'} maxWidth={'600px'} width={'600px'} border={'solid 3px black'} position={'absolute'} borderRadius={'30px'} bgcolor={'white'} marginLeft={'500px'} marginTop={'80px'} padding={'10px'}>
                                <Typography variant="h4">Время приключений: Фионна и Кейк</Typography>
                            </Box>
                            <Box sx={{ aspectRatio: '200/57', width: '200px', backgroundColor: '#92D4AC', position: 'absolute', marginLeft: '1150px', marginTop: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px 0px 6px 6px', border: 'solid 2px black' }}>
                                <Typography variant="h5" borderColor={'solid 1px black'}>мультфильм</Typography>
                            </Box>
                        </Box>
                        <Box width={'62%'} bgcolor={'rgba(239, 239, 239, 1)'} height={'70px'} display={'flex'} >
                            <Box width={'70%'} border={'solid 1px black'} borderTop={'none'} borderLeft={'none'} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <Typography variant="h5">инфо</Typography>
                            </Box>
                            <ButtonUsage onClick={() => alert("W")} style={{ width: '30%', backgroundColor: 'rgba(239, 239, 239, 1)' }}>
                                добавить в раздел
                            </ButtonUsage>
                        </Box>
                    </Box>
                    <Box display={"flex"}>
                        <Box marginLeft={'50px'}>
                            <FranchiseCard title={"Adventure Time"} image={"src/assets/img/image 9.png"}></FranchiseCard>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} marginTop={'-180px'}>
                            <Typography variant="h5">страна: </Typography>
                        </Box>
                    </Box>

                    <Box width={'80%'} border={'solid 1px black'} display={'flex'} marginLeft={'auto'} marginRight={'auto'}>
                        <Typography variant="h6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eos repellendus quae obcaecati blanditiis nihil quos ducimus doloribus voluptas rem reprehenderit, odio debitis quod, omnis possimus maiores quis sit officiis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus maiores quod culpa libero architecto reprehenderit possimus laboriosam cumque officia fuga perspiciatis commodi cum, facilis rerum sint suscipit autem, deserunt doloremque!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus ut possimus illo natus error maiores? Officia voluptatum necessitatibus impedit, id at culpa, a quis consectetur voluptas odio repellendus sint ad.
                        </Typography>
                    </Box>

                </Box>

            </Box>

            <ToggleButtonGroup color="primary" exclusive onChange={handleChange} value={alignment} sx={{ width: '90%', display: 'flex', justifyContent: 'space-between', marginTop: '60px', marginBottom: '40px' }}>
                <ToggleButton value={'comments'}>комментарии</ToggleButton>
                <ToggleButton value={'discuss'} style={{ borderLeft: '1px solid rgba(0, 0, 0, 0.12)' }}>обсуждения</ToggleButton>
            </ToggleButtonGroup>

            <Box width={'90%'} >
                {alignment == 'comments' ? <CommentWindow/> : <DiscussWindow/>}
                
                
            </Box>
        </div>
    )
}