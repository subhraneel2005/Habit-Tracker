import { IoMdAdd } from "react-icons/io";

export default function Homepage(){
    return (
    <main className='bg-zinc-200 text-zinc-800 min-h-screen w-full flex justify-center items-center select-none px-4'>
            <div className='block items-center'>
                <h1 className='text-4xl font-bold'>Track your daily habits 🎯</h1>
                <div className='flex justify-between items-center bg-white border-2 px-3 py-1 border-green-500 mt-[50px]'>
                <input type="text" placeholder="Add a habit..." className='rounded-md border-none outline-none px-6 py-3'/>
                 <IoMdAdd size={40} className='bg-zinc-900 text-white cursor-pointer rounded-full p-2' />
                </div>
                <div className="flex justify-between px-3 mt-10 md:gap-0 gap-4">
                    <div className=" bg-green-200 hover:bg-green-400 duration-300 cursor-pointer border-2 border-green-900 text-zinc-800 py-[30px] px-4 rounded-xl flex justify-center items-center"><p className="font-bold text-xl">Habit List 📗</p></div> 
                    <div className=" bg-red-200 border-2 cursor-pointer hover:bg-red-400 duration-300 border-red-900 text-zinc-800 py-[30px] px-4 rounded-xl flex justify-center items-center"><p className="font-bold text-xl">Habit Progress 🐱‍🏍</p></div>
                </div>
            </div>
    </main>
    )
}