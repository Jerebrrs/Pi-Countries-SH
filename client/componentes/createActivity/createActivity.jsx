import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { postActivities, getCountries } from '../../redux/actions';
import stylos from "../createActivity/createAct.module.css";

export function validate(input) {
    let error = {};
    if (!input.name) {
        error.name = "Required";
    } else if (
        !/^[a-zA-Z\s]*$/.test(input.name) || typeof input.name !== "string") {
        error.name = "Only letters";
    }

    if (!input.dificulty) {
        error.dificulty = "Select";
    } else if (input.dificulty < 1 || input.dificulty > 5) error.dificulty = "Between 1 and 5";

    if (!input.duration) {
        error.duration = "Required";
    } else if (input.duration < 1 || input.duration > 24)
        error.duration = "Between 1 and 24";

    if (!input.season) {
        error.season = "Select a season";
    }

    if (!input.countryId.length) {
        error.countryId = "Select at least one country";
    }
    return error;
}



const createAc = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allCountries = useSelector((state) => state.allCountries);
    const [error, setError] = useState({});
    // const [errorButton, setErrorButton] = useState(
    //   Object.values(error).length !== 0 ? true : false

    // );
    const [input, setInput] = useState({
        name: "",
        dificulty: "",
        duration: "",
        season: "",
        countryId: [],
    });

    function handleChange(event) {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        });
        setError(
            validate({
                ...input,
                [event.target.name]: event.target.value,
            })
        );
    }

    function handleCheck(event) {
        setInput({
            ...input,
            season: event.target.value,
        });
        setError(
            validate({
                ...input,
                season: event.target.value,
            })
        );
    }

    function handleSelect(event) {
        if (input.countryId.length < 5)
            setInput({
                ...input,
                countryId: [...input.countryId, event.target.value],
            });
        setError(
            validate({
                ...input,
                countryId: event.target.value,
            })
        );
    }

    function handleSubmit(event) {

        event.preventDefault();
        try {
            dispatch(postActivities(input)).then((response) => {
                if (response) {
                    alert("Activity created!!!");
                    setInput({
                        name: "",
                        dificulty: "",
                        duration: "",
                        season: "",
                        countryId: [],
                    });
                    navigate("/home");
                } else {
                    console.error("Error creating activity. Response:", response);
                }
            });
        } catch (error) {
            console.error("Error creating activity:", error);
        }

    }
    function handleDelete(event) {
        setInput({
            ...input,
            countryId: input.countryId.filter((country) => country !== event),
        });
    }

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);


    return (
        <div className={stylos.body}>

            <div  >
                <Link to="/home">
                    <button className={stylos.link}>
                        HOME
                    </button>
                    {/* <p className={stylos.link}>HOME</p> */}
                </Link>
            </div>
            <div className={stylos.container}>
                <div className={stylos.container1}>
                    <div>
                        <h1 className={stylos.tytle}>Crear Nueva Actividad</h1>
                    </div>
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <div>
                            <div className={stylos.inputs}>
                                <label>NAME</label>
                                <br />
                                <input
                                    className={stylos.inp}
                                    type='text'
                                    value={input.name}
                                    name='name'
                                    onChange={(event) => handleChange(event)}
                                />
                                <div className={stylos.err1}>
                                    {error.name && <a>{error.name}</a>}
                                </div>
                            </div>
                            <div>
                                <label>DIFFICULTY</label>
                                <input
                                    className={stylos.inp}
                                    type='number'
                                    value={input.dificulty}
                                    name='dificulty'
                                    onChange={(event) => handleChange(event)}
                                />
                                {error.dificulty && <a>{error.dificulty}</a>}
                            </div>
                            <div>
                                <label>DURACION</label>
                                <br />
                                <input
                                    className={stylos.inp}
                                    type="number"
                                    value={input.duration}
                                    name="duration"
                                    onChange={(event) => handleChange(event)}
                                />
                                <div className={stylos.err3}>
                                    {error.duration && <a>{error.duration}</a>}
                                </div>
                            </div>
                            <div>
                                <br />
                                <div>
                                    <select
                                        className={stylos.inp}
                                        onChange={(event) => handleCheck(event)}
                                        value={input.season}
                                    >

                                        <option value="" hidden >
                                            Select season
                                        </option>
                                        <option name="Summer" value="Summer">
                                            Summer
                                        </option>
                                        <option name="Fall" value="Fall">
                                            Fall
                                        </option>
                                        <option name="Winter" value="Winter">
                                            Winter
                                        </option>
                                        <option name="Spring" value="Spring">
                                            Spring
                                        </option>
                                    </select>
                                    <div className={stylos.err3}>
                                        {error.season && <a>{error.season}</a>}
                                    </div>
                                </div>
                                <div>
                                    <br />
                                    <select className={stylos.inp}
                                        onChange={(event) => handleSelect(event)}>
                                        <option>
                                            Select Country
                                        </option>
                                        {allCountries.map((country) => (
                                            <option value={country.id} key={country.name}>
                                                {country.name}
                                            </option>
                                        ))}
                                    </select>
                                    <div className={stylos.err}>
                                        {error.countryId && <a>{error.countryId}</a>}
                                    </div>
                                </div>
                                <br />
                            </div>
                            <button
                                className={stylos.button2}
                                type='submit'
                                disabled={error.name || error.dificulty || error.duration || error.season || error.countryId}>
                                CREAR
                            </button>
                        </div>
                    </form>
                    <div className={stylos.answer}>
                        {input.countryId.map((element) => (
                            <div className={stylos.count} key={element}>
                                <p>{element}</p>
                                <button className={stylos.button1}
                                    onClick={() => handleDelete(element)}>
                                    X
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </div >
    );
}

export default createAc;