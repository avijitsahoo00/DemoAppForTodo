import express from "express";
import Curd from "./CURD/routes";
import { errorLog, Log } from "./logger";
import User from "./User/routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/user",User);
app.use("/curd", Curd);

app.get("/", (req,res)=>{
    res.status(200).json("hello from server");
})

app.listen(4000, ()=>{
    Log("server start at port 4000")
    // errorLog("nothing")
})