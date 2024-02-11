import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import React, { FC } from "react";

interface DivideToggleGroupProps{
    alignment: string,
    items: {
        [key: string]: string
    },
    handleChange:(
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string
    ) =>void;
    
}

export const DivideToggleGroup: FC<DivideToggleGroupProps> = ({alignment, items, handleChange}) => {

    return (
        <ToggleButtonGroup exclusive onChange={handleChange} value={alignment} sx={{ display: 'flex', flexDirection: 'column', marginRight: '20px'}}>
            {Object.keys(items).map((value, key) => (
                <ToggleButton value={value} key={key} sx={{ maxWidth: '200px', height: 'auto', borderLeft: '1px solid rgba(0, 0, 0, 0.12)', marginBottom: '20px'}}>{items[value]}</ToggleButton>
            ))}
        </ToggleButtonGroup>
    )
}