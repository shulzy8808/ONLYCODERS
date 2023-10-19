import Homenavbarr from '@/components/homeNavbar/Homenavbarr'
import React from 'react'

const profileLayout = ({children}) => {
  return (
    <div>
        <Homenavbarr/>
        {children}
    </div>
  )
}

export default profileLayout
