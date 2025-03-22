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

const Body = () => {
  return (
    <>
      <h4>Body</h4>
    </>
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
