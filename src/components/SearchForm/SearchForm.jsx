import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import styles from "./SearchForm.module.scss";
const SearchForm = () => {
  return (
    <div className={styles.searchContainer}>
      <p className={styles.topTitle}>TMDB</p>
      <p className={styles.title}>Movies</p>
      <form>
        <input
          id="search-movies"
          type="text"
          placeholder="Search Movies or TV Shows"
        />
        <label htmlFor="search-movies">
          <SearchOutlined className={styles.searchInput} />
        </label>
      </form>
    </div>
  );
};

export default SearchForm;
