import VideoCard from "@/components/common/VideoCard";
import React from "react";

export default function HomePage() {
  const videoData = {
    thumbnail: "https://via.placeholder.com/400",
    title: "Sample Video Title",
    channel: "Sample Channel Name",
    views: "1.2M",
    timestamp: "2 days ago",
  };
  return (
    <main className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        <VideoCard {...videoData} />
        <VideoCard {...videoData} />
        <VideoCard {...videoData} />
        <VideoCard {...videoData} />
        <VideoCard {...videoData} />
        <VideoCard {...videoData} />
        <VideoCard {...videoData} />
        <VideoCard {...videoData} />
        {/* Add more VideoCard components as needed */}
      </div>
    </main>
  );
}
