import { Button, TextField, Typography } from "@mui/material"

import { fetchAuth, fetchRegister } from "../../store/auth"
import { useAppDispatch } from "../../store/hooks"
import { useForm } from "react-hook-form"
import { Navigate } from "react-router-dom"
import { useAppSelector } from "../../store"
import React, { FC } from "react"


export const Authorize = () => {

    const [authMode, setAuthMode] = React.useState('login');
    console.log(authMode)
    const isAuth = useAppSelector((state) => state.authData.data);
    console.log(isAuth);


    if (isAuth) {
        return <Navigate to={'/'} />
    }

    return (
        <div className="authWrapper">
            <div className="authWindow">


                {authMode == 'register' && <Registration onClick={() => setAuthMode('login')} />}
                {authMode == 'login' && <Login onClick={() => setAuthMode('register')} />}



            </div>
        </div>
    )
}

interface AuthProps {
    onClick?: () => void
}

export const Registration: FC<AuthProps> = ({ onClick }) => {
    const dispatch = useAppDispatch();
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
                    <Button size="large" disabled={!isValid} type="submit" variant="contained">зарегистрироваться</Button>
                </form>
            </div>

            <hr style={{ borderTop: '2px solid black', width: '80%' }}></hr>
            <p>уже есть аккаунт?</p>
            <Button size="small" onClick={onClick}>войти</Button>
        </div>
    )
}


export const Login: FC<AuthProps> = ({ onClick }) => {

    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        defaultValues: {
            email: '',
            password: '',
        }, mode: 'onChange'
    });

    const onSubmit = async (values: any) => {
        const data = await dispatch(fetchAuth(values));
        if (!data.payload) {
            return alert('не удалось зарегистироваться')
        }
        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token);
        } else {
            alert('не удалось зарегистрироваться');
        }
    }

    return (
        <div className="authWindowContent">
            <Typography variant="h5">ВХОД</Typography>
            <div className="authWindowContent__forms">
                <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TextField className="authWindowContent__forms-input" variant="filled" label='укажите почту'
                        error={Boolean(errors.email?.message)}
                        helperText={errors.email?.message}
                        {...register('email', { required: 'укажите почту' })}></TextField>
                    <TextField className="authWindowContent__forms-input" variant="filled" type="password" autoComplete="current-password" label='укажите пароль' error={Boolean(errors.password?.message)}
                        helperText={errors.password?.message}
                        {...register('password', { required: 'укажите пароль' })} />
                    <Button size="large" disabled={!isValid} type="submit" variant="contained">войти</Button>
                </form>

            </div>
            <hr style={{ borderTop: '2px solid black', width: '80%' }}></hr>
            <p>нет аккаунта?</p>
            <Button size="small" onClick={onClick}>создать аккаунт</Button>
        </div>
    )
}