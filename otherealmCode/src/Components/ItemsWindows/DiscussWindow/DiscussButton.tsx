import { ButtonUsage } from "../../Button"

export const DiscussButton = () =>{
    return(
        <ButtonUsage onClick={() => alert("W")} style={{width: '34%', height: '80px', fontSize: '20px'}} >создать обсуждение</ButtonUsage>
    )
}