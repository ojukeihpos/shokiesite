import React from 'react';
import Background from './Background';

import './App.css';
import Menu from './Menu';
import About from './About';
import Socials from './Socials';
import { Route, Routes } from 'react-router-dom';
import DebugScreen from './DebugScreen';

export default class App extends React.Component<{}, {}> {
  state = {
    focused: false,
  }
  constructor(props: {}, state: {}) {
    super(props)
  }
  public render() {
    return <div className="App">
        <Background/>
        <Menu/>
        <DebugScreen focused={this.state.focused}/>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/socials" element={<Socials/>}/>
          <Route path="/DEBUG" />
        </Routes>
    </div>
  }
}