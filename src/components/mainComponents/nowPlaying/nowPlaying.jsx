import React, { Component } from "react";
import ProgressBar from "./progressBar.jsx";
import sound from "./04_Tango.mp3";
import { connect } from "react-redux";
import {
  song_currentTime_action,
  song_duration_action,
  song_Change_currentTime_action
} from "../../../actions/nowplaying_actions.js";

const mapStateToProps = state => {
  return {
    new_currentTime: state.song_newCurrentTime,
    Change_currentTime: state.Change_currentTime
  };
};

function mapDispatchToProps(dispatch) {
  return {
    currentTime_update: current => {
      dispatch(song_currentTime_action(current));
    },
    durationTime: duration => {
      dispatch(song_duration_action(duration));
    },
    isChange_currentTime: isChange => {
      dispatch(song_Change_currentTime_action(isChange));
    }
  };
}
class _NowPlaying extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.audio = new Audio(sound);
  }
  componentDidMount = () => {
    this.audio.ontimeupdate = this.onSeekerUpdate;
  };
  onSeekerUpdate = () => {
    this.props.currentTime_update(this.audio.currentTime);
  };
  onPlay = () => {
    this.audio.play();
    this.props.durationTime(this.audio.duration);
  };
  set_currentTime = newTime => {
    this.props.isChange_currentTime(false);
    this.audio.currentTime = newTime;
  };

  render() {
    if (this.props.isChange_currentTime) {
      this.set_currentTime(this.props.new_currentTime);
    }
    return (
      <div
        className="nowplaying fx-cc"
        onClick={() => {
          this.onPlay();
        }}
      >
        <ProgressBar></ProgressBar>
      </div>
    );
  }
}
const NowPlaying = connect(mapStateToProps, mapDispatchToProps)(_NowPlaying);

export default NowPlaying;
