"use client"
import React, { Suspense, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Loading from '../loading';
import ScrollToTopButton from '../scrollToTop';
import { PageData } from '../types/experience';
import Image from 'next/image';
import arrowsImg from '../assets/images/arrows.png';

// PDF Imports
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumePDF } from './ResumePDF';
import { sanitizeForPDF } from '../utils/pdf-helpers';

interface Props {
  data: PageData;
}

export default function ExperiencePage({ data }: Props) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showIndicator, setShowIndicator] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onRefChange = (node: HTMLDivElement | null) => {
    if (node) {
      scrollRef.current = node;
      const syncScroll = () => {
        const isScrollable = node.scrollHeight > node.clientHeight;
        const isAtTop = node.scrollTop < 20;
        setShowIndicator(isScrollable && isAtTop);
      };
      node.addEventListener('scroll', syncScroll);
      let count = 0;
      const interval = setInterval(() => {
        syncScroll();
        if (count++ > 20) clearInterval(interval);
      }, 50);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    const handleResize = () => {
      if (container) {
        const isScrollable = container.scrollHeight > container.clientHeight;
        const isAtTop = container.scrollTop < 20;
        setShowIndicator(isScrollable && isAtTop);
      }
    };
    window.addEventListener('resize', handleResize);
    if (container) {
      container.scrollTo(0, 0);
      handleResize();
    }
    return () => window.removeEventListener('resize', handleResize);
  }, [data]);

  // Prep data for PDF
  const allItemsForPDF = data.sections.flatMap(section => sanitizeForPDF(section.items));

  const pageContent = (
    <>
      <div className='shoka__header relative'>
        <div id='titlehead' className="text-center w-full"> 
          {data.title}
        </div>

        {isClient && (
          <div className="absolute top-0 right-0 mt-2">
            <PDFDownloadLink
              document={<ResumePDF title={data.title} items={allItemsForPDF} links={data.headerLinks}/>}
              fileName={`Sophie_${data.title.replace(/\s+/g, '_')}_Resume.pdf`}
              className="px-3 py-1 border border-[#FFB100] text-[#FFB100] font-mono text-[10px] uppercase hover:bg-[#FFB100] hover:text-black transition-all"
            >
              {({ loading }) => (loading ? '[ BUSY... ]' : '[ EXPORT_PDF ]')}
            </PDFDownloadLink>
          </div>
        )}

        <div className='socials__bar'>
          {data.headerLinks.map((link, i) => (
            <React.Fragment key={`header-link-${link.label}-${i}`}>
              <a className='link' href={link.href}>{link.label}</a>
              {i < data.headerLinks.length - 1 && " | "}
            </React.Fragment>
          ))}
        </div>
        <hr className='profilehr' />
      </div>

      <div className='about text-justify'>
        {data.intro && <p className="mb-4">{data.intro}</p>}
        {sectionLoop(data)}
        {data.otherEntries && (
          <div key="other-entries-wrapper">
            <p className='profilehr text-4xl dark:text-white underline text-center'>Other</p>
            {data.otherEntries.map((item, i) => (
              <div key={`other-row-${i}`} className='border-neutral-900 dark:border-neutral-200 my-2'>
                <span className='underline bold'>{item.org}</span>
                <p className='border-l-4 pl-4'>{item.role}</p>
              </div>
            ))}
          </div>
        )}
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
                      alt="Back arrow"
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

function sectionLoop(data: PageData) {
  return data.sections.map((section, sectionIdx) => (
    <div key={`section-${section.category}-${sectionIdx}`}>
      <p className='profilehr text-4xl dark:text-white pt-[1.5rem] underline text-center'>
        {section.category}
      </p>
      {section.items.map((item, itemIdx) => (
        <div key={`item-${sectionIdx}-${itemIdx}`} className='content-segment py-[1rem]'>
          <span className='dark:text-gray underline sm:flex sm:justify-between'>
            <p className='text-xl'>{item.title}</p>
            <p className='sm:text-xl'>{item.date}</p>
          </span>
          {item.location && <div>{item.location}</div>}
          {item.subTitle && <div>{item.subTitle}</div>}

          {(item.skills || item.showBlueBar) && (
            <div className='border-l-4 border-blue-400 pl-4 my-2'>
              {item.skills && <>Skills: {item.skills}</>}
            </div>
          )}

          {item.highlight && (
            <div className='border-l-4 border-[#c93e25] pl-4 my-2 italic text-sm'>
              {item.highlight}
            </div>
          )}

          <div className='border-l-4 border-neutral-900 dark:border-neutral-200 pl-4'>
            {item.bullets.map((bullet, bulletIdx) => (
              <p key={`bullet-${sectionIdx}-${itemIdx}-${bulletIdx}`}>- {bullet}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  ));
}