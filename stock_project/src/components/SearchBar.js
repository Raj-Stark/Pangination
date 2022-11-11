import React from "react";
import { useGlobalContext } from "../context";

const SearchBar = () => {
  const { query, setQuery } = useGlobalContext();

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
