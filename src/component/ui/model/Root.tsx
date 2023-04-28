import * as React from 'react';
import {useAppSelector} from "../../../app/hooks";
import {RootState} from "../../../app/store";
import {useNavigate} from "react-router-dom";

export default function Root() {
    const navigate = useNavigate()
    const isLoggedIn = useAppSelector((state: RootState) => state.login.value)

    if (!isLoggedIn)
        navigate("/login")


    return (
        <></>
    );
}