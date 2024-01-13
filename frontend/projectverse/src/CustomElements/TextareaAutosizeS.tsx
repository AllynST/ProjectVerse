import { TextareaAutosize } from '@mui/material'
import React from 'react'
import colorPaletteDark from '../colorPalette';

const TextareaAutosizeS = () => {

  const sxProp ={
    backgroundColor:"#161616",
    color:colorPaletteDark.accent,
    fontWeight:"bold",
    fontSize:"1em",
    padding:"10px"   ,
    width:"100%" 
  };

  return (
    <TextareaAutosize style={sxProp} />
  )
}

export default TextareaAutosizeS