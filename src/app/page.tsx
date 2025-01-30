import Parser from 'rss-parser'

const pageContent = <><div className='text-white'>
  <p>This is my website. It covers a great deal about myself and what I'm up to. I'm continually working on it and experimenting with new things.</p>
  <p>The source code is <a className="clickable link" href={"https://github.com/ojukeihpos/shokiesite"}>available here.</a></p>
</div>
</>

export default async function Page() {
  const parser: Parser = new Parser({
    headers: { 'Access-Control-Allow-Origin': 'https://bsky.app/' },
    timeout: 10000,
  })

  let feed = await parser.parseURL('https://bsky.app/profile/did:plc:ebyqvh2ce6y3zkf5vpuvmyjb/rss')
  feed.items.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj['guid']).indexOf(obj['guid']) === pos
  })
  let regex = /\/([^\/]+)\/?$/

  return <div>
    <div id="desktop-component" className="hidden lg:inline">
      <div className='page-content'>
        <div id='titlehead'>
          Welcome!
        </div>
        <hr className='profilehr' />
        <div className='about'>
          {pageContent}
          {/*<div className='sticky top-0 z-20 flex flex-col align-center w-[100%] py-[5%] px-4 mx-auto justify-center items-center bg-[#eeeeee] text-black border-x-4 border-y-4 border-black'>
        {feed.title}<br />{feed.description}
      </div>
      <bluesky-profile-feed actor="did:plc:lfes4dq4pbuhm5qr3klrj3ph" include-pins>
        <a target="_blank" href="https://bsky.app/profile/did:plc:lfes4dq4pbuhm5qr3klrj3ph" className="bluesky-profile-feed-fallback">
          Posts by soarer🚗☁️ トーヨー・ソアラ (@soarer.cloud)
        </a>
      </bluesky-profile-feed>
      */}

          {/*flex flex-col align-center w-[100%] pb-[10%] px-4 mx-auto justify-center items-center bg-[#eeeeee] text-black border-x-4 border-y-4 rounded-md border-black */}
          <div className=''>{/*I don't actually know what to put here as a footer, but keep in mind this has to be here even if empty so the last post of the feed is properly bordered*/}</div>
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