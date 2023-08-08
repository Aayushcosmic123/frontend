import Link from 'next/link';
import React from 'react'

const SocialTree = ({social}) => {
    const {
        facebook,
        instagram,
        twitter,
        linkedin,
        github,
        youtube
    } = social;
    return (
        <>
            <div className="social flex flex-row justify-center my-4">
                <Link className='bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none' target='_blank' href={`${facebook}`}>
                    <img className='w-6' src="/svg/facebook.svg"/>
                </Link>
                <Link className='bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none' target='_blank' href={`${instagram}`}>
                    <img className='w-6' src="/svg/instagram.svg"/>
                </Link>
                <Link className='bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none' target='_blank' href={`${twitter}`}>
                    <img className='w-6' src="/svg/twitter.svg"/>
                </Link>
                <Link className='bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none' target='_blank' href={`${linkedin}`}>
                    <img className='w-6' src="/svg/linkedin.svg"/>
                </Link>
                <Link className='bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none' target='_blank' href={`${github}`}>
                    <img className='w-6' src="/svg/github.svg"/>
                </Link>
                <Link className='bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none' target='_blank' href={`${youtube}`}>
                    <img className='w-6' src="/svg/youtube.svg"/>
                </Link>
            </div>
        </>
    )
}

export default SocialTree