import React, { Suspense } from 'react';
import Link from 'next/link';
import Loading from './loading';

const pageContent = <><div className='shoka__header'>
    <div id='titlehead'>
        Not Software Engineering
    </div>
    <div className='socials__bar'>
        <a className='link' href="mailto:sophie@shokie.xyz">sophie@shokie.xyz</a>
    </div>
    <hr className='profilehr' />
</div>
    <div className='about text-justify'>
        <p className='profilehr text-4xl dark:text-white pt-[1.5rem] underline text-center'>
            Professional Positions
        </p>
        <div className='content-segment py-[1rem]'>
            <div className=''>
                <span className={`dark:text-gray underline flex flex-wrap justify-between`}>
                    <p className='text-xl'>Data Entry Administrator</p>
                    <p className='sm:text-xl'>11/2025</p>
                </span>
                <div>Electric Clash 2025</div>
                <Link href={`https://incendium.gg/`} className='clickable link'><span className='italic'>Incendium Gaming</span></Link>
                <div className='border-l-4 border-blue-400 pl-4 my-2'></div>
            </div>
            <div className='border-l-4 border-black dark:border-[#dad2c7] pl-4'>
                <p>- Responsible for entering and verifying tournament match results, ensuring smoothness and keeping things on schedule</p>
            </div>
        </div>
        <div className='content-segment py-[1rem]'>
            <div className=''>
                <span className={`dark:text-gray underline flex flex-wrap justify-between`}>
                    <p className='text-xl'>Data Entry Administrator</p>
                    <p className='sm:text-xl'>04/2024</p>
                </span>
                <div>Electric Clash 2024</div>
                <Link href={`https://incendium.gg/`} className='clickable link'><span className='italic'>Incendium Gaming</span></Link>
                <div className='border-l-4 border-blue-400 pl-4 my-2'></div>
            </div>
            <div className='border-l-4 border-black dark:border-[#dad2c7] pl-4'>
                <p>- Primarily responsible for entering and verifying tournament match results, ensuring smoothness and keeping things on schedule</p>
                <p>- Secondarily responsible for processing player information to the Social Media team for media graphics</p>
            </div>
        </div>
        <div className='content-segment py-[1rem]'>
            <div className=''>
                <span className={`dark:text-gray underline flex flex-wrap justify-between`}>
                    <p className='text-xl'>Tournament Coordinator and Administrator</p>
                    <p className='sm:text-xl'> 08/2019 - 09/2019</p>
                </span>
                <Link href={"https://www.consolegamingleague.com/"} className='clickable link'><span className='italic'>Valkyries - Console Gaming League (CGL)</span></Link>
                <div className='border-l-4 border-blue-400 pl-4 my-2'></div>
            </div>
            <div className='border-l-4 border-black dark:border-[#dad2c7] pl-4'>
                <p>- Oversaw tournament brackets and coordinated matches to play on a live broadcast</p>
                <p>- Acted as a representative and consultant for LGBTQ+ presence in eSports</p>
            </div>
        </div>
        <p className='profilehr text-4xl dark:text-white underline text-center'>Other</p>
        <p className='border-l-4 border-black dark:border-[#dad2c7] pl-4 my-2'>- <span className='italic'>Wilfrid Laurier University - StartHacks</span> Founding Team Member, a university-based hackathon</p>
        <p className='border-l-4 border-black dark:border-[#dad2c7] pl-4 my-2'>- <span className='italic'>Laurier Pride Society</span> Co-President and Founding Member, a group primarily focused on spreading awareness and providing a safe space for queer students</p>
        <p className='border-l-4 border-black dark:border-[#dad2c7] pl-4 my-2'>- <span className='italic'>University of Waterloo Fighting Games Club</span> Accountant</p>
    </div></>

export default function Other() {
    return <Suspense fallback={<Loading />}>
        <div className="lg:hidden flex flex-col min-h-full h-screen dark:bg-[#3c3d37]">
            <div id='mobile-main-content' className="mt-[3em] mx-auto p-4">
                {pageContent}
            </div>
        </div>
        <div id="desktop-component" className="hidden lg:inline">
            <Link prefetch href="/">
                <div className='exit-button clickable mr-5'>Back</div>
            </Link>
            <div className='content'>
                <div className='shoka__header' />
                <div className='page-content mr-5'>
                    {pageContent}
                </div>
            </div>
        </div>
    </Suspense>
}