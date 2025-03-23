import { createElement } from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51Fg8ECaMCb6T2yAd4CgUjy_hu7Zk1OKEZw&s"
          alt="logo"
        />
      </a>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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

const Card = ({ name, image, dishes, rating }) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={image} alt={name + "image"} />
      <h4>{dishes}</h4>
      <h4>{rating}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="list">
      {hotelList.map((data, index) => {
        return <Card key={index} {...data} />;
      })}
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <h4>Footer</h4>
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
