import {
    GET_COUNTRIES,
    GET_BY_NAME,
    GET_DETAILS,
    GET_ACTIVITY,
    // RESET,
    // RESET_COUNTRIES,
    SORT_BY_NAME,
    SORT_BY_POPULATION,
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITY,
    SET_PAGE_COUNTRIES,
    POST_ACTIVITY,
} from "./actions-type";

const initialState = {
    pageCountries: [],
    countries: [],
    allCountries: [],
    details: [],
    Activities: [],

    filters: { activities: "All", continents: "All" },
};



export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_COUNTRIES: {
            return {
                ...state,
                countries: [...payload],
                allCountries: [...payload],
            };
        }
        case GET_BY_NAME: {
            return {
                ...state,
                countries: [...payload],
            };
        }
        case GET_DETAILS: {
            return {
                ...state,
                detail: payload,
            };
        }
        case GET_ACTIVITY: {
            return {
                ...state,
                Activities: payload,

            };
        }
        case POST_ACTIVITY: {
            return {
                ...state,
                Activities: [...state.Activities, payload], //nuevo
            }
        }
        case SET_PAGE_COUNTRIES: {
            return {
                ...state,
                pageCountries: [
                    ...state.countries.slice(payload.start, payload.end),
                ],
            };
        }
        // case RESET: {
        //     return {
        //         ...state,
        //         detail: [],
        //     };
        // }
        // case RESET_COUNTRIES: {
        //     return {
        //         ...state,
        //         countries: payload,
        //     };
        // }
        case SORT_BY_NAME:
            const sortCountriesName = payload === "asc"
                ? state.countries.sort((a, b) => a.name.localeCompare(b.name))
                : state.countries.sort((a, b) => b.name.localeCompare(a.name))
            return {
                ...state,
                countries: [...sortCountriesName],
            }
        case SORT_BY_POPULATION: {
            const filterPopulation = payload === "asc" //si payload es ascendente
                ? state.countries.sort((a, b) => {
                    return Number(a.population) > Number(b.population)
                        ? -1
                        : Number(a.population) < Number(b.population)
                            ? 1
                            : 0;
                })
                : state.countries.sort((a, b) => {
                    return Number(a.population) > Number(b.population)
                        ? 1
                        : Number(a.population) < Number(b.population)
                            ? -1
                            : 0
                });
            return {
                ...state,
                countries: [...filterPopulation],
            };
        }
        case FILTER_BY_CONTINENT:
            state.filters.continents = payload; //actualiza el estado del filtro para utilizar en activity
            const allCountries = state.allCountries;
            // const continentFilter = payload === "All"
            //     ? allCountries
            //     : allCountries.filter(
            //         (country) => country.continents === payload
            //     );
            let filteredContinents = state.allCountries;
            if (state.filters.activities !== "All") {
                filteredContinents = filteredContinents.filter((event) => event.Activities.some((country) => country.name === state.filters.activities));
            }
            if (payload !== "All") {
                filteredContinents = filteredContinents.filter((country) => country.continents === payload);
            }
            return {
                ...state,
                countries: [...filteredContinents],
            };
        case FILTER_BY_ACTIVITY:

            state.filters.activities = payload; //actualiza el estado del filtro para utilizar en activity
            const allCountriesActivities = state.allCountries;
            let filteredActivities = [];

            if (payload === "All") {
                filteredActivities = allCountriesActivities.filter((country) =>
                    country.Activities[0]?.name
                        ? country.Activities[0]
                        : false
                );
            } else {
                filteredActivities = allCountriesActivities.filter((event) =>
                    event.Activities.some(
                        (country) => country.name === payload && country.season === state.filters.season
                    )
                );
            }
            if (state.filters.continents !== "All") {
                filteredActivities = filteredActivities.filter(
                    (country) => country.continents === state.filters.continents
                );
            }

            return {
                ...state,
                countries: [...filteredActivities],
            };

        default:
            return { ...state };
    }
};
