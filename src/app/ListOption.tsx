"use client"
import Link from 'next/link';
import React from 'react';

interface Props {
    item: {
        id: number,
        text: string,
        page: string
    },
    selected: number
}

export const ListOption = (props: Props) => {
    return <li id={"shoka__" + props.item.id} key={props.item.id} className={"list-group-item clickable"}>
        <Link prefetch href={'/' + props.item.page} className='text-2xl'>
            {props.item.text}
        </Link>
    </li>
}

/*<li id={"shoka__" + item.id} key={item.id} className={this.state.selected === item.id ? "list-group-item selected" : "list-group-item"} onMouseEnter={() => this.highlightTextHandler(item.id)}>
                            <Link prefetch key={item.page} href={'/' + item.page}>
                                <p className={this.state.selected === item.id ? "list-item-text clickable selected" : "list-item-text clickable"}>
                                    {item.text}
                                </p>
                            </Link>
                        </li>*/