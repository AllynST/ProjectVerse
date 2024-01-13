import React from 'react'
import DesignerEmptyTile from './DesignerEmptyTile';

const DesignerTemplateRow:React.FC<{rowNumber:number}> = ({rowNumber}) => {

  const rowCells = [];

  for(let i = 1 ;i<=12; i++){
    rowCells.push(
    <DesignerEmptyTile key={i} rowNumber={rowNumber} colNumber = {i}/>)
  }

  return (
    <div className='w-full flex justify-between'>
      
      {rowCells}
    </div>
  )
}

export default DesignerTemplateRow