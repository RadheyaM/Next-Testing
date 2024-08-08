import Paper from '@mui/material/Paper'
import { euro } from '@/lib/helps';

const OverviewHeader = () => {
    return (
        <>
            <div className="flex justify-center p-3 m-5 bg-yellow-300 rounded-sm">
                <div className="text-center m-0 font-bold">Status: WORK IN PROGRESS</div>
            </div>
            <Paper elevation={3} className="flex flex-col p-5 m-5">
                <div className='flex flex-row'>
                    <p className="text-center basis-1/3 text-red-700 text-2xl">Oggs 4pk Vanilla Mini Sponge</p>
                    <p className="text-center basis-1/3">Code: 12345</p>
                    <p className="text-center basis-1/3">Delicious Vanilla Sponge, cruelty free...etc</p>
                </div>
                <div className='flex flex-row pt-5'>
                    <p className="text-center basis-1/6 text-black-500 text-lg">PACK Manufacturing Cost</p>
                    <p className="text-center basis-1/6 text-black-500 text-lg">Mark Up</p>
                    <p className="text-center basis-1/6 text-black-500 text-lg">Selling Price</p>
                    <p className="text-center basis-1/6 text-black-500 text-lg">VAT Rate</p>
                    <p className="text-center basis-1/6 text-black-500 text-lg">RRP</p>
                    <p className="text-center basis-1/6 text-black-500 text-lg">End Margin</p>
                </div>
                <div className='flex flex-row p-1'>
                    <p className="text-center basis-1/6 text-red-600 text-2xl">{euro.format(1.31)}</p>
                    <p className="text-center basis-1/6 text-red-600 text-2xl">26%</p>
                    <p className="text-center basis-1/6 text-red-600 text-2xl">{euro.format(1.31)}</p>
                    <p className="text-center basis-1/6 text-red-600 text-2xl">{euro.format(1.31)}</p>
                    <p className="text-center basis-1/6 text-red-600 text-2xl">{euro.format(1.31)}</p>
                    <p className="text-center basis-1/6 text-red-600 text-2xl">{euro.format(1.31)}</p>
                </div>
            </Paper>
        </>
    )   
}

export default OverviewHeader;