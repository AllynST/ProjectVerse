import React, { Suspense, lazy, useEffect, useRef } from 'react'
import ProfileComponent from '../../data/ProfileComponent'
import { Loader } from '../../components/Loader';

const ProfileComponentElem: React.FC<{ component: ProfileComponent }> = ({ component }) => {

  let placement = {
    gridColumnStart : component.colStart,
    gridColumnEnd:component.colEnd,
    gridRowStart:component.rowStart,
    gridRowEnd: component.rowEnd
  }

  const compName = `../DesignerComponents/${component.componentType.category}/${component.componentType.type}`;

  const Component = lazy(() => import(compName));

  return (

    <div style={placement} className='rounded-md'>    
     
    <Suspense fallback={<Loader />}>
      <Component /> 
    </Suspense>
        
    </div>

  )
}

export default ProfileComponentElem