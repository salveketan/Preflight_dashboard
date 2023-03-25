// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Typography } from '@mui/material';

// function createData(PTRN, SECTOR, CAPT, FO, CIC, FSS, FS) {
//     return { PTRN, SECTOR, CAPT, FO, CIC, FSS, FS };
// }

// const rows = [
//     createData('FY1234', 'SZB-SZB', 'ALLOCATE', 'SHAHRIRHARUN', 'JULIA', 'DARSHINI', 'HAZIM'),
//     createData('FY1256', 'SZB-SZB', 'FADZLY', 'MAHESH', 'SHZAINAB', 'ALLOCATE', 'SAUFI'),
//     createData('FY1278', 'SZB-SZB', 'ALLOCATE', 'SHAHRIRHARUN', 'JULIA', 'DARSHINI', 'HAZIM'),
//     createData('FY1234', 'SZB-SZB', 'ALLOCATE', 'SHAHRIRHARUN', 'JULIA', 'DARSHINI', 'HAZIM'),
//     createData('FY1234', 'SZB-SZB', 'ALLOCATE', 'SHAHRIRHARUN', 'JULIA', 'DARSHINI', 'HAZIM'),
//     createData('FY1234', 'SZB-SZB', 'ALLOCATE', 'SHAHRIRHARUN', 'JULIA', 'DARSHINI', 'HAZIM'),
//     createData('FY1256', 'SZB-SZB', 'FADZLY', 'MAHESH', 'SHZAINAB', 'ALLOCATE', 'SAUFI'),
//     createData('FY1278', 'SZB-SZB', 'ALLOCATE', 'SHAHRIRHARUN', 'JULIA', 'DARSHINI', 'HAZIM'),
//     createData('FY1234', 'SZB-SZB', 'ALLOCATE', 'SHAHRIRHARUN', 'JULIA', 'DARSHINI', 'HAZIM'),
//     createData('FY1234', 'SZB-SZB', 'ALLOCATE', 'SHAHRIRHARUN', 'JULIA', 'DARSHINI', 'HAZIM'),
//     createData('FY1234', 'SZB-SZB', 'ALLOCATE', 'SHAHRIRHARUN', 'JULIA', 'DARSHINI', 'HAZIM'),
//     createData('FY1256', 'SZB-SZB', 'FADZLY', 'MAHESH', 'SHZAINAB', 'ALLOCATE', 'SAUFI'),
//     createData('FY1278', 'SZB-SZB', 'ALLOCATE', 'SHAHRIRHARUN', 'JULIA', 'DARSHINI', 'HAZIM'),
//     createData('FY1234', 'SZB-SZB', 'ALLOCATE', 'SHAHRIRHARUN', 'JULIA', 'DARSHINI', 'HAZIM'),
//     createData('FY1234', 'SZB-SZB', 'ALLOCATE', 'SHAHRIRHARUN', 'JULIA', 'DARSHINI', 'HAZIM'),

// ];

// export default function BasicTable() {
//     return (
//         <TableContainer component={Paper}>
//             <Typography id="modal-modal-title" variant="h6" component="h2">
//                 UNROSTERED FLIGHTS
//             </Typography>
//             {/* <Table sx={{ minWidth: 650 }} aria-label="simple table"> */}
//             <Table sx={{ width: '100%', overflow: 'hidden' }}>
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>PTRN</TableCell>
//                         <TableCell align="right">SECTOR</TableCell>
//                         <TableCell align="right">CAPT</TableCell>
//                         <TableCell align="right">FO</TableCell>
//                         <TableCell align="right">CIC</TableCell>
//                         <TableCell align="right">FSS</TableCell>
//                         <TableCell align="right">FS</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {rows.map((row) => (
//                         <TableRow
//                             key={row.PTRN}
//                             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                             hover role="checkbox" tabIndex={-1}
//                         >
//                             <TableCell component="th" scope="row">
//                                 {row.PTRN}
//                             </TableCell>
//                             <TableCell align="right">{row.SECTOR}</TableCell>
//                             <TableCell align="right">{row.CAPT == "ALLOCATE" ? <button style={{ "color": "red" }}>ALLOCATE</button> : <>{row.CAPT}</>}</TableCell>
//                             <TableCell align="right">{row.FO}</TableCell>
//                             <TableCell align="right">{row.CIC}</TableCell>
//                             <TableCell align="right">{row.FSS}</TableCell>
//                             <TableCell align="right">{row.FS}</TableCell>
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
    { id: 'PTRN', label: 'PTRN', minWidth: 50, align: 'center', },
    { id: 'SECTOR', label: 'SECTOR', minWidth: 70, align: 'center', },
    {
        id: 'CAPT',
        label: 'CAPT',
        minWidth: 100,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'FO',
        label: 'FO',
        minWidth: 100,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'CIC',
        label: 'CIC',
        minWidth: 100,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'FSS',
        label: 'FSS',
        minWidth: 100,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'FS',
        label: 'FSS',
        minWidth: 100,
        align: 'center',
        format: (value) => value.toFixed(2),
    },

];

