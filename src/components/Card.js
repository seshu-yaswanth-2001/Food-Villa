import { useContext } from "react";
import UserContext from "../Utils/Hooks/UserContext";

const Card = ({ name, image, rating }) => {
  const { userName, setUserName } = useContext(UserContext);
  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={image} alt={name + "image"} />
      {/* <h4>{instructions.join(", ")}</h4> */}
      <h4>{rating}</h4>
      <h4>{userName.name}</h4>
      <h4>{userName.email}</h4>
    </div>
  );
};
export default Card;
