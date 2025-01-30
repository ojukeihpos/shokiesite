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

    return <div>
        <Slide pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right isOpen={isOpen} onStateChange={(state) => setIsOpen(state.isOpen)}>
            {props.pages.map(page => {
                return <Link href={page.page} key={page.id} onClick={() => setIsOpen(false)} className='sidebar-tab clickable'>{page.text.charAt(0) + page.text.substring(1).toLowerCase()}</Link>
            })}
        </Slide>
        <div className='shoka__header mobile bg-[#262e53] border-b-4 border-[#EF22F550] dark:border-[#868583]'>
            <Title />
        </div>
    </div >
}
