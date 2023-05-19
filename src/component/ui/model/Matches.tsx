import React, {useEffect, useState} from "react";
import {Button, Container} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {backendUrl, fetchData} from "../../../lib/Library";
import MatchCardBar, {Match} from "../cards/MatchCardBar";


const Matches = () => {
    const navigate = useNavigate()
    const [page, setPage] = useState<number>(0)
    const [data, setData] = useState<Array<Match>>()

    const fetchMatches = async (page: number) => {
        return await fetchData(`${backendUrl}/matches/page/${page.toString()}?size=${25}`, 'GET', 'text/plain')
    }

    const nextPage = () => {
        setPage(Math.min(Number.MAX_VALUE, page + 1))
    };

    const prevPage = () => {
        setPage(Math.max(0, page - 1))
    };

    useEffect(() => {
        navigate("/matches/" + page)
        fetchMatches(page).then(async v => setData(await v.json()))
    }, [page])

    return <>
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
};

export default Matches