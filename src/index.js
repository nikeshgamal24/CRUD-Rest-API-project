import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import errorHandling from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api", userRoutes);

//Error handling middleware
app.use(errorHandling);

//Creating table before stating server
createUserTable();

//TESTING POSTGRES Connection
app.get("/", async (req, res) => {
  console.log("Start");
  const result = await pool.query("Select current_database()");
  console.log("end");
  console.log(result);
  res.send(`The database name is: ${result.rows[0].current_database}`);
});

//server running

app.listen(port, () => {
  console.log(`Server is running on http:localhost: ${port}`);
});
