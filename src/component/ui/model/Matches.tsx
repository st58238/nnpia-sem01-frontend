import React, {useEffect, useState} from "react";
import {Box, Button, Container} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {backendUrl, Direction, fetchData} from "../../../lib/Library";
import MatchCardBar, {Match} from "../cards/MatchCardBar";

const Matches = () => {
    const navigate = useNavigate()
    const [page, setPage] = useState<number>(0)
    const [data, setData] = useState<Array<Match>>()
    const [sortValue, setSortValue] = useState<string | null>(null)
    const [sortDirection, setSortDirection] = useState<string | null>(null)

    const fetchMatches = async (page: number, sort: string | null = null, direction: string | null = null) => {
        if (sort == null || direction == null)
            return await fetchData(`${backendUrl}/matches/page/${page.toString()}?size=${25}`, 'GET', 'text/plain')
        return await fetchData(`${backendUrl}/matches/page/${page.toString()}?size=${25}&sort=${sort}&direction=${direction}`, 'GET', 'text/plain')
    }

    useEffect(() => {
        navigate("/matches/" + page)
        fetchMatches(page, sortValue, sortDirection).then(async v => setData(await v.json()))
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
            <p style={{ fontWeight: 'bold', flexGrow: 3, width: '100%', cursor: 'pointer' }} onClick={_ => sort("teamOne")}>Team one</p>
            <p style={{ flexGrow: 3, width: '100%' }}></p>
            <p style={{ fontWeight: 'bold', flexGrow: 3, width: '100%', cursor: 'pointer' }} onClick={_ => sort("teamTwo")}>Team two</p>
        </Box>
        <Container className='matches' sx={{ padding: 2 }}>
            {
                data?.map(value => <MatchCardBar key={value.name} match={value}/>)
            }
        </Container>
        <Container className='pageButtons' sx={{ bottom: '5px' }}>
            <Button variant="contained" onClick={prevPage} className='btnCustom' sx={{width: '20px'}}>&lt;</Button>
            <Button variant="contained" onClick={nextPage} className='btnCustom' sx={{width: '20px'}}>&gt;</Button>
        </Container>
    </>
}

export default Matches
