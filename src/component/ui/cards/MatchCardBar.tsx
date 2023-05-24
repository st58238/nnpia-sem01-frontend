import {Team} from "./TeamCard";
import {Box} from "@mui/material";
import React from "react";
import {User} from "./UserGridElement";

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
    return <Box className='customBox' gap={5} sx={{ display: 'flex' }}>
        <p style={{ flexGrow: 2, width: "100%", fontWeight: 'bold' }}>{match.name}</p>
        <p style={{ flexGrow: 3, width: "100%",  }}>{ match.description && match.description }</p>
        <p style={{ flexGrow: 3, width: "100%",  }}>{match.teamOne!.name}</p>
        <p style={{ flexGrow: 3, width: "100%",  }}>vs.</p>
        <p style={{ flexGrow: 3, width: "100%",  }}>{match.teamTwo!.name}</p>
    </Box>
}

export default MatchCardBar;
