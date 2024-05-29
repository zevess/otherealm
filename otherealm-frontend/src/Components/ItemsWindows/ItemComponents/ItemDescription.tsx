import { Typography } from "@mui/material"
import { FC } from "react"

interface ItemDescriptionProps{
    description: string
}

export const ItemDescription: FC<ItemDescriptionProps> = ({description}) => {
    return (
        <div className="searchItemContent__description">
            <Typography variant="h6">
                {description}
            </Typography>
        </div>
            
        
    )
}