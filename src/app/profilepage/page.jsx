"use client"
import React, { cache, useState } from 'react';
import Image from 'next/image'
import styles from './page.module.css';
import computer from 'public/computer.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import penguin from 'public/penguin.jpeg';
import rabbit from 'public/rabbit.jpeg'
import astronaut from 'public/astronaut.png'
import badge from 'public/fivedaystreak.png'
import globe from 'public/globe.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import useSWR from 'swr'


// async function getData() {
//     const res = await fetch('http://localhost:3000/api/infos',
//     {cache: 'no-store'})
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.

//     if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//     }

//     return res.json()
// }
    

const page =  () => {
    // const data = await getData()
    const session = useSession()
    const router = useRouter()
    console.log(session)
    const [liked, setLiked]= useState(false);
    const [comment, setComment]= useState(false);
    
    //function to handle opening and close of comment
    const handleComment = ()=>{
        if(comment === false){
            setComment(true)
        }else{
            setComment(false)
        }
    } 
    //function to handle opening and closing of comment
    const handleLike =()=>{
        if(liked === false){
            setLiked(true)
        }else{
            setLiked(false)
        }
        }
    //creating comment state variables 
    const [inputText, setinputText] = useState('');
    const [messages, setMessages] = useState([]);
    const [commentCount, setCommentCount] = useState(0);// getting ammount of times commebnt was sent


    const handleInput = (e) => {
        setinputText(e.target.value);
    };

    const handleCommentSend = () => {
        if (inputText.trim() !== '') {
            setMessages([...messages, inputText]);
            setinputText('');
            setCommentCount(commentCount + 1);
        }
    };
    //Fetching data from database
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data } = useSWR('http://localhost:3000/api/infos', fetcher)

if(session.status === 'loading'){
    return <p>Please Wait</p>
}
if (session.status === 'unauthenticated'){
    router?.push("/profile/login")
}

