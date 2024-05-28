import { Header } from "@/components/layout";
import ChannelCard from "@/components/specific/Channel/ChannelCard";
import React from "react";
import {
  // ChannelIcon,
  BiLike,
  HiOutlineVideoCamera,
  RxAvatar,
  FaRegEye,
} from "@/utils/icons";
import ChannelCardHeader from "@/components/specific/Channel/ChannelCardHeader";
export default function StudioPage() {
  return (
    <>
      <Header />
      <div className="flex justify-between px-10">
        <div className="flex flex-col text-white">
          <h3 className="text-3xl font-semibold mt-5">Welcome Back Faraz</h3>
          <small className="text-gray-400">
            Seamless Video Managment, Elevated Results
          </small>
        </div>
        <div className="mt-4">
          <button className="bg-purple-600 text-white p-2 hover:bg-purple-500 transition-colors">
            Upload
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4  justify-around gap-4 p-7 ">
        <ChannelCard
          title="Total Videos"
          count="10"
          Icon={HiOutlineVideoCamera}
        />
        <ChannelCard title="Total Views" count="10" Icon={FaRegEye} />
        <ChannelCard title="Total Subscriber" count="10" Icon={RxAvatar} />
        <ChannelCard title="Total Likes" count="10" Icon={BiLike} />
      </div>
      <div className="flex border justify-around border-slate-500 p-2 mx-6">
        <ChannelCardHeader title="Toggle Publish" />
        <ChannelCardHeader title="Status" />
        <ChannelCardHeader title="Uploaded" />
        <ChannelCardHeader title="Rating" />
        <ChannelCardHeader title="Date Uploaded" />
      </div>
    </>
  );
}
