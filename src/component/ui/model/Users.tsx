import React, {useEffect, useState} from "react";
import {Box, Button, Container} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {backendUrl, fetchData} from "../../../lib/Library";
import UserCardBar, {User} from "../cards/UserCardBar";

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

    const fetchUsers = async (page: number, sort: string | null = null, direction: string | null = null) => {
        if (sort == null || direction == null)
            return await fetchData(`${backendUrl}/users/page/${page.toString()}?size=${25}`, 'GET', 'text/plain')
        return await fetchData(`${backendUrl}/users/page/${page.toString()}?size=${25}&sort=${sort}&direction=${direction}`, 'GET', 'text/plain')
    }

    const nextPage = () => {
        setPage(Math.min(Number.MAX_VALUE, page + 1))
    }

    const prevPage = () => {
        setPage(Math.max(0, page - 1))
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

    return <>
        <Box className='listHeading' sx={{ display: 'flex', justifyContent: 'left' }}>
            <p style={{ fontWeight: 'bold', flexGrow: 2, cursor: 'pointer' }} onClick={_ => sort("username")}>Username</p>
            <p style={{ fontWeight: 'bold', width: '100px', flexGrow: 3, cursor: 'pointer' }} onClick={_ => sort("enabled")}>Active</p>
            <p style={{ fontWeight: 'bold', flexGrow: 3, cursor: 'pointer' }} onClick={_ => sort("registeredDate")}>Registered on</p>
            <p style={{ flexGrow: 11 }}> </p>
        </Box>
        <Container className='users' sx={{ padding: 2 }}>
            {
                data?.map(value => <UserCardBar key={value.username} user={value}/>)
            }
        </Container>
        <Container className='pageButtons' sx={{ bottom: '5px' }}>
            <Button variant="contained" onClick={prevPage} className='btnCustom' sx={{width: '20px'}}>&lt;</Button>
            <Button variant="contained" onClick={nextPage} className='btnCustom' sx={{width: '20px'}}>&gt;</Button>
        </Container>
    </>
};

export default Users