if(session.status === 'authenticated'){
    return ( 
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.topLeft}>
                    <div className={styles.imgs}>
                        <Image src={computer} fill= {true}  className={styles.img}/>
                </div>
                <div className={styles.like}>
                <ThumbUpAltIcon fontSize='medium'/>
                </div>
                <div className={styles.dislike}>
                <ThumbDownIcon fontSize='small'/>
                </div>
                    </div>
                <div className={styles.topRight}>
                <div className={styles.heart}>
                    <FavoriteIcon fontSize='large'/>
                </div>
                <h3 className={styles.rightHeader}>
                    Newsfeed
                </h3>
                <p>
                    Check what your friends have been up to
                </p>
                </div>
            </div>
            <div className={styles.containerBody}>
                <div className={styles.left}>
                    <div className={styles.menuWrapper}>
                        <h4 className={styles.header}>
                            Newest Members
                        </h4>
                

            {data && data.map((item)=>(
            <div className={styles.user} key={item._id}>
                        <Image src={item.img} alt=" penguin" width={40} height={40} style={{borderRadius: '50%'}}/>
                    <div className={styles.userInfo}>
                        <span className={styles.name}>
                            {item.name}
                        </span>
                        <span className={styles.description}>
                            {item.username}
                        </span>
                    </div>
            </div>
            ))}
            </div>
                    <div className={styles.menuWrapper}>
                    <h4 className={styles.header}>
                            Quests
                    </h4>
                    {data && data.map((item)=>(
                    <div className={styles.user} key={item._id}>
                        <Image src={item.questImg} width={40} height={40} style={{borderRadius: '50%'}}/>
                        <div className={styles.userInfo}>
                            <span className={styles.name}>
                                {item.quest}
                            </span>
                            <span className={styles.description}>
                                {item.desc}
                            </span>
                        </div>
                    </div>
                    ))}
                    </div>
                </div>
                <div className={styles.center}>
                        <div className={styles.centerHeader}>
                            <h4 className={styles.centerHeaderText}>
                                All Updates
                            </h4>
                            {/* <select className={styles.select}>
                                <option value="">
                                    Everything
                                </option>
                            </select> */}
                            <fieldset className={styles.fieldset}>
                                <legend className={styles.legend}>Show</legend>
                            <select className={styles.select}>
                                <option value="">
                                Everything
                                </option>
                            </select> 
                            </fieldset>
                            <div className={styles.bottomLine}/>
                        </div>
                        <div className={styles.centerBody}>
                            <div className={styles.info}>
                            <Image src="https://img.freepik.com/free-photo/cartoon-character-with-yellow-jacket-sunglasses_71767-101.jpg?w=1380&t=st=1697550352~exp=1697550952~hmac=3ed3eeebb2c52045d43705e2a54e5f83159d78350ea5681cb310d9002196a4f4" width={30} height={30} style={{borderRadius: '50%'}}/>
                            <div className={styles.userInfo}>
                            <p className={styles.details}>
                                <span style={{fontWeight: 'bold'}}>Skyler Byrd</span> replied to topic <span style={{fontWeight: 'bold'}}>Welcome to the Cosplayers Group Forum</span> in the forum <span style={{fontWeight: 'bold'}}>Cosplayers Group Forum</span> 
                                </p>
                            <p className={styles.desc}>
                                1 year ago!
                            </p>
                            </div>
                            </div>     
                            <div>
                                <p className={styles.desc}>
                                Hello Everyone!
                                </p>
                            </div>
                            <div className={styles.centerBottom}>
                                <div className={styles.likeContainer}>
                                    {liked ?  <FavoriteIcon onClick={handleLike} fontSize= 'small' className={styles.love}/> : <FavoriteBorderIcon fontSize= 'small' onClick={handleLike}/>}
                                    {!liked ? <span>5 likes</span> : <span>6 likes</span> }
                                </div>
                                <div className={styles.reactions}>
                                        <span onClick={handleComment}>
                                        {commentCount} Comment
                                        </span>
                                        <span>
                                                0  shares
                                        </span>
                                </div>
                            </div>
                            <div className={styles.centerBottomLine}/>
                            {comment ? <div className={styles.comment}>
                                            <div className={styles.commentTop}>
                                            <Image src="https://img.freepik.com/premium-photo/cartoon-fox-wearing-jacket-jacket-with-word-raccoon-it_784625-8431.jpg?w=1380" width={30} height={30} style={{borderRadius: '50%'}} />
                                            <input      
                                                type= 'text'
                                                value={inputText}
                                                onChange={handleInput}                            
                                                placeholder='Write a Comment' 
                                                className={styles.commentInput}
                                            />
                                                <button className={styles.commentBtn} onClick={handleCommentSend}> Send </button>
                                            </div>
                                            {messages.map((message, index) => (
                                                    <div className={styles.commentBottom} key={index}>
                                                    <Image src="https://img.freepik.com/premium-photo/cartoon-fox-wearing-jacket-jacket-with-word-raccoon-it_784625-8431.jpg?w=1380" width={30} height={30} style={{borderRadius: '50%'}} className={styles.commentImg}/>
                                                    <div className={styles.comments}>
                                                        <p style={{color: 'black'}} className={styles.commentName}>{session?.data?.user?.name}</p>
                                                        <p style={{color: 'black'}} className={styles.commentText}>
                                                                {message}
                                                        </p>
                                                    </div>
                                                    </div>
                                                ))}
                                        </div> : ''}
                        </div>
                        <div className={styles.centerPost}>
                            <div className={styles.postInfo}>
                            <Image src={penguin} width={30} height={30} style={{borderRadius: '50%'}}/>
                            <div className={styles.userInfo}>
                            <p className={styles.details}>
                                <span style={{fontWeight: 'bold'}}>Skyler Byrd</span> posted an update
                                </p>
                            <p className={styles.desc}>
                                1 year ago!
                            </p>
                            <div>
                                <Link href={'https://www.twitch.tv/blizzard'} className={styles.link}>https://www.twitch.tv/blizzard</Link>
                            </div>
                            </div>
                            </div>    
                            <div className={styles.image}>
                                <Image fill={true} src="https://bnetcmsus-a.akamaihd.net/cms/blog_header/ba/BAJ98XHDA71G1692052270191.png" alt="Night-Elf-Heritage" style={{objectFit:'cover'}}/>
                            </div>
                            </div>
                </div>
                <div className={styles.right}>
                <div className={styles.menuWrapper}>
                        <h4 className={styles.header}>
                            Popular Groups
                        </h4>
                        {data && data.map((item)=>(
                        <div className={styles.groupUser}>
                            <Image src={item.groupImg} width={40} height={40} style={{borderRadius: '50%'}}/>
                            <div className={styles.userInfo}>
                                <span className={styles.groupName}>
                                    {item.group}
                                </span>
                            <span className={styles.description}>
                                4 Members
                            </span>
                        </div>
                            <Image src={globe} width={30} height={30} style={{borderRadius: '50%'}}/>
                        </div>
                        ))} 
                </div>
                    <div className={styles.menuWrapper}>
                        <h4 className={styles.header}>
                            Badges
                        </h4>
                        {data && data.map((item)=>(
                        <div className={styles.user} key={item._id}>
                            <Image src={item.badgeImg} width={40} height={40} style={{borderRadius: '50%'}}/>
                            <div className={styles.userInfo}>
                                <span className={styles.name}>
                                    {item.badge}
                                </span>
                                <span className={styles.description}>
                                    {item.badgeDesc}
                                </span>
                            </div>
                    
                    </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default page
