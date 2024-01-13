const { Router } = require('express');
const {
    getAllCountries,
    getCountryId,
    findCountry,
} = require("../controllers/countriesController");

const countryRoutes = Router();

countryRoutes.get("/", async (req, res) => {
    const { name } = req.query;
    let countries;
    try {
        if (name) countries = await findCountry(name);
        else countries = await getAllCountries();
        res.status(200).json(countries);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
});

countryRoutes.get("/:id", async (req, res) => {
    try {
        let id = req.params.id.toUpperCase();
        let countr = await getCountryId(id);
        res.status(200).json(countr)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}
);


module.exports = countryRoutes;