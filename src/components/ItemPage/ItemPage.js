import React from "react";
import "./ItemPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";

const ItemPage = ({ setSize, selectedSize, addItemToBag }) => {
  const { id } = useParams();
  const data = products.find((product) => product.id === id);
  const onSizeClick = (e) => {
    console.log(e.target.value);
    setSize(e.target.value);
    console.log(selectedSize);
  };
  const addToBag = () => {
    if (!selectedSize) return;
    addItemToBag(data, selectedSize);
  };

  return (
    <div className="item__page">
      <div className="image__section">
        <img src={data.imageURL} className="image" />
      </div>
      <div className="product__details">
        <div className="product__brand__name">{data.brand}</div>
        <div className="product__brand__description">{data.description}</div>
        <div className="product__price__page">{data.price}</div>
        <div className="tax">inclusive of all taxes</div>
        <div className="product__sizes__page">
          <div className="size__title">Select Size</div>
          <div className="product__size__page">
            {data.sizes.map((size, index) => (
              <label
                key={index}
                className={`size ${
                  size == selectedSize ? "selected__size" : null
                }`}
              >
                <input
                  type="radio"
                  className={"size__input"}
                  onClick={onSizeClick}
                  value={size}
                />
                {size}
              </label>
            ))}
          </div>
          <button className="add__to__bag" onClick={addToBag}>
            <FontAwesomeIcon icon={faShoppingBag} /> Add to bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
