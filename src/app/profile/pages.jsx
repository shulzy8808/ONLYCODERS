"use client"
import useSWR from 'swr' 
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const page = () => {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setisLoading] = useState(false)
  const session = useSession()
  console.log(session)
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error, isLoading } = useSWR('http://localhost:3000/api/infos', fetcher)
  console.log(data)

  
//   useEffect(()=>{
//     const getData = async()=>{
//       setisLoading(true)
//       const res = await fetch('http://localhost:3000/api/infos',
//       {cache: 'no-store'})
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//       if (!res.ok) {
//   // This will activate the closest `error.js` Error Boundary
//       setErr(true)
//   } 
//     const data = await res.json()

//   setData(data)
//   setisLoading(false)
// }
// getData()
//     })

  
    
  return (
    
    <div>
    Category
    </div>
  )
}

export default page
