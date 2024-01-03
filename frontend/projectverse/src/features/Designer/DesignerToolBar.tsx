import React from 'react'
import { ComponentType, toolBarComponents } from '../../data/ProfileComponent'
import ToolBarTiles from './ToolBarCategory'
import ToolBarCategory from './ToolBarCategory'

const DesignerToolBar = () => {

  

  return (


    <div className='w-full my-5'>
      {Object.entries(toolBarComponents).map(([key,value]) =>
      <ToolBarCategory key={key} category={key} tiles={value} />
      )}

    </div>
  )
}

export default DesignerToolBar