import React from "react";
import { NavLink } from "react-router-dom";
import {
  RiHome6Line,
  BiLike,
  MdOutlineSlowMotionVideo,
  BiHistory,
  HiOutlineVideoCamera,
  IoFolderOutline,
  CiSettings,
  TbUserCheck,
  SiYoutubestudio,
} from "../../utils/icons";

const menuItems = [
  ["Home", <RiHome6Line />, "/"],
  ["Subscriptions", <TbUserCheck />, "/subscriptions"],
  ["Your Channel", <MdOutlineSlowMotionVideo />, "/channel"],
  ["Your Studio", <SiYoutubestudio />, "/studio"],
  ["Liked Videos", <BiLike />, "/likes"],
  ["History", <BiHistory />, "/history"],
  ["Playlists", <IoFolderOutline />, "/playlists"],
  ["Watch Later", <HiOutlineVideoCamera />, "/collections"],
  ["Settings", <CiSettings />, "/settings"],
];

export default function Sidebar() {
  return (
    <aside className="h-screen p-4 text-white border-r border-r-gray-700">
      {menuItems.map(([label, Icon, href], index) => (
        <NavLink
          to={href}
          key={index}
          className="mb-4 font-semibold border-2 p-2 border-slate-500 cursor-pointer hover:bg-purple-500 hover:text-white transition-colors flex items-center"
        >
          <span className="mr-2 text-xl">{Icon}</span>
          <span className="text-sm">{label}</span>
        </NavLink>
      ))}
    </aside>
  );
}
