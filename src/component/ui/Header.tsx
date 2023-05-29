import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link, useNavigate} from 'react-router-dom';
import {Button} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {RootState} from "../../app/store";
import Navbar from "./Navbar";
import {setLogin} from "../../features/login/loginSlice";
import {useEffect} from "react";

export default function Header() {
    const isLoggedIn = useAppSelector((state: RootState) => state.login.authToken)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const logout = () => {
        dispatch(setLogin(null))
    }

    useEffect(() => {
        if (isLoggedIn == null)
            navigate("/login")
    },  [isLoggedIn])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className='header'>
                <Toolbar>
                    <Typography variant="h5" component={Link} to={'/'} sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
                        Tournament Manager
                    </Typography>
                    { isLoggedIn && <>
                            <Navbar/>
                            <Button onClick={logout} variant="contained" className='btnCustom' >
                                Logout
                            </Button>
                        </>
                    }

                    { !isLoggedIn &&
                        <Button component={Link} to={'/login'} variant="contained" className='btnCustom'>
                            Login
                        </Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}