import { Suspense } from "react"
import Loading from "./loading"

const pageContent = <><div className='text-white'>
  <p className="text-center">Software Developer. Entertainer. Competitor. I do a lot of things.</p>
  <p className="text-center">If you're interested in learning about me, pick from one of the options on the left!</p>
</div>
</>

export default async function Page() {

  return <Suspense fallback={<Loading />}>
    <div id="desktop-component" className="hidden lg:inline">
      <div className='page-content'>
        <div id='titlehead'>
          Welcome!
        </div>
        <hr className='profilehr' />
        <div className='about'>
          {pageContent}
        </div>
      </div>
    </div>
    <div className="lg:hidden flex flex-col min-h-full h-screen dark:bg-[#3c3d37]">
      <div id='mobile-main-content' className="mt-[3em] mx-auto p-4">
        {pageContent}
      </div>
    </div>
  </Suspense>
}