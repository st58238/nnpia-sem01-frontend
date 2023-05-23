import React from "react";
import {Button} from "@mui/material";
import {redirect} from "react-router-dom";


const Login = () => {

    const clickHandle = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        redirect("/login")
    };

    return <div className="header">
        <Button variant="contained" onClick={clickHandle}>Přihlásit se</Button>
    </div>
};

export default Login;