const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
const { countryDataBase } = require("./src/countriesDb.js")

conn.sync({ force: true }).then(() => {
  server.listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}`);
    await countryDataBase();
  })
}).catch(error => console.error(error))

