import React from 'react'
import { useSelector } from 'react-redux'

const ComponentTextAccent:React.FC<{content:string,size?:string}> = ({content,size = "1xl"}) => {
   
  const {accent} = useSelector(state => state.designer.theme)  
  
  return (
    <div className={`text-${size}`} style={{color:accent}}>{content}</div>
  )
}

export default ComponentTextAccent