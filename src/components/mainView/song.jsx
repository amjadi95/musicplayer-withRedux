import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  song_isPlaying_action,
  song_changeTrack_action,
} from "../nowPlaying/actions/nowplaying_actions";
import { faPlay, faPause, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Song = (props) => {
  const dispatch = useDispatch();
  let isplaying = false;
  let isCurrentSong = false;

  if (props.songId == props.currentSong.id) {
    isplaying = props.playing;
    isCurrentSong = true;
  }
  let song = props.list.find((item) => item.id == props.songId);
  let min = parseInt(song.duration / 60);
  let sec = parseInt(song.duration % 60);

  return (
    <div
      className={
        "song fx fxdr faic " + (isCurrentSong ? " song-isplaying " : " ")
      }
      onDoubleClick={() => {
        if (isCurrentSong) {
          dispatch(song_isPlaying_action(!isplaying));
        } else {
          dispatch(song_changeTrack_action(props.list, props.songId));
        }
      }}
    >
      <div
        className={
          "song-status-hover fx-cc " +
          (isCurrentSong ? " song-isplaying " : " ")
        }
        onClick={() => {
          if (isCurrentSong) {
            dispatch(song_isPlaying_action(!isplaying));
          } else {
            dispatch(song_changeTrack_action(props.list, props.songId));
          }
        }}
      >
        {isplaying ? (
          <FontAwesomeIcon
            icon={faPause}
            className="music-controller-clicked"
          />
        ) : (
          <FontAwesomeIcon icon={faPlay} className="music-controller-clicked" />
        )}
      </div>
      <div className="song-status-icon fx-cc">
        <FontAwesomeIcon icon={faMusic} />
      </div>
      <div className="song-img">
        <img
          src="https://img.discogs.com/-PYfy0374ILRlPg6t9wd8HPK8fA=/600x607/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-38661-1535757975-8082.jpeg.jpg"
          alt=""
          width="100%"
          height="100%"
        />
      </div>
      <div className="song-title">Song Title</div>
      <div className="song-duration">{min + ":" + sec}</div>
    </div>
  );
};

export default Song;
