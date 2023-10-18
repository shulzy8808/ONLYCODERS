"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import styles from './page.module.css'

const page = () => {
    //try using usestate 
    const [error, setError] = useState(false);
    const router = useRouter();


    const handleSubmit = async (e)=>{
        e.preventDefault()
        //using form elements to the get the value of the inputs
        const name = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value

        try{
            const res = await fetch ("/api/auth/register" ,{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                }),
            })

            res.status === 201 && router.push("/profile/login?sucess=Account has been created sucessfully")
        }catch(error){
            setError(true)
        }
    }

return (
    <div className={styles.container}>
        <h1 className={styles.h1}>
            Regsiter your account with us, Today!
        </h1>
        <form onSubmit={handleSubmit} className={styles.form}>
        <input 
                placeholder='Enter Name' 
                type='text' 
                className={styles.input}
                required
            />
            <input 
                placeholder='Enter Email' 
                type='email'
                className={styles.input} 
                required
            />
                {/* <p>{formError.email}</p> */}

            <input 
                placeholder='Enter Password' 
                type='password'
                className={styles.input}
                required
            />
        <button className={styles.button}>Register</button>
        </form>
        {error && "Something has gone wrong" }
        <Link href='/profile/login'>
            <button className={styles.button}>
                Log in with existing account 
            </button>
        </Link>
    </div>

  )
}

export default page
