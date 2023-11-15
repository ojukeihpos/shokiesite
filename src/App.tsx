import React from 'react';
import Background from './Background';
import "@fontsource/dotgothic16";
import './App.css';
import Menu from './Menu';
import Socials from './Socials';
import Hardware from './Hardware';
import Professional from './Professional';
import { Route, Routes } from 'react-router-dom';
import './screen.css'
import Scramble from 'react-scramble';

export default class App extends React.Component<{}, { width: number }> {
  /* for personal colour scheming:
  #0002F2 -- dark blue
  #9C00F2 -- pink
  #4D00F2 -- purple
  #004FF2 -- lighter(?) blue
  #EF22F5 -- hot pink
  */
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  constructor(props: {}) {
    super(props)
    this.state = {
      width: window.innerWidth,
    }
  }

  public render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    if (isMobile) {
      return <div className='App'>
        <h1>
          WIP
        </h1>
      </div>
    } else {
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
          <Route path="/professional" element={<Professional />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/" />
        </Routes>
        <footer className="shoka__footer">
          <img alt='' className='parts straight_vents' src={require('./assets/borders/parts_04.svg').default}></img>
        </footer>
      </div>
    }
  }
}