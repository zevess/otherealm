import { Avatar, Box, IconButton, Typography } from "@mui/material"
import React, { FC } from "react"
import axios from '../../axios'
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { fetchAuthMe } from "../../store/auth"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { ColorButtonBlue } from "../../utils/CustomButton"
import { clearUserState, fetchOneUser } from "../../store/users"
import { useParams } from "react-router-dom"

interface ProfileNameProps {
    name: string
}

export const ProfileName: FC<ProfileNameProps> = ({ name }) => {
    const params = useParams();
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector((state) => state.authData.data);
    const avatar = useAppSelector((state) => state.usersData.currentUser.items?.avatarUrl);
    const background = useAppSelector((state) => state.usersData.currentUser.items?.backgroundUrl);
    const userFollows = (useAppSelector((state) => state.authData.data?.follows));
    const userId = useAppSelector((state) => state.authData.data?._id);
    const currentUser = useAppSelector((state) => state.usersData.currentUser.items);

    const isSameUser = (userId == currentUser?._id)

    const isFollowed = userFollows?.some((user: any) => user._id === currentUser?._id)

    React.useEffect(() => {
        setFollow(isFollowed);
    }, [isFollowed])


    const inputAvatarRef = React.useRef<any>(null)
    const inputBGRef = React.useRef<any>(null)
    
    const [isHovered, setIsHovered] = React.useState(false)
    const [follow, setFollow] = React.useState(isFollowed);

    const handleChangeAvatar = async (event: any) => {
        const formData = new FormData();
        const file = event.target.files[0];
        console.log(file)

        formData.append('image', file);
        try {
            await axios.post(`/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                const fields = {
                    "avatarUrl": `${res.data.data.url}`
                }
                axios.patch(`/profile/avatar/${currentUser?._id}`, fields).then(()=> dispatch(clearUserState())).then(()=> dispatch(fetchOneUser(`${params.nick}`)));
            })


        } catch (err) {
            console.log(err)
        }

    }

    const handleChangeBG = async (event: any) => {
        const formData = new FormData();
        const file = event.target.files[0];
        console.log(file)

        formData.append('image', file);
        try {
            await axios.post(`/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                const fields = {
                    "backgroundUrl": `${res.data.data.url}`
                }
                axios.patch(`/profile/background/${currentUser?._id}`, fields).then(()=> dispatch(clearUserState())).then(()=> dispatch(fetchOneUser(`${params.nick}`)));
            })


        } catch (err) {
            console.log(err)
        }
    }


    const handleFollow = async () => {
        try {

            const fields = {
                avatarUrl: currentUser?.avatarUrl,
                name: currentUser?.name,
                nick: currentUser?.nick,
                id: currentUser?._id
            }

            await axios.patch(`/profile/follow/${userId}`, fields).then(() => setFollow(true))
            dispatch(fetchAuthMe());
        } catch (err) {
            console.warn(err);
            alert("ошибка при подписке")
        }

    }

    const handleUnfollow = async () => {
        try {

            const fields = {
                avatarUrl: currentUser?.avatarUrl,
                name: currentUser?.name,
                nick: currentUser?.nick,
                id: currentUser?._id
            }

            if (window.confirm('вы уверены что хотите отписаться')) {
                await axios.patch(`/profile/unfollow/${userId}`, fields).then(() => setFollow(false))
                dispatch(fetchAuthMe());
                // dispatch(fetchUnfollowUser(fields)).then(()=> setFollow(false))
            }

        } catch (err) {
            console.warn(err);
            alert("ошибка при подписке")
        }
    }

    return (
        <div className="profileHeadWrapper">

            <Box className="profileHead" sx={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {isSameUser &&
                    <>
                        <input accept="image/*" ref={inputBGRef} type="file" onChange={handleChangeBG} hidden />
                        <IconButton onClick={() => inputBGRef.current.click()} style={{ visibility: isHovered ? 'visible' : 'hidden', display: 'flex', borderRadius: '8px', backgroundColor: 'rgba(0, 0, 0, 0.1)' }} className="editProfileBG">
                            <EditOutlinedIcon sx={{ color: 'white' }} />
                            <Typography variant="body2" color={'white'}>изменить обложку</Typography>
                        </IconButton>
                    </>}

            </Box>

            <div className="profileHead__user">
                <Box sx={{ display: 'flex' }}>
                    {isSameUser ?
                        <>
                            <input accept="image/*" ref={inputAvatarRef} type="file" onChange={handleChangeAvatar} hidden />
                            <IconButton onClick={() => inputAvatarRef.current.click()}>
                                <Avatar src={`${avatar}`} className="profileHead__user-avatar" />
                            </IconButton>
                        </> : <Avatar src={`${avatar}`} className="profileHead__user-avatar" />}

                    <p className="profileHead__user-name">{name}</p>
                </Box>
                <hr style={{ borderTop: '6px solid black', width: 'auto' }}></hr>
            </div>

            {(isAuth &&!isSameUser) && <div className="profileHead__follow">
                <ColorButtonBlue sx={{ marginLeft: 'auto' }} onClick={follow ? handleUnfollow : handleFollow}>
                    {follow ? "отписаться" : "подписаться"}
                </ColorButtonBlue>
            </div>}

        </div>

    )
}