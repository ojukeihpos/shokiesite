import React from 'react';
import Link from 'next/link';

const pageContent = <><div className="shoka__header">
    <div id='titlehead'>
        Projects
    </div>
    <div className='socials__bar'>
        <a className='link' href="https://github.com/ojukeihpos">github</a>
    </div>
    <hr className='profilehr' />
</div>
    <div className='about text-justify'>
        <div id="#analysispaster" className='py-2'>
            <p className='text-xl underline'>Analysis Paster</p>
            <p>A Mozilla Firefox and Google Chrome extension that inserts a button into <Link href="https://www.fflogs.com/" className='clickable link'>FFLogs</Link> to automatically paste logs into <Link href={"https://xivanalysis.com/"} className='clickable link'>xivanalysis</Link>.</p>
            <p>Firefox: <Link href={"https://addons.mozilla.org/en-CA/firefox/addon/analysis-paster/"} className='clickable link'>link</Link></p>
            <p>Chrome: <Link href={"https://chromewebstore.google.com/detail/fflogs-to-xivanalysis/infdgbihalnbbkkmojeakomabadipfkm"} className='clickable link'>link</Link></p>
        </div>
        <div id="#pokerogue" className='py-2'>
            <p className='text-xl underline'>PokéRogue - Repels</p>
            <Link href={"https://github.com/ojukeihpos/pokerogue"} className='clickable link'>https://github.com/ojukeihpos/pokerogue</Link>
            <p>PokéRogue is a fangame based on the Pokémon franchise. My contribution was a new item, "Repel", which would allow the player to manipulate the type of encounters they experience on their playthrough.</p>
            <p>Unfortunately, this wasn't implemented due to the main developers being unsure how they wanted the item to work and how it would affect the gameplay loop.</p>
        </div>
        <div id="#aisnake" className='py-2'>
            <p className='text-xl underline'>AI Snake</p>
            <p>Based on <Link href={"https://github.com/Code-Bullet/SnakeFusion"} className='clickable link'>the code from Code-Bullet</Link>, this self-learning Snake AI uses genetic algorithms and neural networks. I modified the code to run more simulations per generation, and adjusted the neural network to prevent redundancies.</p>
        </div>
        <div id="#beerbuddy" className='py-2'>
            <p className='text-xl underline'>BeerBuddy - Group Project</p>
            <p>A web app designed to offer alcoholic recommendations based on a user's criteria such as taste, alcohol percentage, colour, etc. My role was to oversee multiple teams and their tasks, assigning them and assisting as necessary.</p>
        </div>
        <div id="#healthsimple" className='py-2'>
            <p className='text-xl underline'>HealthSimple</p>
            <p>This Android app was entered into a hackathon, winning the "Best Pitch" award.</p>
            <p>The app allowed users of lower-spec Android compatible devices to learn more about the medical symptoms they may have. It would query through a database and return its best estimate of what illness the user is experiencing.</p>
            <p>In lieu of a device that could run Android apps, the service would also allow users to text a specific number to perform the same query.</p>
            <p>This would relieve strain on medical services while offering accessibility to distant areas.</p>
        </div>
        {/*<div className="inline text-center">
            <p>Under construction! I'll be populating this page soon.</p>
            <p><Link href={'/'} className="clickable link">Return to homepage</Link></p>
        </div>*/}
    </div></>

export default function Professional() {
    return <div>
        <div className="lg:hidden">
            <div className='mobile-content p-10'>
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