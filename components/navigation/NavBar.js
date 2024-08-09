import Link from "next/link"

export default function Navbar () {
    return (
        <div className="p-4 flex justify-between items-center shadow-md">
            <Link className="font-bold text-lg text-red-700" href={"/"}>
                Home
            </Link>
            <button className="bg-slate-900 text-white px-6 py-2 rounded-md">Sign In</button>
        </div>
    )
}