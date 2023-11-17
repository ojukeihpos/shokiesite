import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Route, Routes } from 'react-router-dom';

import { slide as Slide } from 'react-burger-menu';

export class Header extends React.Component<{}> {
    render() {
        return <div>
            <Slide pageWrapId={'page-wrap'} outerContainerId={'outer-container'} width={'40%'}>
                <div>test me!</div>
            </Slide>
            <div className='shoka__header mobile'>
                <a href="/" className='headerTitle'>Sophie</a>
            </div>
        </div>
    }
}