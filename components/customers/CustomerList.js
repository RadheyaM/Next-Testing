import Link from "next/link";

const getAllCustomers = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/customers', {
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error('Failed to fetch customers!')
        };
        return res.json()
    } catch (error) {
        console.log("Error loading customers: ", error);
    };
};


export default async function CustomerList() {

    const {customers} = await getAllCustomers();

    return (
        <>
            <h1>Costing Home</h1>
            <ul className='center'>
                {customers.map((customer) => {
                return (
                    <li key={customer._id}>
                    <Link href={`/costing/${customer._id}`}>{customer.name}</Link>
                    </li>
                )
                })}
            </ul>
        </>
    )
}