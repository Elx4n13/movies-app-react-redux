import React, { useEffect, useState } from "react";
import styles from "./DetailsContainer.module.scss";
import "../../Ant.css";
import "./ANTDetail.css";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import MovieApi from "../../apis/MovieApi";
import { APIKEY } from "../../apis/MovieApiKey";
import {
  addWatchListHandle,
  deleteWatchListHandle,
  deleteFavoritesHandle,
  addFavoritesHandle,
  img_base_url,
} from "../../utils";
import {
  CheckCircleTwoTone,
  HeartOutlined,
  HeartTwoTone,
  PlusCircleOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { List } from "antd";

const DetailsContainer = () => {
  const notImg =
    "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png";
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [similar, setSimilar] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `/${id}?api_key=${APIKEY}&language=tr-TR`
      ).catch((err) => {
        console.log(err.message);
      });
      const data = response.data;
      setMovie(data);
    };
    const fetchSimilar = async () => {
      const response = await MovieApi.get(
        `/${id}/similar?api_key=${APIKEY}&language=tr-TR`
      ).catch((err) => {
        console.log(err.message);
      });
      const similarResult = response.data;
      setSimilar(similarResult);
    };
    fetchMovies();
    fetchSimilar();
  }, [id]);
  const { watchList } = useSelector((state) => state.watchList);
  const { favorites } = useSelector((state) => state.favorites);
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.main}>
        <div
          className={styles.backdrop}
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(54, 44, 146, 0.4) 0%, rgba(18, 98, 151, 0.4) 100%),url(${
              movie.backdrop_path ? img_base_url + movie.backdrop_path : notImg
            })`,
          }}
        >
          <div className={styles.titleContent}>
            <div className={styles.titles}>
              <div className={styles.top}>
                <p>TMDB/MOVIES</p>
              </div>
              <div className={styles.bottom}>
                <p>{movie.title}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.movieContent}>
          <div className={styles.detailContent}>
            <div className={styles.left}>
              <img
                src={
                  movie.poster_path ? img_base_url + movie.poster_path : notImg
                }
                alt="Poster img"
              />
            </div>
            <div className={styles.right}>
              <div className={styles.tagline}>
                <p>{movie.tagline ? movie.tagline : "Özet"}</p>
              </div>
              <div className={styles.info}>
                <p>
                  {movie.overview
                    ? movie.overview
                    : "Türkçeye çevrilmiş bir özet henüz bulunmuyor. Film için bir tane ekleyerek katkıda bulunabilirsiniz."}
                </p>
              </div>
              <div className={styles.rating}>
                <p>
                  <StarOutlined /> {movie.vote_average}
                </p>
              </div>
              <div className={styles.type}>
                <p className={styles.typeTitle}>Type</p>
                <p className={styles.typeName}>Movie</p>
              </div>
              <div className={styles.release}>
                <p className={styles.top}>Release Date:</p>
                <p className={styles.bottom}>
                  {movie.release_date ? movie.release_date : "Bilinmiyor"}
                </p>
              </div>
              <div className={styles.runTime}>
                <p className={styles.top}>Run time</p>
                <p className={styles.bottom}>{movie.runtime}</p>
              </div>
              <div className={styles.genres}>
                <p className={styles.top}>Genres</p>
                <p className={styles.bottom}>
                  {movie.genres?.length
                    ? movie.genres?.map((element, index) => (
                        <span key={index}> {element.name} </span>
                      ))
                    : "-"}
                </p>
              </div>
              <div className={styles.footer}>
                {watchList.find((item) => movie.id === item.id) ? (
                  <p
                    className={styles.watched}
                    onClick={() => {
                      deleteWatchListHandle(movie.id);
                    }}
                  >
                    <CheckCircleTwoTone />
                  </p>
                ) : (
                  <p
                    className={styles.watched}
                    onClick={() => {
                      addWatchListHandle(movie);
                    }}
                  >
                    <PlusCircleOutlined />
                  </p>
                )}
                {favorites.find((item) => movie.id === item.id) ? (
                  <p
                    className={styles.heart}
                    onClick={() => {
                      deleteFavoritesHandle(movie.id);
                    }}
                  >
                    <HeartTwoTone />
                  </p>
                ) : (
                  <p
                    className={styles.heart}
                    onClick={() => {
                      addFavoritesHandle(movie);
                    }}
                  >
                    <HeartOutlined />
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className={styles.similarContent}>
            <p className={styles.similarTitle}>SIMILAR MOVIES</p>
            <List
              pagination={{
                onChange: (page) => {
                  setSearchParams({ page: `${page}` });
                },
                total: 18,
                current: parseInt(searchParams.get("page")) || 1,
                pageSize: 3,
              }}
              grid={{
                gutter: 36,
                xs: 1,
                sm: 1,
                md: 2,
                lg: 3,
                xl: 3,
                xxl: 3,
              }}
              dataSource={similar.results}
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
                          item.poster_path
                            ? img_base_url + item.poster_path
                            : notImg
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
        </div>
      </div>
    </div>
  );
};

export default DetailsContainer;
