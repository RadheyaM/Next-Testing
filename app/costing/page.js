import getCustomers from '@/lib/dev-data';
import Link from 'next/link';

const CostingHome = async () => {
  const file = await getCustomers();
  const data = JSON.parse(file);
  // console.log("your data: ")
  // console.log(data)
  return (
    <>
      <h1>Costing Home</h1>
      <ul className='center'>
        {data.map((customer) => {
          return <li key={customer.code}>{customer.name}</li>
        })}
      </ul>
    </>
  )
}

export default CostingHome;
