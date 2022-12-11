import { Request, Response } from "express";

const express = require("express");
const router = express.Router();

const { getCpu } = require("../controllers/cpuController");

router.get("/", async (req: Request, res: Response) => {
    const response = await getCpu(); 
    res.send(response);
}); 

module.exports = router;