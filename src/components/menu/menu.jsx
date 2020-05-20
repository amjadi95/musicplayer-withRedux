import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { count: state.current_time };
};

const Menu = ({ count }) => {
  //const count = useSelector(state => state.time);
  let ss = useSelector(state => state.current_time);
  return (
    <div className="">
      <div>{ss}</div>
    </div>
  );
};
const SideMenu = connect(mapStateToProps)(Menu);
export default SideMenu;
