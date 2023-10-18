'use client'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import styles from './page.module.css'
import GoogleIcon from '@mui/icons-material/Google';
import { useRouter } from 'next/navigation';


const page = () => {
  const session = useSession()
  const router = useRouter()

  if(session.status === 'loading'){
    return <p>Please Wait...</p>
}
  if(session.status === 'authenticated'){
    router?.push('/profilepage')
  }






  const handleSubmit = async(e)=>{
    e.preventDefault()
    const email= e.target[0].value
    const password = e.target[1].value

    signIn("credentials", {email, password})
  }
  return (
    <div className={styles.container}>
        <h1 className={styles.h1}>
            Log in to your account
        </h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input 
          placeholder='Enter Email' 
          type='email' 
          className={styles.input}
          required
        />
        <input 
          placeholder='Enter Password' 
          type='password' 
          className={styles.input}
          required 
        />
        <button className={styles.button}>Log in</button>
        </form>
            <button 
              onClick={()=>signIn("google")} 
              className={styles.button}
            > 
              Log in with Google <GoogleIcon/>
            </button>
    </div>
  )
}

export default page
