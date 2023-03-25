import { Box, Typography } from '@mui/material'
import React from 'react'
import { DoughnutChart } from './DounutChart';
import { PieChart } from './PieChart';
import Modal1 from './Modal1';
import { Link } from 'react-router-dom';
import Modal2 from './Modal2';

const Dashbord1 = () => {


    return (
        <Box>
            <Box width={'932px'} height={"900px"} borderRight={"1px solid black"}>
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
                    {/* <Link to={"/table1"}> */}
                        <Box  width={"100%"} height={"43px"} backgroundColor={'rgb(112,160,238)'} mb={1} >
                            <Typography variant="h4" gutterBottom textAlign={"center"}>
                                {/* UNROSTERED FLIGHTS */}
                                <Modal2/>
                            </Typography>
                        </Box>
                    {/* </Link> */}
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
                        <Typography gutterBottom textAlign={"center"}>
                            <Modal1 />
                            {/* <Modal2 /> */}
                        </Typography>
                    </Box>
                </Box>


            </Box>
        </Box>
    )
}

export default Dashbord1;

