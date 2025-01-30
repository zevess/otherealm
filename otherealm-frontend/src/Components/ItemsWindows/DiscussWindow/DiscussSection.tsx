import React from "react"
import { useAppDispatch } from "../../../store/hooks"
import { ColorButtonBlue } from "../../../utils/CustomButton"
import { Link } from "react-router-dom"
import { clearDiscuss, fetchItemDiscusses } from "../../../store/discuss"
import { useAppSelector } from "../../../store"
import { DiscussPreview } from "./DiscussPreview"

export const DiscussSection = () => {
    const dispatch = useAppDispatch()
    
    const discussesSelector = useAppSelector((state) => state.discussData.discusses.discusses)
    const isAuth = useAppSelector((state) => state.authData.data);

    const currentUrl = window.location.href;
    const parts = currentUrl.split('/');
    const itemId = String(parts.slice(-2).join(''))
    const itemIdLink = String(parts.slice(-2).join('/'))



    React.useEffect(() => {
        dispatch(fetchItemDiscusses(`${itemId}`))
        return () => {
            dispatch(clearDiscuss())
        }
    }, [])

    return (
        <div className="discussSection">

            <Link to={isAuth ? `discuss/add` : '/auth'} style={{width: 'fit-content', margin: '0 auto'}}>
                <ColorButtonBlue disabled={!isAuth} sx={{height: '80px'}}>
                    создать обсуждение
                </ColorButtonBlue>
            </Link>
            
            <div className="discussSections__items">
                {discussesSelector !== undefined && discussesSelector.map((item: any) => (
                    <DiscussPreview user={item.user.name} userId={item.user._id} nick={item.user.nick} id={item._id} itemId={itemIdLink} date={item.createdAt} title={item.title} imageUrl={item.imageUrl} avatar={item.user.avatarUrl} isText={item.text} />

                ))}
            </div>
        </div>
    )
}