import React from "react";
import ReactDOM from "react-dom/client";

const hotelList = [
  {
    name: "Burger King",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--1MJsy7_DWpEDHBVdc8L7Vn-neqF-M_MyA&s",
    dishes: ["American", "Indian", "Chinese"],
    rating: "4.5",
  },
  {
    name: "KFC",
    image:
      "https://b.zmtcdn.com/data/pictures/4/10624/9410759d611db9c62c3acc23c1f27e06.jpg?fit=around|750:500&crop=750:500;*,*",
    dishes: ["Wings", "Lollipops", "crispy Chicken"],
    rating: "4.9",
  },
  {
    name: "Pizza Hut",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4w00b8dqCgb1YObVNmOnxk9jkreRWMV_tw&s",
    dishes: ["Toppins", "Garlic Bread", "Pizza"],
    rating: "4.0",
  },
  {
    name: "Mehfil",
    image:
      "https://content.jdmagicbox.com/comp/def_content_category/biriyani-box-12097450-ovjr4p47lp.jpg",
    dishes: ["Mugalai Biriyani", "Fry Piece biriyani", "Dum Biriyani"],
    rating: "4.2",
  },
  {
    name: "Pista House",
    image:
      "https://pistahouse.in/cdn/shop/files/DSC01385.jpg?v=1730118322&width=480",
    dishes: ["Biscuits", "Chai", "Bakery"],
    rating: "4.5",
  },
];

// direct usage method
const RestCard = () => {
  return (
    <div className="card">
      <h1>{hotelList[0].name}</h1>
      <img src={hotelList[0].image} alt="image" />
      <h4>{hotelList[0].dishes.join(", ")}</h4>
      <h4>{hotelList[0].rating} Stars</h4>
    </div>
  );
};

// using Props method
const RestCard2 = (props) => {
  return (
    <div className="card">
      <h1>{props.prop.name}</h1>
      <img src={props.prop.image} alt="image" />
      <h4>{props.prop.dishes.join(", ")}</h4>
      <h4>{props.prop.rating} Stars</h4>
    </div>
  );
};

// using object props method directly we can spread in params
const RestCard3 = ({ name, image, dishes, rating }) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={image} alt="image" />
      <h4>{dishes.join(", ")}</h4>
      <h4>{rating} Stars</h4>
    </div>
  );
};

// or using direct object and spreading in the function
const RestCard4 = ({ list }) => {
  const { name, image, dishes, rating } = list;
  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={image} alt="image" />
      <h4>{dishes.join(", ")}</h4>
      <h4>{rating} Stars</h4>
    </div>
  );
};

// or using direct spread operator
const RestCard5 = ({ name, image, dishes, rating }) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={image} alt="image" />
      <h4>{dishes.join(", ")}</h4>
      <h4>{rating} Stars</h4>
    </div>
  );
};

const Props = () => {
  return (
    <div className="list">
      <RestCard />
      <RestCard2 prop={hotelList[1]} />
      <RestCard3
        name={hotelList[2].name}
        image={hotelList[2].image}
        dishes={hotelList[2].dishes}
        rating={hotelList[2].rating}
      />
      <RestCard4 list={hotelList[3]} />
      <RestCard5 {...hotelList[4]} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Props />);
