import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <form onSubmit={handleSearch}>
      <label>
        Start year:
        <input type="text" name="lowerLimit" id="lowerLimit" />
      </label>
      <label>
        End year:
        <input type="text" name="upperLimit" id="upperLimit" />
      </label>
      <button>Search</button>
    </form>
  );
};

export default Search;
