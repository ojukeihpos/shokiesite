import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './List.css';

export default class List extends React.Component<{}, {}> {

    state = {
        menulist: [
            {
                id: 0,
                text: "About Me",
                page: "about"
            },
            {
                id: 1,
                text: "Socials",
                page: "socials"
            },
            {
                id: 2,
                text: "DEBUG",
                page: "DEBUG"
            },
            {
                id: 3,
                text: "DEBUG2",
                page: "#"
            },
            {
                id: 4,
                text: "DEBUG3",
                page: "#"
            }
        ],
        selected: 0,
    }

    render(){
        return <Fragment>
            <div id="cursor" style={{top: "calc(20% + " + (this.state.selected * 43) + "px)"}}/>
            <div id="highlight" style={{top: "calc(20% + " + (this.state.selected * 43) + "px)"}}/>
            <ul className="list-group">
                {this.state.menulist.map(item => (
                    
                    <li key={item.id} className={this.state.selected === item.id ? "list-group-item selected" : "list-group-item"} onMouseEnter={() => {
                        this.setState({selected: item.id})
                        console.log("Selected: " + this.state.selected)
                    }}>
                        <Link to={"/" + item.page}><text className={this.state.selected === item.id ? "clickable selected" : "clickable"}>{item.text}</text></Link>
                    </li>
                    
                ))}
            </ul>
        </Fragment>
    }
}