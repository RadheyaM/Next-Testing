import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { euro } from '@/lib/helps';

const createData = (component, description, portionWeight, scrap, weightWithScrap, batchCost, portionCost) => {
    return {component, description, portionWeight, scrap, weightWithScrap, batchCost, portionCost};
}

const rows = [
    createData(1, 'Lemon Loaf', 0.200, 0.05, 0.210, 1.86, 0.391),
    createData(2, 'Vanilla Frosting', 0.110, 0.05, 0.116, 1.48, 0.171),
]

const ComponentTable = () => {
    return (
        <TableContainer component={Paper} elevation={3} className='p-5 m-5'>
            <Table size="medium" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Component</strong></TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Portion Weight(Kg)</TableCell>
                        <TableCell>% Scrap</TableCell>
                        <TableCell>Weight(Kg) including scrap</TableCell>
                        <TableCell>Batch Cost/Kg of Mix</TableCell>
                        <TableCell>Portion Cost</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.component}
                            sx={{ '&:last-child td, &:last-child th' : { border: 0 } }}>
                                <TableCell>{row.component}</TableCell>
                                <TableCell>{row.description}</TableCell>
                                <TableCell>{row.portionWeight}</TableCell>
                                <TableCell>{row.scrap}</TableCell>
                                <TableCell>{row.weightWithScrap}</TableCell>
                                <TableCell>{euro.format(row.batchCost)}</TableCell>
                                <TableCell>{euro.format(row.portionCost)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ComponentTable;