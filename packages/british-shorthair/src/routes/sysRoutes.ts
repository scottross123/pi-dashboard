import { Request, Response } from "express";

const express = require("express");
const router = express.Router();

const { 
    getSys,
    getBios 
} = require("../controllers/sysController");

router.get("/", async (req: Request, res: Response) => {
    const response = await getSys(); 
    res.send(response);
}); 

router.get("/bios", async (req: Request, res: Response) => {
    const response = await getBios(); 
    res.send(response);
}); 

module.exports = router;
