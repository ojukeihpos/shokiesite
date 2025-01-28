'use client'
import Link from 'next/link';
import { slide as Slide } from 'react-burger-menu';
import { Title } from './Title';
import { useState } from 'react';
let isOpen = false

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    return <div>
        <Slide pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right isOpen={isOpen} onStateChange={(state) => setIsOpen(state.isOpen)}>
            <Link href={"/"} onClick={() => setIsOpen(false)} className='sidebar-tab clickable'>Home</Link>
            <hr />
            <Link href={"/professional"} onClick={() => setIsOpen(false)} className='sidebar-tab clickable'>Professional</Link>
            <hr />
            <Link href={"/personal"} onClick={() => setIsOpen(false)} className='sidebar-tab clickable'>Personal</Link>
            <hr />
        </Slide>
        <div className='shoka__header py-2 mobile bg-[#262e53] border-b-4 border-[#EF22F550] dark:border-[#868583]'>
            <Title />
        </div>
    </div >
}
