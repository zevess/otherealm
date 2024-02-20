import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import React from "react";
import { bookItemFetch } from "../../store/fetches/bookFetch";
import { useAppSelector } from "../../store";
import { Box, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { ItemType } from "./ItemComponents/ItemType";
import { ItemTitle } from "./ItemComponents/ItemTitle";
import { ButtonUsage } from "../Button";
import { ItemDescription } from "./ItemComponents/ItemDescription";
import { CommentSection } from "./CommentWindow/CommentSection";
import { DiscussSection } from "./DiscussWindow/DiscussSection";
import { handleChange } from "../../utils/handleChange";

export const BookWindow = () => {

    const dispatch = useAppDispatch();
    const params = useParams();
    const bookId = String(params.id);
   

    const gbToken = useAppSelector((state) => state.bookData.gbToken)
    React.useEffect(()=>{
        dispatch(bookItemFetch({bookId}));
    }, [])
    
    const [alignment, setAlignment] = React.useState('comments');

    const currentBookItem = useAppSelector((state) => state.bookData.currentBookItem)
    
    
    const title = `${currentBookItem?.volumeInfo?.title}`;
    let fontSize;
    if (title.length > 100) fontSize = '20px';    

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1500px', marginLeft: 'auto', marginRight: 'auto' }} >
            <Box maxWidth={'1500px'} minWidth={'1500px'}>
                <Box component={'img'} src={`${currentBookItem?.volumeInfo?.imageLinks?.thumbnail}`} width={'100%'} height={'483px'} borderRadius={'16px'} sx={{ objectFit: 'cover', filter: 'blur(5px)' }}></Box>
                <Box bgcolor={'white'} border={'solid 2px black'} height={'auto'} paddingBottom={'20px'} >
                    <Box display={'flex'} justifyContent={'flex-end'}>
                        <Box marginTop={'-20%'} display={'flex'} alignItems={'flex-start'} >

                            <Box zIndex={1} height={'571px'} component={'img'} src={`${currentBookItem?.volumeInfo?.imageLinks?.thumbnail}`} sx={{
                                aspectRatio: '380/571', objectFit: 'cover'
                            }}></Box>
                            
                            <ItemTitle title={`${title}`}/>
                            <ItemType itemType={`book`} />
                        </Box>
                        <Box width={'64%'} display={'flex'} flexDirection={'column'} >
                            
                            <Box width={'100%'} bgcolor={'rgba(239, 239, 239, 1)'} display={'flex'} height={'70px'}>
                                <Box width={'100%'} border={'solid 1px black'} borderTop={'none'} borderLeft={'none'} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                    <Typography variant="h5">инфо</Typography>
                                </Box>
                                <ButtonUsage onClick={() => alert("W")} style={{ width: '30%', backgroundColor: 'rgba(239, 239, 239, 1)' }}>
                                    добавить в раздел
                                </ButtonUsage>
                            </Box>
                            <Box marginRight={'auto'} marginLeft={'40px'} marginTop={'20px'} display={'flex'} flexDirection={'column'}> 
                                <Box display={'flex'}>
                                    
                                </Box>
                            </Box>
                            
                        </Box>
                    </Box>
                    <ItemDescription description={`${currentBookItem?.volumeInfo?.description}`}/>

                </Box>

            </Box>

            <ToggleButtonGroup color="primary" exclusive onChange={(event, newAlignment) => handleChange(event, newAlignment, setAlignment)} value={alignment} sx={{ width: '90%', display: 'flex', justifyContent: 'space-between', marginTop: '60px', marginBottom: '40px' }}>
                <ToggleButton value={'comments'}>комментарии</ToggleButton>
                <ToggleButton value={'discuss'} style={{ borderLeft: '1px solid rgba(0, 0, 0, 0.12)' }}>обсуждения</ToggleButton>
            </ToggleButtonGroup>

            <Box width={'90%'}>
                {alignment == 'comments' ? <CommentSection /> : <DiscussSection />}
            </Box>
        </div>
    )
}
