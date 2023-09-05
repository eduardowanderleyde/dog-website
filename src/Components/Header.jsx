import React from "react";
import styles from "./Header.module.css";
import {Link} from 'react-router-dom';
const Header = () => {
  return <div>
      <h1 className={styles.header}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar</Link>

      </nav>
      </h1>
    </div>
};
  export default Header;
