import React from "react";
import styles from "./WatchListContainer.module.scss";
import SearchForm from "../../components/SearchForm/SearchForm";
import WatchList from "../../components/WatchList/WatchList";

const WatchListContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <SearchForm />
        <WatchList />
      </div>
    </div>
  );
};

export default WatchListContainer;
