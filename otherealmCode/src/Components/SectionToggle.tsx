import { ToggleButton } from "@mui/material"
import { ButtonUsage } from "./Button"
import { FC } from "react"

interface SectionToggleProps{
    children: string,
    onClick: () => void,
}

export const SectionToggle: FC<SectionToggleProps> = ({children, onClick}) => {
    return(
        <ToggleButton value={children} onClick={()=> onClick()} style={{fontSize: '15px', maxWidth: '200px', height: 'auto', marginBottom: '12px'}}>{children}</ToggleButton>
        // <ButtonUsage onClick={()=> onClick()} style={{marginBottom: '24px', width:'180px'}}>{children}</ButtonUsage>   
    )
}