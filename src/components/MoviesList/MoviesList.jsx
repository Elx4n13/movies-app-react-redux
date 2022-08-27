import React, { useEffect } from "react";
import './Ant.css'
import styles from "./MoviesList.module.scss";
import { useParams } from "react-router-dom";
import MovieApi from "../../apis/MovieApi";
import { APIKEY } from "../../apis/MovieApiKey";
import { addMoviesHandle ,img_base_url} from "../../utils";
import { useSelector } from "react-redux";
import { List } from "antd";
import { useSearchParams } from "react-router-dom";
import { HeartOutlined, HeartTwoTone, PlusCircleOutlined, StarOutlined } from "@ant-design/icons";
const MoviesList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { categories } = useParams();
  useEffect(() => {
    const page = searchParams.get("page");
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `/${categories}?api_key=${APIKEY}&language=tr-TR&page=${page}`
      ).catch((err) => {
        console.log(err.message);
      });
      const data = response.data;
      addMoviesHandle(data);
    };
    fetchMovies();
  }, [categories, searchParams]);
  const { movies } = useSelector((state) => state.movies);
  const data = movies.results;
  return (
    <div className={styles.movieListContainer}>
      <p className={styles.itemsCount}>
        {movies.total_results ? `${movies.total_results} items` : "1 item"}
      </p>
      <List
        pagination={{
          onChange: (page) => {
            setSearchParams({ page: `${page}` });
          },
          pageSize: 20,
          current: parseInt(searchParams.get("page")),
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
                <div className={styles.top}>
                    <img src={img_base_url+item.poster_path} alt="poster img" />
                    <div className={styles.rating}><p> <StarOutlined/> {item.vote_average}</p></div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.left}>
                        <p className={styles.title}>{item.title}</p>
                        <p>{item.release_date}</p>
                    </div>
                    <div className={styles.right}>
                        <p className={styles.watched}><PlusCircleOutlined /></p>
                        <p className={styles.heart}><HeartTwoTone /></p>
                    </div>
                </div>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default MoviesList;
