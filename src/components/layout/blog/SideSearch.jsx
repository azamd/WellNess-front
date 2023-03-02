import "./searchBar.css";
import { useState } from "react";

const SideSearch = () => {
  const [searchInput, setSearchInput] = useState("");

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };
  // TODO:

  // FIXME:
  return (
    <div className="sidebar-item search-form">
      <h3 className="sidebar-title">Search</h3>

      <form action="" className="mt-3">
        <input
          id={searchInput}
          type="text"
          placeholder="Search for Drs"
          onChange={(e) => searchItems(e.target.value)}
        />
        <button type="submit">
          <i className="bi bi-search"></i>
        </button>
      </form>
    </div>
  );
};
export default SideSearch;
