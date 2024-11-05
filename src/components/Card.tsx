type CardTypes = {
  img: string;
  title: string;
};

export function Card(props: CardTypes) {
  return (
    <>
      <div className={"card"}>
        <p>{props.title}</p>
        <img src={props.img} alt={props.title} />
      </div>
    </>
  );
}
