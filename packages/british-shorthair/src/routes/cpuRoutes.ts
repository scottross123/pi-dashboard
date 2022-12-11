import { Request, Response } from "express";

const express = require("express");
const router = express.Router();

const { 
    getCpu,
    getCpuCurrentSpeed,
    getCpuTemperature,
} = require("../controllers/cpuController");

router.get("/", async (req: Request, res: Response) => {
    const response = await getCpu(); 
    res.send(response);
}); 

router.get("/temp", async (req: Request, res: Response) => {
    const response = await getCpuTemperature(); 
    res.send(response);
}); 

router.get("/speed", async (req: Request, res: Response) => {
    const response = await getCpuCurrentSpeed(); 
    res.send(response);
}); 

module.exports = router;