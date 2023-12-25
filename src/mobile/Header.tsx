import React from 'react'
import './Header.css'

import { stack as Slide } from 'react-burger-menu';

export class Header extends React.Component<{}> {
    render() {
        return <div>
            <Slide pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
                <h2>Hello!</h2>
                <hr />
                <a className='sidebar-tab clickable'>Professional</a>
                <hr />
                <a className='sidebar-tab clickable'>Personal</a>
                <hr />
            </Slide>
            <div className='shoka__header mobile'>
                <a href="/" className='headerTitle'>Sophie</a>
            </div>
        </div>
    }
}