import { VideoCard } from "@/components/common";
import { useState, useEffect } from "react";
import React from "react";

export default function LikePage() {
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    setVideoData((prevState) => [
      ...prevState,
      {
        thumbnail: "https://via.placeholder.com/400",
        title: "Sample Video Title",
        channel: "Sample Channel Name",
        views: "1.2M",
        timestamp: "2 days ago",
      },
    ]);
  }, []);

  return (
    <div className="md:container md:mx-auto p-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        <VideoCard videoData={videoData} />
        <VideoCard videoData={videoData} />
        <VideoCard videoData={videoData} />
        <VideoCard videoData={videoData} />
        <VideoCard videoData={videoData} />
        <VideoCard videoData={videoData} />
        <VideoCard videoData={videoData} />
        <VideoCard videoData={videoData} />
        {/* Add more VideoCard components as needed */}
      </div>
    </div>
  );
}
