const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'chatapp3',
    'root',
    'Shiv@3923',
	{
		host: 'localhost' ,
		dialect: 'mysql',
	}
);

module.exports = sequelize;