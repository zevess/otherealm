import { Box, Typography } from "@mui/material"
import { ItemCard } from "../Cards/ItemCard"

export const FranchiseInfo = () => {
    return (
        <Box width={'95%'} display={'flex'} flexDirection={'column'} marginLeft={'auto'} marginRight={'auto'}>

            <Typography variant="h5" marginBottom={'40px'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eos repellendus quae obcaecati blanditiis nihil quos ducimus doloribus voluptas rem reprehenderit, odio debitis quod, omnis possimus maiores quis sit officiis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus maiores quod culpa libero architecto reprehenderit possimus laboriosam cumque officia fuga perspiciatis commodi cum, facilis rerum sint suscipit autem, deserunt doloremque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus ut possimus illo natus error maiores? Officia voluptatum necessitatibus impedit, id at culpa, a quis consectetur voluptas odio repellendus sint ad.
            </Typography>
            <hr style={{ borderTop: '6px solid black', width: '100%' }}></hr>

            <Typography variant="h4" textAlign={'left'}>связанное:</Typography>

            <Box display={'flex'} flexWrap={'wrap'} >
                <ItemCard itemPoster="src\assets\img\image 1.png" itemType="мультфильм" itemTitle="Рик и Морти" />
                <ItemCard itemPoster="src\assets\img\image 1.png" itemType="мультфильм" itemTitle="Рик и Морти" />
                <ItemCard itemPoster="src\assets\img\image 1.png" itemType="мультфильм" itemTitle="Рик и Морти" />
                <ItemCard itemPoster="src\assets\img\image 1.png" itemType="мультфильм" itemTitle="Рик и Морти" />
                <ItemCard itemPoster="src\assets\img\image 1.png" itemType="мультфильм" itemTitle="Рик и Морти" />
                <ItemCard itemPoster="src\assets\img\image 1.png" itemType="мультфильм" itemTitle="Рик и Морти" />
            </Box>
        </Box>
    )
}