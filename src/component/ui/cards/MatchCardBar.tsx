import {Team} from "./TeamCard";
import {Box} from "@mui/material";
import React from "react";
import {User} from "./UserCardBar";

interface Props {
    match: Match
}

export interface Match {
    id: number,
    name: string,
    description: string | null,
    teamOne: Team,
    teamTwo: Team,
    teamOnePlayers: Set<User>,
    teamTwoPlayers: Set<User>
}

const MatchCardBar = ({match}: Props) => {
    return <Box className='customBox' gap={20}>
        <p style={{ fontWeight: 'bold', flexGrow: 5 }}>{match.name}</p>
        { match.description && <p style={{ width: '100px', flexGrow: 3 }}>{match.description}</p> }
        <p>{match.teamOne!.name}</p>
        <p>vs.</p>
        <p>{match.teamTwo!.name}</p>
    </Box>
}

export default MatchCardBar;
