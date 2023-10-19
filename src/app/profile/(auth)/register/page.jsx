"use client"
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
    //setting error values
    const [err, setErr] = useState(false)
    //if status is fufilled, the it should use the useRouter to navigate to the log in page
    const router = useRouter()

    const handleSubmit = async (e)=>{
        e.preventDefault()

        //using form values to collect input
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        try{
            const res = await fetch("/api/auth/register",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                })
            })
            res.status === 201 && router.push('/profile/login');
        } catch(err){
            setErr(true)
        }
    }


  return (
    <div className={styles.container}>
        <h1 className={styles.h1}> 
            Register your Account with us!
        </h1>
    <form onSubmit={handleSubmit} className={styles.form}>
        <input
        type='text'
        placeholder='name'
        className={styles.input}
        required
        />
        <input
        type='email'
        placeholder='email'
        className={styles.input}
        required
        />
        <input
        type='password'
        placeholder='password'
        className={styles.input}
        required
        />
        <button  className={styles.button}>
            Register
        </button>
    </form>
    {err && "Something went wrong"}
        <Link href='/profile/login'>
            <button className={styles.button}>
                Log in with existing account 
            </button>
        </Link>
    </div>
  )
}

export default page
