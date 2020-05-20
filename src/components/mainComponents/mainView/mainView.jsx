import React, { Component } from "react";
import Artist from "./tabs/artist/artist";
import Album from "./tabs/album/album";

class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "artist",
    };
  }

  render() {
    return (
      <div className="mainview">
        {this.state.currentTab == "artist" ? <Artist></Artist> : ""}
        {this.state.currentTab == "album" ? <Album></Album> : ""}
      </div>
    );
  }
}
export default MainView;
