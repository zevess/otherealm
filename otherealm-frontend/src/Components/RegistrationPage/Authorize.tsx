import React from "react";
import { useAppSelector } from "../../store";
import { Navigate } from "react-router-dom";
import { Registration } from "./Registration";
import { Login } from "./Login";

export const Authorize = () => {

    const [authMode, setAuthMode] = React.useState('login');
   
    const isAuth = useAppSelector((state) => state.authData.data);
   

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