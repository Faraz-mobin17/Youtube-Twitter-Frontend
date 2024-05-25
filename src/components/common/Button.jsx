import React from "react";

export default function Button(props) {
  const { title } = props;
  return (
    <button
      type="button"
      className="border-slate-600 bg-slate-700 p-2 mr-5 w-20 rounded hover:bg-purple-500 hover:text-white transition-colors"
    >
      {title}
    </button>
  );
}
