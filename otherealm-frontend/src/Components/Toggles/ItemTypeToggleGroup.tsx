import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import React, { FC } from "react";

interface ItemTypeToggleGroupProps{
    alignment: string,
    items: {
        [key: string]: string
    },
    handleChange:(
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string
    ) =>void;
    
}

export const ItemTypeToggleGroup: FC<ItemTypeToggleGroupProps> = ({alignment, items, handleChange}) => {

    return (
        <ToggleButtonGroup exclusive onChange={handleChange} value={alignment} sx={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
            {Object.keys(items).map((value, key) => (
                <ToggleButton value={value} key={key} style={{width: 'auto', height: 'auto', margin: '8px', borderLeft: '1px solid rgba(0, 0, 0, 0.12)'}}>{items[value]}</ToggleButton>
            ))}
        </ToggleButtonGroup>
    )
}