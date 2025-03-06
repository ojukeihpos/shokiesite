
const pageContent = <><div className='text-white'>
  <p>This is my website. It covers a great deal about myself and what I'm up to. I'm continually working on it and experimenting with new things.</p>
  <p>The source code is <a className="clickable link" href={"https://github.com/ojukeihpos/shokiesite"}>available here.</a></p>
</div>
</>

export default async function Page() {

  return <div>
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
  </div >
}