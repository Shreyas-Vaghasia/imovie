import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function AppPagination({ page, setPage, totalPage }) {

    const handleChange = (value) => {
        console.log(value)
        setPage(value)
        window.scrollTo(0, 0)
    }


    return (
        <Stack spacing={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#bee1e6', width: "100%", height: "50%" }} >
            <Pagination onChange={(e) => handleChange(e.target.textContent)} variant="outlined" size="large" showFirstButton showLastButton count={totalPage} color="secondary"
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "10px" }} />

        </Stack>
    )
}
