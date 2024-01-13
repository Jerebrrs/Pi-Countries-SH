import React from 'react'
import styles from '../Home/Home.module.css';
import Cards from '../Cards/Cards';
import Navbar from '../Navbar/Navbar';
import Pagination from '../Pagination/Pagination';

import Filter from '../Filters/Filter';

const Home = () => {
    return (
        <div className={styles.container}>
          
            <div className={styles.filter}>
                <Filter />
            </div>
            <Navbar />
            <Cards />
            <Pagination />
        </div>
    )
}

export default Home