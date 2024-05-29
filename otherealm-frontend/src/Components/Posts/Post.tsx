import { Avatar, Box, Divider, IconButton } from "@mui/material"
import { Link } from "react-router-dom"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { FC } from "react";
import { useAppSelector } from "../../store";


interface PostProps {
    user: string,
    nick: string,
    id: string,
    date: string,
    title: string,
    imageUrl: string,
    avatar: string,
    isText: string,
}

export const Post: FC<PostProps> = ({ user, nick, date, title, imageUrl, id, avatar, isText }) => {

    const userId = (useAppSelector((state) => state.authData.data?._id));
    const selectedUserId = (useAppSelector((state) => state.authData.selectedUserData?._id));
    const isSameUser = (selectedUserId && (userId == selectedUserId))

    const dateToForm = new Date(date);
    const options = {
        weekday: 'short' as const,
        year: 'numeric' as const,
        month: 'short' as const,
        day: 'numeric' as const
    }

    const formatedDate = dateToForm.toLocaleString('ru-RU', options)

    const time = dateToForm.toTimeString().slice(0, 8);



    return (
        <div className="postItem">

            <div className="postItemDetails">
                <div className="postItemDetails-user">
                    <Link to={`/profile/${nick}`} style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <Avatar src={`${import.meta.env.VITE_API_URL}${avatar}`} className="postItemDetails-user__avatar" />
                        <div className="postItemDetails-user__info">
                            <p className="postUserInfo nick">{user}</p>
                            <Divider sx={{ width: '100%' }} />
                            <p className="postUserInfo date">{formatedDate + '; ' + time}</p>
                        </div>
                    </Link>

                    {isSameUser && <Box marginLeft={'auto'}>
                        <Link to={`/post/${id}/edit`}>
                            <IconButton >
                                <EditOutlinedIcon />
                            </IconButton>
                        </Link>

                    </Box>}
                </div>
                <hr className="hrHorizontal"></hr>
            </div>

            <Link to={`/post/${id}`}>
                {imageUrl && <img src={`${import.meta.env.VITE_API_URL}${imageUrl}`} className='postItemImg' ></img>}
                <p className="postItemText">{title}</p>
                {isText && <p>...</p>}

                <div className="postItemAlso">
                    <IconButton>
                        <ChatBubbleOutlineIcon sx={{ color: '#747bff' }} />
                    </IconButton>

                </div>

            </Link>

        </div>
    )
}