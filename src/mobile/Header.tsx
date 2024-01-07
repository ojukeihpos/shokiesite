import React from 'react'
import './Header.css'

import { stack as Slide } from 'react-burger-menu';
import { Link, Route, Routes } from 'react-router-dom';

export class Header extends React.Component<{}, { isOpen: boolean }> {
    constructor() {
        super({});
        this.state = {
            isOpen: false
        }
    }

    hideSidebar() {
        this.setState({ isOpen: false })
    }
    render() {
        return <div>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet" />
            <Slide pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right isOpen={this.state.isOpen} onStateChange={(state) => this.setState({ isOpen: state.isOpen })}>
                <h2>Hello!</h2>
                <hr />
                <Link to={"/"} onClick={() => this.hideSidebar()}><a className='sidebar-tab clickable' >Home</a></Link>
                <hr />
                <Link to={"/professional"} onClick={() => this.hideSidebar()}><a className='sidebar-tab clickable'>Professional</a></Link>
                <hr />
                <Link to={"/personal"} onClick={() => this.hideSidebar()}><a className='sidebar-tab clickable'>Personal</a></Link>
                <hr />
            </Slide>
            <div className='shoka__header mobile'>
                {//<a href="/" className='headerTitle'>Sophie</a>
                }
            </div>
        </div>
    }
}