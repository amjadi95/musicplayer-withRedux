import React from "react";

const ListBox = (props) => {
  return (
    <div className="listbox">
      <div className="listbox-img">
        <img
          src="https://img.discogs.com/-PYfy0374ILRlPg6t9wd8HPK8fA=/600x607/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-38661-1535757975-8082.jpeg.jpg"
          alt=""
          width="100%"
          height="100%"
        />
      </div>
      <div className="listbox-title">Title is here</div>
      <div className="listbox-subtitle sub-text song-artist">album</div>
    </div>
  );
};

export default ListBox;
