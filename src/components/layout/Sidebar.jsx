import React from "react";
import {
  RiHome6Line,
  BiLike,
  MdOutlineSlowMotionVideo,
  BiHistory,
  HiOutlineVideoCamera,
  IoFolderOutline,
  CiSettings,
  TbUserCheck,
} from "../../icons";

const menuItems = [
  ["Home", <RiHome6Line />],
  ["Subscriptions", <TbUserCheck />],
  ["Your Channel", <MdOutlineSlowMotionVideo />],
  ["Liked Videos", <BiLike />],
  ["History", <BiHistory />],
  ["Playlists", <IoFolderOutline />],
  ["Watch Later", <HiOutlineVideoCamera />],
  ["Settings", <CiSettings />],
];

export default function Sidebar() {
  return (
    <aside className="w-1/5 h-screen p-4 text-white border-r border-r-gray-700">
      {menuItems.map(([label, Icon], index) => (
        <div
          key={index}
          className="mb-4 font-semibold border-2 p-2 border-slate-500 cursor-pointer hover:bg-purple-500 hover:text-white transition-colors flex items-center"
        >
          <span className="mr-2 text-2xl">{Icon}</span>
          <span>{label}</span>
        </div>
      ))}
    </aside>
  );
}
