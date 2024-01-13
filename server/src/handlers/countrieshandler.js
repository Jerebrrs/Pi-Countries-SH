const {
    createCountry,
    getCountry,
    getCountryId,
} = require("../controllers/countriesController");

const createCountryHandler = async (req, res) => {
    try {
        const {
            id,
            name,
            flags,
            continent,
            capital,
            subregion,
            population,
        } = req.body;
        const response = await createCountry(
            id,
            name,
            flags,
            continent,
            capital,
            subregion,
            population,
        );
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};

const getCountryHandler = async (req, res) => {
    try {
        const { name } = req.query;
        const response = await getCountry(name);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};

const getCountryIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await getCountryId(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};

module.exports = {
    createCountryHandler,
    getCountryHandler,
    getCountryIdHandler,
};