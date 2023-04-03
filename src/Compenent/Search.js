import React, { useState } from "react";
import data from "./data";
import Rate from "./Rate";

const Search = () => {
  // Set initial state for filter
  const [filter, setFilter] = useState("");
  const [dataSearch, setDataSearch] = useState(data.cardData);

  // Handle search text input
  const searchText = (event) => {
    setFilter(event.target.value);
    setDataSearch(
      data.cardData.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        );
      })
    );
  };

  // Handle filter input
  const filterData = (event) => {
    const x = event.target.value;
    // Filter data based on rating
    setDataSearch(
      data.cardData.filter((item) => item.rating >= x)
    );
  };

  return (
    
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12 mb-5">
          <div className="mb-3 col-4 mx-auto text-center">
            <label className="form-label h4">Search</label>
            <input
              type="text"
              className="form-control"
              value={filter}
              onChange={searchText}
            />
          </div>
          <div className="mb-3 col-4 mx-auto text-center">
            <label className="form-label h4">Filter</label>
            <input
              type="number"
              className="form-control"
              min="0"
              max="5"
              onChange={filterData}
            />
          </div>
        </div>
        {/* Use map to render each item in the filtered data */}
        {dataSearch.map((item, index) => {
          return (
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={index}>
              <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                
                  <Rate rat={item.rating} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Search;
