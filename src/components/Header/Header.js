import React from "react";
// import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="header">
      <div className="logo__section">
        <img
          src="https://images.indianexpress.com/2021/01/myntra.png"
          alt="myntra logo"
          className="logo"
        />
      </div>
      <div className="header__left">
        <ul className="categories">
          <li className="category">MEN</li>
          <li className="category">WOMEN</li>
          <li className="category">KIDS</li>
          <li className="category">HOME & LIVING</li>
          <li className="category">BEAUTY</li>
          <li className="category">STUDIO</li>
        </ul>
      </div>
      <div className="header__center">
        {/* <SearchIcon /> */}
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="searchbar"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <div className="header__right">
        <ul className="user__details">
          <li className="user__detail">Profile</li>
          <li className="user__detail">Wishlist</li>
          <li className="user__detail">Bag</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
