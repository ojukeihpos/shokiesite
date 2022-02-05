import React from 'react';
import { Link } from 'react-router-dom';

export default class Playlist extends React.Component<{}, {}> {
    render() {
        return <div id='Playlist'>
                <div className='horizontal-line up'/>
                <div className='horizontal-line down'/>
                <div className='screen'>
                    <div className='screen-header'><p>playlist<Link to="/"><img className='close-button clickable' src={require('./assets/images/exit.png')} alt=''/></Link></p></div>
                    <div className='screen-text'>
                        <iframe src="https://open.spotify.com/embed/playlist/2k7Ie7nk6ReAcJ6N0xKheX?utm_source=generator&theme=0" title="spotify" width="100%" height="100%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    </div>
                </div>
            </div>
    }
}