import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { euro } from '@/lib/helps';

const createData = (item, modifier, perPortion, perCase, perPallet, Notes) => {
    return {item, modifier, perPortion, perCase, perPallet, Notes};
}

const rows = [
    createData("Raw Material", 0, 0.690, 2.762, 497.09, ""),
    createData("Packaging", 0, 0.271, 1.082, 194.76, ""),
]

const CostingTable = (rowAlign) => {
    return (
        <TableContainer component={Paper} className='p-5'>
            <Table sx={{ minWidth: 650}} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Item</strong></TableCell>
                        <TableCell>Modifier</TableCell>
                        <TableCell>Per PORTION</TableCell>
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
                                <TableCell>{row.modifier}</TableCell>
                                <TableCell>{euro.format(row.perPortion)}</TableCell>
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