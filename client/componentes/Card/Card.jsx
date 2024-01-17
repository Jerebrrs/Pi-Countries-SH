import React from 'react'
import styles from "../Card/Card.module.css"
import { Link } from "react-router-dom";

const Card = ({ name, flags, id, continents }) => {
    return (
        <div className={styles.divCard}>
            <img className={styles.img} src={flags} alt={name} />

            <button className={styles.boton}>
                <Link to={`/countries/${id}`} className={styles.link}>
                    <div className={styles.info}>

                        <div className={styles.countries}>

                            <div className={name && name.length > 23 ? styles.name2 : styles.name}>
                                {name}
                            </div>

                        </div>
                        <p
                            className={name && name.length > 28 ? styles.continents2 : styles.continents}
                        >
                            {continents}
                        </p>
                    </div>
                </Link>
            </button>
        </div>
    )
}

export default Card;