const { Router } = require("express");
const { getAllActivity, createActivity} = require("../controllers/activityControllers");


const activitiesRouter = Router();

activitiesRouter.get("/", async (req, res) => {
    try {
        let activities = await getAllActivity();
        res.status(200).json(activities)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

activitiesRouter.post("/", async (req, res) => {
    let { name, dificulty, duration, season, countryId } = req.body;

    try {
        let activityCreate = await createActivity(name, dificulty, duration, season, countryId);
        res.status(200).json(activityCreate)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
module.exports = activitiesRouter;


