import React from 'react';
import { Link } from 'react-router-dom';

export default class Contact extends React.Component<{}, {}> {
    render() {
        return <div id="Contact">
            <div className='horizontal-line up'/>
                <div className='horizontal-line down'/>
                <div className='screen'>
                    <div className='screen-header'><p>contact<Link to="/"><img className='close-button clickable' src={require('./assets/images/exit.png')} alt=''/></Link></p></div>
                    <div className='screen-text'><iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/ZyYs4-JBiOc?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                </div>
        </div>
    }
}