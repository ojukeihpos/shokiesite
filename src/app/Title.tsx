"use client"

import Link from 'next/link';
import React, { Suspense, useState } from 'react';
import { useScramble } from 'use-scramble';

const TITLES = [
    "Sophie", "Shoka", "Reimu"
]

let currTitle = 0

export const Title = () => {

    const [title, setTitle] = useState(TITLES[currTitle])

    function incrementTitle() {
        currTitle = (currTitle + 1) % TITLES.length
        setTitle(TITLES[currTitle])
    }

    const { ref, replay } = useScramble({
        text: title,
        speed: 0.6,
        tick: 1,
        step: 1,
        scramble: 4,
        seed: 0,
    })
    return <Suspense fallback={<div>Loading...</div>}>
        <Link href="/" onTouchStartCapture={() => incrementTitle()} onMouseOverCapture={() => incrementTitle()}>
            <div ref={ref} onMouseOverCapture={replay} className='clickable lg:text-[2.5rem] text-[2rem]' />
        </Link>
    </Suspense>
}