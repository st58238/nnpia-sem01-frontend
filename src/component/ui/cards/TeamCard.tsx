import {User} from "./UserCardBar";

interface Props {
    team: Team
}

export interface Team {
    id: number,
    name: string,
    description: string | null,
    leader: User | null,
    mentor: User | null,
    members: Set<User>
}

const TeamCard = ({team}: Props) => {

    return <></>
}

export default TeamCard