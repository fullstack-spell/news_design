import { RowAds } from '@/components/Ads'
import Comments from '@/components/Comments'
import { HeadingTwo } from '@/components/Heading'
import { ListNews } from '@/components/NewsTypes'
import ShareBtn from '@/components/ShareBtn'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='max-w-[1200px] lg:px-5 px-2 container lg:flex-row flex-col flex gap-5 mt-10'>
            <div className='flex lg:w-[calc(100%-300px)] w-full flex-col gap-5'>
                <h2>रास्वपा सभापति लामिछाने रुपन्देही आउँदै</h2>
                <div className='py-3 border-y flex items-center gap-5 justify-between lg:flex-row flex-col'>
                    <p >  मङ्गलबार, ०८ माघ २०८१, १६ : ०५</p>
                    <ShareBtn />
                </div>
                <Image src='https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png' alt='main_news' width={100} height={100} className='w-full rounded shadow-md shadow-theme-grey' />
                <p className='text-gray-700 text-lg'>
                    रास्वपा लुम्बिनी प्रदेश उपाध्यक्ष शालिकराम घिमिरेले मंगलबार भैरहवा आउने र बुधबार अदालतमा जाने जानकारी दिए । उनले भने, ‘हामी उहाँको स्वागतका लागि विमानस्थलमा छौँ । उहाँ आज बाहिर बस्नु हुन्छ र भोलि अदालत जानुहुन्छ ।’ <br /><br />
                    रास्वपा लुम्बिनी प्रदेश उपाध्यक्ष शालिकराम घिमिरेले मंगलबार भैरहवा आउने र बुधबार अदालतमा जाने जानकारी दिए । उनले भने, ‘हामी उहाँको स्वागतका लागि विमानस्थलमा छौँ । उहाँ आज बाहिर बस्नु हुन्छ र भोलि अदालत जानुहुन्छ ।’
                    रास्वपा लुम्बिनी प्रदेश उपाध्यक्ष शालिकराम घिमिरेले मंगलबार भैरहवा आउने र बुधबार अदालतमा जाने जानकारी दिए । उनले भने, ‘हामी उहाँको स्वागतका लागि विमानस्थलमा छौँ । उहाँ आज बाहिर बस्नु हुन्छ र भोलि अदालत जानुहुन्छ ।’
                    रास्वपा लुम्बिनी प्रदेश उपाध्यक्ष शालिकराम घिमिरेले मंगलबार भैरहवा आउने र बुधबार अदालतमा जाने जानकारी दिए । उनले भने, ‘हामी उहाँको स्वागतका लागि विमानस्थलमा छौँ । उहाँ आज बाहिर बस्नु हुन्छ र भोलि अदालत जानुहुन्छ ।’<br /><br />
                    रास्वपा लुम्बिनी प्रदेश उपाध्यक्ष शालिकराम घिमिरेले मंगलबार भैरहवा आउने र बुधबार अदालतमा जाने जानकारी दिए । उनले भने, ‘हामी उहाँको स्वागतका लागि विमानस्थलमा छौँ । उहाँ आज बाहिर बस्नु हुन्छ र भोलि अदालत जानुहुन्छ ।’
                    रास्वपा लुम्बिनी प्रदेश उपाध्यक्ष शालिकराम घिमिरेले मंगलबार भैरहवा आउने र बुधबार अदालतमा जाने जानकारी दिए । उनले भने, ‘हामी उहाँको स्वागतका लागि विमानस्थलमा छौँ । उहाँ आज बाहिर बस्नु हुन्छ र भोलि अदालत जानुहुन्छ ।’
                    रास्वपा लुम्बिनी प्रदेश उपाध्यक्ष शालिकराम घिमिरेले मंगलबार भैरहवा आउने र बुधबार अदालतमा जाने जानकारी दिए । उनले भने, ‘हामी उहाँको स्वागतका लागि विमानस्थलमा छौँ । उहाँ आज बाहिर बस्नु हुन्छ र भोलि अदालत जानुहुन्छ ।’
                    रास्वपा लुम्बिनी प्रदेश उपाध्यक्ष शालिकराम घिमिरेले मंगलबार भैरहवा आउने र बुधबार अदालतमा जाने जानकारी दिए । उनले भने, ‘हामी उहाँको स्वागतका लागि विमानस्थलमा छौँ । उहाँ आज बाहिर बस्नु हुन्छ र भोलि अदालत जानुहुन्छ ।’<br /><br />
                    रास्वपा लुम्बिनी प्रदेश उपाध्यक्ष शालिकराम घिमिरेले मंगलबार भैरहवा आउने र बुधबार अदालतमा जाने जानकारी दिए । उनले भने, ‘हामी उहाँको स्वागतका लागि विमानस्थलमा छौँ । उहाँ आज बाहिर बस्नु हुन्छ र भोलि अदालत जानुहुन्छ ।’
                </p>

                <Comments />

                <HeadingTwo />
                <section id='news_list' className='flex items-center w-full gap-5 overflow-x-auto'>
                    <ListNews className='min-w-[300px]' />
                    <ListNews className='min-w-[300px]' />
                    <ListNews className='min-w-[300px]' />
                    <ListNews className='min-w-[300px]' />
                    <ListNews className='min-w-[300px]' />
                    <ListNews className='min-w-[300px]' />
                    <ListNews className='min-w-[300px]' />
                    <ListNews className='min-w-[300px]' />
                    <ListNews className='min-w-[300px]' />
                    <ListNews className='min-w-[300px]' />
                    <ListNews className='min-w-[300px]' />
                    <ListNews className='min-w-[300px]' />
                    <ListNews className='min-w-[300px]' />
                    <ListNews className='min-w-[300px]' />
                    <ListNews className='min-w-[300px]' />
                    <ListNews className='min-w-[300px]' />
                </section>
            </div>
            <div className='w-[300px] flex flex-col gap-5'>
                <RowAds />
                <RowAds />
                <RowAds />
                <RowAds />
                <RowAds />
                <RowAds />
                <RowAds />
            </div>
        </div>
    )
}

export default page