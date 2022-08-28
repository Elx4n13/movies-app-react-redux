import React from "react";
import styles from "./FavoritesList.module.scss";
import { useSelector } from "react-redux";
import { List } from "antd";
import { useSearchParams } from "react-router-dom";
import {
  HeartTwoTone,
  PlusCircleOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { addFavoritesHandle, img_base_url } from "../../utils";
const FavoritesList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { favorites } = useSelector((state) => state.favorites);
  const data = favorites;
  return (
    <div className={styles.movieListContainer}>
      <p className={styles.itemsCount}>{data.length} items</p>
      <List
        pagination={{
          onChange: (page) => {
            setSearchParams({ page: `${page}` });
          },
          pageSize: 20,
          current: parseInt(searchParams.get("page")),
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
              <div className={styles.top}>
                <img src={img_base_url + item.poster_path} alt="poster img" />
                <div className={styles.rating}>
                  <p>
                    {" "}
                    <StarOutlined /> {item.vote_average}
                  </p>
                </div>
              </div>
              <div className={styles.footer}>
                <div className={styles.left}>
                  <p className={styles.title}>{item.title}</p>
                  <p>{item.release_date}</p>
                </div>
                <div className={styles.right}>
                  <p className={styles.watched}>
                    <PlusCircleOutlined />
                  </p>
                  <p
                    className={styles.heart}
                    onClick={() => {
                      addFavoritesHandle(item);
                    }}
                  >
                    <HeartTwoTone />
                  </p>
                </div>
              </div>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default FavoritesList;
