import Image from 'next/image'
import React from 'react'

export const RowNews = ({ size }: { size?: string }) => {
    return <div className='flex flex-col divide-y gap-3'>
        <div className='flex items-center gap-3'>
            <Image src='https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png' alt='' width={80} height={200} objectPosition='center' objectFit='fill' className={`${size ? size : 'w-[80px] h-[70px]'} rounded`} />
            <h5 className='flex-1'>बाक्लो हुस्सु लाग्दा नेपालगन्ज विमानस्थलबाट हुने उडान ठप्प</h5>
        </div>
        <div className='flex items-center gap-3 pt-3'>
            <Image src='https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png' alt='' width={80} height={70} className={`${size ? size : 'w-[80px] h-[70px]'} rounded`} />
            <h5 className='flex-1'>बाक्लो हुस्सु लाग्दा नेपालगन्ज विमानस्थलबाट हुने उडान ठप्प</h5>
        </div>
        <div className='flex items-center gap-3 pt-3'>
            <Image src='https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png' alt='' width={80} height={70} className={`${size ? size : 'w-[80px] h-[70px]'} rounded`} />
            <h5 className='flex-1'>बाक्लो हुस्सु लाग्दा नेपालगन्ज विमानस्थलबाट हुने उडान ठप्प</h5>
        </div>
        <div className='flex items-center gap-3  pt-3'>
            <Image src='https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png' alt='' width={80} height={70} className={`${size ? size : 'w-[80px] h-[70px]'} rounded`} />
            <h5 className='flex-1'>बाक्लो हुस्सु लाग्दा नेपालगन्ज विमानस्थलबाट हुने उडान ठप्प</h5>
        </div>
        <div className='flex items-center gap-3  pt-3'>
            <Image src='https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png' alt='' width={80} height={70} className={`${size ? size : 'w-[80px] h-[70px]'} rounded`} />
            <h5 className='flex-1'>बाक्लो हुस्सु लाग्दा नेपालगन्ज विमानस्थलबाट हुने उडान ठप्प</h5>
        </div>
    </div>
}

export const RowImageNews = () => {
    return <div className='flex flex-col gap-5'>
        <div className='flex flex-col'>
            <Image src='https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png' alt='' width={100} height={100} className='rounded w-full max-h-[300px] ' />
            <h3 className='mt-4 mb-1 flex-1'>बाक्लो हुस्सु लाग्दा नेपालगन्ज विमानस्थलबाट हुने उडान ठप्प</h3>
            <p>गीता चिमोरिया</p>
        </div>
    </div>
}

export const ListNews = () => {
    return <div className={`flex flex-col gap-2 max-w-[400px] w-full min-w-[250px]`}>
        <Image src='https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png' alt='' width={2000} height={200} className='rounded w-full h-[180px]' />
        <h4>बाक्लो हुस्सु लाग्दा नेपालगन्ज विमानस्थलबाट हुने उडान ठप्प</h4>
    </div>
}

export const BannerNews = () => {
    return <div className='relative bg-black'>
        <Image src='https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png' alt='' width={200} height={200} className='rounded w-full max-h-[400px] opacity-70' />

        <h3 className='lg:bg-transparent bg-theme-black lg:text-[2.5rem] leading-tight text-white lg:absolute bottom-0 p-4 w-full '>बाक्लो हुस्सु लाग्दा नेपालगन्ज विमानस्थलबाट हुने उडान ठप्प</h3>
    </div>
}

export const RowTextNews = ({ showImage }: { showImage?: boolean }) => {
    return <div className='gap-3 flex flex-col divide-y'>
        <div className='flex items-start gap-3'>
            {showImage && <Image src='https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png' alt='' width={100} height={100} className='rounded-full size-[70px] overflow-hidden' />}
            <div>
                <h5>बाक्लो हुस्सु लाग्दा नेपालगन्ज विमानस्थलबाट हुने उडान ठप्प</h5>
                <p className='font-medium mt-1 text-sm'>विमानस्थलबाट</p>
            </div>
        </div>
        <div className='flex items-start gap-3 pt-3'>
            {showImage && <Image src='https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png' alt='' width={100} height={100} className='rounded-full size-[70px] overflow-hidden' />}
            <div>
                <h5>बाक्लो हुस्सु लाग्दा नेपालगन्ज विमानस्थलबाट हुने उडान ठप्प</h5>
                <p className='font-medium mt-1 text-sm'>विमानस्थलबाट</p>
            </div>
        </div>
        <div className='flex items-start gap-3 pt-3'>
            {showImage && <Image src='https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png' alt='' width={100} height={100} className='rounded-full size-[70px] overflow-hidden' />}
            <div>
                <h5>बाक्लो हुस्सु लाग्दा नेपालगन्ज विमानस्थलबाट हुने उडान ठप्प</h5>
                <p className='font-medium mt-1 text-sm'>विमानस्थलबाट</p>
            </div>
        </div>
    </div>
}

export const BannerNewsTwo = ({ reverse }: { reverse?: boolean }) => {
    return <div className={`flex items-center lg:flex-row flex-col bg-theme-red rounded ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <Image src='https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png' alt='' width={200} height={200} className='rounded flex-1 w-full overflow-hidden h-[400px]' />

        <div className='flex flex-1 w-full p-4 flex-col gap-2'>
            <h3 className=' text-white'>बाक्लो हुस्सु लाग्दा नेपालगन्ज विमानस्थलबाट हुने उडान ठप्प</h3>
            <p className=' text-white'>बाक्लो हुस्सु लाग्दा नेपालगन्ज विमानस्थलबाट हुने उडान ठप्प</p>
        </div>
    </div>
}

export const CoverImageNews = () => {
    return <div className='w-full relative bg-black rounded'>
        <Image src='https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png' alt='' width={200} height={200} className='w-full h-[400px]  overflow-hidden  object-cover object-center opacity-70' />
        <p className='text-white font-semibold  px-3 absolute bottom-3'>बाक्लो हुस्सु लाग्दा नेपालगन्ज विमानस्थलबाट हुने उडान ठप्प</p>
    </div>
}