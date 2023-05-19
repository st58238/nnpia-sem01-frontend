import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import {Button} from "@mui/material";
import {useAppSelector} from "../../app/hooks";
import {RootState} from "../../app/store";
import Navbar from "./Navbar";

export default function Header() {
    const isLoggedIn = useAppSelector((state: RootState) => state.login.authToken)
    const loggedIn = isLoggedIn != null

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className='header'>
                <Toolbar>
                    <Typography variant="h5" component={Link} to={'/'} sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
                        Tournament Manager
                    </Typography>
                    { loggedIn && <>
                            <Navbar/>
                            <Button component={Link} to={'/logout'} variant="contained" className='btnCustom' >
                                Logout
                            </Button>
                        </>
                    }

                    { !loggedIn &&
                        <Button component={Link} to={'/login'} variant="contained" className='btnCustom'>
                            Login
                        </Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}