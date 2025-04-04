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
  return (
    <div className="header">
      <Title />
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

// This is default export
// when exporting default we need to import by without curly braces
// import Header from "./components/Header"
export default Header;
