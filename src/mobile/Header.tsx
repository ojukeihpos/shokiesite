import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Route, Routes } from 'react-router-dom';

import { slide as Slide } from 'react-burger-menu';

export class Header extends React.Component<{}> {
    render() {
        return <div className='shoka__header mobile'>
            <SideBar pageWrapId='page-wrap' outerContainerId='outer-container' />
            <a href="/" className='headerTitle'>Sophie</a>
        </div>
    }
}

class SideBar extends React.Component<{ pageWrapId: string, outerContainerId: string }> {

    render() {
        return <Slide>
            <div>test!</div>
        </Slide>
    }
}