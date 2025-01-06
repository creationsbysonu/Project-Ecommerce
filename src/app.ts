import express,{Application,Request,Response} from 'express'
const app:Application = express()
const PORT:number = 3000

import * as dotenv from 'dotenv'
dotenv.config()

import './database/connection'

import userRoute from './routes/userRoute'
app.use(express.json())

//localhost:3000/register
app.use("/",userRoute)

//for localhost:3000/hello/register
// app.use("/hello",userRoute)


app.listen(PORT,()=>{
    console.log("Server has started at port : ",PORT)
})