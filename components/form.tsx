
import { Inter } from 'next/font/google'
import { Input } from './animatex/input'
import { LoadingButton } from './animatex/loadingbutton'
import { FormEvent, useState } from 'react'
import { Dropdown } from './animatex/dropdown'


const inter = Inter({
    style: ["normal"],
    weight: ["400", "500", "600"]
})

export const WaitlistForm = () => {
    const [loading, setLoading] = useState(false);
    
    const [data, setData] = useState({email: '', role: ""})

    const onSubmit = (e:FormEvent) => {
        e.preventDefault()
        setLoading(true)

    }
  return (
    <div className={`${inter.className} w-full max-w-[480px] p-4 md:bg-transparent items-center z-40 flex flex-col justify-center`}>
        <div className='bg-red-400 w-10 rounded-full h-2 mb-3'/>
    <h1 className='w-full text-center text-3xl mb-2 md:text-4xl font-semibold '>
            Be the First to Experience the Future of Local Trade</h1>
        <p className='w-full text-center mt-2 mb-6 text-gray-700 dark:text-gray-500'>
            Join our early access list and be among the first to buy and sell when we launch. Early members get exclusive discounts and vendor perks.
        </p>
        <form className='w-full flex flex-col gap-4' onSubmit={onSubmit}>
           <div className='flex flex-col gap-1'>
                <span className='text-[14px]'>Email</span>
                <Input placeholder='Email' type='email' 
                value={data.email}
                onChange={(e) => setData((prev) => ({email:e.target.value, role: prev.role }))}
                className='outline-none border dark:border-2 border-gray-300 bg-white dark:bg-neutral-950 dark:border-neutral-900'/>
           </div>
            <div className='flex flex-col gap-1'>
                <span className='text-[14px]'>Role</span>
               <Dropdown onChange={(value) => setData((prev) => ({email:prev.email, role: value }))}/>
           </div>

           <LoadingButton text="Submit" loading={loading} animationVariant={4} className='bg-[#0c503e] hover:bg-[#0d5542] rounded-full'/>

           <p className='text-[12px] text-gray-500 mx-auto mt-5'>Delivo Copyright &copy; 2025</p>
        </form>
    </div>
  )
}
