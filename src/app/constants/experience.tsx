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
                        "Engineering high-performance, accessible web applications utilizing Next.js, TypeScript, and Tailwind CSS, prioritizing Core Web Vitals and SEO optimization.",
                        "Owning the full SDLC, from architectural design in Figma to automated CI/CD deployment on AWS and Vercel.",
                    ],
                    highlight: (
                        <React.Fragment key="sw-h1">
                            Architected a frontend modernization for <a className='link' href="https://soarer.cloud">soarer.cloud</a>, implementing real-time data synchronization with the <strong>AT Protocol (BlueSky API)</strong> while maintaining legacy design constraints.
                        </React.Fragment>
                    )
                },
                {
                    title: "Technical Consultant",
                    date: "02/2022 - 01/2025",
                    location: "Gaijin Goombah LLC",
                    skills: "Cloud Architecture, System Design, Hardware Optimization",
                    bullets: [
                        "Optimized enterprise content pipelines through the strategic implementation of Hybrid Cloud storage solutions and high-availability hardware configurations.",
                        "Architected Data Redundancy and Disaster Recovery protocols, resulting in significantly increased system uptime and the elimination of critical workflow bottlenecks.",
                        "Evaluated and implemented hardware optimization strategies that extended system longevity and reduced operational overhead."
                    ]
                },
                {
                    title: "Full-Stack Developer",
                    date: "03/2019 - 02/2020",
                    location: "Wilfrid Laurier University",
                    skills: "React, TypeScript, Node.js, Express, MongoDB, Java, AWS",
                    bullets: [
                        "Architected and maintained a robust React/TypeScript application serving as a core educational platform for university-level departments.",
                        "Led a critical Database Migration of MongoDB instances to secure, compliant university infrastructure, ensuring data sovereignty and security.",
                        "Engineered automated data-processing utilities in Java to streamline research workflows, reducing manual processing time."
                    ],
                    highlight: (
                        <React.Fragment key="sw-h2">
                            Developed a complex, real-time market simulation engine featuring negotiation logic and dynamic profit-maximization algorithms.
                        </React.Fragment>
                    )
                }
            ]
        }
    ],
    otherEntries: [
        {
            org: "DefinitelyTyped",
            role: <React.Fragment key="oth-dt">Open Source Contributor to DefinitelyTyped, improving the TypeScript ecosystem by authoring type definitions for the <a className="link" href="https://github.com/cettoana/react-scramble">react-scramble</a> library.</React.Fragment>
        }
    ]
};

