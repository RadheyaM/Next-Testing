import getData from "@/lib/dev-data"
import ComponentTable from "@/components/costing/overview/ComponentTable"
import CostingTable from "@/components/costing/overview/CostingTable"

export default async function Page({params}) {
    const customer = await getData('customers')
    const costing = await getData('costing')
    const data = JSON.parse(costing)
    return (
    <>
        <h1>Customer: {params.customer}</h1>
        <ComponentTable />
        <hr className="p-5"></hr>
        <CostingTable />
    </>)
}