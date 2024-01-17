import React, { useEffect } from 'react'
import Card from "../Card/Card"
import styles from "../Cards/Cards.module.css"
import { connect } from "react-redux";
import { getCountries, getActivity } from "../../redux/actions";


const Cards = ({ pageCountries, allCountries, getCountries }) => {

    useEffect(() => {
        getCountries();
    }, [getCountries]);

    return (
        <div className={styles.cards}>
            {[...pageCountries].map((country, index) => (

                <Card
                    id={country.id}
                    name={country.name}
                    flags={country.flags}
                    continents={country.subregion}
                    capital={country.capital}
                    subregion={country.continents}
                    area={country.area}
                    population={country.population}
                    key={`${country.id}-${index}`}

                />
            ))}
        </div>
    );
};

// Mapeamos el estado Redux a las propiedades del componente
const mapStateToProps = (state) => ({
    pageCountries: state.pageCountries,
    allCountries: state.allCountries,
});

// Mapea las acciones Redux a las propiedades del componente
const mapDispatchToProps = (dispatch) => ({
    getCountries: () => dispatch(getCountries()),
    getActivity: () => dispatch(getActivity()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Cards);