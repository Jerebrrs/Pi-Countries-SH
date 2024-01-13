const { Activities, Country } = require("../db");

// Función para buscar todas las actividades turísticas
const getAllActivity = async () => {
    const allActivity = await Activities.findAll({    //consultamos las activ en la bd
        include: Country,
        attributes: ['name'], // Incluye la inf de los países asoc a cada actividad
    });
    if (!allActivity.length) {
        console.error("No hay actividades turísticas disponibles");
    }
    return allActivity;
};

// const createActivity = async (req, res) => {
//     const { name, dificulty, duration, season, countryId } = req.query;
//     try {
//         if (!name || !dificulty || !duration || !season || !countryId) return console.error("Faltan datos")

//         const newActivity = await Activities.create({   //creamos nueva act en bd
//             name, dificulty, duration, season,
//         });

//         // Asocia la nueva actividad con los países proporcionados
//         const pushActivity = await Country.findAll({
//             where: {
//                 name: countryId,
//             },
//         });
//         if (!pushActivity.length) {
//             throw new Error("País no encontrado");
//         }
//         await newActivity.addCountry(pushActivity);// Asocia el país encontrado con la nueva actividad
//         return newActivity;
//     } catch (error) {
//         console.error("Error al crear actividad:", error.message);
//         res.status(400).json({ error: error.message });
//     }
// }
const createActivity = async (
    name,
    dificulty,
    duration,
    season,
    countryId
  ) => {
    if (!name || !dificulty || !duration || !season || !countryId)
      throw Error("Mandatory data is missing");
  
    const newActivity = await Activities.create({
      name,
      dificulty,
      duration,
      season,
    });
  
    const pushActivity = await Country.findAll({
      where: {
        id: countryId,
      },
    });
  
    await newActivity.addCountry(pushActivity);
  
    return newActivity;
  };

module.exports = { getAllActivity, createActivity };