export const OTHER_CONTENT: PageData = {
    title: "Operations & Media Production",
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
                        "Executing end-to-end post-production workflows, synthesizing long-form live broadcasts into high-impact, multi-platform media assets.",
                        "Optimized visual assets and thumbnails using A/B testing and viewer analytics, resulting in a 45% measurable increase in Click-Through Rate (CTR) across lead channels.",
                        "Managed high-velocity post-production workflows for multiple creators, consistently improving audience retention through data-backed editing strategies."
                    ]
                },
                {
                    title: "Tournament Bracket Host",
                    date: "01/2026",
                    location: <React.Fragment key="loc-dup"><i>Dup Cup 3</i> <span className='text-gray-400'>(Remote)</span></React.Fragment>,
                    bullets: [
                        "Directed tournament logistics and real-time data orchestration for high-visibility digital events.",
                        "Synthesized complex player statistics and match data into actionable live-leaderboards, ensuring 100% data accuracy under broadcast pressure."
                    ]
                },
                {
                    title: "Data Entry Administrator",
                    date: "2024 - 2025",
                    location: "Electric Clash",
                    subTitle: <Link key="link-inc" href="https://incendium.gg/" className='link italic'>Incendium Gaming</Link>,
                    showBlueBar: true,
                    bullets: [
                        "Managed real-time data verification and logging for major eSports broadcasts, ensuring zero-latency communication between administrative and production teams.",
                        "Liaised with digital marketing and broadcast graphics departments to provide validated, real-time datasets for live on-air visuals."
                    ]
                },
                {
                    title: "Tournament Coordinator & Admin",
                    date: "2019",
                    skills: "Broadcasting Coordination, Consultation",
                    location: "Valkyries - Console Gaming League (CGL)",
                    subTitle: <Link key="link-inc" href="https://www.consolegamingleague.com/" className='link italic'>Console Gaming League</Link>,
                    bullets: [
                        "Coordinated complex match scheduling and bracket architecture specifically optimized for live broadcast window constraints.",
                        "Provided strategic consulting on community inclusivity and DEI (Diversity, Equity, and Inclusion) initiatives within the competitive gaming sector."
                    ]
                }
            ]
        }
    ],
    otherEntries: [
        { org: "StartHacks", role: "Founding Member of a large-scale collegiate hackathon; managed logistics and technical outreach for 100+ participants." },
        { org: "Laurier Pride Society", role: "Co-President and Founding Member; directed organizational strategy and campus-wide advocacy for underrepresented groups." },
        { org: "UW Fighting Games Club", role: "Treasurer and Financial Administrator for a high-activity campus organization." }
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
                    title: "ScrandleBot & Admin Infrastructure",
                    date: "Ongoing",
                    location: "Proprietary / Closed Source",
                    skills: "Python (Boto3/TwitchIO), Next.js, TypeScript, AWS DynamoDB, Pusher, NextAuth (OAuth 2.0), Real-time Systems",
                    bullets: [
                        <React.Fragment key="sc-b1">
                            Engineered a <strong>Hybrid-Edge architecture</strong> bridging a local Python automation engine with a cloud-hosted Next.js environment, utilizing <strong>AWS DynamoDB</strong> for high-availability persistence and <strong>Atomic Counters</strong> to prevent race conditions during peak concurrency.
                        </React.Fragment>,
                        <React.Fragment key="sc-b2">
                            Implemented a <strong>zero-trust Administrative Portal</strong> secured via Twitch OAuth 2.0 and custom NextAuth middleware, featuring automated security logging for unauthorized access attempts to ensure the integrity of the live broadcast controls.
                        </React.Fragment>,
                        <React.Fragment key="sc-b3">
                            Architected a <strong>Real-time Synchronization mesh</strong> using Pusher (WebSockets) to deliver sub-100ms state updates to a <Link href="https://points.shokie.xyz" className='clickable link'>public leaderboard</Link>, featuring an optimized <Link href="https://points.shokie.xyz/overlay" className='clickable link'>OBS Overlay mode</Link> with headless UI styling for seamless broadcast integration.
                        </React.Fragment>,
                        <React.Fragment key="sc-b4">
                            Optimized resource efficiency by developing an <strong>intelligent image-caching layer</strong> in React that leverages conditional API fetching and Next.js Image Optimization to handle 50+ concurrent user avatars with minimal external API overhead.
                        </React.Fragment>
                    ]
                },
                {
                    title: "HakureiCounter",
                    date: "2023",
                    location: <Link key="hc-loc" href="https://github.com/ojukeihpos/counter-gui" className='clickable link'>GitHub Link</Link>,
                    skills: "C#, .NET",
                    bullets: [
                        "Developed a high-performance, lightweight .NET utility optimized for low CPU overhead in resource-intensive environments.",
                        "Implemented robust file-stream handling to ensure data integrity during real-time read/write operations.",
                        "Designed a customizable UI with dynamic state management to support external broadcasting software requirements."
                    ]
                },
                {
                    title: "Uma-calculator",
                    date: "2022",
                    location: <Link key="uma-loc" href="https://uma.shokie.xyz" className='clickable link'>uma.shokie.xyz</Link>,
                    skills: "TypeScript",
                    bullets: [
                        "Reverse-engineered complex evaluation algorithms to recreate a data-driven scoring system in TypeScript.",
                        "Managed the end-to-end localization and architectural migration of a Japanese-based logic engine into a modern web framework."
                    ],
                    //highlight: "NOTE: This was largely left unfinished due to personal circumstances, with no real need to finish it due to other, more updated calculators appearing."
                },
                {
                    title: "Analysis Paster",
                    date: "2021",
                    skills: "JavaScript, Browser Extension APIs",
                    bullets: [
                        "Engineered cross-browser extensions (Chrome/Firefox) to automate data migration between distinct third-party platforms via Browser Extension APIs.",
                        "Optimized user workflow by injecting custom DOM elements into external sites, significantly reducing manual data entry.",
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
                        "Contributed to a large-scale TypeScript codebase using the Phaser HTML5 engine, focusing on modular feature implementation.",
                        "Developed encounter-manipulation logic requiring deep integration with existing game-state systems and probability tables."
                    ],
                    highlight: "Gained experience in navigating complex, rapidly changing codebases and peer-review processes in a high-velocity collaborative environment."
                },
                {
                    title: "AI Snake",
                    date: "2020",
                    skills: "Python",
                    bullets: [
                        "Optimized a Genetic Algorithm and Neural Network framework to increase simulation throughput and computational efficiency.",
                        "Refined heuristic models to eliminate redundant logical paths, improving the success rate of autonomous agents in dynamic environments."
                    ]
                },
                {
                    title: "BeerBuddy",
                    date: "University Group Project",
                    skills: "Python, Django, Flask",
                    bullets: [
                        "Led a cross-functional development team to deliver a full-stack recommendation engine using Django and Flask.",
                        "Managed project timelines, delegated technical tasks, and coordinated between sub-teams to ensure cohesive API and database integration."
                    ]
                },
                {
                    title: "HealthSimple",
                    date: "Hackathon Project",
                    skills: "Android, Java",
                    bullets: [
                        "Engineered an Android (Java) application focused on medical data accessibility for low-bandwidth and hardware-constrained environments.",
                        "Developed a fallback SMS-based query system to deliver critical information to regions with limited internet connectivity.",
                        "Awarded 'Best Pitch' for technical innovation and social impact in a competitive hackathon environment."
                    ]
                }
            ]
        }
    ]
};

