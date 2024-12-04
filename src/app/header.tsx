'use client'
import Link from 'next/link';
import { slide as Slide } from 'react-burger-menu';
let isOpen = false

export default function Header() {
    return <div>
        <Slide pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right isOpen={isOpen} onStateChange={(state) => isOpen = state.isOpen}>
            <h2>Hello!</h2>
            <hr />
            <Link href={"/"} onClick={() => hideSidebar()} className='sidebar-tab clickable'>Home</Link>
            <hr />
            <Link href={"/professional"} onClick={() => hideSidebar()} className='sidebar-tab clickable'>Professional</Link>
            <hr />
            <Link href={"/personal"} onClick={() => hideSidebar()} className='sidebar-tab clickable'>Personal</Link>
            <hr />
        </Slide>
        <div className='shoka__header mobile' />
    </div >
}

function hideSidebar() {
    isOpen = false
}
