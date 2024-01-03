import React from 'react'
import ToolBarTile from './ToolBarTile'

const ToolBarCategory:React.FC<{category:string,tiles:string[]}> = ({category,tiles}) => {
  return (
    <div className='w-full'>

      <h2 className='text-accent text-2xl w-full my-5'>{category}</h2>

      <div className='flex flex-wrap gap-5 w-full  justify-center'>
      {tiles.map((name:string,index:number)=>
        <ToolBarTile key={index} category={category} componentName={name} />
      )}
      </div>
    </div>
  )
}

export default ToolBarCategory

