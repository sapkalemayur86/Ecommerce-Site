import React from "react";
import { Link } from "react-router-dom";
const HeaderNavbar = () => {
  return (
    <header className="header-nav-bar">
      <div className="logo">
        <Link to="/">MyShop</Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button type="submit">Search</button>
      </div>
      <div className="cart">
        <Link to="/purchase">
          <button className="cart-button">Cart</button>
        </Link>
      </div>
    </header>
  );
};

export default HeaderNavbar;
