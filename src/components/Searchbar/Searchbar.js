import { React, useState } from "react";
import "./SearchBar.css";

const SearchBar = () => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="hidden">Search Employee</span>
    </label>
    <input
      type="text"
      id="header-search"
      placeholder="Search employee"
      name="s"
    />
    <button type="submit">Search</button>
  </form>
);

export { SearchBar };
