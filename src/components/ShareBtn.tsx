'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';
import { MdFacebook } from 'react-icons/md';

const ShareBtn = () => {
    const [url, setUrl] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setUrl(window.location.href);
        }
    }, []);

    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    const whatappsUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent('Check it out!')}`;

    return (
        <div className='flex items-center gap-5'>
            <h4>Share : </h4>
            <Link href={facebookUrl} target='_black'>
                <MdFacebook size={28} className='bg-blue-500 text-white rounded-full p-1' />
            </Link>
            <Link href={whatappsUrl} target='_black'>
                <FaWhatsapp size={28} className='bg-green-500 text-white rounded-full p-1' />
            </Link>
            <Link href={twitterUrl} target='_black'>
                <FaTwitter size={28} className='bg-blue-500 text-white rounded-full p-1' />
            </Link>


        </div>
    )
}

export default ShareBtn