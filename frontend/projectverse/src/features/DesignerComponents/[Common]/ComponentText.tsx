import React from 'react'
import { useSelector } from 'react-redux'

const ComponentText:React.FC<{content:string,size?:string}> = ({content,size="1xl"}) => {
   
  const {secondary} = useSelector(state => state.designer.theme)  
  
  return (
    <div className={`text-${size}`} style={{color:secondary}}>{content}</div>
  )
}

export default ComponentText