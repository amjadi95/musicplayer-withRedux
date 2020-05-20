import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faPlusSquare,
  faHeart,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
const SideMenu = () => {
  return (
    <div className="menu-container-mobile fx fxdr faic fjcse">
      <div className="mobilemenu-item">
        <span>
          <FontAwesomeIcon icon={faHome} />
        </span>
      </div>
      <div className="mobilemenu-item">
        <span>
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>

      <div className="mobilemenu-item">
        <span>
          <FontAwesomeIcon icon={faListAlt} />
        </span>
      </div>
      <div className="mobilemenu-item">
        <span>
          <FontAwesomeIcon icon={faHeart} />
        </span>
      </div>
    </div>
  );
};
export default SideMenu;
