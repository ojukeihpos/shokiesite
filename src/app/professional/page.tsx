import React from 'react';
import Link from 'next/link';

const pageContent = <><div className='shoka__header'>
    <div id='titlehead'>
        Professional
    </div>
    <div className='socials__bar'>
        <a className='link' href="https://github.com/ojukeihpos">github</a>
        |
        <a className='link' href="mailto:sophie@shokie.xyz">sophie@shokie.xyz</a>
    </div>
    <hr className='profilehr' />
</div><div className='about text-justify'>
        <p>Hello! I'm Sophie, a software developer.</p>
        <p className='profilehr text-4xl dark:text-white pt-[1.5rem] underline text-center'>
            Career
        </p>
        <div className='content-segment py-[1rem]'>
            <div className=''>
                <span className='text-xl dark:text-gray underline flex justify-between'>
                    <p>Freelance Web Developer</p> <p> 03/2023 - Present</p>
                </span>
                <p>Online</p>
                <div className='border-l-4 border-black dark:border-blue-400 pl-4 my-2'>Skills: Next.js, TypeScript, Node.js, Amazon Web Services (AWS), Git, Figma</div>
            </div>
            <div className='border-l-4 border-black dark:border-[#dad2c7] pl-4'>
                <p>- Custom-coded websites with a technological familiarity in React-based frameworks using TypeScript and Tailwind.</p>
                <p>- Provided fast updates and technical support for any client needs.</p>
            </div>
            <div className='border-l-4 border-[#c93e25] pl-4 my-2'>
                <p>My latest work can be seen at <a className='link' href="https://soarer.cloud">soarer.cloud</a>. I replicated the client's previous website with Next.js and Tailwind CSS, adding modern design and functionality while maintaining aesthetics.</p>
                <p>The latest addition to said website is a live feed of their BlueSky profile, utilizing a new technology referred to as the AT Protocol.</p>
            </div>
        </div>

        <div className='content-segment py-[1rem]'>
            <div className=''>
                <span className='text-xl dark:text-gray underline flex justify-between'>
                    <p>Technical Consultant</p> <p>02/2022 - 01/2023, 12/2023 - 01/2025</p>
                </span>
                <p>Gaijin Goombah LLC</p>
                <div className='border-l-4 border-black dark:border-blue-400 pl-4 my-2'>Skills: Cloud Storage, System Design, Computer Hardware</div>
            </div>
            <div className='border-l-4 border-black dark:border-[#dad2c7] pl-4'>
                <p>- Optimized content production workflow and provided hardware recommendations based on technical requirements and budget.</p>
                <p>- Reduced file redundancy by implementing cloud storage solutions and guidance on best practices to preserve hardware longevity.</p>
            </div>
        </div>
        <div className='content-segment py-[1rem]'>
            <div className=''>
                <span className='text-xl dark:text-gray underline flex justify-between'>
                    <p>Full-Stack Developer</p> <p> 03/2019 - 02/2020</p>
                </span>
                <p>Wilfrid Laurier University</p>
                <div className='border-l-4 border-black dark:border-blue-400 pl-4 my-2'>Skills: React, TypeScript, Node.js, Express, MongoDB, Java, Git, AWS</div>
            </div>
            <div className='border-l-4 border-black dark:border-[#dad2c7] pl-4'>
                <p>- Developed and maintained a TypeScript React application which was used across two semesters of a senior-level class.</p>
            </div>
            <div className='border-l-4 border-[#c93e25] pl-4 my-2'>Game-ified simulation of a transport market, where students acted as either a distributor or a transporter. The objective of the game was to maximize profits through a series of contract negotiations.</div>
            <div className='border-l-4 border-black dark:border-[#dad2c7] pl-4'>
                <p>- Executed MongoDB and domain hosting migration to university servers.</p>
                <p>- Collaborated with cross-functional teams to assess technical challenges and communicate solutions.</p>
                <p>- Developed a Java-based application for automating large-scale data processing and visualization to mitigate research delays.</p>
            </div>
        </div>
        <p className='profilehr text-4xl dark:text-white underline text-center'>Other</p>
        <p>- Attended hackathons (<a className='link' href='https://devpost.com/captainkesty'>devpost</a>), notably earning an award at <a className="link" href="https://devpost.com/software/healthsimple">{"<Br/eak>Inequality"}</a> for best pitch. The objective for that hackathon was to create a product that would make access to medical resources easier to those in developing countries. My group decided to create a service, accessible through either SMS or low-spec Android app, that would let a user input symptoms and receive medical information.</p>
        <br />
        <p>- Helped found a new hackathon, StartHacks, at Wilfrid Laurier University alongside the members of 「Computer Science, Physics, and Mathematics Club」 (PHI) at Laurier, now known as 「Laurier Computing Society」 (LCS). The hackathon set the groundwork for Laurier's future hackathons and allowed for future staff to understand the obstacles associated with running a large scale event.</p>
        <br />
        <p>- Contributed to open-source projects, such as <a className="link" href="https://github.com/DefinitelyTyped/DefinitelyTyped">DefinitelyTyped</a>. I added typings to <a className="link" href="https://github.com/cettoana/react-scramble">react-scramble</a>, which you can see in action by hovering over (if you're on desktop) the name on the top left of this page.</p>
        <br />
    </div></>

export default function Professional() {
    return <div>
        <div className="lg:hidden">
            <div className='mobile-content min-h-screen h-[100%] p-10'>
                {pageContent}
            </div>
        </div>

        <div id="desktop-component" className="hidden lg:inline">
            <Link prefetch href="/">
                <div className='exit-button clickable mr-5'>Exit</div>
            </Link>
            <div className='page-content mr-5'>
                {pageContent}
            </div>
        </div>
    </div>
}