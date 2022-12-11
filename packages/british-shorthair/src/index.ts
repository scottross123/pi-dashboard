import { Request, Response } from "express";

const express = require("express");
const app = express();
const port = 3000;

const cpuRoutes = require("./routes/cpuRoutes");
const sysRoutes = require("./routes/sysRoutes");
const memRoutes = require("./routes/memRoutes");

app.get("/", function (req: Request, res: Response) {
  res.send("Systems Info API version 1.0.0");
});

app.use("/cpu", cpuRoutes);
app.use("/sys", sysRoutes);
app.use("/mem", memRoutes);

app.listen(port, function () {
  console.log(`Systems Info API running on port ${port}!`);
});
