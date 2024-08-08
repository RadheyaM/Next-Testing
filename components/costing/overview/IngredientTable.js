import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { euro } from '@/lib/helps';

const createData = (rmc, ingredientName, percentMix, weightKg, costKg, totalCost) => {
    return {rmc, ingredientName, percentMix, weightKg, costKg, totalCost};
}

const rows = [
    createData(11415, "Vital Wheat Gluten", "2.08%", 0.728, 4.82, 3.51),
    createData(11415, "Vital Wheat Gluten", "2.08%", 0.728, 4.82, 3.51),
    createData(11415, "Vital Wheat Gluten", "2.08%", 0.728, 4.82, 3.51),
    createData(11415, "Vital Wheat Gluten", "2.08%", 0.728, 4.82, 3.51),
    createData(11415, "Vital Wheat Gluten", "2.08%", 0.728, 4.82, 3.51),
    createData(11415, "Vital Wheat Gluten", "2.08%", 0.728, 4.82, 3.51),
    createData(11415, "Vital Wheat Gluten", "2.08%", 0.728, 4.82, 3.51),
    createData(11415, "Vital Wheat Gluten", "2.08%", 0.728, 4.82, 3.51),
    createData(11415, "Vital Wheat Gluten", "2.08%", 0.728, 4.82, 3.51),
    createData(11415, "Vital Wheat Gluten", "2.08%", 0.728, 4.82, 3.51),
    createData(11415, "Vital Wheat Gluten", "2.08%", 0.728, 4.82, 3.51),
    createData(11415, "Vital Wheat Gluten", "2.08%", 0.728, 4.82, 3.51),
    createData(11415, "Vital Wheat Gluten", "2.08%", 0.728, 4.82, 3.51),
    createData(11415, "Vital Wheat Gluten", "2.08%", 0.728, 4.82, 3.51),
    createData(11415, "Vital Wheat Gluten", "2.08%", 0.728, 4.82, 3.51),

]

const IngredientTable = () => {
    return (
        <TableContainer component={Paper} elevation={3} className='p-5 m-5'>
            <h1 className='text-2xl text-center text-red-800 p-3'>COMPONENT 1: MIN ROUNDS</h1>
            <div className='flex flex-col p-3'>
                <div className='flex flex-row p-3 justify-center'>
                    <div className='text-center text-red-500 text-2xl p-1 uppercase'>Cost per Kg:  </div>
                    <div className='text-center text-red-500 text-2xl p-1'>{euro.format(1.73)}</div>
                </div>
                <div className='flex flex-row p-3 justify-center'>
                    <div className='text-center text-black-500 text-lg p-1 uppercase'>Subtotal | </div>
                    <div className='text-center text-black-500 text-lg p-1'>Weight: 35.048 |</div>
                    <div className='text-center text-black-500 text-lg p-1'>Mix Cost: {euro.format(58.65)}</div>
                </div>
                <div className='flex flex-row p-3 justify-center'>
                    <div className='text-center text-black-500 text-lg p-1 uppercase'>Typical Process Loss: </div>
                    <div className='text-center text-black-500 text-lg p-1'>3.0% |</div>
                    <div className='text-center text-black-500 text-lg p-1'>Weight After Loss: 33.996</div>
                </div>
            </div>
            <Table size="medium" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell><strong>RMC</strong></TableCell>
                        <TableCell>Ingredient</TableCell>
                        <TableCell>Percent of Mix</TableCell>
                        <TableCell>Weight(Kg)</TableCell>
                        <TableCell>Cost per Kg</TableCell>
                        <TableCell>Total Cost</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.component}
                            sx={{ '&:last-child td, &:last-child th' : { border: 0 } }}>
                                <TableCell>{row.rmc}</TableCell>
                                <TableCell>{row.ingredientName}</TableCell>
                                <TableCell>{row.percentMix}</TableCell>
                                <TableCell>{row.weightKg}</TableCell>
                                <TableCell>{euro.format(row.costKg)}</TableCell>
                                <TableCell>{euro.format(row.totalCost)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default IngredientTable;