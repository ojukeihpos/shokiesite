import React from 'react';
import './Professional.css';

export default class Personal extends React.Component<{}> {
    render() {
        return <div id="page-wrap">
            <div className='shoka__header' />
            <div className='personal-content'>
                <div id='titlehead'>
                    「Personal Info」
                    <hr />
                </div>
                <div className='about'>
                    <section>
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
                    </section>
                </div>
            </div>
        </div>
    }
}