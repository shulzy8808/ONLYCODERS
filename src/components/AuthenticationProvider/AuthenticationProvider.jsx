"use client"
import { SessionProvider } from "next-auth/react"


const AuthenticationProvider = ({children}) => {
  return <SessionProvider>
      {children}
    </SessionProvider>
  
  
}

export default AuthenticationProvider
