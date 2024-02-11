import { FC } from "react"
import { ToggleButton } from "@mui/material"

interface ItemTypeToggleProps{
    name: string,
    value: string
}

export const ItemTypeToggle: FC<ItemTypeToggleProps> = ({name, value}) => {
    return(
        <ToggleButton value={value}  style={{height: 'auto', width: 'auto'}}>{name}</ToggleButton>
    )
}