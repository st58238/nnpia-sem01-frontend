import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {backendUrl, fetchData} from "../../../lib/Library";
import UserCardBar, {User} from "../cards/UserGridElement";
import {GridColDef} from "@mui/x-data-grid";
import Table from "../grid/Table";
import {Button, Container} from "@mui/material";

const Direction = {
    ASC: "ASC",
    DESC: "DESC"
}

const Users = () => {
    const navigate = useNavigate()
    const [page, setPage] = useState<number>(0)
    const [data, setData] = useState<Array<User>>()
    const [sortValue, setSortValue] = useState<string | null>(null)
    const [sortDirection, setSortDirection] = useState<string | null>(null)
    const [rowCount, setRowCount] = useState<number>(0)

    useEffect(() => {
        fetchData(`${backendUrl}/users/count`, 'GET', 'text/plain')
            .then(p => { // TODO pagination model
                p.text().then(t => setRowCount(+t)) // +string makes casts to number
            })
    }, [])

    const toggleEnabled = (user: User, setFunction:  React.Dispatch<React.SetStateAction<boolean>>) => {
        user.enabled = !user.enabled
        setFunction(!user.enabled)
        fetchData(`${backendUrl}/users/enable/${user.id}`, 'PATCH', "application/json")
    }

    const fetchUsers = async (page: number, sort: string | null = null, direction: string | null = null) => {
        if (sort == null || direction == null)
            return await fetchData(`${backendUrl}/users/page/${page.toString()}?size=${25}`, 'GET', 'text/plain')
        return await fetchData(`${backendUrl}/users/page/${page.toString()}?size=${25}&sort=${sort}&direction=${direction}`, 'GET', 'text/plain')
    }

    const sort = (column: string) => {
        if (column == sortValue) {
            setSortValue(column)
            if (sortDirection == "ASC")
                setSortDirection(Direction.DESC)
            else
                setSortDirection(Direction.ASC)

        } else {
            setSortValue(column)
            setSortDirection(Direction.ASC)
        }
    }

    useEffect(() => {
        navigate("/users/" + page)
        fetchUsers(page, sortValue, sortDirection).then(async v => setData(await v.json()))
    }, [page, sortDirection])

    const cols: GridColDef[] = [
        { field: 'col1', headerName: 'Username', flex: 6 },
        { field: 'col2', headerName: 'Active', flex: 4, valueGetter: params => params.row.col4.enabled ? "Yes" : "No" },
        { field: 'col3', headerName: 'Register date', flex: 6 },
        { field: 'col4', headerName: 'Toggle enabled', flex: 3, width: 150, sortable: false, editable: false, groupable: false, filterable: false,
            renderCell: (params) => {
            const user = params.value as User
                const [active, setActive] = useState(user.enabled)
                return <Button variant="contained" onClick={ e => {toggleEnabled(user, setActive)}} className='btnCustom'
                        sx={{height: '35px', width: '100px'}}>
                    { user.enabled ? "Disable" : "Enable" }
                </Button>
            }
        }
    ]

    const rows = data?.map(v => UserCardBar(v))

    if (rows == null)
        return <></>
    return <Container sx={{ padding: '20px' }}>
        <Table rows={rows} cols={cols} rowCount={rowCount} defaultSortField='col3' defaultSortDirection='desc'/>
    </Container>
};

export default Users