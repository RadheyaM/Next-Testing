import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-items-center p-24">
      <div className="flex text-center font-white-500 justify-center bg-indigo-800 text-white text-4xl p-5 rounded-md">
        <Link href={'/costing'}>Go To Costings</Link>
      </div>
    </main>
  );
}
