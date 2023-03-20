import React from 'react'
import './Tab.css'
import { Link } from 'react-router-dom';

export default class Tab extends React.Component<{text : string}, {}> {
    constructor(props: {text : string}) {
        super(props)
    }
    public render() {
        return <Link to={"/" + this.props.text}><div className="tab"><p>{this.props.text}</p></div></Link>
    }
}