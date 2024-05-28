import ChannelCardHeader from "@/components/specific/Channel/ChannelCardHeader";
import React from "react";
import { Outlet } from "react-router-dom";

export default function ChannelPage() {
  return (
    <div className="flex flex-col">
      <div class="h-48 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
      <div className="flex flex-row justify-between mx-12 ">
        <div className="flex border border-slate-500 p-2 shadow-lg hover:shadow-gray-700 transition-shadow cursor-pointer">
          <div className="my-[-40px]">
            <img
              src="https://via.placeholder.com/150"
              alt="channel"
              className="rounded-full w-24 h-24"
            />
          </div>
          <div className="text-white flex flex-col p-2 ml-2">
            <h2 className="text-lg font-semibold">Channel Name</h2>
            <small className="text-slate-300 text-sm">@faraz</small>
            <small className="text-slate-400 text-xs">1.2M subscribers</small>
          </div>
        </div>
        <div className=" mt-5">
          <button
            type="button"
            className="bg-purple-500 text-white p-2 w-[100px] hover:bg-purple-700 transition-colors text-lg"
          >
            Edit
          </button>
        </div>
      </div>
      <div className="text-white flex border justify-around border-slate-500 p-2 mx-6 mt-4 cursor-pointer">
        <ChannelCardHeader title={"Videos"} path={"videos"} />
        <ChannelCardHeader title={"Playlists"} path={"playlists"} />
        <ChannelCardHeader title={"Tweets"} path={"tweets"} />
        <ChannelCardHeader title={"Subscribed"} path={"subscribed"} />
      </div>
      <div className="overflow-y-scroll h-[32rem] sm:h-96 mb-20 sm:mb-0">
        <Outlet />
      </div>
    </div>
  );
}
