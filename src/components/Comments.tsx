import React from 'react'

const Comments = () => {
    return (
        <div className='flex flex-col gap-5 mt-10'>
            <textarea className='border rounded-lg shadow-sm p-4' placeholder='write a comment...' rows={4} name="" id="" />
            <div className='flex justify-end'>
                <button className='rounded-lg px-5 py-1 bg-theme-red text-white text-lg'>Send</button>
            </div>
        </div>
    )
}

export default Comments