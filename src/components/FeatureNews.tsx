import Image from 'next/image'
import React from 'react'

const FeatureNews = ({ news, showImage }: { news: string, showImage?: boolean }) => {
    return (
        <div className='flex flex-col gap-8 rounded border text-center border-theme-grey  p-5'>
            <h2>{news}</h2>
            {showImage && <>
                <p className='font-semibold text-lg'>गीता चिमोरिया</p>
                <Image src={'https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png'} alt='feature_news_image' width={200} height={200} className='w-full max-h-fit object-contain object-center rounded' />
            </>}
        </div>
    )
}

export default FeatureNews