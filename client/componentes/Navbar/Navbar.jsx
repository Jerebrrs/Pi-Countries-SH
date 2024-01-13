import React from 'react'
import styles from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";
import Searchbar from '../Searchbar/Searchbar';

function Navbar() {
    return (
        <div className={styles.body}>
            <div className={styles.nav}>
                <nav>
                    
                    <Link to={"/"}>LANDING</Link>
                    <Link to={"/create"}>CREAR</Link>
                    <Link to={"/about"}>ABOUT</Link>
                    <Searchbar />
                </nav>


            </div>
        </div>
    )
}

export default Navbar;