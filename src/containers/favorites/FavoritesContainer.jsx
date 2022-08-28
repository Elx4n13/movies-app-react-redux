import React from "react";
import styles from "./FavoritesContainer.module.scss";
import SearchForm from "../../components/SearchForm/SearchForm";
import FavoritesList from "../../components/FavoritesList/FavoritesList";

const FavoritesContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <SearchForm />
        <FavoritesList />
      </div>
    </div>
  );
};

export default FavoritesContainer;
