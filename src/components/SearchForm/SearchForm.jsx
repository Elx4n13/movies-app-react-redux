import { SearchOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styles from "./SearchForm.module.scss";
import { useNavigate } from "react-router-dom";
const SearchForm = () => {
  const [searched, setSearched] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searched.split(" ").join("%20")}`);
    setSearched("");
  };
  return (
    <div className={styles.searchContainer}>
      <p className={styles.topTitle}>TMDB</p>
      <p className={styles.title}>Movies</p>
      <form onSubmit={handleSubmit}>
        <input
          value={searched}
          onChange={(e) => {
            setSearched(e.target.value);
          }}
          id="search-movies"
          type="text"
          placeholder="Search Movies"
        />
        <label htmlFor="search-movies">
          <SearchOutlined className={styles.searchInput} />
        </label>
      </form>
    </div>
  );
};

export default SearchForm;
