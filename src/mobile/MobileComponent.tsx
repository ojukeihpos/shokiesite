import React from 'react'
import { Background } from './Background'
import { Header } from './Header'
import { Content } from './Content'
import './MobileComponent.css'
import { Route, Routes } from 'react-router-dom'

export class MobileComponent extends React.Component<{}, {}> {
    render() {
        return <div className='mobileComponent' id="outer-container">
            <Header />
            <Background />
            <Routes>
                <Route path="*" element={<Content />} />
                {//<Route path="*" element={<div style={{ position: "absolute", top: "2.5rem", left: "50%", transform: "translateX(-50%)" }}>sorry, nothing</div>} />
                }
            </Routes>
        </div>
    }
}

