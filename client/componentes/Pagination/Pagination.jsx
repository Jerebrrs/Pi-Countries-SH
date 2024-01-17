import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setPageCountries } from '../../redux/actions';
import stylos from "../Pagination/Pagination.module.css"

const Pagination = ({ countries, setPageCountries }) => { //recibo paises
    const [country, Setcountry] = useState(countries); //almacena la lista actual de paises
    const [countryPerPage] = useState(12); // numero de paises por paginas
    const [currentPage, SetCurrentPage] = useState(1); //pagina actual


    const onPageChangeEvent = (start, end) => {    //actualiza la pag en redux
        if (!isNaN(start) && !isNaN(end)) {
            setPageCountries(start, end)
        }
    };

    let pages = Math.ceil(country.length / countryPerPage); //calculamos el n de paginas y hacemos una lista 

    const buttons = [];        //calculamos el n de paginas y hacemos una lista 
    for (let i = 1; i <= pages; i++) {
        buttons.push(i);
    }

    //pagina anterior/siguiente

    const handlePrev = () => {
        SetCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
    };
    const handleNext = () => {
        SetCurrentPage((prev) => (prev <buttons.length  ? prev + 1 : prev));
    };

    const start = () => {
        SetCurrentPage(1);
    };

    const end = () => {
        SetCurrentPage(buttons.length);
    };

    const [arrButons, setarrButons] = useState([]);

    useEffect(() => {
        if (country.length !== countries.length) Setcountry(countries);
        let templateButtons = [...arrButons];

        if (buttons.length < 6) {
            templateButtons = buttons;
        } else if (currentPage >= 1 && currentPage <= 2) {
            templateButtons = [1, 2, 3];
        } else if (currentPage > 2 && currentPage < buttons.length - 1) {
            const numPrev = buttons.slice(currentPage - 2, currentPage);
            const numNext = buttons.slice(currentPage, currentPage + 1);

            templateButtons = [...numPrev, ...numNext];
        } else if (currentPage > buttons.length - 3) {
            const sliced = buttons.slice(buttons.length - 3);

            templateButtons = [...sliced];
        }

        setarrButons(templateButtons);
        const value = currentPage * countryPerPage;
        onPageChangeEvent(value - countryPerPage, value);
    }, [countries, currentPage, countryPerPage, pages]);

    return (
        <div className={stylos.container}>
            <div className={stylos.pagination}>
                <ul>
                    <li
                        className={`${stylos.items} ${currentPage === 1
                            ? "disabled"
                            : ""
                            }`}>
                        <a className={stylos.arrow} onClick={start}>
                            ❮❮
                        </a>
                        <a className={stylos.arrow} onClick={handlePrev}>
                            ❮
                        </a>
                    </li >
                    {buttons.map((data, index) => {
                        return (
                            <li key={index} className={`${stylos.items}`}>
                                <a className={`${currentPage === data ? stylos.current : stylos.diferents}`} onClick={() => SetCurrentPage(data)} >
                                    {data}
                                </a>
                            </li>
                        )
                    })};
                    <li
                        className={`${stylos.items} ${currentPage === buttons.length ? "disabled" : ""
                            }`}
                    >
                        <a className={stylos.arrow} onClick={handleNext}>
                            ❯
                        </a>
                        <a className={stylos.arrow} onClick={end}>
                            ❯❯
                        </a>
                    </li>
                </ul>

            </div>

        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        countries: state.countries,
        allCountries: state.allCountries,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setPageCountries: (start, end) => {
            dispatch(setPageCountries(start, end));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);