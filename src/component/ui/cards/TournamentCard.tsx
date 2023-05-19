import {Match} from "./MatchCardBar";
import {Team} from "./TeamCard";
import {Card} from "@mui/material";
import Tournament from "../model/Tournament";

export interface Tournament {
    id: number,
    name: string,
    description: string,
    startDateTime: Date,
    endDateTime: Date,
    matches: Set<Match>,
    participants: Set<Team>
}
const TournamentCard = (props: Tournament) => {

    return <Card variant='outlined'>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <p>{props.startDateTime.toLocaleTimeString()}</p>
        <p>{props.endDateTime.toLocaleTimeString()}</p>
        <p>Number of matches: {props.matches.size}</p>
        <p>Participating teams: {props.participants.size}</p>
    </Card>
}

export default TournamentCard