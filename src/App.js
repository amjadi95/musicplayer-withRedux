import React from 'react';
import logo from './logo.svg';
import './App.css';
import NowPlaying from './components/nowPlaying/nowPlaying.jsx';
import SideMenu from './components/menu/sidemenu.jsx';
import MainView from './components/mainView/mainView';
import MobileMenu from './components/menu/mobileMenu';
import Queue from "./components/nowPlaying/queue";
import { useSelector, useDispatch } from "react-redux";
function App() {
  return (
    <div className="mainframe fx fxdc ">
      <div className="menu-view fx fxdr">

        <SideMenu></SideMenu>

        <div className="mainview-container fx-cc">
          <MainView></MainView>
        </div>
      </div>


      <NowPlaying></NowPlaying>
      <MobileMenu />
      <Queue />
    </div>
  );
}

export default App;
