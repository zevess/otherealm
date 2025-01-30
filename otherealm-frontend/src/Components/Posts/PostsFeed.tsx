import React from "react";
import { useAppSelector } from "../../store";
import { useAppDispatch } from "../../store/hooks";
import { Post } from "./Post";
import { ColorButtonBlue } from "../../utils/CustomButton";
import { fetchPostsFeed } from "../../store/posts";
import { CircularProgress, Typography } from "@mui/material";
import { AddPost } from "./AddPost";

export const PostsFeed = () => {
    const [addPost, setAddPost] = React.useState(false);
    const userId = (useAppSelector((state) => state.authData.data?._id));
    const selectedUserId = (useAppSelector((state) => state.usersData.currentUser.items?._id));
    const isAuth = useAppSelector((state) => state.authData.data);
    const isSameUser = (userId == selectedUserId)
    const feedSelector = useAppSelector((state) => state.postsData.feed);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        if (userId !== undefined) {
            dispatch(fetchPostsFeed(userId)).catch(err => {
                console.log(err);
            })
        }
    }, [userId]);

    if(feedSelector.status == 'loading'){
        return <CircularProgress />
    }

    if(feedSelector.feedPosts) return (
        <div className="postListWrapper feed">
            {feedSelector.feedPosts.length == 0 ? 
            (
                <Typography variant="h3">не найдены подписки для отображения постов</Typography>
            ) : (
                <div className="postsList"  >
                {feedSelector.feedPosts.map((item: any) => (
                    <Post avatar={item.user.avatarUrl} key={item._id} id={item._id} user={item.user.name} nick={item.user.nick} imageUrl={item.imageUrl} title={item.title} date={item.createdAt} isText={item.text} />
                ))}

            </div>
            )}
            
            {(isAuth && (addPost == false)) &&
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