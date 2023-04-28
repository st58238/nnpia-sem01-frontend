/*import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {RootState} from "../../app/store";
import React, {useEffect} from "react";
import {Button} from "@mui/material";
import {redirect} from "react-router-dom";
import "./Common.css"


const Header = () => {
    const isLoggedIn = useAppSelector((state: RootState) => state.login.value)
    const dispatch = useAppDispatch()

    useEffect(()=> {
        console.log(`State changed in ${Header.name}: ${isLoggedIn}`);
    }, [isLoggedIn])

    const clickHandle = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        redirect("/login")
    };

    return <div className="header">
        <Button variant="contained" onClick={clickHandle}>Přihlásit se</Button>
    </div>
};

export default Header;*/

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import {Button} from "@mui/material";
import {useAppSelector} from "../../app/hooks";
import {RootState} from "../../app/store";

export default function Header() {
    const isLoggedIn = useAppSelector((state: RootState) => state.login.value)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" component={Link} to={'/'} sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
                        Tournament Manager
                    </Typography>
                    <Button component={Link} to={'/login'} variant="contained" sx={{ borderColor: "white !important", backgroundColor: "var(--bgc-grey) !important", color: "black !important" }}>
                        { isLoggedIn ? "Login" : "Logout" }
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}