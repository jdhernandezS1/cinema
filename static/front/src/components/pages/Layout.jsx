import React from "react";
import { Outlet } from "react-router-dom";
import { NavBarPhone } from "../router/dropDownMenu";
import styles from "../../css/Header/nav.module.css";
import { NavBarPc } from "../router/menuPc";
import { Footer } from "./footer";

const Layout = () => {
  return (
    <>

      <script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>
      <div className={styles.navPc}>
        <NavBarPc />
      </div>
      <div className={styles.navPhone} >
        <NavBarPhone />
      </div>
      <Outlet />
      <Footer/>
    </>
  )
};

export default Layout;