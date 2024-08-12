import { useState, useEffect } from 'react';

const CompIngTable = ({ingredients}) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    // client side fetching (also check out SWR as alternative...)
    useEffect(() => {
        fetch('http://localhost:3000/api/costings/ingredients')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No Ingredient Data</p>

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
                {data.ing.map((ing) => (
                    <tr>
                        <td>ing.ingredient</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CompIngTable;