
import Link from "next/link";

export default function Home() {
  return (
    <main className='w-full min-h-screen bg-zinc-200 text-zinc-800 flex justify-center items-center select-none p-3'>
      <div className='block'>
            <h1 className='text-[9vw] font-bold'>Habit Tracker</h1>
            <p className=' text-lg md:text-2xl text-zinc-600 mb-8'>Organize your habits and work on them daily...</p>
            <Link href="/homepage">
            <button className=' border-2 bg-emerald-200 border-emerald-500 rounded-xl duration-300 text-emerald-950 ml-[28%] hover:bg-transparent md:ml-[44%] font-bold p-3'>Get started</button>
            </Link>
        </div>
    </main>
  );
}
