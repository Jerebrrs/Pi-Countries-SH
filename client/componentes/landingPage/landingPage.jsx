import React from 'react'
import landingImg from "../../portadas/mapaWorl.jpg";
import styles from "./landingpage.module.css";
import { Link } from "react-router-dom";
const LandingPage = () => {
    return (
        <div className={styles.container}>
            {/* <img className={styles.img} src={landingImg} alt="" /> */}
            <div className={styles.right}>

                <div className={styles}>
                    <h1 className={styles.title}> Bienvenidos a Country</h1>
                    <h2 className={styles.subtitle}>La App con todos los Paises</h2>
                    <h2 className={styles.subtitle}>Del Viejo Mundo</h2>
                    <div className={styles}>
                        <Link to="/home">
                            <button className={styles.butn}>COMENCEMOS</button>
                        </Link>
                        <Link className={styles} to="/about">
                            <button className={styles.butn}>ABOUT</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;