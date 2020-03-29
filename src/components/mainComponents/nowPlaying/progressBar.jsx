import React, { Component } from "react";
import { connect } from "react-redux";
import {
  song_set_current_time_action,
  song_Change_currentTime_action
} from "../../../actions/nowplaying_actions.js";

const mapDispatchToProps = dispatch => {
  return {
    Change_currentTime: arg => {
      dispatch(song_Change_currentTime_action(arg));
    },
    set_current_time: arg => {
      dispatch(song_set_current_time_action(arg));
    }
  };
};
const mapStateToProps = state => {
  return {
    currentTime: state.song_currentTime,
    duration: state.song_duration
  };
};

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.this_element = React.createRef();
  }
  toTimeShape(time) {
    let min, sec;
    min = parseInt(time / 60);
    sec = parseInt(time % 60);
    return (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
  }
  onChanege_currentTime = (event, duration) => {
    this.props.Change_currentTime(true);
    console.log(event.nativeEvent.offsetX / this.this_element.offsetWidth);
    this.props.set_current_time(
      parseInt(
        (event.nativeEvent.offsetX / this.this_element.offsetWidth) * duration
      )
    );
  };
  render() {
    let currentTime = this.props.currentTime;

    let duration = this.props.duration;

    let length = currentTime * (100 / duration);
    length = length + "%";

    let curtime, endtime;
    curtime = this.toTimeShape(currentTime);

    endtime = this.toTimeShape(duration);

    return (
      <div
        className="progress-bar-container fx fxdc faic fjcsb"
        ref={el => {
          this.this_element = el;
        }}
        onClick={event => {
          this.onChanege_currentTime(event, duration);
        }}
      >
        <div className="progress-Bar ">
          <div className="seeker" style={{ width: length }}>
            <div className="seeker-thumb"></div>
          </div>
        </div>
        <div className="playing-time fx fjcsb">
          <span className=" current-time">{curtime}</span>
          <span className=" end-time">{endtime}</span>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     currentTime: state.song_currentTime,
//     duration: state.song_duration
//   };
// };

// ProgressBar.propTypes = {
//   currentTime: PropTypes.number,
//   duration: PropTypes.number
// };

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);
