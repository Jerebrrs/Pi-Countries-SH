const { Country, Activities } = require("../db");
const { Op } = require("sequelize");

const getAllCountries = async () => {
    const allCountries = await Country.findAll({
        include: [
            {
                model: Activities,
                attributes: ["name", "dificulty", "duration", "season"],
                through: { 
                    attributes: [] },
            },
        ], //UNIMOS LA TABLA ACTIVITYES
    })
    return allCountries;
}

const getCountryId = async (id) => {

    const countryId = await Country.findByPk(id, {
        include: Activities,
    })
    if (!countryId) {
        throw new Error(`No se encontró un país con el ID: ${id}`);
    }
    return countryId;
};

const findCountry = async (name) => {
    let upperName = name.charAt(0).toUpperCase() + name.slice(1);
    const countryName = await Country.findAll({
        where: {
            name: { [Op.iLike]: `%${upperName}%` }
        },
        include: Activities,
    })
    if (countryName.length) return countryName;
    return `No se encontró ningún país con el nombre: ${name.toUpperCase()}`;
}


module.exports = {
    getAllCountries,
    getCountryId,
    findCountry,
};