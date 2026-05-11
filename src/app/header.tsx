'use client'
import Link from 'next/link';
import { slide as Slide } from 'react-burger-menu';
import { Title } from './Title';
import React, { useState } from 'react';

interface Props {
    pages: [...{ id: number, text: string, page: string }[]]
}

export const Header = (props: Props) => {

    const [isOpen, setIsOpen] = useState(false)

    return <header className="w-full">
        <Slide
            pageWrapId={'page-wrap'}
            outerContainerId={'outer-component'}
            menuClassName={"flex flex-col"}
            itemListClassName={"flex flex-col justify-between items-center px-0"}
            styles={{ bmItemList: { height: '50%', paddingTop: '25%' } }}
            right
            isOpen={isOpen}
            onStateChange={(state) => setIsOpen(state.isOpen)}
            width={`50%`}
        >
            {
                props.pages.map(page => {
                    return <Link
                        href={page.page === "/" ? "/" : `/${page.page}`}
                        key={page.id}
                        onClick={() => setIsOpen(false)}
                        className='sidebar-tab clickable text-white text-2xl my-4 uppercase tracking-widest'
                    >
                        {page.text}
                    </Link>
                })
            }
        </Slide>
        <div className='shoka__header mobile bg-[#262e53] border-b-4 py-2 border-[#EF22F550] dark:border-[#868583]'>
            <Title />
        </div>
    </header>
}
