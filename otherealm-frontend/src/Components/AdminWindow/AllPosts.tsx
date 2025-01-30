import { Post } from "../Posts/Post"
import { useAppSelector } from "../../store"
import React from "react"
import { useAppDispatch } from "../../store/hooks"
import { userPosts } from "../../store/interfaces"
import { clearPostsState, fetchAllPosts } from "../../store/posts"



export const AllPosts = () => {
    const postsSelector = useAppSelector((state) => state.postsData.userPosts.userPosts);

    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(clearPostsState())
        dispatch(fetchAllPosts()).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div className="postListWrapper">

            <div className="postsList">
                {postsSelector !== undefined && (postsSelector as userPosts[])?.map((item: any) => (
                    <Post key={item._id} avatar={item.user ? item.user.avatarUrl : ''} id={item._id} nick={item.user ? item.user.nick : 'пользователь удален'} user={item.user ? item.user.name : 'пользователь удален'} imageUrl={item.imageUrl} title={item.title} date={item.createdAt} isText={item.text} />
                ))}
            </div>


        </div>
    )
}