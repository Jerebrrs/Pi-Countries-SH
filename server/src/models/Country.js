const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"Country",
		{
			id: {
				type: DataTypes.STRING,
				allowNull: false,
				primaryKey: true,
				unique: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: {
						args: [2, 20],
						msg: "El nombre del Country tiene que tener entre 2 a 20 Caracteres",
					},
				},
			},
			flags: {
				type: DataTypes.JSON, // Ajusta el tipo de datos según sea necesario
				allowNull: false,
				
			},
			continents: {
				type: DataTypes.STRING, // Ajusta el tipo de datos según sea necesario
				allowNull: false,
			
			},
			capital: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			subregion: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			area: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			population: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			timestamps: false,
			freezeTableName: true,
		}
	);
};