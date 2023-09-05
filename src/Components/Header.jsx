import React from "react";
import styles from "./Header.module.css";
import {Link} from 'react-router-dom';
import {ReactComponent as Dogs} from '../Assets/dogs.svg';

const Header = () => {
  return <div>
      <h1 className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home"><Dogs/></Link>
        <Link className={styles.login} to="/login">Login / Criar</Link>

      </nav>
      </h1>
    </div>
};
  export default Header;
