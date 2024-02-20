import { FC } from "react"
import { Link } from "react-router-dom"

interface ItemCardProps {
    itemType?: string,
    itemTitle: string,
    itemAltenativeTitle?: string
    itemPoster: string,
    id: number | string
}


export const ItemCard: FC<ItemCardProps> = ({ itemType, itemPoster, itemTitle, id, itemAltenativeTitle }) => {
    let typeColor
    let itemTypeRu;

    if (itemType == 'cartoon') {
        typeColor = '#92D4AC'
        itemTypeRu = 'мультфильм'
    }
    if (itemType == 'animated-series') {
        typeColor = '#92D4AC'
        itemTypeRu = 'мультфильм'
    }
    if (itemType == 'tv-series') {
        typeColor = '#D46161'
        itemTypeRu = 'сериал'
    }
    if (itemType == 'movie') {
        typeColor = '#61B8D4'
        itemTypeRu = 'фильм'
    }
    if (itemType == 'game') {
        typeColor = '#7161D4'
        itemTypeRu = 'игра'
    }
    if (itemType == 'book') {
        typeColor = '#D49F61'
        itemTypeRu = 'книга'
    }
    if (itemType == 'anime') {
        typeColor = '#D461CF'
        itemTypeRu = 'аниме'
    }
    if (itemType == 'франшиза') {
        typeColor = '#7C94B0'
    }

    return (

        <div className="itemCard" style={{ position: 'relative', width: '214px', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '20px' }}>
            <Link to={`/item/${itemType}/${id}`}>

                <div className="itemCardContainer" style={{ position: 'relative', width: '100%', height: '309px' }}>
                    <img className="itemCardImg" style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={itemPoster} />
                    <div className="itemCardType" style={{ width: '127px', height: '36px', position: 'absolute', backgroundColor: typeColor, borderRadius: '6px 0px 6px 6px', right: -3, top: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>{itemTypeRu}</div>
                </div>
                <p style={{ marginBottom: '0' }}>{itemTitle == '' ? itemAltenativeTitle : itemTitle}</p>
            </Link>
        </div>

    )
}
