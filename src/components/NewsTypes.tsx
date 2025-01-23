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
            <div className='flex items-center gap-2 font-semibold'>
                <Image src={'https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png'} alt='' width={80} height={70} className={'size-[40px] overflow-hidden rounded-full'} />
                <p>गीता चिमोरिया</p>
            </div>
        </div>
    </div>
}

export const ListNews = (className: { className?: string }) => {
    return <div className={`flex flex-col gap-2 max-w-[400px]  w-full ${className ? className?.className : ''}`}>
        <Image src="https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png" alt='' width={200} height={200} className='rounded w-full h-[200px]' />
        <h4>बाक्लो हुस्सु लाग्दा नेपालगन्ज विमानस्थलबाट हुने उडान ठप्प</h4>
    </div>
}

export const BannerNews = () => {
    return <div className='relative z-10 bg-black'>
        <Image src='https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png' alt='' width={200} height={200} className='rounded w-full max-h-[400px] opacity-70' />

        <div className='lg:bg-transparent bg-theme-black lg:absolute bottom-0 p-4 w-full'>
            <h3 className=' lg:text-[2.5rem] leading-tight text-white '>बाक्लो हुस्सु लाग्दा नेपालगन्ज विमानस्थलबाट हुने उडान ठप्प</h3>
            <div className='flex items-center mt-1 gap-2 font-semibold'>
                <Image src={'https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png'} alt='' width={80} height={70} className={'size-[30px] overflow-hidden rounded-full'} />
                <p className='text-white'>गीता चिमोरिया</p>
            </div>
        </div>
    </div>
}

export const RowTextNews = ({ showImage }: { showImage?: boolean }) => {
    return <div className='gap-3 flex flex-col divide-y'>
        <div className='flex items-start gap-3'>
            {showImage && <Image src='https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png' alt='' width={100} height={100} className='rounded-full size-[70px] overflow-hidden' />}
            <div className='flex flex-col gap-2'>
                <h5>बाक्लो हुस्सु लाग्दा नेपालगन्ज विमानस्थलबाट हुने उडान ठप्प</h5>
                <div className='flex items-center gap-2 font-semibold'>
                    <Image src={'https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png'} alt='' width={80} height={70} className={'size-[30px] overflow-hidden rounded-full'} />
                    <p>गीता चिमोरिया</p>
                </div>
            </div>
        </div>
        <div className='flex items-start gap-3 pt-3'>
            {showImage && <Image src='https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png' alt='' width={100} height={100} className='rounded-full size-[70px] overflow-hidden' />}
            <div className='flex flex-col gap-2'>
                <h5>बाक्लो हुस्सु लाग्दा नेपालगन्ज विमानस्थलबाट हुने उडान ठप्प</h5>
                <div className='flex items-center gap-2 font-semibold'>
                    <Image src={'https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png'} alt='' width={80} height={70} className={'size-[30px] overflow-hidden rounded-full'} />
                    <p>गीता चिमोरिया</p>
                </div>
            </div>
        </div>
        <div className='flex items-start gap-3 pt-3'>
            {showImage && <Image src='https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png' alt='' width={100} height={100} className='rounded-full size-[70px] overflow-hidden' />}
            <div className='flex flex-col gap-2'>
                <h5>बाक्लो हुस्सु लाग्दा नेपालगन्ज विमानस्थलबाट हुने उडान ठप्प</h5>
                <div className='flex items-center gap-2 font-semibold'>
                    <Image src={'https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png'} alt='' width={80} height={70} className={'size-[30px] overflow-hidden rounded-full'} />
                    <p>गीता चिमोरिया</p>
                </div>
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
            <div className='flex items-center gap-2 mt-1 font-semibold'>
                <Image src={'https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png'} alt='' width={80} height={70} className={'size-[30px] overflow-hidden rounded-full'} />
                <p className='text-white'>गीता चिमोरिया</p>
            </div>
        </div>
    </div>
}

export const CoverImageNews = () => {
    return <div className='w-full relative bg-black rounded'>
        <Image src='https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png' alt='' width={200} height={200} className='w-full h-[400px]  overflow-hidden  object-cover object-center opacity-70' />
        <p className='text-white font-semibold  px-3 absolute bottom-3'>बाक्लो हुस्सु लाग्दा नेपालगन्ज विमानस्थलबाट हुने उडान ठप्प</p>
    </div>
}