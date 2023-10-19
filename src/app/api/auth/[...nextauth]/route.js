import Userinfo from "@/models/User";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import bcrypt from "bcryptjs";
import connect from "@/utils/db";
const handleInfo =  NextAuth({
providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
        id: 'credentials',
        name: 'Credentials',
        async authorize(credentials){

            await connect();

            try{
                const user = await Userinfo.findOne({email:credentials.email});

                if(user){
                    const isPasswordcorrect = await bcrypt.compare(credentials.password, user.password)
                
                    if(isPasswordcorrect){
                        return user
                    }else{
                        throw new Error("Password doesnt match user")
                    }
                }else{
                    throw new Error("No Account was created for this user")
                }
            }catch(error){
                throw new Error(error)
            }
        }
    })
],
    pages:{
        error: "/profile/login"
    }
})
//so when registeed users pass there informtion it get pass as POST and when they try to log in it gets passed as GET
export { handleInfo as GET, handleInfo as POST };
