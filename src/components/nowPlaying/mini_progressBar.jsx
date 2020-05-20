import React from "react";

const Mini_progressBar = (props) => {
  let currentTime = 0;

  let duration = 0;
  if (props) {
    duration = props.duration ? props.duration : 0;
    currentTime = props.currentTime;
  }

  let length = currentTime * (duration != 0 ? 100 / duration : 0);
  length = length + "%";
  return (
    <div className="mini-progress-bar ">
      <div className="seeker " style={{ width: length }}></div>
    </div>
  );
};
export default Mini_progressBar;
