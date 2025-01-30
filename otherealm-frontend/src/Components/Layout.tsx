import { ThemeProvider } from "@mui/material"

import { layoutTheme } from "../assets/theme"
import { Outlet } from "react-router-dom"
import { useAppSelector } from "../store"
import React from "react"
import { fetchAuthMe } from "../store/auth"
import { useAppDispatch } from "../store/hooks"
import { Header } from "./Header"
import { Footer } from "./Footer"



export const Layout = () => {

    const dispatch = useAppDispatch();
    const selectIsAuth = useAppSelector((state) => state.authData.data);

    React.useEffect(() => {
        dispatch(fetchAuthMe())
    }, [])

    // console.log(selectIsAuth);

    return (
        <ThemeProvider theme={layoutTheme}>
            <Header />
            <div style={{padding: '2rem'}}>
                <Outlet />
            </div>

            <Footer />
        </ThemeProvider>
    )
}

