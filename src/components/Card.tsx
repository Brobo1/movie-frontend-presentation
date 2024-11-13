import "./Card.css";
import React from "react";

type CardTypes = {
  img: string;
  title: string;
  style?: React.CSSProperties;
};

export function Card(props: CardTypes) {
  return (
    <>
      <div className={"card"} style={props.style}>
        <p className={"card-title"}>{props.title}</p>
        <img className={"card-img"} src={props.img} alt={props.title} />
      </div>
    </>
  );
}
