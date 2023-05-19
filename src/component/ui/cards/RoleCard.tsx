import {User} from "./UserCardBar";

export interface Role {
    id: number,
    name: string,
    description: string | null,
    assignees: Set<User>
}

const RoleCard = (props: Role) => {

}

export default RoleCard