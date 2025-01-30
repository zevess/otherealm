import { Avatar, Box, Button, IconButton, TextField, Typography } from "@mui/material"
import React, { FC } from "react"
import { Link } from "react-router-dom"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useAppSelector } from "../../../store";
import axios from '../../../axios'
import { ModalWindow } from "../../../utils/ModalWindow";
import { ColorButton } from "../../../utils/CustomButton";
import { useAppDispatch } from "../../../store/hooks";
import { clearComments, fetchGetComments } from "../../../store/comment";

interface CommentProps {
    name: string,
    id: string,
    nick: string,
    text: string,
    avatar: string,
    date: string,
    commentUserId: string,
    postId: string,
}

export const Comment: FC<CommentProps> = ({ name, text, nick, avatar, date, commentUserId, id, postId }) => {

    const dispatch = useAppDispatch()
    const [toggleSetting, setToggleSetting] = React.useState(Boolean);
    const [commentText, setCommentText] = React.useState(text)

    const userId = useAppSelector((state) => state.authData.data?._id)
    const isSameUser = (userId == commentUserId);

    const adminId = useAppSelector((state) => state.state.adminId);

    const dateToForm = new Date(date);
    const options = {
        weekday: 'short' as const,
        year: 'numeric' as const,
        month: 'short' as const,
        day: 'numeric' as const
    }

    const formatedDate = dateToForm.toLocaleString('ru-RU', options)

    const time = dateToForm.toTimeString().slice(0, 8);


    const handleSubmit = () => {

        const fields = {
            text: commentText,
            postId: postId
        }

        axios.patch(`/comments/${id}`, fields).then((response: any) => {
            if(response.error){
                alert("Ошибка: комментарий должен содержать не менее 3 символов")
            } else{
                setToggleSetting(false)
            dispatch(clearComments());
            dispatch(fetchGetComments(postId))
            }
        }).catch((err) => {
            console.warn(err);
            alert("Ошибка при создании комментария")
        })

    }

    const handleDelete = () => {
        axios.delete(`/comments/${id}`).then(() => {
            setToggleSetting(false)
            dispatch(clearComments());
            dispatch(fetchGetComments(postId))
        }).catch(err => {
            console.warn(err);
        })
    }

    return (

        <div className="comment">

            <div className="commentUser">
                <Link to={`/profile/${nick}`}>
                    <div className="commentUser__info">
                        <Avatar className="commentUser__info-avatar" src={`${avatar}`}></Avatar>
                        <p className="commentUser__info-nick">{name}</p>
                    </div>
                </Link>

                <hr style={{ borderLeft: '2px solid black', height: 'auto' }}></hr>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p className="commentText">{text}</p>
                <p style={{ margin: 0, marginTop: 'auto', marginRight: 'auto', fontSize: '10px' }}>{formatedDate + '; ' + time}</p>
            </div>


            {(isSameUser || (userId == adminId)) && (
                <div style={{ marginLeft: 'auto' }}>
                    <IconButton onClick={() => setToggleSetting(true)}>
                        <EditOutlinedIcon />
                    </IconButton>
                </div>
            )}

            {toggleSetting && <ModalWindow open={toggleSetting} handleClose={() => setToggleSetting(false)}>
                <div className="sectionToggleSettings">
                    <Box width={'100%'}>
                        <Typography textAlign={'center'} variant="h4">редактировать комментарий</Typography>

                        <div className="sectionToggleSettings-inputs">
                            <TextField onChange={(event) => setCommentText(event.target.value)} size="medium" placeholder="редактировать комментарий" className="sectionToggleSettings-inputs__textfield" value={commentText}></TextField>

                            <div className="sectionToggleSettings-inputs__buttons">
                                <ColorButton onClick={handleDelete}>удалить</ColorButton>
                                <Button variant="contained" onClick={handleSubmit}>сохранить</Button>
                            </div>
                        </div>
                    </Box>


                </div>
            </ModalWindow>}
        </div>





    )
}