import React, {useEffect, useState} from "react";
import {Button, Container} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {backendUrl, fetchData} from "../../../lib/Library";


const Tournaments = () => {
    const navigate = useNavigate()
    const [page, setPage] = useState<number>(0)

    const fetchTournaments = async (page: number) => {
        return await fetchData(`${backendUrl}/tournaments/page/${page.toString()}?size=${25}`, 'GET', 'text/plain')
    }

    const nextPage = () => {
        setPage(Math.min(Number.MAX_VALUE, page + 1))
    };

    const prevPage = () => {
        setPage(Math.max(0, page - 1))
    };

    useEffect(() => {
        navigate("/tournaments/" + page)
        console.table(fetchTournaments(page)) // TODO: render
    }, [page])

    return <>
        <Container className='tournaments'>
        </Container>
        <Container className='pageButtons'>
            <Button variant="contained" onClick={prevPage} className='btnCustom' sx={{width: '20px'}}>&lt;</Button>
            <Button variant="contained" onClick={nextPage} className='btnCustom' sx={{width: '20px'}}>&gt;</Button>
        </Container>
    </>
};

export default Tournaments;