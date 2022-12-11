import { Request, Response } from "express";

const express = require("express");
const router = express.Router();

router.get("/cpu", (req: Request, res: Response) => {
    res.send("cpu bro");
});

module.exports = router;