import React from 'react'
import './Header.css'

import { slide as Slide } from 'react-burger-menu';

export class Header extends React.Component<{}> {
    render() {
        return <div>
            <Slide pageWrapId={'page-wrap'} outerContainerId={'outer-container'} width={'40%'}>
                <div>Sorry, there's nothing here yet!</div>
            </Slide>
            <div className='shoka__header mobile'>
                <a href="/" className='headerTitle'>Sophie</a>
            </div>
        </div>
    }
}