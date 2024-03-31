export default function Homepage(){
    return (
    <main className='bg-zinc-200 text-zinc-800 min-h-screen w-full flex justify-center items-center select-none px-4'>
            <div className='block items-center'>
                <h1 className='text-4xl font-bold'>Track your daily habits 🎯</h1>
                <div className='flex justify-between items-center bg-white border-2 px-3 py-1 border-green-500 mt-[50px]'>
                <input type="text" placeholder="Add a habit..." className='rounded-md border-none outline-none px-6 py-3'/>
                {/* <IoAdd size={40} className='bg-zinc-900 text-white cursor-pointer rounded-full p-2' /> */}
                </div>
            </div>
    </main>
    )
}