function createData(PTRN, SECTOR, CAPT, FO, CIC, FSS, FS) {
    // const FO = CAPT / CIC;
    return { PTRN, SECTOR, CAPT, FO, CIC, FSS, FS };
}

const rows = [
    createData('FY1234', 'SZB-SZB', 'SELECT', 'SHAHRIRHARUN', 'JULIA', 'DARSHINI', 'HAZIM'),
    createData('FY1256', 'SZB-SZB', 'FADZLY', 'MAHESH', 'SHZAINAB', 'SELECT', 'SAUFI'),
    createData('FY1278', 'SZB-SZB', 'SELECT', 'SHAHRIRHARUN', 'JULIA', 'DARSHINI', 'HAZIM'),
    createData('FY1256', 'SZB-SZB', 'FADZLY', 'MAHESH', 'SHZAINAB', 'SELECT', 'SAUFI'),
    createData('FY1234', 'SZB-SZB', 'SELECT', 'SHAHRIRHARUN', 'SELECT', 'DARSHINI', 'HAZIM'),
    createData('FY1234', 'SZB-SZB', 'SELECT', 'SHAHRIRHARUN', 'JULIA', 'DARSHINI', 'HAZIM'),
    createData('FY1256', 'SZB-SZB', 'FADZLY', 'MAHESH', 'SHZAINAB', 'SELECT', 'SAUFI'),
    createData('FY1278', 'SZB-SZB', 'SELECT', 'SHAHRIRHARUN', 'JULIA', 'DARSHINI', 'HAZIM'),
    createData('FY1234', 'SZB-SZB', 'SELECT', 'SHAHRIRHARUN', 'JULIA', 'DARSHINI', 'HAZIM'),
    createData('FY1234', 'SZB-SZB', 'SELECT', 'SHAHRIRHARUN', 'JULIA', 'DARSHINI', 'HAZIM'),
    createData('FY1256', 'SZB-SZB', 'FADZLY', 'MAHESH', 'SHZAINAB', 'SELECT', 'SAUFI')
];

export default function Table1({ Handle }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

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
                        {rows.map((row, i) => (
                            <TableRow
                                key={i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                hover role="checkbox" tabIndex={-1}
                            >
                                <TableCell component="th" scope="row">
                                    {row.PTRN}
                                </TableCell>
                                <TableCell align="center">{row.SECTOR}</TableCell>
                                <TableCell align="center">{row.CAPT === "SELECT" ? <button style={{ "color": "red" }} onClick={() => Handle(i)}>SELECT</button> : <>{row.CAPT}</>}</TableCell>
                                <TableCell align="center">{row.FO === "SELECT" ? <button style={{ "color": "red" }} onClick={() => Handle(i)}>SELECT</button> : <>{row.FO}</>}</TableCell>
                                <TableCell align="center">{row.CIC === "SELECT" ? <button style={{ "color": "red" }} onClick={() => Handle(i)}>SELECT</button> : <>{row.CIC}</>}</TableCell>
                                <TableCell align="center">{row.FSS === "SELECT" ? <button style={{ "color": "red" }} onClick={() => Handle(i)}>SELECT</button> : <>{row.FSS}</>}</TableCell>
                                <TableCell align="center">{row.FS === "SELECT" ? <button style={{ "color": "red" }} onClick={() => Handle(i)}>SELECT</button> : <>{row.FS}</>}</TableCell>
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

