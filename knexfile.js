// Update with your config settings.

require('dotenv').load();

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/pirates'
  },

  production: {
    client: 'postgresql',
    connection: process.env.PRODUCTION_DATABASE_URL + "?ssl=true"
  }

};
