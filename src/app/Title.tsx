"use client"
import React from 'react';
import { useScramble } from 'use-scramble';

export const Title = (props: { text: string }) => {
    const { ref, replay } = useScramble({
        text: props.text,
        speed: 0.6,
        tick: 1,
        step: 1,
        scramble: 4,
        seed: 0,
    })
    return <div ref={ref} onMouseOverCapture={replay} className='w-fit clickable' />
}