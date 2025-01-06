import  {Request,Response} from 'express'
import User from '../database/models/User'



class AuthController{
    public static async registerUser(req:Request,res:Response):Promise<void>{
        //promise return type ho yadi async aaako xa vane
        //public chai kasle pani acccess garna milxa vanera AuthController lai
        // static chai aafai lai instantiation garo yadi static na halne ho vane do this ----> const AuthControllers = new AuthController()
        const {username,email,password}= req.body
        if(!username || !email || !password){
            res.status(400).json({
                message : "Please provide usename, email, password."
            })
            return
        }

        await User.create({
            username,
            email,
            password
        })

        res.status(200).json({
            message : "User registered successfully!!!"
        })
    }
}

export default AuthController