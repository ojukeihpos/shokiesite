"use client"
import Link from 'next/link';

interface Props {
    item: {
        id: number,
        text: string,
        page: string
    },
    selected: number
}

export const ListOption = (props: Props) => {
    return <Link id={"shoka__" + props.item.id} key={props.item.id} prefetch href={'/' + props.item.page} className='text-2xl list-group-item clickable text-white'>
        {props.item.text}
    </Link>
}