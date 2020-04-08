import React, { Component } from "react";
import { connect } from "react-redux";

const ProgressBar = (props) => {
  let this_element = React.createRef();

  let currentTime = 0;

  let duration = 0;
  if (props) {
    duration = props.duration ? props.duration : 0;
    currentTime = props.currentTime;
  }

  let length = currentTime * (duration != 0 ? 100 / duration : 0);
  length = length + "%";

  let curtime, endtime;
  curtime = toTimeFormat(currentTime);

  endtime = toTimeFormat(duration);

  return (
    <div
      className="progress-bar-container fx fxdc faic fjcsb"
      ref={(el) => {
        this_element = el;
      }}
    >
      <div
        className="progress-Bar "
        onClick={(event) => {
          if (event.target.className == "seeker-thumb") {
            props.onChangeCurrentTime(
              parseInt(
                -(event.target.offsetWidth / 2 - event.nativeEvent.offsetX) +
                  props.currentTime
              )
            );
          } else {
            props.onChangeCurrentTime(
              parseInt(
                (event.nativeEvent.offsetX / this_element.offsetWidth) *
                  props.duration
              )
            );
          }
        }}
      >
        <div className="seeker " style={{ width: length }}>
          <div className="seeker-thumb"></div>
        </div>
      </div>
      <div className="playing-time fx fjcsb">
        <span className=" current-time sub-text">{curtime}</span>
        <span className=" end-time sub-text">{endtime}</span>
      </div>
    </div>
  );
};

const toTimeFormat = (time) => {
  let min, sec;
  min = parseInt(time / 60);
  sec = parseInt(time % 60);
  return (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
};

export default ProgressBar;
