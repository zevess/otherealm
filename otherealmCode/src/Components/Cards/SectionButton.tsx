import { ButtonUsage } from "../Button"
import { FC } from "react"

interface SectionButtonProps{
    children: string,
    onClick: () => void,
}

export const SectionButton: FC<SectionButtonProps> = ({children, onClick}) => {
    return(
        <ButtonUsage onClick={()=> onClick()} style={{marginBottom: '24px', width:'180px'}}>{children}</ButtonUsage>   
    )
}