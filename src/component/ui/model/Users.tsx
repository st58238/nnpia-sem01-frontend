import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {RootState} from "../../../app/store";
import React, {useEffect} from "react";
import {setLogin} from "../../../features/team/teamSlice";
import {Button} from "@mui/material";
import {redirect} from "react-router-dom";


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

    return <div className="header">
        <Button variant="contained" onClick={clickHandle}>Přihlásit se</Button>
    </div>
};

export default Login;