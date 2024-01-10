import { FC } from "react"

interface ItemCardProps{
    itemType: 'мультфильм' | 'сериал' | 'фильм' | 'игра' | 'книга' | 'аниме',
    itemTitle: string,
    itemPoster: string
}


export const ItemCard: FC<ItemCardProps> = ({itemType, itemPoster, itemTitle}) =>{
    let typeColor

    if (itemType == 'мультфильм'){
        typeColor = '#92D4AC'
    }
    if (itemType == 'сериал'){
        typeColor = '#D46161'
    }
    if (itemType == 'фильм'){
        typeColor = '#61B8D4'
    }
    if (itemType == 'игра'){
        typeColor = '#7161D4'
    }
    if (itemType == 'книга'){
        typeColor = '#D49F61'
    }
    if (itemType == 'аниме'){
        typeColor = '#D461CF'
    }

    return(
        <div className="itemCard" style={{ position: 'relative', aspectRatio: '205/308.73', maxWidth: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', margin: '20px'}}>
            <div className="itemCardType" style={{width: '127px', height: '36px', position: 'absolute', backgroundColor: typeColor, borderRadius: '6px 0px 6px 6px', right: 5, top: 5,  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{itemType}</div>
            <a className="itemCardContent" href="">
                <img className="itemCardImg" src={itemPoster}/>
                <p style={{margin: 0}}>{itemTitle}</p>
            </a>
        </div>
        
    )
}
