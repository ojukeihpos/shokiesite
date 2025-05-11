export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div id="desktop-component" className="hidden lg:inline">
        <div className='content'>
            <div className='shoka__header' />
            <div className='page-content mr-5'>
                <div className="h-full flex justify-center items-center">
                    <div className="inline text-center">
                        <p>Loading...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}