import Userinfo from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export const POST = async (request)=>{
    const {name, email,password} = await request.json();

    await connect();

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new Userinfo({
        name, 
        email,
        password: hashedPassword,
    })
    try{
        await newUser.save();
        return new NextResponse("User has been created", {
            statius: 201
        })
    }catch(err){
        return new NextResponse(err.message, {
            status: 500,
        })
    }
}
