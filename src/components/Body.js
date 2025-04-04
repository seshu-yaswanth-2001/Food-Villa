import Card from "./Card";
import { hotelList } from "../config";

const Body = () => {
  return (
    <div className="list">
      {hotelList.map((data, index) => {
        return <Card key={index} {...data} />;
      })}
    </div>
  );
};

export default Body;
