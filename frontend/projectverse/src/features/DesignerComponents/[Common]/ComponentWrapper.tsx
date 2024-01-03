import React from 'react'

const ComponentWrapper:React.FC<{children:any}> = ({children}) => {
  return (
    <div className='bg-glassMorph glass neo h-full w-full p-5'>
      {children}
    </div>
  )
}

export default ComponentWrapper