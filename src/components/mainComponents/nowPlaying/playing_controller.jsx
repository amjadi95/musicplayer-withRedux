import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  song_isPlaying_action,
  song_next_action,
  song_isShuffle_action,
  song_isRepeat_action,
} from "./actions/nowplaying_actions";

const Controller = () => {
  const isplaying = useSelector((state) => state.song_isPlaying);
  const isShuffle = useSelector((state) => state.song_isShuffle);
  let repeat = useSelector((state) => state.song_repeat);

  const dispatch = useDispatch();
  return (
    <div className="controller fx fxdr fjcc faic">
      <button
        className="music-controller shuffle sub-text"
        onClick={() => {
          dispatch(song_isShuffle_action(!isShuffle));
        }}
      >
        {isShuffle ? "!s" : "S"}
      </button>
      <button
        className="music-controller previous sub-text"
        onClick={() => {
          dispatch(song_next_action(-1));
        }}
      >
        {"<"}
      </button>
      <button
        className="music-controller play sub-text"
        onClick={() => {
          dispatch(song_isPlaying_action(!isplaying));
        }}
      >
        {isplaying ? "pas" : "ply"}
      </button>
      <button
        className="music-controller next sub-text"
        onClick={() => {
          dispatch(song_next_action(1));
        }}
      >
        {">"}
      </button>
      <button
        className="music-controller repeate sub-text"
        onClick={() => {
          dispatch(song_isRepeat_action(repeat_song(repeat)));
        }}
      >
        {repeat == "all" ? "a" : "o"}
      </button>
    </div>
  );
};

function repeat_song(repeat) {
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
}
export default Controller;
