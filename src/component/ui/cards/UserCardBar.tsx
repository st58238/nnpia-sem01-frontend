import {Role} from "./RoleCard";
import TeamCard, {Team} from "./TeamCard";
import {Box, Button, Container} from "@mui/material";
import React, {useState} from "react";
import {backendUrl, sendData} from "../../../lib/Library";

interface Props {
    user: User
}

export interface User {
    id: number,
    username: string,
    password: string,
    registeredDate: Date,
    enabled: boolean,
    team: Team | null,
    roles: Set<Role>
}

const UserCardBar = ({user}: Props) => {
    const [enabled, setEnabled] = useState(user.enabled)

    const toggleEnabled = () => {
        const newValue = !enabled
        setEnabled(newValue)
        user.enabled = newValue
        sendData(`${backendUrl}/users/${user.id}`, 'PATCH', "application/json", user).then(async r => setEnabled((await r.json()).enabled))
    }

    return <Box className='customBox' gap={20}>
        <p style={{ fontWeight: 'bold', flexGrow: 5 }}>{user.username}</p>
        <p style={{ width: '100px', flexGrow: 3 }}>{enabled ? 'Yes' : 'No'}</p>
        <p style={{ flexGrow: 8 }}>{user.registeredDate.toString()}</p>
        <Container sx={{ flexGrow: 3 }}>
            <Button variant="contained" onClick={toggleEnabled} className='btnCustom' sx={{ height: '35px', width: '100px' }}>
                { enabled ? "Disable" : "Enable" }
            </Button>
        </Container>
        <TeamCard team={user.team!}/>
    </Box>
}

export default UserCardBar;
