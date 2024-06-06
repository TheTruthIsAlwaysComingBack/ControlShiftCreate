// ItemNav.jsx
import React from "react";
import IconoNav from "../atoms/IconoNav";
import { Link } from "react-router-dom";
import "./ItemNav.css";

const ItemNav = ({ iconClass, linkTo }) => (
  <Link to={linkTo} className="item-nav">
    <IconoNav iconClass={iconClass} />
  </Link>
);

export default ItemNav;
