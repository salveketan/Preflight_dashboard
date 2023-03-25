import React from 'react'
import Dashboard2 from "./Dashboard2"
import Dashbord1 from './Dashboard1'
import { Box, Stack } from '@mui/material'
import Navbar from './Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <Box><Dashbord1 /></Box>
                <Box> <Dashboard2 /></Box>
            </Stack>
        </div>
    )
}

export default Home
