import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { euro } from '@/lib/helps';

const createData = (labourTask, taskNo, noOfEmployees, hoursOnLine, costOfLabourPRSI, taskTotalCost, note) => {
    return {labourTask, taskNo, noOfEmployees, hoursOnLine, costOfLabourPRSI, taskTotalCost, note};
}

const rows = [
    createData("De box, Weigh & Mix", 1, 2, 3, 16.65, 99.9, "2 Tray per Min (45 Mins per Tray)"),
    createData("De box, Weigh & Mix", 1, 2, 3, 16.65, 99.9, "2 Tray per Min (45 Mins per Tray)"),
    createData("De box, Weigh & Mix", 1, 2, 3, 16.65, 99.9, "2 Tray per Min (45 Mins per Tray)"),
    createData("De box, Weigh & Mix", 1, 2, 3, 16.65, 99.9, "2 Tray per Min (45 Mins per Tray)"),
    createData("De box, Weigh & Mix", 1, 2, 3, 16.65, 99.9, "2 Tray per Min (45 Mins per Tray)"),
    createData("De box, Weigh & Mix", 1, 2, 3, 16.65, 99.9, "2 Tray per Min (45 Mins per Tray)"),
    createData("De box, Weigh & Mix", 1, 2, 3, 16.65, 99.9, "2 Tray per Min (45 Mins per Tray)"),
    createData("De box, Weigh & Mix", 1, 2, 3, 16.65, 99.9, "2 Tray per Min (45 Mins per Tray)"),
    createData("De box, Weigh & Mix", 1, 2, 3, 16.65, 99.9, "2 Tray per Min (45 Mins per Tray)"),
    createData("De box, Weigh & Mix", 1, 2, 3, 16.65, 99.9, "2 Tray per Min (45 Mins per Tray)"),
    createData("De box, Weigh & Mix", 1, 2, 3, 16.65, 99.9, "2 Tray per Min (45 Mins per Tray)"),
    createData("De box, Weigh & Mix", 1, 2, 3, 16.65, 99.9, "2 Tray per Min (45 Mins per Tray)"),
    createData("De box, Weigh & Mix", 1, 2, 3, 16.65, 99.9, "2 Tray per Min (45 Mins per Tray)"),
    createData("De box, Weigh & Mix", 1, 2, 3, 16.65, 99.9, "2 Tray per Min (45 Mins per Tray)"),

]

const LabourTable = () => {
    return (
        <TableContainer component={Paper} elevation={3} className='p-5 m-5'>
            <h1 className='text-2xl text-center text-red-800 p-3'>LABOUR COSTING</h1>
            <div className='flex flex-col p-3'>
                <div className='flex flex-row p-1'>
                    <div className='basis-1/3 text-center text-black-500 text-lg uppercase'>Production case output per batch</div>
                    <div className='basis-1/3 text-center text-black-500 text-lg uppercase'>portions per case</div>
                    <div className='basis-1/3 text-center text-black-500 text-lg uppercase'>production tray qty</div>
                </div>
                <div className='flex flex-row p-1'>
                    <div className='basis-1/3 text-center text-red-500 text-2xl'>810</div>
                    <div className='basis-1/3 text-center text-red-500 text-2xl'>16</div>
                    <div className='basis-1/3 text-center text-red-500 text-2xl'>288</div>
                </div>
            </div>
            <div className='flex flex-col p-3'>
                <div className='flex flex-row p-1'>
                    <div className='basis-1/4 text-center text-black-500 text-lg uppercase'>RUN RATE/PERSON/AVG SHIFT</div>
                    <div className='basis-1/4 text-center text-black-500 text-lg uppercase'>TOTAL MAN HOURS</div>
                    <div className='basis-1/4 text-center text-black-500 text-lg uppercase'>LABOUR COST/CASE</div>
                    <div className='basis-1/4 text-center text-black-500 text-lg uppercase'>LABOUR COST/PORTION</div>
                </div>
                <div className='flex flex-row p-1'>
                    <div className='basis-1/4 text-center text-red-500 text-2xl'>585.31</div>
                    <div className='basis-1/4 text-center text-red-500 text-2xl'>1329.90</div>
                    <div className='basis-1/4 text-center text-red-500 text-2xl'>{euro.format(2.003)}</div>
                    <div className='basis-1/4 text-center text-red-500 text-2xl'>{euro.format(0.125)}</div>
                </div>
            </div>
            <Table size="medium" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Labour Task</TableCell>
                        <TableCell>Task No.</TableCell>
                        <TableCell>No. Of Employees</TableCell>
                        <TableCell>Hours on Line</TableCell>
                        <TableCell>Cost Of Labour Incl. PRSI</TableCell>
                        <TableCell>Task Total Cost</TableCell>
                        <TableCell>Note</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.component}
                            sx={{ '&:last-child td, &:last-child th' : { border: 0 } }}>
                                <TableCell>{row.labourTask}</TableCell>
                                <TableCell>{row.taskNo}</TableCell>
                                <TableCell>{row.noOfEmployees}</TableCell>
                                <TableCell>{row.hoursOnLine}</TableCell>
                                <TableCell>{euro.format(row.costOfLabourPRSI)}</TableCell>
                                <TableCell>{euro.format(row.taskTotalCost)}</TableCell>
                                <TableCell>{row.note}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default LabourTable;