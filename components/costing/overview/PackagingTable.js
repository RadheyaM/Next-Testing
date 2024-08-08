import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { euro } from '@/lib/helps';

const createData = (rmc, type, description, qty, costPer1000, totalCost) => {
    return {rmc, type, description, qty, costPer1000, totalCost};
}

const rows = [
    createData(21050, "Film", "380mm", 0.800, 25.00, 0.02),
    createData(21050, "Film", "380mm", 0.800, 25.00, 0.02),
    createData(21050, "Film", "380mm", 0.800, 25.00, 0.02),
    createData(21050, "Film", "380mm", 0.800, 25.00, 0.02),
    createData(21050, "Film", "380mm", 0.800, 25.00, 0.02),
    createData(21050, "Film", "380mm", 0.800, 25.00, 0.02),
    createData(21050, "Film", "380mm", 0.800, 25.00, 0.02),
]

const PackagingTable = () => {
    return (
        <TableContainer component={Paper} elevation={3} className='p-5 m-5'>
            <h1 className='text-2xl text-center text-red-800 p-3'>PACKAGING PER CASE</h1>
            <div className='flex flex-col p-3'>
                <div className='flex flex-row p-3 justify-center'>
                    <div className='text-center text-red-500 text-2xl p-1 uppercase'>TOTAL COST:</div>
                    <div className='text-center text-red-500 text-2xl p-1'>{euro.format(0.92)}</div>
                </div>
            </div>
            <Table size="medium" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell><strong>RMC</strong></TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Qty</TableCell>
                        <TableCell>Cost per 1000</TableCell>
                        <TableCell>Total Cost</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.component}
                            sx={{ '&:last-child td, &:last-child th' : { border: 0 } }}>
                                <TableCell>{row.rmc}</TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell>{row.description}</TableCell>
                                <TableCell>{row.qty}</TableCell>
                                <TableCell>{euro.format(row.costPer1000)}</TableCell>
                                <TableCell>{euro.format(row.totalCost)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default PackagingTable;