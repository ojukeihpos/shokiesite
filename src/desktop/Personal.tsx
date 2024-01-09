import React from 'react';
import './Content.css';
import { Link } from 'react-router-dom';

export default class Personal extends React.Component<{}> {
    render() {
        return <div>
            <Link to="/"><div className='exit-button'>Exit</div></Link>
            <div className='content'>
                <div className='shoka__header'>
                    <div id='titlehead'>
                        「Personal」
                    </div>
                    <div className='socials__bar'>
                        <a className='link' href="https://github.com/ojukeihpos">github</a>
                        |
                        <a className='link' href="mailto:sophie@shokie.xyz">sophie@shokie.xyz</a>
                    </div>
                    <hr className='profilehr' />
                    <div className='about'>
                        <p>Hello! I'm Sophie. My pronouns are she/her.</p>
                        <br />
                        <p>I identify as LGBTQ+. I was co-president of Laurier Pride Society at Wilfrid Laurier University, and was one of the founding members.</p>
                        <br />
                        <p>I'm also a big Riichi Mahjong fan! I've been playing for multiple years on MahjongSoul, Final Fantasy XIV, and Tenhou. I play in tournaments and have done commentary.</p>
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
    }
}