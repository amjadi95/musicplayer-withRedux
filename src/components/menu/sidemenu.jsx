import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faPlusSquare,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
const SideMenu = () => {
  return (
    <div className="sidemenu-container  fx-cc">
      <div className="sidemenu">
        <div className="sidemenu-item">
          <span>
            <FontAwesomeIcon icon={faHome} />
          </span>
          <span>Home</span>
        </div>
        <div className="sidemenu-item">
          <span>
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <span>Search</span>
        </div>
        <div className="sidemenu-item sidemenu-devider">PLAYLISTS</div>
        <div className="sidemenu-item">
          <span>
            <FontAwesomeIcon icon={faPlusSquare} />
          </span>
          <span>Create Playlist</span>
        </div>
        <div className="sidemenu-item">
          <span>
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <span>Liked Songs</span>
        </div>
      </div>
    </div>
  );
};
export default SideMenu;
