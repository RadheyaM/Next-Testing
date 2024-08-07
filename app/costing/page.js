import {promises as fs} from 'fs';
import Link from 'next/link';

const CostingHome = async () => {
  const file = await fs.readFile(process.cwd() + '/data/customers.json', 'utf-8');
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
