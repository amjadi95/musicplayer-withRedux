import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  song_isPlaying_action,
  song_next_action,
  song_isShuffle_action,
  song_isRepeat_action,
} from "./actions/nowplaying_actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faBackward,
  faForward,
  faRandom,
  faSyncAlt,
  faSync,
} from "@fortawesome/free-solid-svg-icons";
const Controller = () => {
  const isplaying = useSelector((state) => state.song_isPlaying);
  const isShuffle = useSelector((state) => state.song_isShuffle);
  let repeat = useSelector((state) => state.song_repeat);

  const dispatch = useDispatch();

  let repeat_song = (repeat) => {
    switch (repeat) {
      case "none": {
        return "all";
      }
      case "all": {
        return "one";
      }
      case "one": {
        return "none";
      }
    }
  };
  let showRepeat = (repeat) => {
    switch (repeat) {
      case "none": {
        return <FontAwesomeIcon icon={faSync} />;
      }
      case "all": {
        return (
          <FontAwesomeIcon icon={faSync} className="music-controller-clicked" />
        );
      }
      case "one": {
        return (
          <div style={{ position: "relative" }}>
            <FontAwesomeIcon
              icon={faSync}
              className="music-controller-clicked"
            />
            <span>1</span>
          </div>
        );
      }
    }
  };
  return (
    <div className="controller fx fxdr fjcc faic">
      <button
        className="music-controller shuffle sub-text"
        onClick={() => {
          dispatch(song_isShuffle_action(!isShuffle));
        }}
      >
        {isShuffle ? (
          <FontAwesomeIcon
            icon={faRandom}
            className="music-controller-clicked"
          />
        ) : (
          <FontAwesomeIcon icon={faRandom} />
        )}
      </button>
      <button
        className="music-controller previous sub-text"
        onClick={() => {
          dispatch(song_next_action(-1));
        }}
      >
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button
        className="music-controller play sub-text"
        onClick={() => {
          dispatch(song_isPlaying_action(!isplaying));
        }}
      >
        {isplaying ? (
          <FontAwesomeIcon icon={faPause} />
        ) : (
          <FontAwesomeIcon icon={faPlay} />
        )}
      </button>
      <button
        className="music-controller next sub-text"
        onClick={() => {
          dispatch(song_next_action(1));
        }}
      >
        <FontAwesomeIcon icon={faForward} />
      </button>
      <button
        className="music-controller repeate sub-text"
        onClick={() => {
          dispatch(song_isRepeat_action(repeat_song(repeat)));
        }}
      >
        {showRepeat(repeat)}
      </button>
    </div>
  );
};

export default Controller;
