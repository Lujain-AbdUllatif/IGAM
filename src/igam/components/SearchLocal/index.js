import React from "react";
import "./style.css";
import { SearchIcon, UserIcon } from "../../icons";
function SearchLocal(props) {
  return (
    <form
      className={props.className ? props.className : "search-local-container"}
    >
      <input
        type="text"
        className="search-local-input"
        placeholder="Search ..."
        value={props.locations}
      />
      <SearchIcon />
    </form>
  );
}

export default SearchLocal;
