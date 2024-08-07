import Link from "next/link"

export default function CostingLayout({ children }) {
    return (
        <>
            <header className="p-5 m-5">
                <div className="center text-center">
                    <Link href={'/costing'} className="text-xl text-blue-600">CUSTOMERS</Link>
                </div>
            </header>
            <main className="p-5">{children}</main>
        </>
    )
}