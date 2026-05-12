import Link from "next/link";

const pageContent = <>
    <div className="h-full flex justify-center items-center">
        <div className="inline text-center">
            <p>Sorry, something went wrong.</p>
            <p><Link href={'/'} className="clickable link">Return to homepage</Link></p>
        </div>
    </div>

</>

export default function NotFound() {
    return <div>
        <div className="lg:hidden">
            <div className='mobile-content h-screen p-10'>
                {pageContent}
            </div>
        </div>

        <div id="desktop-component" className="hidden lg:inline">
            <div className="content-wrapper">
                <div className='page-content mr-5'>
                    {pageContent}
                </div>
                <Link prefetch href="/">
                    <div className='exit-button clickable'>
                        <span className="exit-button-text">Back</span>
                        <div className="exit-button-arrow"></div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
}