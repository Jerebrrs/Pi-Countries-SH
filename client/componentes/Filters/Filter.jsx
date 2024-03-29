import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import stylos from "../Filters/Filter.module.css";

import {
    sortByName,
    sortByPopulation,
    filterByContinent,
    filterByActivity,
    getActivity,
} from "../../redux/actions"

function Filter() {
    const dispatch = useDispatch();
    const activities = useSelector((state) => state.activities);



    useEffect(() => {   //EE GLOBAL
        if (!activities || activities.length === 0) {
            dispatch(getActivity());
        }
    }, [activities, dispatch]);
    
    function handleFilterByContinent(event) {
        dispatch(filterByContinent(event.target.value));
    }
    function handleFilterByActivity(event) {
        dispatch(filterByActivity(event.target.value));
        console.log(filterByActivity(event.target.value))
    }

    function handleSortByName(event) {
        dispatch(sortByName(event.target.value));
    }
    function handlesortByPopulation(event) {
        dispatch(sortByPopulation(event.target.value));
    }

    return (
        <div>
            <header>
                <div className={stylos.nav}>
                    <div className={stylos.container}>
                        <select className={stylos.filters}
                            onChange={(event) => handleSortByName(event)}
                        >
                            <option> Order By Name</option>
                            <option value="asc">A-Z</option>
                            <option value="desc">Z-A</option>
                        </select>
                        <select className={stylos.filters}
                            onChange={(event) => handleFilterByContinent(event)}>
                            <option value="All">All Continents</option>
                            <option value="Africa">Africa</option>
                            <option value="North America">North America</option>
                            <option value="South America">South America</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                        <select className={stylos.filters}

                            onChange={(event) => handleFilterByActivity(event)}>

                             <option value="All">All Activities</option>
                            <option value="All">Country Activities</option>
                        
                          
                        </select>
                      
                        <select className={stylos.filters}
                            onChange={(event) => handlesortByPopulation(event)}
                        >
                            <option> Order by population </option>
                            <option value="asc"> Ascendente </option>
                            <option value="desc"> Descendente </option>
                        </select>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Filter