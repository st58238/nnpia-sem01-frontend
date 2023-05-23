import {Role} from "./RoleCard";
import {Team} from "./TeamCard";
import React from "react";
import {GridRowsProp} from "@mui/x-data-grid";

export interface User {
    id: number,
    username: string,
    password: string,
    registeredDate: Date,
    enabled: boolean,
    team: Team | null,
    roles: Set<Role>
}

const UserGridElement = (user: User): GridRowsProp => {
    return {
        id: user.id,
        col1: user.username,
        col2: user.enabled,
        col3: user.registeredDate,
        col4: user
    }
}

export default UserGridElement;
