import React from 'react';
import { Link } from 'react-router-dom';

export default class About extends React.Component<{}, {}> {
    render() {
        return <div id='About'>
                <div className='horizontal-line up'/>
                <div className='horizontal-line down'/>
                <div className='screen'>
                    <div className='screen-header'><p>Shoka's specs<Link to="/"><img className='close-button clickable' src={require('./assets/images/exit.png')} alt=''/></Link></p></div>
                    <div className='screen-text'><p>🌸 i'm a girl on the internet. <a href='https://pronoun.is/she' className='clickable'>she/her</a>
                        <br/>
                        🌸 cosplayer, engineer, plane enthusiast
                        <br/>
                        🌸 UW/Laurier CS graduate
                        <br/>
                        <hr/>
                        <p style={{textAlign: "center"}}>Game ranks</p>
                        FFXIV: Shoka Starlight (Jenova)
                        <br/>
                        Valorant: Immortal (act 1)
                        <br/>
                        Tetris: Rank SS (tetrio)
                        <br/>
                        Apex: Master (S1, S3)
                        <br/>
                        <a className='clickable' href='https://halotracker.com/halo-infinite/profile/xbl/shokie8244/'>Halo Infinite</a>: Onyx
                        <hr/>
                        <p style={{textAlign: "center"}}>Other games I play</p>
                        Ace Combat
                        <br/>
                        Monster Hunter
                        <br/>
                        VTOL VR
                        <br/>
                        Yu-Gi-Oh! Master Duel
                        <br/>
                        Minecraft
                        <br/>
                        Mahjong
                        </p>
                    </div>
                </div>
            </div>
    }
}