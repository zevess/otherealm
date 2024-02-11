import { Box } from "@mui/material"
import { ItemCard } from "../Cards/ItemCard"
import React, { FC } from "react"
import { ItemTypeToggleGroup } from "../Toggles/ItemTypeToggleGroup"
import { divideItems, itemTypes } from "../../utils/itemTypes"
import { DivideToggleGroup } from "../Toggles/DivideToggleGroup"
import { handleChange } from "../../utils/handleChange"

interface ListWindowProps{
    type: string,
    divide: string,
    setType: React.Dispatch<React.SetStateAction<string>>,
    setDivide: React.Dispatch<React.SetStateAction<string>>,
}

export const ListWindow: FC<ListWindowProps> = ({type, divide, setType, setDivide}) => {

    return (
        <Box sx={{ width: '1300px', maxWidth: '1300px', minHeight: '500px', backgroundColor: 'white', borderRadius: '24px', border: 'solid 1px black' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', padding: '12px' }}>

                <ItemTypeToggleGroup items={itemTypes} handleChange={(event, newAlignment) => handleChange(event, newAlignment, setType)} alignment={type} />

            </Box>
            <div style={{ display: "flex" }}>
                <div className="listItems" style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', marginLeft: '40px' }}>
                    <ItemCard id={1} itemPoster="https://static.hdrezka.ac/i/2020/11/16/m8bb33cfc1690we80w25c.jpeg" itemType="фильм" itemTitle="Гарри Поттер и узник Азкабана" />
                    <ItemCard id={1} itemPoster="src\assets\img\image 1.png" itemType="мультфильм" itemTitle="Рик и Морти" />
                    <ItemCard id={1} itemPoster="src\assets\img\image 1.png" itemType="мультфильм" itemTitle="Рик и Морти" />
                    <ItemCard id={1}  itemPoster="src\assets\img\image 1.png" itemType="мультфильм" itemTitle="Рик и Морти" />
                    <ItemCard id={1}  itemPoster="src\assets\img\image 1.png" itemType="мультфильм" itemTitle="Рик и МортиРик и МортиРик и МортиРик и МортиРик и МортиРик и Морти" />
                    <ItemCard id={1}  itemPoster="src\assets\img\image 1.png" itemType="мультфильм" itemTitle="Рик и Морти" />
                    <ItemCard id={1}  itemPoster="src\assets\img\image 1.png" itemType="франшиза" itemTitle="Рик и Морти" />
                    

                </div>
                <DivideToggleGroup items={divideItems} handleChange={(event, newAlignment) => handleChange(event, newAlignment, setDivide)} alignment={divide}/>
            </div>
        </Box>
    )
}

