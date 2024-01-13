import React from 'react'
import { useSelector } from 'react-redux'

const ComponentWrapper:React.FC<{children:any}> = ({children}) => {

  const {primary} = useSelector(state => state.designer.theme)

  return (
    <div style={{backgroundColor:primary}} className='neo h-full w-full p-5'>
      {children}
    </div>
  )
}

export default ComponentWrapper