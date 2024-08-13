import { useState } from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const CompIngTable = ({ingredients}) => {
    // const [data, setData] = useState(null);
    // const [isLoading, setLoading] = useState(true);

    // client side fetching (also check out SWR as alternative...)
    // useEffect(() => {
    //     fetch('http://localhost:3000/api/costings/ingredients')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setData(data)
    //         setLoading(false)
    //     })
    // }, [])
    const { data, error } = useSWR('/api/costings/ingredients', fetcher)

    console.log("dataPage:", data);

    if (error) return <p>Failed to Load</p>
    if (!data) return <p>loading...</p>

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
                {data.data.map( ing =>
                    (
                        <tr>
                            <td>{ing.ingredient}</td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    )
}

export default CompIngTable;