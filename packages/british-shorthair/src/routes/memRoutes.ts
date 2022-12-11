import { Request, Response } from "express";

const express = require("express");
const router = express.Router();

const { 
    getMem,
    getMemLayout,
} = require("../controllers/memController");

router.get("/", async (req: Request, res: Response) => {
    const response = await getMem(); 
    res.send(response);
}); 

router.get("/layout", async (req: Request, res: Response) => {
    const response = await getMemLayout(); 
    res.send(response);
}); 

module.exports = router;