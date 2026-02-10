import dotenv from "dotenv"
dotenv.config()

import mongoose from "mongoose"
mongoose.connect(process.env.DB!)
.then(()=>console.log("one - Database is running"))
.catch(()=>console.log("one - Failed to connect with database"))

import express, { Request, Response } from "express"
import OneRouter from "./one.router"
import morgan from "morgan"
import cors from "cors"
const app = express()
app.listen(process.env.PORT, ()=>console.log("one service is running on - http://localhost:4001/one"))

app.use(cors({
	origin: process.env.CLIENT,
	credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/one", OneRouter)