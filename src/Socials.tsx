import React from 'react';
import { Link } from 'react-router-dom';

export default class Socials extends React.Component<{}, {}> {
    render() {
        return <div id="Socials">
            <div className='horizontal-line up'/>
                <div className='horizontal-line down'/>
                <div className='screen'>
                    <div className='screen-header'><p>socials<Link to="/"><img className='close-button clickable' src={require('./assets/images/exit.png')} alt=''/></Link></p></div>
                    <div className='screen-text'><p>🌸 <a href='https://steamcommunity.com/id/ojukeihpos/' className='clickable'>Steam</a>
                        <br/>
                        🌸 <a href='https://www.twitch.tv/shokiedoki' className='clickable'>Twitch</a>
                        <br/>
                        🌸 <a href='https://github.com/ojukeihpos' className='clickable'>GitHub</a>
                        <br/>
                        🌸 Discord: shokie#0104
                        <br/>
                        <a href='https://sungan.ca/' className='clickable'>sungan</a>
                        </p>
                    </div>
                </div>
        </div>
    }
}