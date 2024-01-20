import { FC } from "react"

interface ItemCardProps {
    itemType: 'мультфильм' | 'сериал' | 'фильм' | 'игра' | 'книга' | 'аниме' | 'франшиза',
    itemTitle: string,
    itemPoster: string
}


export const ItemCard: FC<ItemCardProps> = ({ itemType, itemPoster, itemTitle }) => {
    let typeColor

    if (itemType == 'мультфильм') {
        typeColor = '#92D4AC'
    }
    if (itemType == 'сериал') {
        typeColor = '#D46161'
    }
    if (itemType == 'фильм') {
        typeColor = '#61B8D4'
    }
    if (itemType == 'игра') {
        typeColor = '#7161D4'
    }
    if (itemType == 'книга') {
        typeColor = '#D49F61'
    }
    if (itemType == 'аниме') {
        typeColor = '#D461CF'
    }
    if (itemType == 'франшиза') {
        typeColor = '#7C94B0'
    }
    //214 357
    return (

        <div className="itemCard" style={{ position: 'relative', width: '214px', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '20px' }}>

            <a className="itemCardContent" href="">
                <div className="itemCardContainer" style={{ position: 'relative', width: '100%', height: '309px' }}>
                    <img className="itemCardImg" style={{ objectFit: 'contain', maxWidth: '214px', height: '309px' }} src={itemPoster} />
                    <div className="itemCardType" style={{ width: '127px', height: '36px', position: 'absolute', backgroundColor: typeColor, borderRadius: '6px 0px 6px 6px', right: 5, top: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>{itemType}</div>
                </div>
                <p style={{marginBottom: '0'}}>{itemTitle}</p>
            </a>
        </div>

    )
}


{/* <div className="itemCard" style={{ position: 'relative', width: '214px', height: '357px', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '20px' }}>
            <div className="itemCardType" style={{ width: '127px', height: '36px', position: 'absolute', backgroundColor: typeColor, borderRadius: '6px 0px 6px 6px', right: 5, top: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{itemType}</div>
            <a className="itemCardContent" href="">
                
                <img className="itemCardImg" style={{ maxWidth: "214px", marginTop: 'auto', marginBottom: 'auto' }} src={itemPoster} />
                <p style={{ margin: 0 }}>{itemTitle}</p>
            </a>
        </div> */}