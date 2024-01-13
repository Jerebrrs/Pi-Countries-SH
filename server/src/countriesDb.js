const axios = require("axios");
const { Country } = require("./db.js")

const getCountryApi = async () => {
    try {
        const response = await axios.get('http://localhost:5000/countries');

        const getInfo = await response.data.map(element => {
            const pngUrl = element.flags && element.flags.png;
            return {
                id: element.cca3,
                name: element.name.common,
                flags: pngUrl ? pngUrl : 'URL not found',
                continents: element.continents ? element.continents[0] : element.continents[0] = 'continents not found',
                capital: element.capital ? element.capital[0] : element.capital = 'capital not found',
                subregion: element.subregion ? element.subregion : element.subregion = 'subregion not found',
                area: element.area,
                population: element.population,
            }
        });
        return getInfo;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const countryDataBase = async () => {
    try {
        const countries = await getCountryApi();
        const countriesDB = await Country.findAll();
        if (!countriesDB.length) {
            const createCountries = await Country.bulkCreate(countries);
            return createCountries;
        } else {
            await Country.bulkCreate(countries, {
                updateOnDuplicate: ['flags'], // Indica qué columna(s) deben actualizarse en duplicados
            });
            return countries;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { countryDataBase };