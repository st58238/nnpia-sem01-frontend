import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {RootState} from "../../../app/store";
import React, {useEffect} from "react";


const Login = () => {
    const isLoggedIn = useAppSelector((state: RootState) => state.login.authToken)

    useEffect(()=> {
        console.log(`State changed in ${Login.name}: ${isLoggedIn}`);
    }, [isLoggedIn])

    return <>
    </>
};

export default Login