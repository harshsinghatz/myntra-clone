import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import SearchInfo from "./components/SearchInfo/SearchInfo";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import ItemList from "./components/ItemList/ItemList";
import ItemPage from "./components/ItemPage/ItemPage";
import Bag from "./components/Bag/Bag";
import { products } from "./data/products";

function App() {
  //-----------------States-----------------
  const [data, setData] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [gender, setGender] = useState("");
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [size, setSize] = useState(null);
  const [bag, setBag] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedSort, setSort] = useState("Reccomended");

  //-----------------Filtering Data-----------------
  useEffect(() => {
    const filteredData = products.filter((curr) => {
      const productSearch =
        curr.brand + curr.description + curr.fit + curr.occasion;
      return (
        (brands.includes(curr.brand) || brands.length === 0) &&
        (curr.gender === gender || gender === "") &&
        (types.includes(curr.fit) || types.length === 0) &&
        (searchTerm === "" || productSearch.toLowerCase().includes(searchTerm))
      );
    });
    setData(filteredData);
  }, [gender, brands, types, searchTerm]);

  //-----------------Sorting data-----------------
  useEffect(() => {
    const newData = [...data];
    if (selectedSort === "Reccomended") {
      setData(products);
      return;
    }
    if (selectedSort === "Ascending") {
      newData.sort((a, b) => {
        return Number(a.price.slice(4)) - Number(b.price.slice(4));
      });
      setData(newData);
    }
    if (selectedSort === "Descending") {
      newData.sort((a, b) => {
        return Number(b.price.slice(4)) - Number(a.price.slice(4));
      });
      setData(newData);
    }
  }, [selectedSort]);

  const selectBrands = (value) => {
    const newBrands = [...brands];
    if (newBrands.includes(value)) {
      const index = newBrands.indexOf(value);
      newBrands.splice(index, 1);
    } else if (value !== "") {
      newBrands.push(value);
    }
    setBrands(newBrands);
  };

  const selectType = (value) => {
    const newTypes = [...types];
    if (newTypes.includes(value)) {
      const index = newTypes.indexOf(value);
      newTypes.splice(index, 1);
    } else {
      newTypes.push(value);
    }
    setTypes(newTypes);
  };
  const selectGender = (value) => {
    setGender(value);
  };
  const addItemToBag = (item, size) => {
    const newBag = [...bag];
    if (newBag.length === 0) {
      newBag.push({ product: item, size: size, qty: 1 });
    } else {
      let flag = false;
      newBag.forEach((bag) => {
        if (bag.product.id === item.id && size === bag.size) {
          bag.qty += 1;
          flag = true;
        }
      });
      if (flag === false) {
        newBag.push({ product: item, size: size, qty: 1 });
      }
    }
    setBag(newBag);
  };
  return (
    <Router>
      <div className="App">
        {openModal && (
          <Bag
            items={bag}
            setOpenModal={setOpenModal}
            openModal={openModal}
            addItemToBag={addItemToBag}
          />
        )}
        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
        <SearchInfo />
        <div className="screens">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Sidebar
                    className="sidebar"
                    setGender={selectGender}
                    setBrands={selectBrands}
                    setType={selectType}
                  />
                  <ItemList
                    gender={gender}
                    data={data}
                    setSort={setSort}
                    selectedSort={selectedSort}
                    className="item__list"
                  />
                </>
              }
            />

            <Route
              path="/products/:id"
              element={
                <ItemPage
                  setSize={setSize}
                  selectedSize={size}
                  addItemToBag={addItemToBag}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
