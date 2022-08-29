import {
  CheckCircleTwoTone,
  HeartOutlined,
  HeartTwoTone,
  PlusCircleOutlined,
  StarOutlined,
} from "@ant-design/icons";
import React from "react";
import styles from "./WatchList.module.scss";
import { List } from "antd";
import { useSearchParams, useNavigate } from "react-router-dom";
import "../../Ant.css";
import {
  addFavoritesHandle,
  addWatchListHandle,
  deleteWatchListHandle,
  deleteFavoritesHandle,
  img_base_url,
} from "../../utils";
import { useSelector } from "react-redux";

const WatchList = () => {
  const notImg =
    "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png";
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { favorites } = useSelector((state) => state.favorites);
  const { watchList } = useSelector((state) => state.watchList);
  const data = watchList;
  return (
    <div className={styles.movieListContainer}>
      <p className={styles.itemsCount}>{data.length} items</p>
      <List
        pagination={{
          onChange: (page) => {
            setSearchParams({ page: `${page}` });
          },
          pageSize: 20,
          current: parseInt(searchParams.get("page")) || 1,
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

export default WatchList;
