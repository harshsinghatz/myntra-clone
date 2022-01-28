import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCaretSquareLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="product__image">
        <img className="image__element" src={data.imageURL} alt="Shirts" />
        <div className="on__hover__1 hidden">
          <button className="view__similar">
            <FontAwesomeIcon icon={faCaretSquareLeft} />
            <span className="similar__text hidden">View similar</span>
          </button>
          <div className="carousel__dots hidden">
            <div className="carousel__dot active"></div>
            <div className="carousel__dot "></div>
            <div className="carousel__dot "></div>
            <div className="carousel__dot "></div>
          </div>
        </div>
      </div>
      <div className="product__info">
        <h3 className="product__brand">{data.brand}</h3>
        <h5 className="product__occasion">{`${data.fit || ""} ${
          data.occasion || ""
        } Shirt`}</h5>
        <div className="on__hover__2 hidden">
          <button className="wishlist__btn">
            <FontAwesomeIcon icon={faHeart} />
            wishlist
          </button>
          <div className="product__sizes ">
            <span className="sizes">Sizes: </span>
            <span className="product__size">38,</span>
            <span className="product__size">40,</span>
            <span className="product__size">42,</span>
            <span className="product__size">44</span>
          </div>
        </div>
        <div className="product__price">{data.price}</div>
      </div>
    </div>
  );
};

export default Card;
