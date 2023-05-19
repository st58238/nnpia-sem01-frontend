import {useEffect} from "react";
import {useAppSelector} from "../app/hooks";
import {RootState} from "../app/store";
import {useNavigate} from "react-router-dom";

export const backendUrl = import.meta.env.VITE_BACKEND_URL

export const bearer = (): string => {
    return 'Bearer ' + localStorage.getItem("authToken")
}

export const preFlight = () => {
    const isLoggedIn = useAppSelector((state: RootState) => state.login.authToken)
    const isExpired = new Date(useAppSelector((state: RootState) => state.login.expiration)!) < new Date()
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn == null || isExpired) {
            navigate("/logout")
        }
    }, [])
}

export const fetchData = async (url: string, method: string, contentType: string, requestBody: object | null = null) => {
    let options: any = {
        method: method,
        mode: 'cors',
        headers: {
            'Authorization': bearer(),
            'Content-Type': contentType,
        }
    }

    if (requestBody != null) {
        options.body = JSON.stringify(requestBody)
    }

    return fetch(url, options)
}

export const sendData = async (url: string, method: string, contentType: string = 'application/json', requestBody: object) => {
    let options: any = {
        method: method,
        mode: 'cors',
        headers: {
            'Authorization': bearer(),
            'Content-Type': contentType,
        },
        body: JSON.stringify(requestBody)
    }

    return fetch(url, options)
}
