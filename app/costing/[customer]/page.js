import getData from "@/lib/dev-data"

export default function Page({params}) {
    return <div>My Post: {params.customer}</div>
}