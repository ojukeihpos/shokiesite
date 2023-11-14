import React from 'react';
import { Link } from 'react-router-dom';

export default class Hardware extends React.Component<{}, {}> {
    render() {
        return <div id='Hardware'>
                <div className='horizontal-line up'/>
                <div className='horizontal-line down'/>
                <div className='screen'>
                    <div className='screen-header'><p>hardware<Link to="/"><img className='close-button clickable' src={require('./assets/images/exit.png')} alt=''/></Link></p></div>
                    <div className='screen-text'><p>CPU : Ryzen 5 3600X
                        <br/>
                        Motherboard: MSI MPG X570 GAMING PLUS
                        <br/>
                        GPU: RTX 2060S
                        <br/>
                        Headset: Logitech G733 K/DA, HyperX Cloud Revolver
                        <br/>
                        <hr/>
                        Mouse: G502 Hero
                        <br/>
                        Keyboard: Varmilo VA87M Sakura
                        <br/>
                        <hr/>
                        Racing Wheel: Thrustmaster T150 FFB
                        <hr/>
                        Fightstick: Qanba Obsidian (Korean lever, Sanwa buttons), Hori RAP 4 (JLF Link lever, Sanwa buttons)
                        <hr/>
                        VR: Oculus Quest 2
                        </p>
                    </div>
                </div>
            </div>
    }
}