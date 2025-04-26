import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../Utils/Hooks/useOnline";
import UserContext from "../Utils/Hooks/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51Fg8ECaMCb6T2yAd4CgUjy_hu7Zk1OKEZw&s"
        alt="logo"
      />
    </a>
  );
};

// This is NAMED Export
// When Exporting Named Export we need to import by using curly braces
// import {Header} from "./components/Header";
export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const { userName } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <Title />
      <div className="navItems">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>
            <Link to="/cart">Cart - {cartItems.length}</Link>
          </li>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "❌"}</h1>
      <h3>{userName.name}</h3>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

// This is default export
// when exporting default we need to import by without curly braces
// import Header from "./components/Header"
export default Header;
