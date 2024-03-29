import React from 'react';
import { Background as DesktopBackground } from './desktop/Background';
import { MobileComponent } from './mobile/MobileComponent';
import "@fontsource/dotgothic16";
import './App.css';
import Menu from './desktop/Menu';
import Professional from './desktop/Professional';
import { Route, Routes } from 'react-router-dom';
import Scramble from 'react-scramble';
import Personal from './desktop/Personal';
import Mahjong from './desktop/Mahjong';
import Cookies from 'js-cookie';
const DISCORD_API = 'http://discord.com/api/v10';

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
    const isMobile = width <= 800;

    return <div className="App">
      <link href='https://fonts.gstatic.com' rel='preconnect' />
      <link href='https://fonts.googleapis.com/css?family=Source Sans 3' rel='stylesheet' />
      {isMobile ? <MobileComponent /> : <div>
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
        <DesktopBackground />
        <Menu />
        <Routes>
          <Route path="/professional" element={<Professional />} />
          <Route path="/personal" element={<Personal />} />
        </Routes>
        <footer className="shoka__footer">
          <img alt='' className='parts straight_vents' src={require('./assets/borders/parts_04.svg').default}></img>
        </footer>
      </div>
      }
    </div>
  }
}