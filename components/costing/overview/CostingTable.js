import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { euro } from '@/lib/helps';

const createData = (item, perPortion, perPack, perCase, perPallet, Notes) => {
    return {item, perPortion, perPack, perCase, perPallet, Notes};
}

const rows = [
    createData("Raw Material", 0.12, 0.48, 1.94, 529.43, ""),
    createData("Packaging", 0.06, 0.23, 0.92, 250.54, ""),
    createData("Labour", 0.13, 0.50, 2.00, 546.84, "No Notes To See Here..."),
    createData("Distribution", 0.02, 0.09, 0.36, 99, ""),
    createData("Manufacturing Cost Price", 0.33, 1.31, 5.22, 1425.81, ""),
    createData("Sales Price", 0.441, 1.7644, 7.06, 1926.77, ""),
]

const CostingTable = (rowAlign) => {
    return (
        <TableContainer component={Paper} elevation={3} className='p-5 m-5'>
            <Table size="medium" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Item</strong></TableCell>
                        <TableCell>Per PORTION</TableCell>
                        <TableCell>Per PACK</TableCell>
                        <TableCell>Per CASE</TableCell>
                        <TableCell>Per PALLET</TableCell>
                        <TableCell>Notes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.perPortion}
                            sx={{ '&:last-child td, &:last-child th' : { border: 0 } }}>
                                <TableCell>{row.item}</TableCell>
                                <TableCell>{euro.format(row.perPortion)}</TableCell>
                                <TableCell>{euro.format(row.perPack)}</TableCell>
                                <TableCell>{euro.format(row.perCase)}</TableCell>
                                <TableCell>{euro.format(row.perPallet)}</TableCell>
                                <TableCell>{row.Notes}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CostingTable;