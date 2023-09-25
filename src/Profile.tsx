import React from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSpotify, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default class Profile extends React.Component {

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
                <div className='about'>
                    <p>Hello! I am Sophie, a software developer, occassional cosplayer, and car enthusiast! I am also referred to as Shoka, so either name will do.</p>
                    {"\n"}
                    <p>I primarily specialize in front-end web development, but have experience across multiple disciplines of Computer Science.</p>
                    {"\n"}
                    <p>My formal experience began as a Full-Stack developer for the research of a Ph.D. student at Wilfrid Laurier University, where I took over a codebase from my predecessor and utilized React, Express, MongoDB, and AWS to deliver a platform which could be used for gathering data.</p>
                    {"\n"}
                    <p>I have attended and headed multiple hackathons, notably earning an award at {"<Br/eak>Inequality"} for best pitch. My group created an SMS and mobile application platform that allowed developing countries to access a service that would provide accurate and fast assessments of symptoms.</p>
                    {"\n"}
                    <p>I am also a contributor to open-source projects, such as <a className="link" href="https://github.com/DefinitelyTyped/DefinitelyTyped">DefinitelyTyped</a>.</p>
                    {"\n"}
                    <p>Outside of my career, I pursue community-building activities in both local and international scenes relating to the Fighting Games Community. I have contributed to both online and offline events as a Tournament Organizer and Bracket Runner, allowing myself to build relationships and contribute to increasing the quality of events.</p>
                    {"\n"}
                    <p>I am also a passionate human rights advocate, having assisted in forming a social environment at Wilfrid Laurier University for LGBTQ+ students under the name Laurier Pride Society. I acted as its co-president from its foundation to my graduation from university.</p>
                    {"\n"}
                    <p>In my personal time, I enjoy slice-of-life anime, looking at cars and fighter jets, and Mahjong.</p>
                    {"\n"}
                    <p>More information about me can be found in the other options on the left. Thanks for reading!</p>
                    {"\n"}
                </div>
            </div>
        </div>
    }
}