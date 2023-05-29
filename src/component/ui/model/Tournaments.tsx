import React, {useEffect, useState} from "react";
import {Box, Button, Container} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {backendUrl, Direction, fetchData} from "../../../lib/Library";
import TournamentCardBar, {Tournament} from "../cards/TournamentCardBar";

const Tournaments = () => {
    const navigate = useNavigate()
    const [page, setPage] = useState<number>(0)
    const [data, setData] = useState<Array<Tournament>>()
    const [sortValue, setSortValue] = useState<string | null>(null)
    const [sortDirection, setSortDirection] = useState<string | null>(null)

    const fetchTournaments = async (page: number, sort: string | null = null, direction: string | null = null) => {
        if (sort == null || direction == null)
            return await fetchData(`${backendUrl}/tournaments/page/${page.toString()}?size=${25}`, 'GET', 'text/plain')
        return await fetchData(`${backendUrl}/tournaments/page/${page.toString()}?size=${25}&sort=${sort}&direction=${direction}`, 'GET', 'text/plain')
    }

    useEffect(() => {
        navigate("/tournaments/" + page)
        fetchTournaments(page, sortValue, sortDirection).then(async v => setData(await v.json()))
    }, [page, sortValue, sortDirection])

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
            else {
                setSortDirection(Direction.ASC)

            }
        } else {
            setSortValue(column)
            setSortDirection(Direction.ASC)
        }

    }

    return <>
        <Box className='listHeading' sx={{ display: 'flex', padding: '0 25px' }}>
            <p style={{ fontWeight: 'bold', flexGrow: 2, width: '100%', cursor: 'pointer' }} onClick={_ => sort("name")}>Name</p>
            <p style={{ fontWeight: 'bold', flexGrow: 3, width: '100%', cursor: 'pointer' }} onClick={_ => sort("description")}>Description</p>
            <p style={{ fontWeight: 'bold', flexGrow: 3, width: '100%', cursor: 'pointer' }} onClick={_ => sort("end_date_time")}>Start</p>
            <p style={{ fontWeight: 'bold', flexGrow: 3, width: '100%', cursor: 'pointer' }} onClick={_ => sort("start_date_time")}>End</p>
            <p style={{ fontWeight: 'bold', flexGrow: 3, width: '100%', cursor: 'pointer' }}># of matches</p>
            <p style={{ fontWeight: 'bold', flexGrow: 3, width: '100%', cursor: 'pointer' }}># of participating teams</p>
        </Box>
        <Container className='tournaments' sx={{ padding: 2 }}>
            {
                data?.map(value => <TournamentCardBar key={value.id} tournament={value}/>)
            }
        </Container>
        <Container className='pageButtons' sx={{ bottom: '5px' }}>
            <Button variant="contained" onClick={prevPage} className='btnCustom' sx={{width: '20px'}}>&lt;</Button>
            <Button variant="contained" onClick={nextPage} className='btnCustom' sx={{width: '20px'}}>&gt;</Button>
        </Container>
    </>
}

export default Tournaments