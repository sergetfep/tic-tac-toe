import React from "react";
import styles from "./empty.module.css";

export const Empty = (props) => {
  return (
    <div
      onClick={() => {
        props.onClick(props.y, props.x);
      }}
    ></div>
  );
};
