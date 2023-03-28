import React from 'react'
import './Header.css'
import Tab from './Tab'
import { Link } from 'react-router-dom';

export default class Header extends React.Component<{}, {}> {
    render() {
        return <div id="header">
            <Link to="/" id="artistName">Yomi Sato</Link>
            <div className="tabs">
                <Tab text="gallery"/>
                <Tab text="prices"/>
                <Tab text="commission form"/>
            </div>
        </div>
    }
}