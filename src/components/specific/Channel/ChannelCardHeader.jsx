import React from "react";
import { NavLink } from "react-router-dom";

export default function ChannelCardHeader(props) {
  const { title, path } = props;
  return (
    <div className="text-white font-semibold">
      <NavLink to={path}>{title}</NavLink>
    </div>
  );
}