export const PERSONAL_CONTENT = {
    title: "Personal",
    headerLinks: [
        { label: "Home", href: "/" },
        { label: "Contact", href: "mailto:your-email@example.com" }
    ],
    intro: "Outside of engineering, my time is spent immersed in competitive subcultures. I’m driven by complex systems and high-skill-ceiling games.",
    sections: [
        {
            category: "Mahjong",
            items: [
                {
                    title: "Riichi Mahjong",
                    date: "2020 - Present",
                    bullets: [
                        "Transitioned from a casual pandemic student to a regular competitor in online Riichi Mahjong circuits.",
                        "Deeply interested in the mathematical complexity and psychological 'reading' aspects of high-level play."
                    ]
                }
            ]
        },
        {
            category: "Fighting Games",
            items: [
                {
                    title: "FGC Competitor & Technical Coach",
                    date: "Long-standing",
                    skills: "Frame Data Analysis, Neutral Fundamentals, 3D Movement Systems",
                    bullets: [
                        "Provided technical coaching for players in Tekken, focusing on player psychology and system mechanics.",
                        "Guided students through high-level defensive concepts, including sidestep usage and frame trap recognition.",
                        "Leveraged the 'competitive loop' to mentor others, turning abstract losses into actionable data-driven improvement plans."
                    ]
                }
            ]
        },
        {
            category: "Tetris",
            items: [
                {
                    title: "Modern Tetris Specialist",
                    date: "Current",
                    bullets: [
                        "Specialize in competitive modern Tetris (Tetrio), focusing on head-to-head interaction and high-speed efficiency."
                    ]
                }
            ]
        }
    ]
};