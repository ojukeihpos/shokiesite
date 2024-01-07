import React from 'react';
import './Background.css';
export class Background extends React.Component<{}> {
    render() {
        return <div className="background mobile">
            <div id="overlay" />
        </div>
    }
}