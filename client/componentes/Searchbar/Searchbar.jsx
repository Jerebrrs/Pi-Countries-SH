import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import stylos from "../Searchbar/Searchbar.module.css";
import { getCountriesName } from "../../redux/actions";

const Searchbar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(getCountriesName(name));
        setName("")
    }

    return (
        <div>
             <form className={stylos.searchBar} onSubmit={(event) => handleSubmit(event)}>
            <input 
            className={stylos.input}
             type='text' 
             placeholder='Search...' 
             onChange={(event) => handleChange(event)
            }
              />
            <button
             className={stylos.boton}
                type='submit'
                onClick={(event) => handleSubmit(event)}>
                🔍︎
            </button>
            </form>
        </div>
    )
}

export default Searchbar;