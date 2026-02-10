import {Router, Request, Response} from "express"
const OneRouter = Router()

OneRouter.get("/", (req: Request, res: Response)=>{
	res.json({message: "Hello from one service"})
})

export default OneRouter