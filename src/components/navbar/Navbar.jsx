"use client"

import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import navicon from 'public/naviconn.png';
import appicon from 'public/navicon.png';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import penguin from 'public/penguin.jpeg'
import { signOut, useSession } from 'next-auth/react';


const Navbar = () => {
    const session = useSession()
    return (
        <div className={styles.container}>
        <div className={styles.left}>
            <Image src={navicon} width={35} height={35}/>
            <h1 className={styles.h1}>
                ONLYCODE.net
            </h1>
            <Image src={appicon} width={30} height={30} className={styles.img}/>
            <Link href='/' className={styles.a}>
                Home
            </Link>
        <select className={styles.select}>
                <option>
                    Features
                </option>
                <option>
                    2.1
                </option>
                <option>
                    2.5
                </option>
                <option>
                    2.6
                </option>
        </select>
        <select className={styles.select}>
            <option>
            More
            </option>
            <option>
            About
            </option>
            <option>
            Contact
            </option>
            <option>
            Socials
            </option>
        </select>
      </div>
      <div className={styles.center}>
        <input placeholder='Enter your search here...' className={styles.search}/>
            <SearchIcon style={{color: '#5D5DEC'}} className={styles.searchBtn} />
      </div>
      <div className={styles.right}>
            {session.status === 'authenticated' && <div className={styles.user}>
                            <Image src="https://img.freepik.com/premium-photo/cartoon-fox-wearing-jacket-jacket-with-word-raccoon-it_784625-8431.jpg?w=1380" width={30} height={30} style={{borderRadius: '50%'}}/>
                            <div className={styles.userInfo}>
                            <span className={styles.name}>
                                {session?.data?.user?.name}
                            </span>
                        </div>
                        <LogoutIcon onClick={signOut}/>
            </div>}
      </div>
    </div>
  )
}

export default Navbar
