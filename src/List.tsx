import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './List.css';
import Scramble, { AnimationControls } from 'react-scramble';

export default class List extends React.Component<{}, {}> {

    shuffle = (word: String) => {
        return word
            .split("")
            .sort(() => {
                return 0.5 - Math.random();
            })
            .join("")
    }

    gen = (word: String) => {
        let textArray = []
        if (word) {
            for (let i = word.length; i >= 0; i--) {
                let tmp = this.shuffle(word)
                tmp = tmp.slice(0, word.length - i)
                textArray.push(tmp)
            }
        }
        let shuffles = 6
        //variations with no size change
        for (let i = 0; i < shuffles; i++) {
            textArray.push(this.shuffle(word))
        }

        textArray.push(word)
        return textArray
    }

    state = {
        menulist: [
            {
                id: 0,
                text: "PROFILE",
                page: "profile"
            },
            {
                id: 1,
                text: "SPECS",
                page: "hardware"
            },
            {
                id: 2,
                text: "SNS",
                page: "socials"
            },
        ],
        selected: 0,
        c: new Array<AnimationControls>(),
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.highlightTextHandler(this.state.selected)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }

    highlightTextHandler = (id: Number) => {
        this.setState({ selected: id })

        if (document.getElementById("highlight")) {
            //document.getElementById("shoka__" + id.toString())?.appendChild(document.getElementById("highlight")!)
            document.getElementById("highlight")!.style.display = ""
            document.getElementById("highlight")!.style.height = document.getElementById("shoka__" + id.toString())?.offsetHeight + "px"
            document.getElementById("highlight")!.style.top = document.getElementById("shoka__" + id.toString())?.getBoundingClientRect().top + "px"
        }
        if (document.getElementById("cursor")) {
            //document.getElementById("shoka__" + id.toString())?.appendChild(document.getElementById("cursor")!)
            document.getElementById("cursor")!.style.display = ""
            document.getElementById("cursor")!.style.height = document.getElementById("shoka__" + id.toString())?.offsetHeight + "px"
            document.getElementById("cursor")!.style.top = document.getElementById("shoka__" + id.toString())?.getBoundingClientRect().top + "px"
        }
    }

    render() {
        return <Fragment>
            <div id="selectionBar">
                <div id="cursor" />
                <div id="highlight" />
            </div>


            <ul className="list-group">
                {this.state.menulist.map(item => (

                    <li id={"shoka__" + item.id} key={item.id} className={this.state.selected === item.id ? "list-group-item selected" : "list-group-item"} onMouseEnter={(e) => {
                        console.log(this.state.c[item.id])
                        this.state.c[item.id].restart()
                        this.highlightTextHandler(item.id)
                    }}>
                        <Link to={"/" + item.page}><p className={this.state.selected === item.id ? "list-item-text clickable selected" : "list-item-text clickable"}>
                            <Scramble
                                autoStart
                                text={item.text}
                                steps={[
                                    {
                                        roll: 5,
                                        action: '+',
                                        type: 'all',
                                    },
                                    {
                                        action: '-',
                                        type: 'forward',
                                    },
                                ]}
                                bindMethod={c => {
                                    this.state.c.push(c)
                                }}
                                speed='fast' />
                        </p></Link>
                    </li>

                ))}
            </ul>
        </Fragment>
    }
}