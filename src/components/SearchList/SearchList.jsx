import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { APIKEY } from "../../apis/MovieApiKey";
import { useSelector } from "react-redux";
import styles from "./SearchList.module.scss";
import { List } from "antd";
import {
  img_base_url,
  addFavoritesHandle,
  addWatchListHandle,
  deleteFavoritesHandle,
  deleteWatchListHandle,
} from "../../utils";
import {
  CheckCircleTwoTone,
  HeartOutlined,
  HeartTwoTone,
  PlusCircleOutlined,
  StarOutlined,
} from "@ant-design/icons";

const SearchList = () => {
  const notImg =
    "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png";
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const SearchApi = axios.create({
      baseURL: "https://api.themoviedb.org/3/search/movie",
    });
    const query = searchParams.get("query");
    const fetchMovies = async () => {
      const response = await SearchApi.get(
        `/?api_key=${APIKEY}&language=tr-TR&query=${query}`
      ).catch((err) => {
        console.log(err.message);
      });
      const data = response.data;
      setMovies(data);
    };
    fetchMovies();
  }, [searchParams]);
  const data = movies.results;
  const { favorites } = useSelector((state) => state.favorites);
  const { watchList } = useSelector((state) => state.watchList);
  return (
    <div className={styles.movieListContainer}>
      <p className={styles.itemsCount}>{movies.total_results} items</p>
      <List
        pagination={{
          onChange: (page) => {
            setSearchParams({ page: `${page}` });
          },
          pageSize: 20,
          current: parseInt(searchParams.get("page")) || 1,
          total: movies.total_pages,
          showSizeChanger: false,
        }}
        grid={{
          gutter: 36,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 5,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <div className={styles.cardContainer}>
              <div
                className={styles.top}
                onClick={() => {
                  navigate(`/movie/${item.id}`);
                }}
              >
                <img
                  src={
                    item.poster_path ? img_base_url + item.poster_path : notImg
                  }
                  alt="poster img"
                />
                <div className={styles.rating}>
                  <p>
                    <StarOutlined /> {item.vote_average}
                  </p>
                </div>
              </div>
              <div className={styles.footer}>
                <div
                  className={styles.left}
                  onClick={() => {
                    navigate(`/movie/${item.id}`);
                  }}
                >
                  <p className={styles.title}>{item.title}</p>
                  <p>{item.release_date}</p>
                </div>
                <div className={styles.right}>
                  {watchList.find((movie) => movie.id === item.id) ? (
                    <p
                      className={styles.watched}
                      onClick={() => {
                        deleteWatchListHandle(item.id);
                      }}
                    >
                      <CheckCircleTwoTone />
                    </p>
                  ) : (
                    <p
                      className={styles.watched}
                      onClick={() => {
                        addWatchListHandle(item);
                      }}
                    >
                      <PlusCircleOutlined />
                    </p>
                  )}
                  {favorites.find((movie) => movie.id === item.id) ? (
                    <p
                      className={styles.heart}
                      onClick={() => {
                        deleteFavoritesHandle(item.id);
                      }}
                    >
                      <HeartTwoTone />
                    </p>
                  ) : (
                    <p
                      className={styles.heart}
                      onClick={() => {
                        addFavoritesHandle(item);
                      }}
                    >
                      <HeartOutlined />
                    </p>
                  )}
                </div>
              </div>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default SearchList;
