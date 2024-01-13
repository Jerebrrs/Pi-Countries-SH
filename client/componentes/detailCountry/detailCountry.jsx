import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesDetail } from '../../redux/actions';
import stylos from "../detailCountry/DetailC.module.css";


function Detail(props) {
    const { id } = useParams();
    // const countryDetail = useSelector((state) => state.activities)
    const { detail, Activities } = useSelector((state) => state);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getCountriesDetail(id));

    }, [dispatch, id]);

    return (
        <div className={stylos.container}>
            <div className={stylos.link}>
                <Link to="/home">
                    <p className={stylos.link}>HOME</p>
                </Link>
            </div>
            <div className={stylos.titleCON}>
                <h2 className={stylos.title} >
                    COUNTRY DETAILS
                </h2>
                {detail ? (
                    <div>
                        <div className={stylos.flagcontainer}>
                            <img
                                className={stylos.flag}
                                src={detail.flags}
                                alt='Imagen No disponible'
                            />
                        </div>
                        <div>
                            <div className={stylos.right}>
                                <h2 className={stylos.name}>{detail.name}</h2>
                                <h4 className={stylos.dat}>{detail.continents}</h4>
                                <h4 className={stylos.dat}>Code: {detail.id}</h4>
                                <h4 className={stylos.dat}>Capital: {detail.capital}</h4>
                                <h4 className={stylos.dat}>Region: {detail.subregion}</h4>
                                <h4 className={stylos.dat}>Area: {detail.area} km²</h4>
                            </div>
                        </div>
                    </div>
                ) : (<p>Loading ...</p>)}
            </div>
            <div className={stylos.titleCON}>

                <div className={stylos.titleCON}>
                    <h3 className={stylos.title}>COUNTRY ACTIVITIES</h3>
                    {Activities && Activities.length ? (
                        Activities.map((activity) => {
                            console.log('Activity:',activity.season );
                            const country = activity.Countries[0]; // Suponiendo que hay solo un país por actividad
                            return (
                                <div key={activity.id}>
                                    <h4 className={stylos.name}>{activity.name}</h4>
                                    <p className={stylos.dat}>Dificulty: {activity.dificulty}</p>
                                    <p className={stylos.dat}>Duration: {activity.duration} hrs</p>
                                    <p className={stylos.dat}>Season: {activity.season}</p>
                                </div>
                            );
                        })
                    ) : (
                        <p className={stylos.name}>No Activities yet</p>
                    )}
                    <button className={stylos.link}>
                        <Link to="/create"> Crear Actividad</Link>

                    </button>
                </div>
            </div >




        </div>
    )
}

export default Detail;