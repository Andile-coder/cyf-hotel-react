import React, { useState } from "react";
import Searcher from "./SearchButton";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");
  function handleSearchInput(e) {
    setSearchInput(e.target.value);
    console.log(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    props.search(searchInput);
  }
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={submitHandler}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                value={searchInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                onChange={handleSearchInput}
              />
              <Searcher />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
