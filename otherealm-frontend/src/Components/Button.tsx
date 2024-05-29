import { FC } from "react"

interface ButtonProps{
    children: string,
    onClick: () => void,
    style?: React.CSSProperties,
}

export const ButtonUsage: FC<ButtonProps> = ({children, onClick, style}) => {
    return(
        <button onClick={()=> onClick()} style={style}>            
            {children}
        </button>       
    )
}