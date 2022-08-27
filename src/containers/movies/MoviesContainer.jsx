import React from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import SearchForm from "../../components/SearchForm/SearchForm";
import styles from "./MoviesContainer.module.scss";
const MoviesContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <SearchForm />
        <MoviesList />
      </div>
    </div>
  );
};

export default MoviesContainer;
