import React from "react";

export default function Input(props) {
  const { type, name, id, placeholder, className } = props;
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={className}
    />
  );
}
