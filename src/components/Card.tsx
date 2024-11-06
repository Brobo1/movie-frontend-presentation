import "./Card.css";

type CardTypes = {
  img: string;
  title: string;
};

export function Card(props: CardTypes) {
  return (
    <>
      <div className={"card"}>
        <p className={"card-title"}>{props.title}</p>
        <img className={"card-img"} src={props.img} alt={props.title} />
      </div>
    </>
  );
}
