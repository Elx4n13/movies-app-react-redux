import React, { useState } from "react";
import styles from "./Header.module.scss";
import Left from "../../images/vectorLeft.png";
import Right from "../../images/vectorRight.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [bgColor, setBgColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 40) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={`${styles.header} ${bgColor ? styles.headerColor : null}`}>
      <div className={`${styles.navbar} ${bgColor ? styles.navColor : null}`}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <img src={Left} alt="logo" />{" "}
            <img src={Right} className={styles.rightLogo} alt="logo" />
          </div>
          <div className={styles.leftMenu}>
            <NavLink
              to="/favorites?page=1"
              style={({ isActive }) => ({
                color: isActive ? "green" : null,
              })}
            >
              Favorites
            </NavLink>
            <NavLink
              to="/watch_list?page=1"
              style={({ isActive }) => ({
                color: isActive ? "green" : null,
              })}
            >
              Watch List
            </NavLink>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightMenu}>
            <NavLink
              to="/latest?page=1"
              style={({ isActive }) => ({
                color: isActive ? "green" : null,
              })}
            >
              Latest
            </NavLink>
            <NavLink
              to="/now_playing?page=1"
              style={({ isActive }) => ({
                color: isActive ? "green" : null,
              })}
            >
              Now Playing
            </NavLink>
            <NavLink
              to="/popular?page=1"
              style={({ isActive }) => ({
                color: isActive ? "green" : null,
              })}
            >
              Popular
            </NavLink>
            <NavLink
              to="/top_rated?page=1"
              style={({ isActive }) => ({
                color: isActive ? "green" : null,
              })}
            >
              Top Rated
            </NavLink>
            <NavLink
              to="/upcoming?page=1"
              style={({ isActive }) => ({
                color: isActive ? "green" : null,
              })}
            >
              Upcoming
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
