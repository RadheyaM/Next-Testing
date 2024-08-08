import Paper from "@mui/material/Paper";
import { euro } from "@/lib/helps";

const Distribution = () => {
    return (
        <>
            <Paper elevation={3}>
                <div className="flex flex-row p-2 justify-start">
                    <div className="basis-1/3 text-center font-bold">Config</div>
                    <div className="basis-1/3 text-center font-bold">Qty</div>
                    <div className="basis-1/3 text-center font-bold">Unit</div>
                </div>
                <div className="flex flex-row p-2">
                    <div className="basis-1/3 text-center font-bold">PORTIONS per PALLET</div>
                    <div className="basis-1/3 text-center">4368</div>
                    <div className="basis-1/3 text-center">Units</div>
                </div>
                <div className="flex flex-row p-2">
                    <div className="basis-1/3 text-center font-bold">PORTIONS per PACK</div>
                    <div className="basis-1/3 text-center">4</div>
                    <div className="basis-1/3 text-center">Units</div>
                </div>
                <div className="flex flex-row p-2">
                    <div className="basis-1/3 text-center font-bold">PACKS per CASE</div>
                    <div className="basis-1/3 text-center">4</div>
                    <div className="basis-1/3 text-center">Units</div>
                </div>
                <div className="flex flex-row p-2">
                    <div className="basis-1/3 text-center font-bold">CASES Per PALLET</div>
                    <div className="basis-1/3 text-center">273</div>
                    <div className="basis-1/3 text-center">Units</div>
                </div>
                <div className="flex flex-row p-2">
                    <div className="basis-1/3 text-center font-bold">Nett Weight of PALLET</div>
                    <div className="basis-1/3 text-center">220</div>
                    <div className="basis-1/3 text-center">Kg</div>
                </div>
                <div className="flex flex-row p-2">
                    <div className="basis-1/3 text-center font-bold">Gross Weight of PALLET</div>
                    <div className="basis-1/3 text-center">250</div>
                    <div className="basis-1/3 text-center">Kg</div>
                </div>
                <div className="flex flex-row p-2">
                    <div className="basis-1/3 text-center font-bold">Cost Per PALLET Delivered</div>
                    <div className="basis-1/3 text-center">{euro.format(99.00)}</div>
                    <div className="basis-1/3 text-center">Euro</div>
                </div>
                <div className="flex flex-row p-2">
                    <div className="basis-1/3 text-center font-bold">Cost Per CASE</div>
                    <div className="basis-1/3 text-center">{euro.format(0.3626)}</div>
                    <div className="basis-1/3 text-center">Euro</div>
                </div>
                <div className="flex flex-row p-2">
                    <div className="basis-1/3 text-center font-bold">Cost Per PORTION</div>
                    <div className="basis-1/3 text-center">{euro.format(0.0227)}</div>
                    <div className="basis-1/3 text-center">Euro</div>
                </div>
                <div className="flex flex-row p-2">
                    <div className="basis-1/3 text-center font-bold">Cost Per CASE</div>
                    <div className="basis-1/3 text-center">{euro.format(0.3626)}</div>
                    <div className="basis-1/3 text-center">Euro</div>
                </div>
            </Paper>
        </>
    )
}

export default Distribution;