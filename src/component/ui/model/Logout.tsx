import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {RootState} from "../../../app/store";
import React from "react";
import {Navigate} from "react-router-dom";
import {setLogin} from "../../../features/login/loginSlice";


const Logout = () => {
    const dispatch = useAppDispatch()

    dispatch(setLogin(null))

    return <>
        <Navigate to='/login'/>
    </>
};

export default Logout;