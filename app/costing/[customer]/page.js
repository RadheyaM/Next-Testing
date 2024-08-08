import getData from "@/lib/dev-data"
import ComponentTable from "@/components/costing/overview/ComponentTable"
import CostingTable from "@/components/costing/overview/CostingTable"
import OverviewHeader from "@/components/costing/overview/OverviewHeader"
import Distribution from "@/components/costing/overview/Distribution"

export default async function Page({params}) {
    const customer = await getData('customers')
    const costing = await getData('costing')
    const data = JSON.parse(costing)
    return (
    <>
        <OverviewHeader />
        <ComponentTable />
        <CostingTable />
        <Distribution />
    </>)
}