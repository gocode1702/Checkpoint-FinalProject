import React from 'react';
import "./Search.css"

function SearchBar(props) {
  const [searchVal, setSearchVal] = React.useState("");

  const handleInput = (e) => {
    setSearchVal(e.target.value);
  };

  const handleClearBtn = () => {
    setSearchVal("");
  };

  const filteredProducts = props.products.filter((product) => {
    return product.includes(searchVal);
  });

  return (
    <div className="container1">
      <div className="input-wrap">
        <i className="fas fa-search"></i>
        <label for="product-search" id="input-label">
          Product Search
        </label>
        <input
          onChange={handleInput}
          value={searchVal}
          type="text"
          name="product-search"
          id="product-search"
          placeholder="Search Products"
        />
        <i onClick={handleClearBtn} className="fas fa-times"></i>
      </div>
      <div className="results-wrap">
        <ul>
          {filteredProducts.map((product) => {
            return (
              <li key={product} className="list-item">
                <a href="#">{product}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default function Search() {
  let products = [
    
  ];

  return (
    <div>
      <SearchBar products={products} />
    </div>
  );
}
