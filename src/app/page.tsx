"use client"
import { Suspense, useRef, useState, useEffect } from "react"
import Loading from "./loading"
import Link from "next/link";
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumePDF } from './components/ResumePDF';


const PageContent = () => (
  <Suspense fallback={<Loading />}>
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

      <div className="w-full relative group">
        <div className="border-2 border-black dark:border-[#868583] p-4 bg-white/5 shadow-[4px_4px_0px_0px_rgba(255,177,0,0.5)] flex flex-col items-center justify-center transition-all hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(255,177,0,0.6)]">

          <div className="absolute top-2 right-2 opacity-30 text-[8px] font-mono uppercase tracking-widest hidden sm:block">
            System_ID: SB_01_PROD
          </div>

          <p className="text-[#FFB100] font-bold tracking-tighter text-lg uppercase italic">
            <Link href="https://points.shokie.xyz" className="clickable">Scrandle_Bot.py</Link>

          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-2 mb-3">
            <div className="flex items-center gap-1.5 text-[10px] px-2 py-0.5 border border-[#FFB100]/30 rounded bg-[#FFB100]/5 uppercase font-bold text-[#FFB100]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB100] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FFB100]"></span>
              </span>
              Live_Status: Active
            </div>
            <div className="text-[10px] px-2 py-0.5 border border-[#eeeeee]/20 rounded uppercase font-bold text-[#eeeeee]/70">
              Users: 50+
            </div>
            <div className="text-[10px] px-2 py-0.5 border border-[#eeeeee]/20 rounded uppercase font-bold text-[#eeeeee]/70">
              Data: AWS_DYNAMO
            </div>
          </div>

          <p className="text-xs text-center opacity-80 max-w-sm dark:text-[#eeeeee] leading-relaxed">
            A hybrid-edge synchronization engine bridging local <strong>Python</strong> automation with cloud persistence. Delivers sub-100ms state updates via a <strong>WebSocket mesh</strong>.
          </p>
        </div>

        <p className="text-center pt-2 text-xs font-medium uppercase opacity-60 dark:text-[#eeeeee]">
          [ LOG_01: Hybrid-Edge Synchronization Infrastructure ]
        </p>
      </div>

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
          [ LOG_02: Video Editing Module // +45% CTR Growth ]
        </p>
      </div>
    </div>
  </Suspense>
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