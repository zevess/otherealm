import { FC } from "react";
import { AuthProps } from "./Registration";
import { useAppDispatch } from "../../store/hooks";
import { useForm } from "react-hook-form";
import { fetchAuth } from "../../store/auth";
import { Button, TextField, Typography } from "@mui/material";

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