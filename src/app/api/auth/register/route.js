import Userinfo from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connect from "@/utils/db";

export const POST = async(request)=>{
    const {name, email,password} = await request.json();

    await connect();

    const hashedPassword = await bcrypt.hash(password, 5)

        const newUser = new Userinfo({
            name,
            email,
            password: hashedPassword,
        });
        
    try{
        await newUser.save()
        return new NextResponse("Account Created Sucesssfully", {
            status: 201,
        })
    }catch(err){
        return new NextResponse (err.message,{
            status: 500,
        })
    }
}