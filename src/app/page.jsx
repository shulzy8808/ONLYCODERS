'use client'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from './page.module.css';
import home from 'public/homepage.jpeg'
import Link from 'next/link';

//use fit trueee
//create a layout inside of the folder
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
            <div className={styles.leftNav}>
            <h1>
                ONLYCODERS.net
            </h1>
            <Link href={'/'}> Home</Link>
            <Link href={'/about'}> About Us</Link>
            <Link href={'/contact'}> Contact</Link>
            <Link href={'/blog'}> Blog</Link>
            </div>
            <div className={styles.rightNav}>
                <FacebookOutlinedIcon/>
                <TwitterIcon/>
                <InstagramIcon/>
            </div>
        </div>
          <div className={styles.body}>
            <div className={styles.leftBody}>
              <h1 className={styles.h1}>
                Programmer, A machine that turns coffee into code.
              </h1>
              <div className={styles.details}>
              <button className={styles.button}>
                Login
              </button>
              <p> Don't have an account?</p>
            <Link href={'/profile/register'}>
            <button className={styles.button}>
                Create an Account
              </button>
              </Link>
              </div>
              
            </div> 

      </div>
    </div>
  )
}
