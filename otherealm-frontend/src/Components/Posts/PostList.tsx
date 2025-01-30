import { Post } from "./Post"
import { ColorButtonBlue } from "../../utils/CustomButton"

import { useAppSelector } from "../../store"
import React from "react"
import { useAppDispatch } from "../../store/hooks"
import { userPosts } from "../../store/interfaces"
import { clearPostsState, fetchPosts } from "../../store/posts"
import { Typography } from "@mui/material"
import { AddPost } from "./AddPost"

export const PostList = () => {
    const [addPost, setAddPost] = React.useState(false);
    const userId = (useAppSelector((state) => state.authData.data?._id));
    const selectedUserId = (useAppSelector((state) => state.usersData.currentUser.items?._id));
    const isSameUser = (userId == selectedUserId)
    const postsSelector = useAppSelector((state) => state.postsData.userPosts.userPosts);
 
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(clearPostsState())
        dispatch(fetchPosts(`${selectedUserId}`)).catch(err => {
            console.log(err);
        })
    }, [selectedUserId]);

    return (
        <div className="postListWrapper">
            {
                postsSelector.length == 0 ? (
                    <Typography variant="h3">посты не найдены</Typography>
                ) : (
                    <>
                        <div className="postsList">
                            {postsSelector !== undefined && (postsSelector as userPosts[])?.map((item: any) => (
                                <Post key={item._id} avatar={item.user.avatarUrl} id={item._id} nick={item.user.nick} user={item.user.name} imageUrl={item.imageUrl} title={item.title} date={item.createdAt} isText={item.text} />
                            ))}

                        </div>

                    </>
                )
            }
            {(isSameUser == true && (addPost == false)) &&
                <ColorButtonBlue onClick={() => setAddPost(true)} sx={{ width: '200px', marginLeft: 'auto', marginRight: 'auto', marginTop: '12px' }}>создать запись</ColorButtonBlue>
            }

            {addPost &&
                <>
                
                    <AddPost />
                    <ColorButtonBlue onClick={() => setAddPost(false)} sx={{ width: '200px', marginLeft: 'auto', marginRight: 'auto', marginTop: '12px', marginBottom: '12px' }}>отменить создание записи</ColorButtonBlue>
                </>
            }
        </div>
    )
}