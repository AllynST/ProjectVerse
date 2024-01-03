import { Grid } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { PointerSensor, useDroppable, useSensor } from '@dnd-kit/core';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { handleSizeConfirmation } from '../../customHooks&Functions/DndHandlers';

const DesignerEmptyTile:React.FC<{rowNumber:number,colNumber:number}> = ({rowNumber,colNumber}) => {

  const {isOver,setNodeRef} = useDroppable({
    id: nanoid(12),
    data:{
      rowNumber:rowNumber,
      colNumber:colNumber
    }
    
  });

  useSensor(PointerSensor, {
    activationConstraint: {
      distance: 1000,
    },
  });

  const {accent} = useSelector(state=>state.designer.theme)

  const componentOverStyles = {
    border:`${accent} 1px solid`
  }

  const tileClickedHandler = () =>{
    console.log("handler clicked")
    // handleSizeConfirmation(colNumber,rowNumber);
  }

  return (
    
      <div onClick={tileClickedHandler} ref={setNodeRef}  style={isOver ? componentOverStyles : {}} className='w-[7.3%] aspect-square flex items-center rounded-xl border border-white'>
        {/* <AddIcon sx={{flexGrow:1,color:"whitesmoke"}} /> */}
      </div>

  )
}

export default DesignerEmptyTile