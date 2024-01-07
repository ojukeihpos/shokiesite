import React from 'react'
import { Background } from './Background'
import { Header } from './Header'
import { Professional } from './Professional'
import './MobileComponent.css'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from './Homepage'
import Personal from './Personal'

export class MobileComponent extends React.Component<{}, {}> {
    render() {
        return <div className='mobileComponent' id="outer-container">
            <Header />
            <Background />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/professional" element={<Professional />} />
                <Route path="/personal" element={<Personal />} />
                {//<Route path="*" element={<div style={{ position: "absolute", top: "2.5rem", left: "50%", transform: "translateX(-50%)" }}>sorry, nothing</div>} />
                }
            </Routes>
        </div>
    }
}

