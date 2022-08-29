import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import SearchList from "../../components/SearchList/SearchList";
import styles from "./SearchContainer.module.scss";
const SearchContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <SearchForm />
        <SearchList />
      </div>
    </div>
  );
};

export default SearchContainer;
