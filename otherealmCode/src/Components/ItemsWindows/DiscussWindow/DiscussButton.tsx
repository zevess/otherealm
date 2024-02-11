import { FC } from "react"
import { ButtonUsage } from "../../Button"

interface DiscussButtonProps{
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DiscussButton: FC<DiscussButtonProps> = ({setModalOpen}) =>{
    return(
        <ButtonUsage onClick={() => setModalOpen(true)} style={{width: '34%', height: '80px', fontSize: '20px'}} >создать обсуждение</ButtonUsage>
    )
}