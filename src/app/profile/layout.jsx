import Navbarr from '@/components/navbarr/Navbarr'
import React from 'react'

const profileLayout = ({children}) => {
  return (
    <div>
        <Navbarr/>
        {children}
    </div>
  )
}

export default profileLayout
