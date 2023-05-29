import {Match} from "./MatchCardBar";
import {Team} from "./TeamCard";
import {Box} from "@mui/material";
import Tournament from "../model/Tournament";
import React from "react";
import {formatDate} from "../../../lib/Library";

interface Props {
    tournament: Tournament
}

export interface Tournament {
    id: number,
    name: string,
    description: string,
    startDateTime: Date,
    endDateTime: Date,
    matches: Set<Match>,
    participants: Set<Team>
}

const TournamentCardBar = ({tournament}: Props) => {

    return <Box className='customBox' gap={5} sx={{ display: 'flex' }}>
        <p style={{ flexGrow: 2, width: "100%", fontWeight: 'bold' }}>{tournament.name}</p>
        <p style={{ flexGrow: 3, width: "100%" }}>{tournament.description}</p>
        <p style={{ flexGrow: 3, width: "100%" }}>{formatDate(tournament.startDateTime)}</p>
        <p style={{ flexGrow: 3, width: "100%" }}>{formatDate(tournament.endDateTime)}</p>
        <p style={{ flexGrow: 3, width: "100%" }}>{tournament.matches.length}</p>
        <p style={{ flexGrow: 3, width: "100%" }}>{tournament.participants.length}</p>
    </Box>
}
export default TournamentCardBar