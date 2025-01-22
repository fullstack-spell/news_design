import { ListNews } from '@/components/NewsTypes'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <main className='max-w-[1200px] lg:px-5 px-2 container flex flex-col mt-10 gap-10'>
            <section id='main_news' className='flex gap-5 lg:flex-row flex-col justify-between min-h-[500px]'>
                <Image src='https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png' alt='main_news' width={100} height={100} className='w-full flex-1 rounded shadow-md shadow-theme-grey' />
                <div className='flex flex-col gap-3 flex-1 w-full bg-white shadow-lg p-5 justify-center  border shadow-theme-grey rounded'>
                    <h2>तुवाँलोले ढाकियो काठमाडौँ उपत्यका, तस्बिरहरू</h2>
                    <p className='line-clamp-4'>काठमाडौँ । गत असोजको सामान्य वर्षापछि काठमाडौँ उपत्यकामा छिटपुट बाहेक पानी पर्न सकेको छैन । जसका कारण यो हिउँदमा काठमाडौँ उपत्यकाको वातावरण निरन्तर प्रदूषित छ ।  मंसिरयता माघको उत्तरार्धसम्म आइपुग्दा पनि वर्षा हुन नसक्दा ...</p>
                    <div className='flex items-center gap-2 font-semibold'>
                        <Image src={'https://nepalkhabar.prixacdn.net/media/albums/bibaha-ko-umer-story_FYl8eQxasx.png'} alt='' width={80} height={70} className={'size-[30px] overflow-hidden rounded-full'} />
                        <p>गीता चिमोरिया</p>
                    </div>
                </div>
            </section>

            <section id='news_list' className='grid gap-5 lg:grid-cols-4 grid-cols-1'>
                <ListNews />
                <ListNews />
                <ListNews />
                <ListNews />
                <ListNews />
                <ListNews />
                <ListNews />
                <ListNews />
            </section>

            <section className='flex items-center justify-center gap-5'>
                <span className=' flex pb-1 text-xl font-semibold border px-2 shadow-md rounded-lg'> {'<'} </span>
                <span className='flex items-center text-lg font-medium gap-5'>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>...</span>
                </span>
                <span className=' flex pb-1 text-xl font-semibold border px-2 shadow-md rounded-lg'> {'>'} </span>
            </section>
        </main>
    )
}

export default page