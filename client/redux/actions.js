import {
    GET_COUNTRIES,
    GET_BY_NAME,
    GET_DETAILS,
    GET_ACTIVITY,
    RESET,
    RESET_COUNTRIES,
    SORT_BY_NAME,
    SORT_BY_POPULATION,
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITY,
    SET_PAGE_COUNTRIES,
    POST_ACTIVITY,
} from "./actions-type";
import axios from "axios";

export const getCountries = () => async (dispatch) => {
    try {
        const infoC = await axios.get('http://localhost:3001/countries');
        return dispatch({
            type: GET_COUNTRIES,
            payload: infoC.data,
        });
    } catch (error) {
        alert(error.message);
    }
};

export const getCountriesName = (name) => async (dispatch) => {
    try {
        const infoName = await axios.get(`http://localhost:3001/countries/?name=${name}`);//.charAt(0).toUpperCase() + name.slice(1)
        return dispatch({
            type: GET_BY_NAME,
            payload: infoName.data,
        });
    } catch (error) {
        alert(error.message);
    }
};

export const getCountriesDetail = (id) => async (dispatch) => {
    try {
        let detail = await axios.get(`http://localhost:3001/countries/${id}`);
        return dispatch({
            type: GET_DETAILS,
            payload: detail.data,
        });

    } catch (error) {
        alert({ error: error.message });
    }
}

export const getActivity = () => async (dispatch) => {
    try {
        const activity = await axios.get(`http://localhost:3001/activities`);
        return dispatch({
            type: GET_ACTIVITY,
            payload: activity.data,
        });

    } catch (error) {
        alert({ error: error.message });
    }
};

export const setPageCountries = (start, end) => {
    return {
        type: SET_PAGE_COUNTRIES,
        payload: { start, end },
    };
};

export function resetState() {
    return {
        type: RESET,
    };
};

export function resetCountries(payload) {
    return {
        type: RESET_COUNTRIES,
        payload: payload,
    };
};


export const sortByName = (payload) => {
    return {
        type: SORT_BY_NAME,
        payload: payload,
    };
};

export const sortByPopulation = (payload) => {
    return {
        type: SORT_BY_POPULATION,
        payload: payload,
    };
};


export function filterByContinent(payload) {
    return {
        type: FILTER_BY_CONTINENT,
        payload: payload,
    };
};

export function filterByActivity(payload) {
    return {
        type: FILTER_BY_ACTIVITY,
        payload: payload,
    };
};

//utilizo axios para utilizar el metodo post
export function postActivities(payload) {
    return async function (dispatch) {
        const data = await axios.post("http://localhost:3001/activities", payload);
        return data;
    };
};

