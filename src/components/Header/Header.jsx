import React from "react";
import styles from "./Header.module.scss";
import Left from "../../images/vectorLeft.png";
import Right from "../../images/vectorRight.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <img src={Left} alt="logo" />{" "}
            <img src={Right} className={styles.rightLogo} alt="logo" />
          </div>
          <div className={styles.leftMenu}>
            <Link to="/">Favorites</Link>
            <Link to="/">Watch List</Link>
          </div>
        </div>
        <div className={styles.right}>
            <div className={styles.rightMenu}>
                <Link to='/latest?page=1'>Latest</Link>
                <Link to='/now_playing?page=1'>Now Playing</Link>
                <Link to='/popular?page=1'>Popular</Link>
                <Link to='/top_rated?page=1'>Top Rated</Link>
                <Link to='/upcoming?page=1'>Upcoming</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
