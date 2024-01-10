import { FC } from "react"
import { ButtonUsage } from "../Button"

interface ItemTypeButtonProps{
    children: string,
    onClick: () => void,
}

export const ItemTypeButton: FC<ItemTypeButtonProps> = ({children, onClick}) => {
    return(
        <ButtonUsage onClick={()=> onClick()}>{children}</ButtonUsage>   
    )
}