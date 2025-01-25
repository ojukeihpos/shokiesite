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
                <div className='border-l-4 border-blue-400 pl-4 my-2'>Skills: Next.js, TypeScript, Node.js, Amazon Web Services (AWS), Git, Figma</div>
            </div>
            <div className='border-l-4 border-black dark:border-[#dad2c7] pl-4'>
                <p>- Developed custom-coded websites with a technological familiarity in React-based frameworks using TypeScript and Tailwind</p>
                <p>- Provided proactive progress updates and all-encompassing technical support for any client needs</p>
            </div>
            <div className='border-l-4 border-[#c93e25] pl-4 my-2'>
                <p>Latest work can be seen at <a className='link' href="https://soarer.cloud">soarer.cloud</a>. Replicated the client's previous website with Next.js and Tailwind CSS, adding modern design and functionality while maintaining aesthetics</p>
                <p>Newest addition to said website is a live feed of a BlueSky profile, utilizing a new technology referred to as the AT Protocol</p>
            </div>
        </div>

        <div className='content-segment py-[1rem]'>
            <div className=''>
                <span className='text-xl dark:text-gray underline flex justify-between'>
                    <p>Technical Consultant</p> <p>02/2022 - 01/2023, 12/2023 - 01/2025</p>
                </span>
                <p>Gaijin Goombah LLC</p>
                <div className='border-l-4 border-blue-400 pl-4 my-2'>Skills: Cloud Storage, System Design, Computer Hardware</div>
            </div>
            <div className='border-l-4 border-black dark:border-[#dad2c7] pl-4'>
                <p>- Optimized content production workflow and provided hardware recommendations based on technical requirements and budget</p>
                <p>- Reduced file redundancy by implementing cloud storage solutions and guidance on best practices to preserve hardware longevity</p>
            </div>
        </div>
        <div className='content-segment py-[1rem]'>
            <div className=''>
                <span className='text-xl dark:text-gray underline flex justify-between'>
                    <p>Full-Stack Developer</p> <p> 03/2019 - 02/2020</p>
                </span>
                <p>Wilfrid Laurier University</p>
                <div className='border-l-4 border-blue-400 pl-4 my-2'>Skills: React, TypeScript, Node.js, Express, MongoDB, Java, Git, AWS</div>
            </div>
            <div className='border-l-4 border-black dark:border-[#dad2c7] pl-4'>
                <p>- Developed and maintained a TypeScript React application which was used across two semesters of a senior-level class</p>
            </div>
            <div className='my-2'>
                <div className='border-l-4 border-[#c93e25] pl-4'>Game-ified simulation of a transport market, where students acted as either a distributor or a transporter</div>
                <div className='border-l-4 border-[#c93e25] pl-4'>Objective of the game was to maximize profits through a series of contract negotiations</div>
            </div>
            <div className='border-l-4 border-black dark:border-[#dad2c7] pl-4'>
                <p>- Executed MongoDB and domain hosting migration to university servers</p>
                <p>- Collaborated with cross-functional teams to assess technical challenges and communicate solutions</p>
                <p>- Developed a Java-based application for automating large-scale data processing and visualization to mitigate research delays</p>
            </div>
        </div>
        <p className='profilehr text-4xl dark:text-white underline text-center'>Other</p>
        <p className='border-l-4 border-black dark:border-[#dad2c7] pl-4 my-2'>- Helped found a new hackathon, <span className='italic'>StartHacks</span>, at Wilfrid Laurier University alongside the members of 「Computer Science, Physics, and Mathematics Club」 (PHI) at Laurier, now known as 「Laurier Computing Society」 (LCS). The hackathon set the groundwork for Laurier's future hackathons and allowed for future staff to understand the obstacles associated with running a large scale event</p>
        <p className='border-l-4 border-black dark:border-[#dad2c7] pl-4 my-2'>- Founded and acted as Co-President for <span className='italic'>Laurier Pride Society</span>, a group primarily focused on spreading awareness and providing a safe space for queer students</p>
        <p className='border-l-4 border-black dark:border-[#dad2c7] pl-4 my-2'>- Served as an accountant for the <span className='italic'>University of Waterloo Fighting Games Club</span>, keeping track of inventory and assisting with other executive functions</p>
        <p className='border-l-4 border-black dark:border-[#dad2c7] pl-4 my-2'>- Attended hackathons (<a className='link' href='https://devpost.com/captainkesty'>devpost</a>), notably earning a Best Pitch award at <a className="link" href="https://devpost.com/software/healthsimple">{"<Br/eak>Inequality"}</a> for a low-spec app providing medical resources in areas of low access. Users could input symptoms and be given appropriate medical information in a simple and traditionally understood method (SMS or search engine)</p>
        <p className='border-l-4 border-black dark:border-[#dad2c7] pl-4 my-2'>- Contributed to open-source projects, such as <a className="link" href="https://github.com/DefinitelyTyped/DefinitelyTyped">DefinitelyTyped</a> by adding typings to <a className="link" href="https://github.com/cettoana/react-scramble">react-scramble</a>. Can be seen in action by hovering over (if on desktop) the name on the top left of this page</p>
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