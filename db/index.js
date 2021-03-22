const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  password: "password",
  port: 5432,
  host: "localhost",
  database: process.env.DB_NAME,
});

module.exports = pool;
