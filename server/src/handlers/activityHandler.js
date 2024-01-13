const { getAllActivityesDb } = require("../controllers/activityControllers")

const getActivityHandler = async (req, res) => {
    try {
        const response = await getAllActivityesDb();
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getActivityHandler,
}