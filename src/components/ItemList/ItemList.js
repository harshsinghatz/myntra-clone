import React from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./ItemList.css";

const ItemList = ({ data, setSort, selectedSort }) => {
  const onSortClick = (e) => {
    const sortType = e.target.dataset.sort;
    setSort(sortType);
  };
  return (
    <div className="item__list">
      <div className="list__header">
        <div className="list__options">
          <div className="list__option">Bundles</div>
          <div className="list__option">Size</div>
        </div>
        <div className="list__sorting">
          <div className="selected__sort">
            <span className="sort">Sort By :</span>
            <span className="selected__option">
              {selectedSort} <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </div>
          <ul className="sort__list">
            <li
              className="sort__item"
              data-sort="Reccomended"
              onClick={onSortClick}
            >
              Reccomended
            </li>
            <li
              className="sort__item"
              data-sort="Ascending"
              onClick={onSortClick}
            >
              Price: Low to High
            </li>
            <li
              className="sort__item"
              data-sort="Descending"
              onClick={onSortClick}
            >
              Price: High to Low
            </li>
          </ul>
        </div>
      </div>
      <div className="card__list">
        {data.map((curr, index) => {
          return (
            <Link to={`/products/${curr.id}`} key={`${index}l`}>
              <Card key={`${index}i`} data={curr} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
