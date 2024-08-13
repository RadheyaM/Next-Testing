
import { euro, toPercent } from '@/lib/helps';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const CompIngTable = ({ingredients, name}) => {
    const { data, error } = useSWR('/api/costings/ingredients', fetcher)

    if (error) return <p>Failed to Load</p>
    if (!data) return <p>loading...</p>
    if (!ingredients) return <p>Start adding Ingredients...</p>

    console.log("ingredients: ", ingredients)

    let totalMixWeight = 0;
    for (let i = 0; i < ingredients.length; i++ ) {
        totalMixWeight = totalMixWeight + ingredients[i].qty
    };

    let filteredIngs = [];
    let tmw = totalMixWeight;
    for (let i = 0; i < ingredients.length; i++ ) {
        for (let j = 0; j < data.data.length; j++) {
            if (data.data[j].rmc === ingredients[i].rmc) {
                const ingPercentOfMix = (ingredients[i].qty / tmw)*100
                const totalCost = ingredients[i].qty * Number(data.data[j].euro.$numberDecimal)
                filteredIngs = [...filteredIngs, {
                    rmc: data.data[j].rmc,
                    name: data.data[j].ingredient,
                    qty: ingredients[i].qty,
                    percentMix: ingPercentOfMix,
                    costKg: Number(data.data[j].euro.$numberDecimal),
                    totalCost: totalCost
                }]
            }
        }
    }
    console.log("total weight: ", totalMixWeight)
    console.log("Filtered Ings: ", filteredIngs)

    // console.log("dataPage:", data);

    return (
        <table>
            <thead>
                <tr>
                    <th className="bg-slate-500 text-lg text-bold text-white-500 p-5">RMC</th>
                    <th className="bg-slate-500 text-lg text-bold text-white-500 p-5">Ingredient</th>
                    <th className="bg-slate-500 text-lg text-bold text-white-500 p-5">% of Mix</th>
                    <th className="bg-slate-500 text-lg text-bold text-white-500 p-5">Weight (Kg)</th>
                    <th className="bg-slate-500 text-lg text-bold text-white-500 p-5">Cost / Kg</th>
                    <th className="bg-slate-500 text-lg text-bold text-white-500 p-5">Total Cost</th>
                </tr>
            </thead>
            <tbody>
                {filteredIngs.map( ing =>
                    (
                        <tr className='text-center'>
                            <td>{ing.rmc}</td>
                            <td>{ing.name}</td>
                            <td>{toPercent(ing.percentMix)}</td>
                            <td>{ing.qty}</td>
                            <td>{euro.format(ing.costKg)}</td>
                            <td>{euro.format(ing.totalCost)}</td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    )
}

export default CompIngTable;