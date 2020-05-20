import React from 'react';
import logo from './logo.svg';
import './App.css';
import NowPlaying from './components/mainComponents/nowPlaying/nowPlaying.jsx';
import SideMenu from './components/mainComponents/menu/menu.jsx';
import MainView from './components/mainComponents/mainView/mainView';
import { useSelector, useDispatch } from "react-redux";
function App() {
  return (
    <div className="mainframe fx fxdc ">
      <div className="menu-view fx fxdr">
        <div className="menu-container  fx-cc">menu
        <SideMenu></SideMenu>
        </div>
        <div className="mainview-container fx-cc">
          <MainView></MainView>
        </div>
      </div>


      <NowPlaying></NowPlaying>

      <div className="menu-container-mobile fx fxdr faic fjcse">
        <button className="home-tab">Home</button>
        <button className="search-tab">Search</button>

      </div>
    </div>
  );
}

export default App;
