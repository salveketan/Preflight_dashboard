import { Box, Typography } from '@mui/material'
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
import React from 'react'
import { DoughnutChart } from './DounutChart';
import { PieChart } from './PieChart';
import Navbar from './Navbar';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));


const Dashbord3 = () => {


    return (
        <Box>
            {/* <Navbar /> */}
            <Box width={'1000px'} height={"900px"} m={"auto"} >
                <Box width={'700px'} backgroundColor={'black'} height={"40px"} m={"auto"} color={"white"} borderRadius={"10px"} mt={2}>
                    <Typography variant="h4" gutterBottom textAlign={"center"}>
                        TODAY’S OPS - 22 NOV 2022 13:48 MST
                    </Typography>
                </Box>

                <Box width={'850px'} m={"auto"} color={"black"} display={"flex"} justifyContent={"space-between"} mt={5}>
                    <Box width={"25%"}>
                        <Box><DoughnutChart /></Box>
                        <Box width={"25%"} height={"43px"} backgroundColor={'grey'} mb={1} m={"auto"} mt={1} borderRadius={3}>
                            <Typography variant="h4" gutterBottom textAlign={"center"}>
                                FC
                            </Typography>
                        </Box>
                    </Box>
                    <Box width={"25%"}>
                        <Box><PieChart /></Box>
                        <Box width={"70%"} height={"43px"} backgroundColor={'grey'} mb={1} m={"auto"} mt={1} borderRadius={3}>
                            <Typography variant="h4" gutterBottom textAlign={"center"}>
                                FLIGHTS
                            </Typography>
                        </Box>
                    </Box>
                    <Box width={"25%"}>
                        <Box><DoughnutChart /></Box>
                        <Box width={"25%"} height={"43px"} backgroundColor={'grey'} mb={1} m={"auto"} mt={1} borderRadius={3}>
                            <Typography variant="h4" gutterBottom textAlign={"center"}>
                                CA
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box width={'580px'} m={"auto"} mt={5}>
                    <Box display={"flex"} justifyContent={"space-between"} mb={1}>
                        <Box width={"400px"} height={"43px"} borderRadius={2}>
                            <Typography variant="h4" gutterBottom textAlign={"center"}>

                            </Typography>
                        </Box>
                        <Box width={"70px"} height={"43px"} backgroundColor={'grey'} borderRadius={2}>
                            <Typography variant="h4" gutterBottom textAlign={"center"} >
                                FC
                            </Typography>
                        </Box>
                        <Box width={"70px"} height={"43px"} backgroundColor={'grey'} borderRadius={2}>
                            <Typography variant="h4" gutterBottom textAlign={"center"}>
                                CA
                            </Typography>
                        </Box>
                    </Box>
                    <Box display={"flex"} justifyContent={"space-between"} mb={1}>
                        <Box width={"400px"} height={"43px"} backgroundColor={'grey'} borderRadius={2}>
                            <Typography variant="h4" gutterBottom textAlign={"center"} color={"white"}>
                                FDT/FDP CONFLICTS
                            </Typography>
                        </Box>
                        <Box width={"70px"} height={"43px"} backgroundColor={'grey'} borderRadius={2}>
                            <Typography variant="h4" gutterBottom textAlign={"center"} >
                                2
                            </Typography>
                        </Box>
                        <Box width={"70px"} height={"43px"} backgroundColor={'grey'} borderRadius={2}>
                            <Typography variant="h4" gutterBottom textAlign={"center"}>
                                2
                            </Typography>
                        </Box>
                    </Box>
                    <Box display={"flex"} justifyContent={"space-between"} mb={1}>
                        <Box width={"400px"} height={"43px"} backgroundColor={'grey'} borderRadius={2}>
                            <Typography variant="h4" gutterBottom textAlign={"center"} color={"white"}>
                                SICK/EMER LEAVE
                            </Typography>
                        </Box>
                        <Box width={"70px"} height={"43px"} backgroundColor={'grey'} borderRadius={2}>
                            <Typography variant="h4" gutterBottom textAlign={"center"} color={"red"}>
                                1
                            </Typography>
                        </Box>
                        <Box width={"70px"} height={"43px"} backgroundColor={'grey'} borderRadius={2}>
                            <Typography variant="h4" gutterBottom textAlign={"center"} color={"red"}>
                                1
                            </Typography>
                        </Box>
                    </Box>
                    <Box display={"flex"} justifyContent={"space-between"} mb={1}>
                        <Box width={"400px"} height={"43px"} backgroundColor={'grey'} borderRadius={2}>
                            <Typography variant="h4" gutterBottom textAlign={"center"} color={"white"}>
                                CREW CHECKIN DELAY
                            </Typography>
                        </Box>
                        <Box width={"70px"} height={"43px"} backgroundColor={'grey'} borderRadius={2}>
                            <Typography variant="h4" gutterBottom textAlign={"center"} color={"red"}>
                                1
                            </Typography>
                        </Box>
                        <Box width={"70px"} height={"43px"} backgroundColor={'grey'} borderRadius={2}>
                            <Typography variant="h4" gutterBottom textAlign={"center"} color={"red"}>
                                1
                            </Typography>
                        </Box>
                    </Box>
                </Box>



                <Box width={'380px'} m={"auto"} mt={5}>
                    <Box width={"100%"} height={"43px"} backgroundColor={'rgb(112,160,238)'} mb={1} >
                        <Typography variant="h4" gutterBottom textAlign={"center"}>
                            S1 - 2 - 3 - 15
                        </Typography>
                    </Box>
                    <Box width={"100%"} height={"43px"} backgroundColor={'grey'} mb={1}>
                        <Typography variant="h4" gutterBottom textAlign={"center"} mb={1} color={"white"}>
                            S2 - 2 - 3 - 15
                        </Typography>
                    </Box>
                    <Box width={"100%"} height={"43px"} backgroundColor={'grey'} mb={1}>
                        <Typography variant="h4" gutterBottom textAlign={"center"} color={"white"}>
                            R OFF - 3 - 2 - 12
                        </Typography>
                    </Box>
                    <Box width={"100%"} height={"50px"} backgroundColor={'grey'} borderRadius={2} bgcolor={"black"}>
                        <Typography variant="h4" gutterBottom textAlign={"center"} color={"white"}>
                            AVAILABLE CREW
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Dashbord3;

