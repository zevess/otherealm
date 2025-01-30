import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearDiscuss, fetchAllDiscusses } from "../../store/discuss";
import { DiscussPreview } from "../ItemsWindows/DiscussWindow/DiscussPreview";

export const AllDiscusses = () =>{
    const dispatch = useAppDispatch()
    
    const discussesSelector = useAppSelector((state) => state.discussData.discusses.discusses)

    React.useEffect(() => {
        dispatch(fetchAllDiscusses())
        return () => {
            dispatch(clearDiscuss())
        }
    }, [])

    

    return (
        <div className="discussSection">
            <div className="discussSections__items">
                {discussesSelector !== undefined && discussesSelector.map((item: any) => (
                    <DiscussPreview user={item.user.name} userId={item.user._id} nick={item.user.nick} id={item._id} itemId={item.itemTag} date={item.createdAt} title={item.title} imageUrl={item.imageUrl} avatar={item.user.avatarUrl} isText={item.text} />
                ))}
            </div>
        </div>
    )
}