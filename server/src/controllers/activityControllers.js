const { Activities, Country } = require("../db");

// Función para buscar todas las actividades turísticas
const getAllActivity = async () => {
  const allActivity = await Activities.findAll({    //consultamos las activ en la bd
    include: Country,
  });
  if (!allActivity.length) {
    console.error("No hay actividades turísticas disponibles");
  }
  return allActivity;
};

const createActivity = async (
  name,
  dificulty,
  duration,
  season,
  countryId
) => {
  if (!name || !dificulty || !duration || !season || !countryId)
     console.error("Faltan datos Obligatorios");

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
// const getAllActivity = () => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const allActivity = await Activities.findAll({
//         include: Country,
//       });
//       if (!allActivity.length) {
//         console.error("no hay actividades")
//       }
//       resolve(allActivity);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// const createActivity = (name, dificulty, duration, season, countryId) => {
//   return new Promise(async (resolve, reject) => {
//     if (!name || !dificulty || !duration || !season || !countryId)
//       reject("Faltan datos Obligatorios");

//     try {
//       const newActivity = await Activities.create({
//         name,
//         dificulty,
//         duration,
//         season,
//       });

//       const pushActivity = await Country.findAll({
//         where: {
//           id: countryId,
//         },
//       });

//       await newActivity.addCountry(pushActivity);

//       resolve(newActivity);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };




module.exports = { getAllActivity, createActivity };