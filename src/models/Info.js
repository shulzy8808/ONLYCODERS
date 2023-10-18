import mongoose from "mongoose";

mongoose.set('strictQuery', true);

const {Schema} = mongoose
// const infoSchema = 

let infoSchema = new Schema({
    quest: {
        type: String,
        required: true
    },
    questImg:{
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    badge:{
        type: String,
        required: true
    },
    badgeDesc: {
        type: String,
        required: true
    },
    badgeImg: {
        type: String,
        required: true
    },
    group:{
        type: String,
        required: true
    },
    groupImg: {
        type: String,
        required: true
    },
    groupNumber:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    }
}, {timestamps: true})
    const Information = mongoose.models.Info || mongoose.model("Info", infoSchema)

export default Information