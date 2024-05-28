// VideoCard/VideoCard.jsx
import React from "react";

const VideoCard = (props) => {
  const { thumbnail, title, channel, views, timestamp } = props;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-white hover:shadow-slate-700 transition-shadow cursor-pointer">
      <img className="w-full" src={thumbnail} alt={title} />
      <div className="px-4 py-2">
        <div className="font-bold text-lg mb-2">{title}</div>
        <p className="text-white-700 text-sm">{channel}</p>
      </div>
      <div className="px-4 py-2 flex justify-between items-center text-white-600 text-sm">
        <span>{views} views</span>
        <span>{timestamp}</span>
      </div>
    </div>
  );
};

export default VideoCard;
