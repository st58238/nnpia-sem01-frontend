import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import {Button} from "@mui/material";
import {useAppSelector} from "../../app/hooks";
import {RootState} from "../../app/store";

export default function Navbar() {
    const isLoggedIn = useAppSelector((state: RootState) => state.login.authToken)

    if (isLoggedIn == null) {
        return <></>
    }

    return <Box sx={{flexGrow: '5', display: 'flex', justifyContent: 'end', paddingRight: '20px'}}>
        <Button component={Link} to={'/tournaments'} variant="contained" className='btnCustom' >
            Tournaments
        </Button>
        <Button component={Link} to={'/matches'} variant="contained" className='btnCustom' >
            Matches
        </Button>
        <Button component={Link} to={'/users'} variant="contained" className='btnCustom' >
            Users
        </Button>
        <Button component={Link} to={'/roles'} variant="contained" className='btnCustom' >
            Roles
        </Button>
        <Button component={Link} to={'/user'} variant="contained" className='btnCustom' >
            Profile
        </Button>
    </Box>
}