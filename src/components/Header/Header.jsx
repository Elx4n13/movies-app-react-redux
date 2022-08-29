import React, { useState } from "react";
import styles from "./Header.module.scss";
import Left from "../../images/vectorLeft.png";
import Right from "../../images/vectorRight.png";
import { NavLink } from "react-router-dom";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import Links from "../Links/Links";

const Header = () => {
  const [menu,setMenu] = useState (false)
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
        <div className={styles.firstRight}>
        <div className={styles.right}>
          <div className={styles.rightMenu}>
          <Links/>
          </div>
        </div>    
        </div>
        <div className={styles.secondRight}>
          <div className={styles.burger} style={{display:menu ? 'none':'block'}} onClick={()=>{
            setMenu(!menu)
          }}><MenuOutlined /></div>
          <div className={styles.right} style={{display:menu? 'flex':'none'}} onClick={()=>{
            setMenu(!menu)
          }}>
          <CloseOutlined className={styles.close} />
            <div className={styles.rightMenu}>
              <Links/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
