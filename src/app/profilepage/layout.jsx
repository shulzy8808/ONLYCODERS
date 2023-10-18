import Navbar from '@/components/navbar/Navbar'
import Menubar from '@/components/Menubar/Menubar'
import React from 'react'
import styles from './page.module.css'

const profileLayout = ({children}) => {
  return (
    <div className= {styles.wrapper}>
        <Navbar/>
        <div className= {styles.childContainer}>   
        <Menubar/>
        {children}
        </div>
    </div>
  )
}

export default profileLayout
