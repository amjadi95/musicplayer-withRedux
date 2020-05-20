import React from "react";
import ListBox from "../listBox.jsx";
import Song from "../../song.jsx";
import { useSelector } from "react-redux";
const Artist = (props) => {
  let listbox = [1, 2, 3];

  const isPlaying = useSelector((state) => state.song_isPlaying);
  const listindex = useSelector((state) => state.song_listIndex);
  const list = useSelector((state) => state.song_list);
  let currentSong = list[listindex];

  return (
    <div className="artist">
      <div className="artist-img"></div>
      <div className="artist-content">
        <div className="artist-title">
          <h1 className="artist-name">Mick Gordon</h1>
          <div className="artist-badge">ARTIST</div>
        </div>

        <div className="artist-albums ">
          <h2 className="artist-albums-title fx">Albums</h2>
          <div className="artist-albums-list fx fxdr fxww">
            {listbox.map((i) => (
              <ListBox></ListBox>
            ))}
          </div>
        </div>
        <div className="artist-songs">
          <h2 className="artist-songs-title fx">Songs</h2>
          <div className="artist-songs-list ">
            {list.map((item) => (
              <Song
                key={item.id}
                songId={item.id}
                playing={isPlaying}
                currentSong={currentSong}
                list={list}
              ></Song>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
