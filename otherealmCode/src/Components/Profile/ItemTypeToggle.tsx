import { FC } from "react"
import { ToggleButton } from "@mui/material"

interface ItemTypeToggleProps{
    children: string,
    onClick: () => void,
}

export const ItemTypeToggle: FC<ItemTypeToggleProps> = ({children, onClick}) => {
    return(
        <ToggleButton value={children} onClick={()=>onClick()} style={{height: 'auto', width: 'auto'}}>{children}</ToggleButton>
    )
}