"use client"
import React from 'react';
import Image from 'next/image'

export class Background extends React.Component<{}, {}> {
    render() {
        return <div className="">
            <video className='z-[-10] absolute w-[100%] h-[100%] object-fill opacity-5' autoPlay muted loop width={1920} preload='none' playsInline controls={false} onContextMenu={(e) => {
                e.preventDefault()
                e.stopPropagation
            }}>
                <source src={"/static/SA Stage 3.mp4"} type="video/mp4"></source>
            </video>
        </div>
    }
}
/*  position: absolute;
  z-index: -10;
  width: 100%;
  height: 100vh;
  min-height: 100%;
  background: linear-gradient(90deg, #ffffff77, rgb(13, 42, 82, 0.7)), url("./assets/images/cars.jpg");
  background-size: cover;
  background-position-x: center;
  overflow: hidden;*/