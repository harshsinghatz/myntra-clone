import React from "react";
import "./Bag.css";

const Bag = ({ items, setOpenModal, openModal }) => {
  const closeModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className="bag">
      <button className="close__modal" onClick={closeModal}>
        X
      </button>
      <div className="bag__modal">
        <div className="bag__header">Bag</div>
        <div className="bag__body">
          {items.map((item, index) => (
            <div className="item" key={`${index}item`}>
              <div>
                <img
                  src={item.product.imageURL}
                  alt="Shirts"
                  className="item__image"
                />
              </div>
              <div className="item__body">
                <div className="product__brand">{item.product.brand}</div>
                <div className="product__occasion">
                  {item.product.description}
                </div>
                <div className="item__price">{item.product.price}</div>
                <div className="item__size">Size: {item.size}</div>
                <div className="item__qty">Quantity: {item.qty}</div>
              </div>
            </div>
          )) || <div className="error">Oops! your bag is empty </div>}
        </div>
      </div>
    </div>
  );
};

export default Bag;
