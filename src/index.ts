const connection = require("./db-config");
const express = require("express");
import { Request, Response, Application } from "express";
const app: Application = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const userModel = require("./models/user.model");
const routes = require("./routes");

app.use(cors());
app.use(express.json());
connection();

app.get("/", (req: Request, res: Response) => {
  res.send("Main route working");
});

// Mount REST on /api
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
