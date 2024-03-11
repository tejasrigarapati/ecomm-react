import React from "react";
import Feeds from "./feeds"
import Post from "./post"
export default function Container(props) {
  if (props.flag === 1) return <Feeds />;
  else if (props.flag === 2) return <post />;
}