import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Song from "../mainView/song";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { showQueue_action } from "./actions/nowplaying_actions.js";
const Queue = () => {
  const isPlaying = useSelector((state) => state.song_isPlaying);
  const list = useSelector((state) => state.song_list);
  const listindex = useSelector((state) => state.song_listIndex);
  const showqueue = useSelector((state) => state.show_queue);
  const currentSong = list[listindex];
  const dispatch = useDispatch();
  let mystyle = {};
  if (window.innerWidth >= 768) {
    mystyle = { left: showqueue ? "0px" : "-100%" };
  } else {
    mystyle = { top: showqueue ? "0px" : "-100%" };
  }
  return (
    <div className="queue-container fx-cc" style={mystyle}>
      <div className="queue">
        <div className="queue-title fx-cc">Queue</div>

        <div className="queue-list-container">
          <div className="queue-list ">
            {list.map((item) => (
              <Song
                key={item}
                songId={item.id}
                playing={isPlaying}
                currentSong={currentSong}
                list={list}
              ></Song>
            ))}
          </div>
        </div>
        <button
          className="queue-hide-btn"
          onClick={() => {
            dispatch(showQueue_action(!showqueue));
          }}
        >
          {window.innerWidth >= 768 ? (
            <FontAwesomeIcon icon={faChevronLeft} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </button>
      </div>
      <div
        className="queue-space"
        onClick={() => {
          dispatch(showQueue_action(!showqueue));
        }}
      ></div>
    </div>
  );
};
export default Queue;
