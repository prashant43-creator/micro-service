import { Schema, model } from "mongoose"
import { OneModelInterface } from "./one.interface"

const schema = new Schema<OneModelInterface>({

	
}, {timestamps: true})

const OneModel = model<OneModelInterface>("One", schema)
export default OneModel