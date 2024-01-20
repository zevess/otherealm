import { Box } from "@mui/material"
import { ItemCard } from "../Cards/ItemCard"
import {  SectionToggle } from "../SectionToggle"
import { ItemTypeToggle } from "./ItemTypeToggle"

export const ListWindow = () => {
    return (
        <Box sx={{ width: '1300px', maxWidth: '1300px', minHeight: '500px', backgroundColor: 'white', borderRadius: '24px', border: 'solid 1px black' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', padding: '12px' }}>
                
                <ItemTypeToggle children={"все"} onClick={() => console.log('w')} />
                <ItemTypeToggle children={"фильмы"} onClick={() => console.log('w')} />
            </Box>
            <div style={{display:"flex"}}>
                <div className="listItems" style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', marginLeft: '40px' }}>
                    <ItemCard itemPoster="src\assets\img\image 1.png" itemType="мультфильм" itemTitle="Рик и Морти" />
                    <ItemCard itemPoster="src\assets\img\image 1.png" itemType="мультфильм" itemTitle="Рик и Морти" />
                    <ItemCard itemPoster="src\assets\img\image 1.png" itemType="мультфильм" itemTitle="Рик и Морти" />
                    <ItemCard itemPoster="src\assets\img\image 1.png" itemType="мультфильм" itemTitle="Рик и Морти" />
                    <ItemCard itemPoster="src\assets\img\image 1.png" itemType="мультфильм" itemTitle="Рик и МортиРик и МортиРик и МортиРик и МортиРик и МортиРик и Морти" />
                    <ItemCard itemPoster="src\assets\img\image 1.png" itemType="мультфильм" itemTitle="Рик и Морти" />
                    <ItemCard itemPoster="src\assets\img\image 1.png" itemType="франшиза" itemTitle="Рик и Морти" />
                    <ItemCard itemPoster="src\assets\img\Wizarding_World_logo.svg.png" itemType="франшиза" itemTitle="Wizarding World" />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', margin: '20px'}}>
                    <SectionToggle children={"буду смотреть"} onClick={() => console.log('w')}/>
                    <SectionToggle children={"раздел 2"} onClick={() => console.log('w')}/>
                    <SectionToggle children={"раздел 3"} onClick={() => console.log('w')}/>
                </div>
            </div>
        </Box>
    )
}