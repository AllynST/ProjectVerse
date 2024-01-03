import { useDraggable } from '@dnd-kit/core';
import React from 'react'
import {CSS} from '@dnd-kit/utilities';
import { nanoid } from '@reduxjs/toolkit';

const ToolBarTile:React.FC<{category:string,componentName:string}> = ({category,componentName}) => {
  
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: componentName,
    data:{
      id:nanoid(12),
      category:category,
      type:componentName
    }
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };
  
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className='relative text-white w-[100px] h-[100px] text-center bg-sucess rounded-xl'>
      

      <div className='absolute bottom-[-25px]'>
        {componentName}
      </div>

    </div>
  )
}

export default ToolBarTile