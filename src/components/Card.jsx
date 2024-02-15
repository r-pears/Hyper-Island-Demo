function Card(props) {
  const handleCardClick = () => {};
  return (
    <div role="link" onClick={handleCardClick}>
      <h3>{props.product.title}</h3>
      <p>{props.product.genres}</p>
      <ul>
        {props.product.people.actors &&
          props.product.people.actors.map((actor, index) => {
            return <li key={index}>{actor}</li>;
          })}
      </ul>
    </div>
  );
}

export default Card;
