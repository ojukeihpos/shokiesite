import Link from 'next/link';
import { PageData } from '../types/experience';
import React from 'react';

export const SOFTWARE_CONTENT: PageData = {
    title: "Software Engineering",
    headerLinks: [
        { label: "github", href: "https://github.com/ojukeihpos" },
        { label: "sophie@shokie.xyz", href: "mailto:sophie@shokie.xyz" }
    ],
    intro: "Hello! I'm Sophie, a software engineer with a BSc. in Computer Science. I specialize in building modern web applications and providing technical solutions for creative industries.",
    sections: [
        {
            category: "Career",
            items: [
                {
                    title: "Freelance Web Developer",
                    date: "03/2023 - Ongoing",
                    location: "Remote",
                    skills: "Next.js, TypeScript, Node.js, AWS, Git, Figma, Tailwind CSS",
                    bullets: [
                        "Architecting responsive, high-performance websites using React-based frameworks, TypeScript, and utility-first CSS.",
                        "Managing end-to-end project lifecycles, from initial Figma wireframes to cloud deployment and ongoing technical support."
                    ],
                    highlight: (
                        <React.Fragment key="sw-h1">
                            Recently revamped <a className='link' href="https://soarer.cloud">soarer.cloud</a>, modernizing the UI with Next.js while preserving the client’s legacy aesthetic.
                            The latest feature includes a real-time BlueSky feed integrated via the <strong>AT Protocol</strong>.
                        </React.Fragment>
                    )
                },
                {
                    title: "Technical Consultant",
                    date: "02/2022 - 01/2025",
                    location: "Gaijin Goombah LLC",
                    skills: "Cloud Architecture, System Design, Hardware Optimization",
                    bullets: [
                        "Streamlined content production pipelines by implementing custom hardware configurations and cloud-native storage solutions.",
                        "Consulted on system longevity and data redundancy, significantly reducing hardware failure risks and workflow bottlenecks."
                    ]
                },
                {
                    title: "Full-Stack Developer",
                    date: "03/2019 - 02/2020",
                    location: "Wilfrid Laurier University",
                    skills: "React, TypeScript, Node.js, Express, MongoDB, Java, AWS",
                    bullets: [
                        "Engineered and maintained a TypeScript-based React application utilized by senior-level classes across multiple semesters.",
                        "Orchestrated the migration of MongoDB instances and domain hosting to secure university infrastructure.",
                        "Developed Java utilities to automate large-scale data processing, eliminating manual research delays."
                    ],
                    highlight: (
                        <React.Fragment key="sw-h2">
                            Built a gamified transport market simulation where students negotiated contracts to maximize profits.
                        </React.Fragment>
                    )
                }
            ]
        }
    ],
    otherEntries: [
        {
            org: "DefinitelyTyped",
            role: <React.Fragment key="oth-dt">Contributor providing TypeScript definitions for <a className="link" href="https://github.com/cettoana/react-scramble">react-scramble</a> (see the name animation at the top left of this page).</React.Fragment>
        }
    ]
};

export const OTHER_CONTENT: PageData = {
    title: "Community & Production",
    headerLinks: [
        { label: "sophie@shokie.xyz", href: "mailto:sophie@shokie.xyz" }
    ],
    sections: [
        {
            category: "Professional Positions",
            items: [
                {
                    title: "Video Editor",
                    date: "12/2025 - Ongoing",
                    location: "Remote",
                    skills: "DaVinci Resolve, Clip Studio Paint",
                    bullets: [
                        <React.Fragment key="ed-b1">Lead Editor for <Link href="https://twitch.tv/WAR6Actual/" className='link italic'>WAR6Actual</Link> and <Link href="https://twitch.tv/wild_robinn/" className='link italic'>WildRobin</Link>.</React.Fragment>,
                        "Transforming long-form live streams into high-engagement highlights and vertical shorts.",
                        "Crafting custom thumbnails optimized for viewer retention and click-through rates (CTR)."
                    ]
                },
                {
                    title: "Tournament Bracket Host",
                    date: "01/2026",
                    location: <React.Fragment key="loc-dup"><i>Dup Cup 3</i> <span className='text-gray-400'>(Remote)</span></React.Fragment>,
                    bullets: [
                        "Managed bracket logistics and data entry for an online TETR.IO tournament featuring VTuber competitors.",
                        "Coordinated match scheduling and maintained real-time leaderboards and player statistics."
                    ]
                },
                {
                    title: "Data Entry Administrator",
                    date: "2024 - 2025",
                    location: "Electric Clash",
                    subTitle: <Link key="link-inc" href="https://incendium.gg/" className='link italic'>Incendium Gaming</Link>,
                    showBlueBar: true,
                    bullets: [
                        "Verified and logged tournament results in high-pressure environments to ensure strict adherence to broadcast schedules.",
                        "Liaised with the social media team to provide accurate player data for real-time graphics."
                    ]
                },
                {
                    title: "Tournament Coordinator & Admin",
                    date: "2019",
                    skills: "Broadcasting Coordination, Consultation",
                    location: "Valkyries - Console Gaming League (CGL)",
                    subTitle: <Link key="link-inc" href="https://www.consolegamingleague.com/" className='link italic'>Console Gaming League</Link>,
                    bullets: [
                        "Oversaw tournament brackets and coordinated matches specifically for live broadcast segments.",
                        "Acted as a representative and consultant for LGBTQ+ presence and inclusivity within the eSports community."
                    ]
                }
            ]
        }
    ],
    otherEntries: [
        { org: "StartHacks", role: "Founding Team Member of Laurier’s premier university hackathon." },
        { org: "Laurier Pride Society", role: "Co-President and Founding Member; advocate for queer representation in campus spaces." },
        { org: "UW Fighting Games Club", role: "Treasurer and Financial Administrator." }
    ]
};

