import React from "react";

const Song = (props) => {
  return (
    <div className="song fx fxdr faic ">
      <div className="song-status-hover fx-cc" style={{ display: "none" }}>
        s
      </div>
      <div className="song-status-icon fx-cc">i</div>
      <div className="song-img">
        <img
          src="https://img.discogs.com/-PYfy0374ILRlPg6t9wd8HPK8fA=/600x607/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-38661-1535757975-8082.jpeg.jpg"
          alt=""
          width="100%"
          height="100%"
        />
      </div>
      <div className="song-title">Song Title</div>
      <div className="song-duration">04:28</div>
    </div>
  );
};

export default Song;
