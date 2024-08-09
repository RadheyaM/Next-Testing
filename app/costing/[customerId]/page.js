
import CostingList from "@/components/costing/CostingList"
import Link from "next/link"

export default async function Page({params}) {
    console.log("PARAMMMMMMMSSSSS", params)
    const {customerId} = params;
    return (
    <>
        <CostingList customerId={customerId}/>
    </>)
}