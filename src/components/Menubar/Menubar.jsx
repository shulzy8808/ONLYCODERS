import styles from './menubar.module.css';
import Image from 'next/image';
import desktop from 'public/desktop.png'
import user from 'public/user.png'
import group from 'public/group.png'
import medal from 'public/medal.png'
import favorite from 'public/favorite.png'
import diamond from 'public/diamond.png'
import task from 'public/task.png'
import chat from 'public/chat.png'
import cart from 'public/cart.png'
import photo from 'public/photo.png'
import badge from 'public/badge.png'

const Menubar = () => {
  return (
    <div className={styles.container}>
         <Image src={desktop} alt='' width={25} height={25} style={{color:'lightgray'}}/>
        <Image src={user} alt='' width={25} height={25} />
        <Image src={group} alt='' width={25} height={25} />
        <Image src={medal} alt='' width={25} height={25} />
        <Image src={favorite} alt='' width={25} height={25} />
        <Image src={badge} alt='' width={25} height={25} />
        <Image src={diamond} alt='' width={25} height={25} />
        <Image src={task} alt='' width={25} height={25} />
        <Image src={cart} alt='' width={25} height={25} />
        <Image src={photo} alt='' width={25} height={25} />
    </div>
  )
}

export default Menubar
