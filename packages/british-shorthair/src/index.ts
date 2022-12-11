import { Request, Response } from "express";

const express = require("express");
const app = express();
const port = 3000;

const routes = require("./routes");

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World!");
});

app.use("/", routes);

app.listen(port, function () {
  console.log(`Systems Info API running on port ${port}!`);
});
