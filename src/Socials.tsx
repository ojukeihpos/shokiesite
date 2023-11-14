import React from 'react';
import { Link } from 'react-router-dom';

export default class Socials extends React.Component<{}, {}> {
    render() {
        return <div id="Socials">
            <div className='horizontal-line up'/>
                <div className='horizontal-line down'/>
                <div className='screen'>
                    <div className='screen-header'><p>socials<Link to="/"><img className='close-button clickable' src={require('./assets/images/exit.png')} alt=''/></Link></p></div>
                    <div className='screen-text'><p>
                        🌸 <a href='https://github.com/ojukeihpos' className='clickable'>GitHub</a>
                        <br/>
                        🌸 <a href='https://www.instagram.com/shokastarlight/' className='clickable'>Instagram</a>
                        <br/>
                        </p>
                    </div>
                </div>
        </div>
    }
}