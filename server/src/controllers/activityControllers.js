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



module.exports = { getAllActivity, createActivity };