export const PROJECTS_CONTENT: PageData = {
    title: "Projects",
    headerLinks: [
        { label: "github", href: "https://github.com/ojukeihpos" }
    ],
    sections: [
        {
            category: "Software Projects",
            items: [
                {
                    title: "ScrandleBot",
                    date: "Ongoing",
                    location: "Closed Source",
                    skills: "Python, Next.js, TypeScript, Node.js, Amazon Web Services (AWS) DynamoDB, NoSQL, WebSockets",
                    bullets: [
                        <React.Fragment key="sc-b1">Multi-functional Python script that integrates <Link href="https://docs.python.org/3/library/tkinter.html" className='clickable link'>Tkinter</Link>, <Link href="https://twitchio.dev/en/latest/" className='clickable link'>TwitchIO</Link>, and <Link href="https://pypi.org/project/PyAutoGUI/" className='clickable link'>PyAutoGUI</Link> to provide <Link href="https://twitch.tv/" className='clickable link'>Twitch</Link> audiences the ability to interface with automated games of <Link href="https://scrandle.com/" className='clickable link'>Scrandle</Link>.</React.Fragment>,
                        "Features a GUI with automation controls, system reports, a leaderboard and poll display, and a live feed of the chatroom.",
                        "Interfaces with a NoSQL database (AWS DynamoDB) to manage everything related to points.",
                        <React.Fragment key="sc-b2">A web interface was also built to view the points leaderboard which can be seen <Link href="https://points.shokie.xyz" className='clickable link'>here</Link> with an overlay version <Link href="https://points.shokie.xyz/overlay" className='clickable link'>here</Link>.</React.Fragment>
                    ]
                },
                {
                    title: "HakureiCounter",
                    date: "2023",
                    location: <Link key="hc-loc" href="https://github.com/ojukeihpos/counter-gui" className='clickable link'>GitHub Link</Link>,
                    skills: "C#, .NET",
                    bullets: [
                        "Lightweight C# Program that reads and writes to a text file.",
                        "Increments and decrements a number, displays it onto a changeable coloured background.",
                        "Designed to be used with broadcasting software."
                    ]
                },
                {
                    title: "Uma-calculator",
                    date: "2022",
                    location: <Link key="uma-loc" href="https://uma.shokie.xyz" className='clickable link'>uma.shokie.xyz</Link>,
                    skills: "TypeScript",
                    bullets: [
                        "An evaluation calculator used to gauge the rank of trainees in Umamusume: Pretty Derby.",
                        "Originally designed as a simple translation from Japanese to English, eventually flourished into a recreation."
                    ],
                    highlight: "NOTE: This was largely left unfinished due to personal circumstances, with no real need to finish it due to other, more updated calculators appearing."
                },
                {
                    title: "Analysis Paster",
                    date: "2021",
                    skills: "JavaScript, Browser Extension APIs",
                    bullets: [
                        <React.Fragment key="ap-b1">A Mozilla Firefox and Google Chrome extension that inserts a button into <Link href="https://www.fflogs.com/" className='clickable link'>FFLogs</Link> to automatically paste logs into <Link href={"https://xivanalysis.com/"} className='clickable link'>xivanalysis</Link>.</React.Fragment>
                    ],
                    subTitle: (
                        <div className="flex gap-4" key="ap-links">
                            <Link href="https://addons.mozilla.org/en-CA/firefox/addon/analysis-paster/" className='clickable link'>Firefox Link</Link>
                            <Link href="https://chromewebstore.google.com/detail/fflogs-to-xivanalysis/infdgbihalnbbkkmojeakomabadipfkm" className='clickable link'>Chrome Link</Link>
                        </div>
                    )
                },
                {
                    title: "PokéRogue - Repels",
                    date: "2024",
                    location: <Link key="pr-loc" href="https://github.com/ojukeihpos/pokerogue" className='clickable link'>GitHub Link</Link>,
                    skills: "TypeScript, HTML5 Phaser",
                    bullets: [
                        "PokéRogue is a fangame based on the Pokémon franchise.",
                        "Contribution: A new item, 'Repel', allowing players to manipulate the type of encounters experienced on a playthrough."
                    ],
                    highlight: "NOTE: This wasn't merged into the main repository due to team uncertainty regarding gameplay balance and rapid restructuring of the codebase."
                },
                {
                    title: "AI Snake",
                    date: "2020",
                    skills: "Python",
                    bullets: [
                        <React.Fragment key="snake-b1">Based on <Link href={"https://github.com/Code-Bullet/SnakeFusion"} className='clickable link'>code from Code-Bullet</Link>, using genetic algorithms and neural networks.</React.Fragment>,
                        "Modified the code to run more simulations per generation and adjusted the neural network to prevent redundancies."
                    ]
                },
                {
                    title: "BeerBuddy",
                    date: "University Group Project",
                    skills: "Python, Django, Flask",
                    bullets: [
                        "A web app designed to offer alcoholic recommendations based on taste, alcohol percentage, colour, etc.",
                        "Role: Oversaw multiple teams and their tasks, assigning and assisting as necessary."
                    ]
                },
                {
                    title: "HealthSimple",
                    date: "Hackathon Project",
                    skills: "Android, Java",
                    bullets: [
                        "Winner of 'Best Pitch' award at a university hackathon.",
                        "Allowed users of lower-spec Android devices to learn about medical symptoms via database queries.",
                        "Supported SMS-based querying to provide accessibility to distant areas with low connectivity."
                    ]
                }
            ]
        }
    ]
};