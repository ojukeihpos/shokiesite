import React from 'react';
import './DebugScreen.css'

type DebugProps = {
    focused: boolean;
}

type DebugState = {
    focused: boolean;
}

export default class DebugScreen extends React.Component<DebugProps, DebugState> {
    state: DebugState = {
        focused: false,
    }
    constructor(props : DebugProps, state : DebugState) {
        super(props)
        this.state = ({
            focused: props.focused,
        })
        console.log(this.state.focused)
    }
    render() {
        return <div id="DebugScreen" className={this.props.focused ? "focused" : ""}>
            <text>asd</text>
            </div>
    }
}