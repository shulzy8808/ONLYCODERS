import { NextResponse } from "next/server"
import connect from "@/utils/db.js"
import Info from '@/models/Info.js'
import User from "@/models/User"
//writing a get request

export const GET = async (request) =>{
    //fetch frokmmongo 
    try{
        await connect()
        const info = await Info.find()
        
        return new NextResponse(JSON.stringify(info), {status: 200})

    }catch(err){

    return new NextResponse('Error has occured!', {status: 500})

    }
}