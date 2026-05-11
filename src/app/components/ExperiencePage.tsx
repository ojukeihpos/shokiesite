"use client"
import React, { Suspense, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Loading from '../loading';
import ScrollToTopButton from '../scrollToTop';
import { PageData } from '../types/experience';

interface Props {
  data: PageData;
}

export default function ExperiencePage({ data }: Props) {
  const scrollRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scrollElement = document.getElementById('scroll-root');
    if (scrollElement) {
      (scrollRef as any).current = scrollElement;
    }
  }, [data]);

  const pageContent = (
    <>
      <div className='shoka__header'>
        <div id='titlehead'>{data.title}</div>
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
              <p key={`other-row-${i}`} className='border-l-4 border-black dark:border-[#dad2c7] pl-4 my-2'>
                - <span className='italic'>{item.org}</span> {item.role}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );

  return (
    <Suspense fallback={<Loading />}>
      <div className="lg:contents flex flex-col p-4 lg:p-0">
        {pageContent}
      </div>

      <div className="hidden lg:block">
        <Link href="/">
          <div className='exit-button clickable'>Back</div>
        </Link>
        <ScrollToTopButton scrollableDivRef={scrollRef} />
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

          <div className='border-l-4 border-black dark:border-[#dad2c7] pl-4'>
            {item.bullets.map((bullet, bulletIdx) => (
              <p key={`bullet-${sectionIdx}-${itemIdx}-${bulletIdx}`}>- {bullet}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  ));
}