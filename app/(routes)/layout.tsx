
import React from 'react'

const RoutesLayout = ({
    children
}:{
    children:React.ReactNode
}) => {
  return (
     <div className=' relative min-h-screen w-full'>
       
          {children}
     </div>
  )
}

export default RoutesLayout