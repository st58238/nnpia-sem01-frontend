import {useAppSelector} from "../../../app/hooks";
import {RootState} from "../../../app/store";
import React from "react";
import {Navigate} from "react-router-dom";
import LoginForm from "../forms/LoginForm";
import {Card} from "@mui/material";
import Typography from "@mui/material/Typography";


const Login = () => {
    const isLoggedIn = useAppSelector((state: RootState) => state.login)

    return <Card sx={{ width: '25%', margin: 'auto auto', marginTop: '100px !important', padding: '20px' }}>
        { isLoggedIn.authToken != undefined ? <Navigate to='/user'></Navigate> : <></> }
        <Typography variant="h5" sx={{ flexGrow: 1, paddingBottom: '20px' }}>
            Login
        </Typography>
        <LoginForm />
    </Card>
};

export default Login;

/*
<Box className='loginForm' sx={{ width: "25%", marginTop: "100px !important", borderRadius: "4px", border: "1px solid rgba(0, 0, 0, 0.25)", padding: "20px", margin: "0 auto", boxShadow: " 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)" }}>
        { isLoggedIn.authToken != undefined ? <Navigate to='/user'></Navigate> : <></> }
        <LoginForm />
    </Box>
 */