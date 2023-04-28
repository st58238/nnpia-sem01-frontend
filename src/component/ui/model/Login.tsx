import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {RootState} from "../../../app/store";
import React, {useEffect} from "react";
import {setLogin} from "../../../features/team/teamSlice";
import {Button} from "@mui/material";
import {redirect} from "react-router-dom";
import LoginForm from "../forms/LoginForm";
import Box from "@mui/material/Box";


const Login = () => {
    const isLoggedIn = useAppSelector((state: RootState) => state.login.value)
    const dispatch = useAppDispatch()

    useEffect(()=> {
        console.log(`State changed in ${Login.name}: ${isLoggedIn}`);
    }, [isLoggedIn])

    const clickHandle = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        redirect("/login")
    };

    return <Box sx={{ width: "25%", marginTop: "100px !important", borderRadius: "4px", border: "1px solid rgba(0, 0, 0, 0.25)", padding: "20px", backgroundColor: "white", margin: "0 auto", boxShadow: " 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)" }}>
        <LoginForm />
    </Box>
};

export default Login;