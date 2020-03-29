import React from 'react';
import logo from './logo.svg';
import './App.css';
import NowPlaying from './components/mainComponents/nowPlaying/nowPlaying.jsx';
import SideMenu from './components/mainComponents/menu/menu.jsx';
import { useSelector, useDispatch } from "react-redux";
function App() {
  return (
    <div className="mainframe fx fxdc ">
      <div className="menu-view fx fxdr">
        <div className="menu-container border border-danger  fx-cc">menu
        <SideMenu></SideMenu>
        </div>
        <div className="mainview-container border border-secondary fx-cc"> view</div>
      </div>

      <div className="nowplaying-container fx border border-light fx-cc">
        <NowPlaying></NowPlaying>
      </div>
    </div>
  );
}

export default App;
