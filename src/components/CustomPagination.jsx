import React, {useEffect} from "react";
import {useState} from 'react';
import {Pagination} from '@mantine/core';
import {useNavigate, useParams} from "react-router";

export const CustomPagination = ({total}) => {
    const [activePage, setPage] = useState(1);
    const navigate = useNavigate();
    const siblings = 2;
    const {page} = useParams();

    useEffect(() => {
        setPage(Number(page))
    }, [page])

    const handleChange = (event) => {
        navigate(`/catalog/${event}`);
    }

    return (
        <div>
            <Pagination value={activePage}
                        onChange={e => {handleChange(e)}}
                        total={total}
                        siblings={siblings}
                        color="gray"
                        radius="lg"/>
        </div>
    )
}
