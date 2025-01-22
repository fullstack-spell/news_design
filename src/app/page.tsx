import Ads, { RowAds } from "@/components/Ads";
import FeatureNews from "@/components/FeatureNews";
import { HeadingMain, HeadingTwo } from "@/components/Heading";
import { BannerNews, BannerNewsTwo, CoverImageNews, ListNews, RowImageNews, RowNews, RowTextNews } from "@/components/NewsTypes";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 container  items-center max-w-[1200px] lg:px-5 px-2">

      <Ads />

      <section id="feature_news" className="flex flex-col items-center gap-5">
        <FeatureNews news="सिंहदरबारबाट प्रधानमन्त्रीले आज  ‘सगरमाथा संवाद’ घोषणा गर्ने" />
      </section>

      <Ads />

      <section id="feature_imagenews" className="flex flex-col items-center gap-5">
        <FeatureNews showImage news="सिंहदरबारबाट प्रधानमन्त्रीले आज  ‘सगरमाथा संवाद’ घोषणा गर्ने" />
      </section>

      <section id="row_news" className="flex w-full flex-col border-t items-center gap-5">
        <Ads />
        <div className="mb-5 w-full">
          <HeadingTwo />
        </div>
        <div className='grid  lg:grid-cols-12 grid-cols-1 gap-5 place-content-center w-full'>
          <div className='lg:col-span-3'><RowNews /></div>
          <div className='lg:col-span-6'><RowImageNews /></div>
          <div className='lg:col-span-3 flex flex-col gap-8'>
            <RowAds /> <RowAds />
          </div>
        </div>
      </section>

      <Ads />

      <section id="list_news" className="flex w-full flex-col gap-5 items-center">
        <HeadingMain />
        <div className='grid lg:grid-cols-4 grid-cols-1 gap-5 place-content-center w-full'>
          <ListNews />
          <ListNews />
          <ListNews />
          <ListNews />
          <ListNews />
          <ListNews />
          <ListNews />
          <ListNews />
        </div>
      </section>

      <Ads />

      <section id="banner_news" className="flex w-full flex-col items-center">
        <div className="mb-5 w-full">
          <HeadingMain />
        </div>
        <div className='grid lg:grid-cols-12 grid-cols-1 gap-5 place-content-center w-full'>
          <div className="lg:col-span-8 flex flex-col gap-5">
            <BannerNews />
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
              <ListNews />
              <ListNews />
              <ListNews />
              <ListNews />
              <ListNews />
              <ListNews />
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-8">
            <RowAds /> <RowAds /> <RowAds />
          </div>
        </div>
      </section>

      <Ads />

      <section id="banner_list_news" className="flex w-full flex-col items-center">
        <div className='grid lg:grid-cols-12 grid-cols-1 gap-5 place-content-center w-full'>

          <div className="lg:col-span-8 flex flex-col gap-5">
            <HeadingTwo />
            <BannerNews />
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
              <ListNews />
              <ListNews />
              <ListNews />
            </div>
          </div>
          <div className="lg:col-span-4 w-full flex flex-col gap-5">
            <HeadingTwo />
            <RowTextNews showImage />
            <HeadingTwo />
            <RowTextNews />
          </div>
        </div>
      </section>

      <Ads />

      <section id="banner_list_news_two" className="flex w-full flex-col items-center">
        <div className='grid lg:grid-cols-12 grid-cols-1 gap-5 place-content-center w-full'>
          <div className="lg:col-span-8 flex flex-col gap-5">
            <HeadingTwo />
            <BannerNewsTwo />
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
              <ListNews />
              <ListNews />
              <ListNews />
            </div>
          </div>
          <div className="lg:col-span-4 w-full flex flex-col gap-5">
            <HeadingTwo />
            <RowTextNews showImage />
            <HeadingTwo />
            <RowTextNews />
          </div>
        </div>
      </section>

      <section id="banner_list_news_three" className="flex w-full gap-5 flex-col items-center">
        <HeadingMain />
        <div className='grid lg:grid-cols-12 grid-cols-1 gap-5 place-content-center w-full'>
          <div className="lg:col-span-8 flex flex-col gap-5">
            <BannerNewsTwo reverse />
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
              <ListNews />
              <ListNews />
              <ListNews />
            </div>
          </div>
          <div className="lg:col-span-4 w-full flex flex-col gap-5">
            <RowNews size="w-[130px] h-[90px]" />
          </div>
        </div>
      </section>

      <section id="cover_image_news" className="flex flex-col gap-5">
        <HeadingMain />
        <div className="grid w-full lg:grid-cols-4 grid-cols-1 gap-10 place-content-center">
          <CoverImageNews />
          <CoverImageNews />
          <CoverImageNews />
          <CoverImageNews />
        </div>
      </section>


      <section id="videos" className="flex flex-col gap-5 w-full">
        <HeadingMain />
        <div className="flex items-start lg:flex-row flex-col w-full h-full gap-5 bg-theme-black p-4 rounded">
          <iframe className="rounded flex-1 w-full lg:min-h-[435px] h-full" src="https://www.youtube.com/embed/S980-z1qx3g?si=nm3jL2vcPFZEc4va" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          <div className="max-w-[400px] text-white">
            <RowNews size="w-[130px] h-[90px]" />
          </div>
        </div>
      </section>
    </main>
  );
}
