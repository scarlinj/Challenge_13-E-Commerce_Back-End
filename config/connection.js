// import the Sequelize constructor
const Sequelize = require('sequelize');

require('dotenv').config();


// create connection to our database, pass in your MySQL information for username and password
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
      // Heroku port is 3306
      // port: 3306
    });

module.exports = sequelize;
