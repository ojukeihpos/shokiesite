import React from 'react'
import './Header.css'
import Tab from './Tab'

export default class Header extends React.Component<{}, {}> {
    render() {
        return <div id="header">
            <div id="artistName">Yomi Sato</div>
            <div className="tabs">
                <Tab text="gallery"/>
                <Tab text="prices"/>
                <Tab text="commission form"/>
            </div>
        </div>
    }
}