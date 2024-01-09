import React from 'react';
import './Content.css';
import { Link } from 'react-router-dom';

export default class Professional extends React.Component<{}, {}> {

    state = {
        selectedTab: 0,
    }

    constructor(props: {}) {
        super(props)
        /*this.setState({
            selectedTab: 0,
        })*/
    }
    render() {
        return <div>
            <Link to="/"><div className='exit-button'>Exit</div></Link>
            <div className='content'>
                <div className='shoka__header'>
                    <div id='titlehead'>
                        「Professional」
                    </div>
                    <div className='socials__bar'>
                        <a className='link' href="https://github.com/ojukeihpos">github</a>
                        |
                        <a className='link' href="mailto:sophie@shokie.xyz">sophie@shokie.xyz</a>
                    </div>
                    <hr className='profilehr' />
                </div>
                {/*<div className="profileTabs">
                    <ul className="profileNav">
                        <li onClick={() => {
                            this.setState({
                                selectedTab: 1,
                            })
                        }} className={"profileTab " + (this.state.selectedTab == 1 ? "active" : "")}>TAB 1</li>
                        <li className={"profileTab " + (this.state.selectedTab == 2 ? "active" : "")}>TAB 2</li>
                    </ul>
                    </div>*/}
                <div className='about'>
                    <p>Hello! I'm Sophie, a software developer. I currently work as a Freelance Web Developer.</p>
                    <br />
                    <h1>Career</h1>
                    <p>My formal experience began as a Undergraduate Research Assistant Full-Stack Developer at Wilfrid Laurier University.<br />
                        I took over and built upon a TypeScript React website, which was used across two semesters of over 30 students each. The website was a game-ified simulation of a transport market, where students acted as either a distributor or a transporter. They would then try to create and bid on contracts in order to maximize their own profits.<br /></p>
                    <br />
                    <p>Afterwards, I worked as a Technical Consultant for Gaijin Goombah LLC, where I optimized content production workflow and provided asset recommendations based on budget and functional restraints.<br />
                        I reduced file redundancy by implementing cloud storage solutions, which in turn facilitated their transition from local to remote work.</p>
                    <br />
                    <h1>Other</h1>
                    <p>I have attended hackathons (<a className='link' href='https://devpost.com/captainkesty'>devpost</a>), notably earning an award at <a className="link" href="https://devpost.com/software/healthsimple">{"<Br/eak>Inequality"}</a> for best pitch. The objective for that hackathon was to create a product that would make access to medical resources easier to those in developing countries. My group decided to create a service, accessible through either SMS or low-spec Android app, that would let a user input symptoms and receive medical information.</p>
                    <br />
                    <p>I also was on the founding team for a new hackathon, StartHacks, at Wilfrid Laurier University alongside the members of 「Computer Science, Physics, and Mathematics Club」 (PHI) at Laurier, now known as 「Laurier Computing Society」 (LCS). The hackathon set the groundwork for Laurier's future hackathons and allowed for future classes to understand the obstacles associated with running a large scale event.</p>
                    <br />
                    <p>I am also a contributor to open-source projects, such as <a className="link" href="https://github.com/DefinitelyTyped/DefinitelyTyped">DefinitelyTyped</a>. I added typings to <a className="link" href="https://github.com/cettoana/react-scramble">react-scramble</a>, which you can see in action by hovering over (if you're on desktop) one of the list choices on the left!</p>
                    <br />
                </div>
            </div>
        </div>
    }
}