"use client"
import { Suspense, useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollToTopButton from '../scrollToTop';
import Loading from './loading';
import arrowsImg from '../assets/images/arrows.png';

export default function Personal() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showIndicator, setShowIndicator] = useState(false);

  const updateIndicatorVisibility = useCallback(() => {
    const node = scrollRef.current;
    if (node) {
      const isScrollable = node.scrollHeight > node.clientHeight + 10;
      const isAtTop = node.scrollTop < 20;
      setShowIndicator(isScrollable && isAtTop);
    }
  }, []);

  const onRefChange = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      scrollRef.current = node;
      
      updateIndicatorVisibility();

      node.addEventListener('scroll', updateIndicatorVisibility);
      
      setTimeout(updateIndicatorVisibility, 100);
    }
  }, [updateIndicatorVisibility]);

  useEffect(() => {
    window.addEventListener('resize', updateIndicatorVisibility);
    
    return () => {
      window.removeEventListener('resize', updateIndicatorVisibility);
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', updateIndicatorVisibility);
      }
    };
  }, [updateIndicatorVisibility]);

  const pageContent = (
    <>
      <div id='titlehead'>Personal</div>
      <hr className='profilehr' />
      <div className='about text-justify'>
        <p className="mb-4">
          Outside of engineering, my time is spent immersed in competitive subcultures.
          I’m driven by complex systems and high-skill-ceiling games.
        </p>
        <section>
          <p className='profilehr text-4xl dark:text-white pt-[1.5rem] underline text-center'>Mahjong</p>
          <div className='my-2'>
            <p>
              I began studying Riichi Mahjong during the pandemic and have since transitioned from a casual student to a regular competitor...
            </p>
          </div>
        </section>
        <section>
          <p className='profilehr text-4xl dark:text-white pt-[1.5rem] underline text-center'>Fighting Games</p>
          <p>
            A long-standing fixture in my life, the Fighting Game Community (FGC) is where I first discovered my passion for competitive play...
          </p>
        </section>
        <section>
          <p className='profilehr text-4xl dark:text-white pt-[1.5rem] underline text-center'>Tetris</p>
          <p>
            I specialize in competitive modern Tetris, focusing on head-to-head interaction and high-speed efficiency...
          </p>
        </section>
      </div>
    </>
  );

  return (
    <Suspense fallback={<Loading />}>
      <div className="relative min-h-screen w-full">
        <div className="page-content" ref={onRefChange}>
          {pageContent}
        </div>

        <div className="hidden lg:block">
          <div className="viewport-control-layer">
            <div className="viewport-control-bar">
              <Link href="/">
                <div className='exit-button clickable'>
                  <span className="exit-button-text">Back</span>
                  <div className="exit-button-arrow">
                    <Image
                      src={arrowsImg}
                      alt="Back"
                      style={{ transform: 'scaleX(-1)', objectFit: 'contain' }}
                      priority
                    />
                  </div>
                </div>
              </Link>
              <div className={`scroll-indicator ${!showIndicator ? 'fade-out' : ''}`}>
                <div className="mouse-icon">
                  <div className="wheel"></div>
                </div>
                <div className="scroll-arrow"></div>
              </div>

              <div className="top-button-wrapper">
                <ScrollToTopButton scrollableDivRef={scrollRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}