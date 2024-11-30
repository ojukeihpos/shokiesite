"use client"

import React from 'react';
import { ListOption } from './ListOption';

export default class List extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props)
    }

    state = {
        menulist: [
            {
                id: 0,
                text: "PROFESSIONAL",
                page: "professional"
            },
            {
                id: 1,
                text: "PERSONAL",
                page: "personal"
            },
        ],
        selected: 0,
    }

    render() {
        return <div id="menu">
            <div id="selectionBar">
                <div id="cursor" />
                <div id="highlight" />
            </div>
            <ul className="list-group">
                {this.state.menulist.map(item => {
                    return <div key={item.id} onMouseEnter={() => {
                        if (document.getElementById("highlight")) {
                            document.getElementById("highlight")!.style.height = document.getElementById("shoka__" + item.id.toString())?.offsetHeight + "px"
                            document.getElementById("highlight")!.style.transform = "translateY(" + document.getElementById("shoka__" + item.id.toString())?.getBoundingClientRect().top + "px)"//document.getElementById("shoka__" + item.id.toString())?.getBoundingClientRect().top + "px"
                        }
                        if (document.getElementById("cursor")) {
                            document.getElementById("cursor")!.style.height = document.getElementById("shoka__" + item.id.toString())?.offsetHeight + "px"
                            document.getElementById("cursor")!.style.transform = "translateY(" + document.getElementById("shoka__" + item.id.toString())?.getBoundingClientRect().top + "px)"
                        }
                    }}><ListOption item={item} selected={this.state.selected} />
                    </div>
                })
                }
            </ul>
        </div>
    }
}

/*if (document.getElementById("highlight")) {
            //document.getElementById("shoka__" + id.toString())?.appendChild(document.getElementById("highlight")!)
            document.getElementById("highlight")!.style.display = ""
            document.getElementById("highlight")!.style.height = document.getElementById("shoka__" + props.item.id.toString())?.offsetHeight + "px"
            document.getElementById("highlight")!.style.top = document.getElementById("shoka__" + props.item.id.toString())?.getBoundingClientRect().top + "px"
        }
        if (document.getElementById("cursor")) {
            //document.getElementById("shoka__" + id.toString())?.appendChild(document.getElementById("cursor")!)
            document.getElementById("cursor")!.style.display = ""
            document.getElementById("cursor")!.style.height = document.getElementById("shoka__" + props.item.id.toString())?.offsetHeight + "px"
            document.getElementById("cursor")!.style.top = document.getElementById("shoka__" + props.item.id.toString())?.getBoundingClientRect().top + "px"
        }*/