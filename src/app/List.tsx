"use client"

import React, { useEffect } from 'react';
import { ListOption } from './ListOption';
import { usePathname } from 'next/navigation';

interface Props {
    pages: [...{ id: number, text: string, page: string }[]]
}

const state = {
    selected: 0,
}

export const List = (props: Props) => {
    const pathName = usePathname()

    useEffect(() => {
        props.pages.map(item => {
            // console.log('%s pathName | %s item.page | equality %s', pathName, '/' + item.page, item.page == '/' || pathName == '/' + item.page)

            if (item.page == '/' || pathName == '/' + item.page) {
                state.selected = item.id
                // console.log("Should be moving highlighter")
                if (document.getElementById("highlight")) {
                    document.getElementById("highlight")!.style.height = document.getElementById("shoka__" + item.id.toString())?.offsetHeight + "px"
                    document.getElementById("highlight")!.style.transform = "translateY(" + document.getElementById("shoka__" + item.id.toString())?.getBoundingClientRect().top + "px)"//document.getElementById("shoka__" + item.id.toString())?.getBoundingClientRect().top + "px"
                }
                if (document.getElementById("cursor")) {
                    document.getElementById("cursor")!.style.height = document.getElementById("shoka__" + item.id.toString())?.offsetHeight + "px"
                    document.getElementById("cursor")!.style.transform = "translateY(" + document.getElementById("shoka__" + item.id.toString())?.getBoundingClientRect().top + "px)"
                }
            }
        })
    }, []);
    return <div id="menu">
        <div id="selectionBar">
            <div id="cursor" />
            <div id="highlight" />
        </div>
        <ul className="list-group">
            {props.pages.map(item => {
                return <div key={item.id} onMouseEnter={() => setHighlighterPosition(item.id)}

                    onMouseLeave={() => setHighlighterPosition(state.selected)}

                    onClick={() => state.selected = item.id}
                ><ListOption item={item} selected={state.selected} />
                </div>
            })}
        </ul>
    </div>
}

function setHighlighterPosition(yCoord: number) {
    if (document.getElementById("highlight")) {
        document.getElementById("highlight")!.style.height = document.getElementById("shoka__" + yCoord.toString())?.offsetHeight + "px"
        document.getElementById("highlight")!.style.transform = "translateY(" + document.getElementById("shoka__" + yCoord.toString())?.getBoundingClientRect().top + "px)"//document.getElementById("shoka__" + item.id.toString())?.getBoundingClientRect().top + "px"
    }
    if (document.getElementById("cursor")) {
        document.getElementById("cursor")!.style.height = document.getElementById("shoka__" + yCoord.toString())?.offsetHeight + "px"
        document.getElementById("cursor")!.style.transform = "translateY(" + document.getElementById("shoka__" + yCoord.toString())?.getBoundingClientRect().top + "px)"
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