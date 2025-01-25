import React from 'react';
import Link from 'next/link';

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
    <p>I've been involved in the Fighting Game Community for as long as I can remember. I got my start with Street Fighter IV, and since then, my love for the genre has lead me to discover new friendships both internationally and locally. I frequented the <span className='italic'>University of Waterloo Fighting Game Club</span> during my time in university, and have traveled to the US for events.</p>
    <p>I got the opportunity to work under <Link href={"https://www.consolegamingleague.com/"} className='clickable link'><span className='italic'>Console Gaming League (CGL)</span></Link> as a tournament organizer and administration. While short lived, it was where I got my bearings and understanding of tournament workings.</p>
    <p>I also got the opportunity to work for <Link href={"https://incendium.gg/"} className='clickable link'><span className='italic'>Incendium Gaming</span></Link> doing data entry (and, unofficially, a lot of other administrative duties) for Electric Clash 2024.</p>
    <p className='profilehr text-4xl dark:text-white pt-[1.5rem] underline text-center'>
      Cosplay
    </p>
    <p>There's not a lot to write about here for cosplay, because it's (unsurprisingly) a very visual medium. I like to cosplay for events, and I try to keep things fresh by not doing the same thing twice.</p>
  </div></>

export default function Home() {
  return <div>
    <div id="mobile-component" className="lg:hidden">
      <div className='mobile-content min-h-screen h-[100%] p-10'>
        {pageContent}
      </div>
    </div>
    <div id="desktop-component" className="hidden lg:inline">
      <Link prefetch href="/">
        <div className='exit-button clickable mr-5'>Exit</div>
      </Link>
      <div className='content'>
        <div className='shoka__header' />
        <div className='page-content mr-5'>
          {pageContent}
        </div>
      </div>
    </div>
  </div>
}
