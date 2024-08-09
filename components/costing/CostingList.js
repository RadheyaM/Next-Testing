import Link from "next/link";

const getCostings = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/costings", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error('Failed to fetch costings');
        }
        // console.log("res: ", await res.json())
        return await res.json();
    } catch (error) {
        console.log("Error loading costings: ", error);
    }
}

export default async function CostingList({customerId}) {
    const data = await getCostings();
    const costings = data.costing
    console.log("HERE IT IS...", costings)
    return(
        <>
            <h1>Costing list</h1>
            <ul className='center'>
                {costings.map((costing) => {
                return (
                    <li key={costing._id}>
                    <Link href={`/costing/${customerId}/${costing._id}`}>{costing.customerName} | {costing.name}</Link>
                    </li>
                )
                })}
            </ul>
        </>
    )
}