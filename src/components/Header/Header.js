import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = ({ searchTerm, setSearchTerm, openModal, setOpenModal }) => {
  return (
    <div className="header">
      <div className="logo__section">
        <Link to="/">
          <img
            src="https://images.indianexpress.com/2021/01/myntra.png"
            alt="myntra logo"
            className="logo"
          />
        </Link>
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
          <li className="user__detail">
            <FontAwesomeIcon icon={faUser} /> <span>Profile</span>
          </li>
          <li className="user__detail">
            <FontAwesomeIcon icon={faHeart} /> <span>Wishlist</span>
          </li>
          <li
            className="user__detail"
            onClick={() => {
              setOpenModal(!openModal);
            }}
          >
            <FontAwesomeIcon icon={faShoppingBag} />
            <span>Bag</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
