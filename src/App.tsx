import React from 'react';
import './App.css';
import LeftColumn from './components/LeftColumn';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

import Commissions from './pages/commissions';

export default class App extends React.Component<{}, {
  tabID : number,
}> {
  constructor(props: {}) {
    super(props)
    this.setState({
      tabID: 0,
    })
  }
  render() {
    return <div className="App">
      <Header/>
      <LeftColumn/>
      <Routes>
        <Route path="/gallery" element={<Commissions/>}/>
        <Route path="/prices" element={<Commissions/>}/>
        <Route path="/commission form" element={<Commissions/>}/>
      </Routes>
    </div>
  }
}
