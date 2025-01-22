import React from 'react'
import { FaRegClock } from 'react-icons/fa'

export const HeadingMain = () => {
    return (
        <div className='w-full flex flex-col gap-4'>
            <div className='border-b border-theme-red w-full '>
                <p className='bg-theme-red font-semibold w-[150px] text-white text-xs p-2' style={{ background: 'linear-gradient(-130deg, transparent 45px, #ad323e 0) top right' }}>
                    Main Kabar
                </p>
            </div>

            <div className='flex gap-4 w-full overflow-x-auto items-center'>
                <button className='border border-theme-grey rounded-lg px-5 min-w-fit py-1 font-medium shadow'>Kabar One</button>
                <button className='border border-theme-grey rounded-lg px-5 min-w-fit py-1 font-medium shadow'>Kabar One</button>
                <button className='border border-theme-grey rounded-lg px-5 py-1 min-w-fit font-medium shadow'>Kabar One</button>
                <button className='border border-theme-grey rounded-lg px-5 py-1 min-w-fit font-medium shadow'>Kabar One</button>
                <button className='border border-theme-grey rounded-lg px-5 py-1 min-w-fit font-medium shadow'>Kabar One</button>
                <button className='border border-theme-grey rounded-lg px-5 py-1 min-w-fit font-medium shadow'>Kabar One</button>
            </div>
        </div>
    )
}

export const HeadingTwo = () => {
    return <div className='text-theme-red flex items-center gap-2'>
        <FaRegClock size={18} />  <h4>थप समाचार</h4>
        <hr className='border border-theme-red flex-1 w-full' />
        {/* <p className='font-semibold mb-1.5'>थप समाचार <span className='text-[22px] font-normal'>↗</span></p> */}
    </div>
}