import React from 'react';
import './Menu.css';
import List from './List';

export default class Menu extends React.Component<{}, {}> {
    render() {
        return <div id="Menu">
            <div className="selectionBar"/>
            <List/>
        </div>
    }
}