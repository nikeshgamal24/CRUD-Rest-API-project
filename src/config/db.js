import pkg from "pg";
import dotenv from "dotenv";
const { Pool } = pkg;

dotenv.config();

console.log("🚀 ~ process.env.DB_HOST:", process.env.DB_USER);
console.log("🚀 ~ process.env.DB_USER:", process.env.DB_HOST);

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DBPORT,
});

pool.on("connect", () => {
  console.log("Connection pool established with Database");
});

export default pool;
