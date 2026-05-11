"use client"
import React, { Suspense, useEffect, useRef } from 'react';
import Link from 'next/link';
import ScrollToTopButton from '../scrollToTop';
import Loading from './loading';

export default function Personal() {
  // 1. Setup the ref to match the HTMLElement of the layout
  const scrollRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scrollElement = document.getElementById('scroll-root');
    if (scrollElement) {
      (scrollRef as any).current = scrollElement;
    }
  }, []);

  // Content block
  const pageContent = (
    <>
      <div id='titlehead'>
        Personal
        <hr className='profilehr' />
      </div>
      <div className='about text-justify'>
        <p className="mb-4">
          Outside of engineering, my time is spent immersed in competitive subcultures. 
          I’m driven by complex systems and high-skill-ceiling games.
        </p>

        <section>
          <p className='profilehr text-4xl dark:text-white pt-[1.5rem] underline text-center'>
            Mahjong
          </p>
          <div className='my-2'>
            <p>
              I began studying Riichi Mahjong during the pandemic and have since transitioned from a casual student to a regular competitor in both online and offline circuits. Beyond playing, I have contributed to the scene as a broadcaster and commentator for <span className='italic'>The North American Online Mahjong Ladder</span>.
            </p>
          </div>
        </section>

        <section>
          <p className='profilehr text-4xl dark:text-white pt-[1.5rem] underline text-center'>
            Fighting Games
          </p>
          <p>
            A long-standing fixture in my life, the Fighting Game Community (FGC) is where I first discovered my passion for competitive play. Since my early days with Street Fighter IV, the genre has allowed me to build a global network of friends. I was an active member of the <span className='italic'>University of Waterloo Fighting Game Club</span> and continue to travel internationally to compete and connect with the community.
          </p>
        </section>

        <section>
          <p className='profilehr text-4xl dark:text-white pt-[1.5rem] underline text-center'>
            Tetris
          </p>
          <p>
            I specialize in competitive modern Tetris, focusing on head-to-head interaction and high-speed efficiency. My involvement extends into community organization; I’ve previously lent my technical and administrative skills to <span className='italic'>Dup Cup</span>, a tournament showcasing the proficiency of virtual entertainers (VTubers) in the sport.
          </p>
        </section>
      </div>
    </>
  );

  return (
    <Suspense fallback={<Loading />}>
      <div className="hidden lg:block">
        <ScrollToTopButton scrollableDivRef={scrollRef} threshold={20} />
        <Link href="/">
          <div className='exit-button clickable'>Back</div>
        </Link>
      </div>
      <div className="lg:contents flex flex-col p-4 lg:p-0">
        {pageContent}
      </div>
    </Suspense>
  );
}