import React from "react";

export default function ChannelCard(props) {
  console.log(props);
  const { title, count, Icon } = props;
  return (
    <div className="border border-slate-500 text-white p-4 cursor-pointer shadow-xl  hover:shadow-slate-700 transition-shadow">
      <h3 className="text-3xl text-purple-500 mb-3">
        <Icon />
      </h3>
      <h3>{title}</h3>
      <h3>{count}</h3>
    </div>
  );
}
