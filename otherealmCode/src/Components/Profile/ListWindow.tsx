import { Box } from "@mui/material"
import { ItemCard } from "../Cards/ItemCard"
import { ItemTypeButton } from "./ItemTypeButton"
import { SectionButton } from "../Cards/SectionButton"

export const ListWindow = () => {
    return (
        <Box sx={{ width: '1300px', maxWidth: '1300px', minHeight: '500px', backgroundColor: 'white', borderRadius: '24px', border: 'solid 1px black' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', padding: '12px' }}>
                <ItemTypeButton children={"все"} onClick={() => console.log('w')} />
                <ItemTypeButton children={"фильмы"} onClick={() => console.log('w')} />
            </Box>
            <div style={{display:"flex"}}>
                <div className="listItems" style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '40px' }}>
                    <ItemCard itemPoster="src\assets\img\image 1.png" itemType="аниме" itemTitle="Рик и Морти" />
                    <ItemCard itemPoster="src\assets\img\image 1.png" itemType="аниме" itemTitle="Рик и Морти" />
                    <ItemCard itemPoster="src\assets\img\image 1.png" itemType="аниме" itemTitle="Рик и Морти" />
                    <ItemCard itemPoster="src\assets\img\image 1.png" itemType="аниме" itemTitle="Рик и Морти" />
                    <ItemCard itemPoster="src\assets\img\image 1.png" itemType="аниме" itemTitle="Рик и Морти" />
                    <ItemCard itemPoster="src\assets\img\image 1.png" itemType="аниме" itemTitle="Рик и Морти" />
                    <ItemCard itemPoster="src\assets\img\image 1.png" itemType="аниме" itemTitle="Рик и Морти" />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
                    <SectionButton children={"буду смотреть qwwq r twtw wq t tew "} onClick={() => console.log('w')} />
                    <SectionButton children={"раздел 2"} onClick={() => console.log('w')} />
                    <SectionButton children={"раздел 3"} onClick={() => console.log('w')} />
                </div>
            </div>
        </Box>
    )
}