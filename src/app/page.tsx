"use client"
import { Suspense, useRef, useState, useEffect } from "react"
import Loading from "./loading"

const PageContent = () => (
  <>
    <div className='text-black dark:text-[#eeeeee] space-y-4'>
      <p className="text-center font-semibold tracking-widest uppercase text-[#4d00f2] dark:text-[#b7fbff]">
        Software Developer. Entertainer. Competitor. Creator.
      </p>
      <p className="text-center opacity-70 italic text-sm">
        Pick a page on the left to see more.
      </p>
    </div>

    <div className="text-center pt-8 pb-2 font-bold uppercase tracking-widest text-[#AE445A]">
      Latest_Works
    </div>
    <hr className="profilehr mb-6" />

    <div className="flex flex-col gap-6">
      <div className="w-full">
        <div className="border-2 border-black dark:border-[#868583] p-1 bg-white/5 shadow-[4px_4px_0px_0px_rgba(77,0,242,0.5)]">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/H1UaDnOxLLs?si=s2hZJn37dI3TtkyB"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-center pt-2 text-xs font-medium uppercase dark:text-[#eeeeee]">
          [ LOG_01: Video Editing Module ]
        </p>
      </div>

      <div className="w-full border-2 border-dashed border-[#86858350] p-8 flex flex-col items-center justify-center dark:text-[#eeeeee]">
        <p className="text-[#c93e25] font-bold tracking-tighter">PROJECT_BETA.EXE</p>
        <p className="text-[10px] opacity-50 uppercase mt-1">Currently in development...</p>
      </div>
    </div>
  </>
);

export default function Page() {
  const [showIndicator, setShowIndicator] = useState(true);
  const topSentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowIndicator(entry.isIntersecting);
      },
      { 
        threshold: [0, 1.0],
        rootMargin: "-10px 0px 0px 0px"
      }
    );

    const currentSentinel = topSentinelRef.current;

    if (currentSentinel) {
      observer.observe(currentSentinel);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      <div className="page-content">
        <div ref={topSentinelRef} className="h-px w-full absolute top-0 pointer-events-none" />
        
        <div id="titlehead">Welcome!</div>
        <hr className='profilehr' />
        <div className='about'>
          <PageContent />
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="viewport-control-layer">
          <div className="viewport-control-bar">
            <div className={`scroll-indicator ${!showIndicator ? 'fade-out' : ''}`}>
              <div className="mouse-icon">
                <div className="wheel"></div>
              </div>
              <div className="scroll-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}