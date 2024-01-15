import React from 'react'
import { useSelector } from 'react-redux'

const ComponentLink:React.FC<{text:string,link:string}> = ({text,link}) => {
    

  const {secondary} = useSelector(state => state.designer.theme); 

  return (
    <a style={{color:secondary}} className="font-bold" href={link}>{text}</a>
  )
  
}

export default ComponentLink