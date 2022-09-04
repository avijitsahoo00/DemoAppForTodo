import { Router } from "express";

const User = Router() ;


User.get("/get", (req, res)=> {
    res.status(200).json("hello from user")
})

export default User; 