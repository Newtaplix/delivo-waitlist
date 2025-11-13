import { cn } from '@/lib/utils';
import { ChevronDown, CircleChevronLeft } from 'lucide-react';
import { AnimatePresence, Variants, motion as m } from 'motion/react';
import React, { useState } from 'react'

interface option{
    key: string,
    text: string
}

interface props{
    onChange: (value:option["key"]) => void
}


export const Dropdown = ({onChange}: props) => {
    const  [isOpen, setIsOpen] = useState(false);
    const options = [{text: "Vendor", key: "vendor"}, {text: "Buyer", key: "buyer"}, {text: 'Driver', key: 'driver'}];
    const [selected, setSelected] = useState({key: "", text: ""})
    const animationVariant: Variants = {
        "hidden": {
            y: -20,
            scale: 0.97,
            opacity: 0,
            transition: {
                duration: 0.15
            }
        },
        "visible": {
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.2
            }

        }
    }
    return (
    <div onClick={() => setIsOpen(!isOpen)} 
    className='relative p-2 w-full rounded-xl border bg-white cursor-pointer hover:bg-[#e2e2e2] dark:hover:bg-neutral-950
     dark:bg-neutral-950 dark:border-2 border-gray-300 text-[14px] px-4 dark:border-neutral-900 flex items-center justify-between'>
        {
            selected.key !== "" ?
            selected.text :
             <span>Choose Role</span>
        }
       
        <ChevronDown size={18} className={cn('transition-transform duration-300', isOpen ? "rotate-180" : "rotate-0")}/>
      <AnimatePresence>
         {
            isOpen &&
             <m.div 
             variants={animationVariant}
             initial="hidden"
             animate="visible"
             exit="hidden"
             key={"menu"}
             className='absolute w-full -bottom-1 left-0 translate-y-full rounded-md border
              bg-white border-gray-300 dark:bg-neutral-950 dark:border-neutral-900 shadow-md'>
            {
                options.map((option:option) => (
                    <div key={option.key} 
                    onClick={() => {
                        setSelected({key: option.key, text: option.text})
                        onChange(option.key)
                    }}
                    className='p-2 hover:bg-gray-200 bg-white dark:bg-neutral-950 dark:hover:bg-neutral-800 
                    rounded-md cursor-pointer'>
                        {option.text}
                    </div>
                ))
            }
            </m.div>
       }
      </AnimatePresence>
    </div>
  )
}
