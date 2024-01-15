import React from 'react'
import { useSelector } from 'react-redux'

const ComponentTextMuted:React.FC<{content:string}> = ({content}) => {
  
  const {secondary} = useSelector(state => state.designer.theme)  
  
  return (
    <div className='opacity-70' style={{color:secondary}}>{content}</div>
  )
}

export default ComponentTextMuted