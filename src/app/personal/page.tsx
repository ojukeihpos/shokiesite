import React, { Suspense } from 'react';
import Link from 'next/link';
import Loading from './loading';

const pageContent = <><div id='titlehead'>
  Personal
  <hr className='profilehr' />
</div><div className='about'>
    <p>Hello! I'm Sophie. I'm known for a lot of different things, so I'll do my best to try and cover all my interests below.</p>
    <div>
      <p className='profilehr text-4xl dark:text-white pt-[1.5rem] underline text-center'>
        Mahjong
      </p>
      <div className='my-2'>
        <p>I started learning Mahjong over the pandemic, and have since become a player at various online and offline locations. I've provided streaming and commentating services to <span className='italic'>The NA Online Mahjong Ladder</span>, an online community that hosts Mahjong tournaments.</p>
      </div>
    </div>
    <p className='profilehr text-4xl dark:text-white pt-[1.5rem] underline text-center'>
      Fighting Games
    </p>
    <p>I've been involved in the Fighting Game Community for as long as I can remember. I got my start with Street Fighter IV, and since then, my love for the genre has lead me to discover new friendships both internationally and locally. I frequented the <span className='italic'>University of Waterloo Fighting Game Club</span> during my time in university, and have traveled internationally for events.</p>
    <p className='profilehr text-4xl dark:text-white pt-[1.5rem] underline text-center'>
      Cosplay
    </p>
    <p>There's not a lot to write about here for cosplay, because it's (unsurprisingly) a very visual medium. I like to cosplay for events, and I try to keep things fresh by not doing the same thing twice.</p>
  </div></>

export default async function Home() {
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