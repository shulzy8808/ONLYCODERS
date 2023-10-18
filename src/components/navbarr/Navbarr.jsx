"use client"
import styles from './navbarr.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';

const Navbarr = () => {
  return (
    <div>
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
    </div>
  )
}

export default Navbarr
