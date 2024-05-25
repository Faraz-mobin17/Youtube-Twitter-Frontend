import React from "react";

export default function SearchInput(props) {
  const { type, name, id, placeholder } = props;
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className="bg-slate-800 border-2 border-slate-500 py-2 px-3 w-[30rem] rounded outline-none focus:bg-slate-700 focus:border-purple-500 transition-colors"
    />
  );
}
