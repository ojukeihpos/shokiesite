"use client"
import React from 'react';

export class Background extends React.Component<{}, {}> {
    render() {
        return <div className="">
            <video className='z-[-10] absolute w-[100%] h-[100%] object-fill opacity-50' autoPlay muted loop width={1920} preload='none' playsInline controls={false} onContextMenu={(e) => {
                e.preventDefault()
                e.stopPropagation
            }}>
                <source src={"/static/SA Stage 3.mp4"} type="video/mp4"></source>
            </video>
        </div>
    }
}