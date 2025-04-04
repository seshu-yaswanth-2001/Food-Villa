const Card = ({ name, image, dishes, rating }) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={image} alt={name + "image"} />
      <h4>{dishes.join(", ")}</h4>
      <h4>{rating}</h4>
    </div>
  );
};
export default Card;
