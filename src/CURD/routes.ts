import { Router } from "express";

const Curd = Router();

Curd.get("/get", (req,res)=>{
    res.status(200).json("hello from CURD")
})

export default Curd ; 