import React from 'react';
import './Homepage.css';

export class Homepage extends React.Component<{}> {
    render() {
        return <div id="page-wrap">
            <div id='homepage-container'>
                <header>
                    <div style={{ fontSize: "3rem", }}>「Sophie」</div>
                    <div style={{ fontSize: "1rem", }}>Software Engineer • Cosplayer • Mahjong Player</div>
                    <nav>
                        <a className='link' href="https://github.com/ojukeihpos">github</a>
                        {' • '}
                        <a className='link' href="mailto:sophie@shokie.xyz">sophie@shokie.xyz</a>
                    </nav>
                </header>
                <footer>
                    <div>shokie site v2.0</div>
                </footer>
            </div>
        </div>
    }
}