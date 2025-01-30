import { Box, Button, Checkbox,  TextField, Typography } from "@mui/material"
import {  fetchRegister } from "../../store/auth"
import { useAppDispatch } from "../../store/hooks"
import { useForm } from "react-hook-form"
import React, { FC } from "react"
import { ModalWindow } from "../../utils/ModalWindow"
import { ProcessingData } from "../ProcessingData"





export interface AuthProps {
    onClick?: () => void
}

export const Registration: FC<AuthProps> = ({ onClick }) => {
    const dispatch = useAppDispatch();

    const [isChecked, setIsChecked] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        defaultValues: {
            name: '',
            nick: '',
            email: '',
            password: '',
        }, mode: 'onChange'
    });
    const onSubmit = async (values: any) => {
        const data = await dispatch(fetchRegister(values));
        if (!data.payload) {
            return alert('не удалось зарегистироваться')
        }
        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token);
        } else {
            alert('не удалось зарегистрироваться');
        }
    }
    console.log(isValid);
    return (
        <div className="authWindowContent">
            <Typography variant="h5">РЕГИСТРАЦИЯ</Typography>
            <div className="authWindowContent__forms">
                <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TextField className="authWindowContent__forms-input" variant="filled" label='укажите почту'
                        error={Boolean(errors.email?.message)}
                        helperText={errors.email?.message}
                        {...register('email', { required: 'укажите почту' })}></TextField>
                    <TextField className="authWindowContent__forms-input" variant="filled" label='укажите имя'
                        error={Boolean(errors.name?.message)}
                        helperText={errors.name?.message}
                        {...register('name', { required: 'укажите имя' })}></TextField>
                    <TextField className="authWindowContent__forms-input" variant="filled" label='укажите ник'
                        error={Boolean(errors.nick?.message)}
                        helperText={errors.nick?.message}
                        {...register('nick', {
                            required: 'укажите ник', pattern: {
                                value: /^[a-zA-Z0-9_]+$/,
                                message: 'ник должен содержать только английские буквы, цифры или _'
                            }
                        })}></TextField>
                    <TextField className="authWindowContent__forms-input" variant="filled" type="password" autoComplete="current-password" label='укажите пароль' error={Boolean(errors.password?.message)}
                        helperText={errors.password?.message}
                        {...register('password', { required: 'укажите пароль' })} />

                    <Box display={'flex'}>
                        <Checkbox checked={isChecked} onChange={(event) => setIsChecked(event.target.checked)} />
                        <p>Я даю согласие на <u><a onClick={() => setIsModalOpen(true)} style={{fontSize: '16px', margin: '16px 0px'}}> обработку персональных данных</a></u></p>
                    </Box>
                    <Button size="large" disabled={!isValid || !isChecked} type="submit" variant="contained">зарегистрироваться</Button>
                </form>
            </div>
            {isModalOpen && <ModalWindow open={isModalOpen} handleClose={() => setIsModalOpen(false)} children={<ProcessingData onClick={
                () => {
                    setIsChecked(true)
                    setIsModalOpen(false)
                }
            }/>}/>}
            <hr style={{ borderTop: '2px solid black', width: '80%' }}></hr>
            <p>уже есть аккаунт?</p>
            <Button size="small" onClick={onClick}>войти</Button>
        </div>
    )
}


