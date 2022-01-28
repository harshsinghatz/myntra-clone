import React from "react";
import "./SearchInfo.css";

const SearchInfo = () => {
  return (
    <div className="search-info">
      <div className="breadcrumb">
        Home / Clothing / <strong>Shirts for {"Men & Women"}</strong>
      </div>
      <div className="results">
        <strong>Shirts For {"Men & Women"}</strong> - {77175} items
      </div>
    </div>
  );
};

export default SearchInfo;
