import React from 'react';
import './Professional.css';

export class Professional extends React.Component<{}> {
    render() {
        return <div id="page-wrap">
            <div className='professional-content'>
                <div id='titlehead'>
                    「Professional Info」
                    <hr />
                </div>
                <section>
                    <p>Hello! I'm Sophie, a software developer. I currently work as a Freelance Web Developer.</p>
                    <p>I primarily specialize in front-end web development, but have experience across multiple disciplines of Computer Science.</p>
                </section>
                <section>
                    <h1 className='section-header'>Career</h1>
                    <p>My formal experience began as a Undergraduate Research Assistant Full-Stack Developer at Wilfrid Laurier University.<br />
                        I took over and built upon a TypeScript React website, which was used across two semesters of over 30 students each. The website was a game-ified simulation of a transport market, where students acted as either a distributor or a transporter. They would then try to create and bid on contracts in order to maximize their own profits.<br /></p>
                    <p>Afterwards, I worked as a Technical Consultant for Gaijin Goombah LLC.<br />
                        My responsibilities were to optimize their workflow and provide technology recommendations and setup that aligned with their needs and budget restraints.<br />
                        I reduced file redundancy by implementing cloud storage solutions, which in turn facilitated their transition from local to remote work.</p>
                </section>
                <section>
                    <h1 className='section-header'>Other</h1>
                    <p>I have attended hackathons (<a className='link' href='https://devpost.com/captainkesty'>devpost</a>), notably earning an award at <a className="link" href="https://devpost.com/software/healthsimple">{"<Br/eak>Inequality"}</a> for best pitch. The objective for that hackathon was to create a product that would make access to medical resources easier to those in developing countries. My group decided to create a service, accessible through either SMS or low-spec Android app, that would let a user input symptoms and receive medical information.</p>
                    <p>I also was on the founding team for a new hackathon, StartHacks, at Wilfrid Laurier University alongside the members of 「Computer Science, Physics, and Mathematics Club」 (PHI) at Laurier, now known as 「Laurier Computing Society」 (LCS). The hackathon set the groundwork for Laurier's future hackathons and allowed for future classes to understand the obstacles associated with running a large scale event.</p>
                    <p>I am also a contributor to open-source projects, such as <a className="link" href="https://github.com/DefinitelyTyped/DefinitelyTyped">DefinitelyTyped</a>. I added typings to <a className="link" href="https://github.com/cettoana/react-scramble">react-scramble</a>. It's currently not on the mobile version of my website, but you can see it on desktop!</p>
                </section>
                <footer>
                    <section>
                    </section>
                </footer>
            </div>
        </div>
    }
}