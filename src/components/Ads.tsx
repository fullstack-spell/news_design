import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Ads = () => {
    return (
        <div className="bannergroup uk-text-center my-5 bg-black">
            <div className="uk-text-center">
                <div className="banneritem home_ad_below_menu_banneritem">

                    <Link href="https://www.ncell.com.np/en/individual/packs-and-plans" target="_blank">

                        <Image alt='' src="https://nepalkhabar.prixacdn.net/media/advertisements/nepalkhabar_900x100_1_5XKJeI1HF1.gif" className="uk-visible@s h-auto w-screen" height={100} width={100} />

                    </Link>

                </div>
            </div>
        </div>
    )
}

export const RowAds = () => {
    return <div className="banneritem uk-text-center">

        <a href="https://www.facebook.com/bluebirdinternationalclinic?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            <Image src="https://nepalkhabar.prixacdn.net/media/advertisements/My_Video_bxcWbuUTvy.gif" alt="Bluebird Clinic" className="h-auto w-full" height={100} width={100} />
        </a>

    </div>
}

export default Ads