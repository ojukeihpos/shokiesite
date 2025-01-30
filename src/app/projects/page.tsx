import React from 'react';
import Link from 'next/link';

const pageContent = <><div className="h-full flex justify-center items-center">
    <div className="inline text-center">
        <p>Under construction! I'll be populating this page soon.</p>
        <p><Link href={'/'} className="clickable link">Return to homepage</Link></p>
    </div>
</div></>

export default function Professional() {
    return <div>
        <div className="lg:hidden">
            <div className='mobile-content h-screen p-10'>
                {pageContent}
            </div>
        </div>

        <div id="desktop-component" className="hidden lg:inline">
            <Link prefetch href="/">
                <div className='exit-button clickable mr-5'>Back</div>
            </Link>
            <div className='page-content mr-5'>
                {pageContent}
            </div>
        </div>
    </div>
}