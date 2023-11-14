import React, { MouseEventHandler } from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSpotify, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default class Profile extends React.Component<{}, {}> {

    state = {
        selectedTab: 0,
    }

    constructor(props: {}) {
        super(props)
        this.setState({
            selectedTab: 0,
        })
    }
    render() {
        return <div>
            <div className='content'>
                <div className='shoka__header'>
                    <div id='titlehead'>
                        「Shoka」
                    </div>
                    <div className='socials__bar'>
                        <a href="https://github.com/ojukeihpos"><FontAwesomeIcon icon={faGithub} size={'2x'} /></a>
                        <a href="https://open.spotify.com/user/3tzf9mdztpmaxarb6mh5co7az?si=d6f8e31224314e28"><FontAwesomeIcon icon={faSpotify} size={'2x'} /></a>
                        <a href="https://www.instagram.com/shokastarlight/"><FontAwesomeIcon icon={faInstagram} size={'2x'} /></a>
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
                    <p>Hello! I am Sophie, a software developer, occassional cosplayer, Mahjong player, and car enthusiast. I am also referred to as Shoka, so either name will do.</p>
                    <br />
                    <p>I primarily specialize in front-end web development, but have experience across multiple disciplines of Computer Science.</p>
                    <br />
                    <p>My formal experience began as a Full-Stack developer for the research of a PhD candidate at Wilfrid Laurier University, where I took over a codebase from my predecessor and utilized React, Express, MongoDB, and AWS to deliver a platform which could be used for gathering data.</p>
                    <br />
                    <p>Afterwards, I worked as a Technical Consultant for Gaijin Goombah LLC (Yes, that GaijinGoombah), where my responsibilities were to optimize their workflow and provide technology recommendations and setup that aligned with their needs and budget restraints. I reduced file redundancy by implementing cloud storage solutions, which in turn facilitated their transition from local to remote work.</p>
                    <br />
                    <p>I have attended multiple hackathons, notably earning an award at {"<Br/eak>Inequality"} for best pitch. My group created a platform, accessible through either SMS or low-spec Android app, that provided accurate and fast assessments of inputted symptoms at low cost.</p>
                    <br />
                    <p>I have also spearheaded a new hackathon, StartHacks, at Wilfrid Laurier University alongside the members of 「Computer Science, Physics, and Mathematics Club」 (PHI) at Laurier, now known as 「Laurier Computing Society」 (LCS). The hackathon set the groundwork for Laurier's future hackathons and allowed for future classes to understand the obstacles associated with running a large scale event.</p>
                    <br />
                    <p>I am also a contributor to open-source projects, such as <a className="link" href="https://github.com/DefinitelyTyped/DefinitelyTyped">DefinitelyTyped</a>. I added typings to <a className="link" href="https://github.com/cettoana/react-scramble">react-scramble</a>, which you can see in action on the left!</p>
                    <br />
                    <p>Outside of my career, I pursue community-building activities in both local and international scenes relating to the Fighting Games Community. I have contributed to both online and offline events as a Tournament Organizer and Bracket Runner, allowing myself to build relationships and contribute to increasing the quality of events.</p>
                    <br />
                    <p>I am also a passionate human rights advocate, having assisted in forming a social environment at Wilfrid Laurier University for LGBTQ+ students under the name Laurier Pride Society. I acted as its co-president from its foundation until my graduation from university.</p>
                    <br />
                </div>
            </div>
        </div>
    }
}