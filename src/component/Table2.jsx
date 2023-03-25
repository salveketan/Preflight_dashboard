// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Typography } from '@mui/material';

// function createData(CREW_CODE, DUTY, SELECT) {
//     return { CREW_CODE, DUTY, SELECT };
// }

// const rows = [
//     createData('ANIL', 'S1', 'ALLOCATE'),
//     createData('KETAN', 'SIM', 'ALLOCATE'),
//     createData('KAVITHA', 'OFF', 'ALLOCATE'),
//     createData('HITESH', 'FY4567', 'ALLOCATE'),
// ];

// export default function Table2() {
//     return (
//         <TableContainer component={Paper}>
//             <Typography id="modal-modal-title" variant="h6" component="h2">
//                 CREW LIST
//             </Typography>
//             <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>CREW_CODE</TableCell>
//                         <TableCell align="right">DUTY</TableCell>
//                         <TableCell align="right">SELECT</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {rows.map((row) => (
//                         <TableRow
//                             key={row.CREW_CODE}
//                             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                         >
//                             <TableCell component="th" scope="row">
//                                 {row.CREW_CODE}
//                             </TableCell>
//                             <TableCell align="right">{row.DUTY}</TableCell>
//                             <TableCell align="right">{row.SELECT}</TableCell>
//                             <TableCell align="right">{row.FO}</TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }



import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';

const columns = [
    { id: 'CREW_CODE', label: 'CREW_CODE', minWidth: 50, align: 'center', },
    { id: 'DUTY', label: 'DUTY', minWidth: 70, align: 'center', },
    {
        id: 'SELECT',
        label: 'SELECT',
        minWidth: 100,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    }

];

function createData(CREW_CODE, DUTY, SELECT) {
    // const FO = SELECT / CIC;
    return { CREW_CODE, DUTY, SELECT };
}

const rows = [
    createData('ANIL', 'S1', 'ALLOCATE'),
    createData('KETAN', 'SIM', 'ALLOCATE'),
    createData('KAVITHA', 'OFF', 'ALLOCATE'),
    createData('HITESH', 'FY4567', 'ALLOCATE'),
];

export default function Table2({ user }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    console.log("user", user);

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                UNROSTERED FLIGHTS
            </Typography>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.CREW_CODE}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                hover role="checkbox" tabIndex={-1}
                            >
                                <TableCell component="th" scope="row">
                                    {row.CREW_CODE}
                                </TableCell>
                                <TableCell align="center">{row.DUTY}</TableCell>
                                <TableCell align="center">{row.SELECT === "ALLOCATE" ? <button style={{ "color": "red" }}>ALLOCATE</button> : <>{row.SELECT}</>}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100,]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

