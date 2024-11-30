import React from 'react';
import Link from 'next/link';

export default function Home() {
  return <div>
    <div id="mobile-component" className="lg:hidden">
      <div className='mobile-content min-h-screen h-[100%] p-10'>
        <div id='titlehead'>
          「Personal Info」
          <hr className='profilehr' />
        </div>
        <div className='about'>
          <p>Hello! I'm Sophie. My pronouns are she/her.</p>
          <br />
          <p>I identify as LGBTQ+. I was co-president of Laurier Pride Society at Wilfrid Laurier University, and was one of the founding members.</p>
          <br />
          <p>I'm also a big Riichi Mahjong fan! I've been playing for multiple years on MahjongSoul, Final Fantasy XIV, and Tenhou. I've only recently started entering tournaments.</p>
          <br />
          <p>I also cosplay occasionally! Here's a list of the cosplays I've done:</p>
          <ul>
            <li>Reimu Hakurei (Touhou Project)</li>
            <li>Yor Forger (Spy x Family)</li>
            <li>Lady (Devil May Cry)</li>
            <li>Maid (Final Fantasy XIV)</li>
            <li>Motoko Kusanagi (Ghost in the Shell)</li>
          </ul>
          <br />
        </div>
      </div>
    </div>
    <div id="desktop-component" className="hidden lg:inline">
      <Link href="/">
        <div className='exit-button clickable'>Exit</div>
      </Link>
      <div className='content'>
        <div className='shoka__header' />
        <div className='personal-content'>
          <div id='titlehead'>
            「Personal Info」
            <hr className='profilehr' />
          </div>
          <div className='about'>
            <p>Hello! I'm Sophie. My pronouns are she/her.</p>
            <br />
            <p>I identify as LGBTQ+. I was co-president of Laurier Pride Society at Wilfrid Laurier University, and was one of the founding members.</p>
            <br />
            <p>I'm also a big Riichi Mahjong fan! I've been playing for multiple years on MahjongSoul, Final Fantasy XIV, and Tenhou. I've only recently started entering tournaments.</p>
            <br />
            <p>I also cosplay occasionally! Here's a list of the cosplays I've done:</p>
            <ul>
              <li>Reimu Hakurei (Touhou Project)</li>
              <li>Yor Forger (Spy x Family)</li>
              <li>Lady (Devil May Cry)</li>
              <li>Maid (Final Fantasy XIV)</li>
              <li>Motoko Kusanagi (Ghost in the Shell)</li>
            </ul>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
}
