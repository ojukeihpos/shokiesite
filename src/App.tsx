import React from 'react';
import Background from './Background';
import "@fontsource/dotgothic16";
import './App.css';
import Menu from './Menu';
import Socials from './Socials';
import Hardware from './Hardware';
import Profile from './Profile';
import { Route, Routes } from 'react-router-dom';
import './screen.css'
import Scramble from 'react-scramble';

export default class App extends React.Component<{}, {}> {
  state = {
    focused: false,
  }
  constructor(props: {}, state: {}) {
    super(props)
  }
  public render() {
    return <div className="App">
      <h1 id="shoka__name"><a href="/"><Scramble
        autoStart
        text={"shoka"}
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
        mouseEnterTrigger='restart'
        speed='fast' /></a></h1>
      <div id="shoka__frame" />
      <div className="shoka__forward-vents"></div>
      <Background />
      <Menu />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/hardware" element={<Hardware />} />
        <Route path="/" />
      </Routes>
      <footer className="shoka__footer">
        <img alt='' className='parts straight_vents' src={require('./assets/borders/parts_04.svg').default}></img>
      </footer>
    </div>
  }
}