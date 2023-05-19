import * as React from 'react';
import {useAppSelector} from "../../../app/hooks";
import {RootState} from "../../../app/store";
import {redirect} from "react-router-dom";

export default function Root() {
    const isLoggedIn = useAppSelector((state: RootState) => state.login.authToken)

    if (isLoggedIn == null)
        redirect("/login")

    return (
        <></>
    );
}