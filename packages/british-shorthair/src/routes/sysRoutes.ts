import { Request, Response } from "express";

const express = require("express");
const router = express.Router();

const { getSys } = require("../controllers/sysController");

router.get("/", async (req: Request, res: Response) => {
    const response = await getSys(); 
    res.send(response);
}); 

module.exports = router;
