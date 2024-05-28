import React from "react";

export default function NoContentAvailable(props) {
  const { title, Icon } = props;
  return <div className="text-white">!Oops no {title} available</div>;
}
