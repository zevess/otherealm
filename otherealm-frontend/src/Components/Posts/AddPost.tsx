import { Box, Button, IconButton, TextField } from "@mui/material"
import React from "react";
import { SimpleMdeReact } from 'react-simplemde-editor'
import { Options } from 'easymde';
import "easymde/dist/easymde.min.css";
import { ColorButton, ColorButtonBlue } from "../../utils/CustomButton";
import axios from '../../axios'
import { useNavigate, useParams } from "react-router-dom";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useAppSelector } from "../../store/hooks";


export const AddPost = () => {

    const navigate = useNavigate();
    const [title, setTitle] = React.useState('');
    const [text, setText] = React.useState('');
    const [imageUrl, setImageUrl] = React.useState('');

    const inputFileRef = React.useRef<any>(null);

    const authData = useAppSelector((state) => state.authData.data)
    const adminId = useAppSelector((state) => state.state.adminId)

    const authId = window.localStorage.getItem('authId');
    const currentUserId = window.localStorage.getItem('currentUser')

    const isSameUser = (authId == currentUserId)

    const { postId } = useParams();
    const isEditing = Boolean(postId)
    console.log(isEditing)

    // const currentUrl = window.location.href;
    // const parts = currentUrl.split('/');


    React.useEffect(() => {
        if (isEditing && (postId !== undefined)) {
            axios.get(`/post/${postId}`).then((res): any => {
                window.localStorage.setItem('currentUser', res.data.user._id)
                setTitle(res.data.title);
                setText(res.data.text);
                setImageUrl(res.data.imageUrl);
            })
        }

    }, [postId])


    if (isEditing && ((isSameUser == false) && (authId !== adminId))) {
        navigate(`/post/${postId}`);
    }

    if (authData == null){
        navigate(`/post/${postId}`);
    }
    
    const onChangeText = React.useCallback((value: string) => {
        setText(value);
    }, []);


    const autofocusNoSpellcheckerOptions = React.useMemo<Options>(() => {
        return {
            spellChecker: false,
            maxHeight: '400px',
            autofocus: true,
            placeholder: 'Введите текст...',
            status: false,
            autosave: {
                enabled: true,
                delay: 1000,
                uniqueId: 'myUniqueID'
            },
            toolbar: [
                "bold", {
                    name: "underline",
                    action: function (editor: any) {
                        var cm = editor.codemirror;
                        var selectedText = cm.getSelection();
                        cm.replaceSelection("<u>" + selectedText + "</u>");
                    },
                    className: "fa fa-underline",
                    title: "Underline"
                }, "horizontal-rule", "heading", "|",
                "quote", "unordered-list", "ordered-list", "|",
                "link", "image", "|",
                "preview"
            ]
        };
    }, []);

    const handleChangePreview = async (event: any) => {
        const formData = new FormData();
        const file = event.target.files[0];
        formData.append('image', file);
        console.log(formData);
        try {
            const { data } = await axios.post(`/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            setImageUrl(data.data.url)
        } catch (err) {
            console.log(err)
        }
    }

    const onSubmit = async () => {
        try {
            const fields = {
                title, text, imageUrl,
            }
            const { data } = isEditing ? await axios.patch(`/post/${postId}`, fields) : await axios.post('/posts', fields);
            const _id = isEditing ? postId : data._id;
            navigate(`/post/${_id}`);

        } catch (err) {
            console.warn(err);
            alert("ошибка при создании поста")
        }
    }

    const onClickRemove = async () => {
        try {
            if (window.confirm('вы уверены что ходите удалить пост?')) {
                await axios.delete(`/post/${postId}`)
                // navigate(`/profile/${userNick}`);
                navigate(-1);
            }

        } catch (err) {
            console.warn(err);
            alert("ошибка при удалении поста")
        }
    }

    return (
        <div className="addPostWrapper">
            <div className="addPost">
                <div className="addPostInputs">
                    <input accept="image/*" ref={inputFileRef} type="file" onChange={handleChangePreview} hidden />
                    <Button onClick={() => inputFileRef.current.click()} sx={{ padding: '15px', margin: '8px' }}>загрузить превью</Button>
                    {imageUrl &&
                        <>
                            <Box component={'img'} maxWidth={'100%'} src={`${imageUrl}`}>
                            </Box>
                            <IconButton onClick={() => setImageUrl('')} >
                                <DeleteOutlineOutlinedIcon sx={{ color: 'red' }} />
                            </IconButton>
                        </>


                    }
                    <TextField sx={{ margin: '8px' }} value={title} onChange={(event) => setTitle(event.target.value)} fullWidth placeholder="введите заголовок" />
                </div>
                <SimpleMdeReact
                    options={autofocusNoSpellcheckerOptions}
                    value={text}
                    onChange={onChangeText}
                />
                <div className="addPost__buttons">

                    {isEditing && <ColorButton onClick={() => onClickRemove()} size="large">удалить</ColorButton>}

                    <ColorButtonBlue onClick={() => onSubmit()} disabled={!Boolean(title.length >= 5)} size="large">
                        {isEditing ? 'сохранить' : 'отправить'}
                    </ColorButtonBlue>
                </div>
            </div>
        </div>

    )
}
