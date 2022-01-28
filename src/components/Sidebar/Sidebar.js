import React from "react";
import "./Sidebar.css";
import { brands } from "../../data/brands";
import { types } from "../../data/types";

const Sidebar = ({ setType, setBrands, setGender }) => {
  const onGenderChange = (e) => {
    if (e.target.value === "") return;
    console.log(e.target.value);
    setGender(e.target.value);
  };
  const onBrandChange = (id) => {
    const brand = brands.find((curr) => curr._id === id);
    setBrands(brand.brand);
    console.log(id);
  };
  const onTypeChange = (id) => {
    const type = types.find((type) => type.id === id);
    setType(type.type);
  };
  return (
    <div className="sidebar">
      <h2 className="filters">FILTERS</h2>
      <div className="genders">
        <label data-gender="Men" className="gender">
          <input
            type="radio"
            name="gender"
            onChange={onGenderChange}
            value="Men"
            className="input__box"
          />
          Men
        </label>
        <label data-gender="Women" className="gender">
          <input
            type="radio"
            name="gender"
            onChange={onGenderChange}
            value="Women"
            className="input__box"
          />
          Women
        </label>
      </div>
      <div className="brands">
        <h3>BRAND</h3>
        {brands.map((brand) => {
          return (
            <label
              data-brand="brand.brand"
              key={brand._id}
              className="brand"
              onChange={() => onBrandChange(brand._id)}
            >
              <input type="checkbox" name="brands" className="input__box" />
              <div className="brand__name">
                {`${brand.brand}`}
                <span className="qty">({`${brand.qty}`})</span>
              </div>
            </label>
          );
        })}
      </div>
      <div className="fits">
        <h3>TYPE</h3>
        {types.map((type) => (
          <label
            className="fit"
            key={type.id}
            onChange={() => onTypeChange(type.id)}
          >
            <input type="checkbox" name="fit" className="input__box" />
            {type.type}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
