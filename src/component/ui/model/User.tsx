import React, {useEffect, useState} from "react";
import {Avatar, Card} from "@mui/material";
import {backendUrl, fetchData, initials, formatDate} from "../../../lib/Library";
import {User} from "../cards/UserGridElement";


const Login = () => {
    const [user, setUser] = useState<User>()
    const [_, setUserMatches] = useState<number>()
    const [userTournaments, setUserTournaments] = useState<number>()


    const fetchUserByToken = async (token: string) => {
        return await fetchData(`${backendUrl}/users/userByToken?token=${token}`, "GET", "text/plain")
    }

    const fetchUsersMatches = async (id: number) => {
        return await fetchData(`${backendUrl}/matches/byUser?userId=${id}`, "GET", "text/plain")
    }

    const fetchUsersTournaments = async (id: number) => {
        return await fetchData(`${backendUrl}/tournaments/byUser?userId=${id}`, "GET", "text/plain")
    }

    useEffect(() => {
        fetchUserByToken(localStorage.getItem("authToken")!).then(r => r.json().then(setUser))
    }, [])

    useEffect(() => {
        if (user != undefined) {
            fetchUsersMatches(user?.id).then(r => r.json().then(v => setUserMatches(v.length)))
            fetchUsersTournaments(user?.id).then(r => r.json().then(v => setUserTournaments(v.length)))
        }
    }, [user])

    return <>
        { user &&
            <Card sx={{ width: '50%', margin: '50px auto'}}>
                <Avatar sx={{backgroundColor: '#ff5722', color: 'white', height: '100px', width: '100px', fontSize: '55px', margin: '30px auto'}}>{initials(user.username)}</Avatar>
                <h1>{user.username}</h1>
                <p>{user.enabled ? "Aktivní" : "Neaktivní"}</p>
                <p>Registrovaný: {formatDate(user.registeredDate)}</p>
                { user.team != null ? <p>{"Tým: " + user.team.name}</p> : <p style={{ paddingTop: '24px' }}></p> }
                <hr style={{ width: '75%' }}/>
                <p>Moje turnaje: {userTournaments}</p>
                <p>Moje zápasy: {userTournaments}</p>
            </Card>
        }
    </>
};

export default Login