import { Request, Response } from "express";

const express = require("express");
const router = express.Router();

const { 
    getOsInfo,
    getShell,
    getUsers,
    getVersions
} = require("../controllers/osController");

router.get("/", async (req: Request, res: Response) => {
    const response = await getOsInfo(); 
    res.send(response);
}); 

router.get("/shell", async (req: Request, res: Response) => {
    const response = await getShell(); 
    res.send(response);
}); 

router.get("/users", async (req: Request, res: Response) => {
    const response = await getUsers(); 
    res.send(response);
}); 

router.get("/versions", async (req: Request, res: Response) => {
    const response = await getVersions(); 
    res.send(response);
}); 

module.exports = router;