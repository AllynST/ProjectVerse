import React from 'react'
import { useSelector } from 'react-redux'
import ProfileComponent from '../data/ProfileComponent'
import ProfileComponentElem from '../features/Designer/ProfileComponent'

const ProfilePage = () => {


  const profileComponents = useSelector(state=> state.designer.components)


  //TODO FETCH COMPONENTS
  //TODO FETCH PROFILE DATA
  //APPLY THEME

  return (
    <div className="h-[100%] w-[80%] m-auto overflow-x-hidden overflow-y-scroll">

      <div className='m-auto w-[1400px] designerGrid gap-[8px] h-[166.6%] w-full'>
        {profileComponents.map((comp:ProfileComponent)=>
          <ProfileComponentElem key={comp.id} editable={false}  component={comp}/>
        )}
      </div>

    </div>
    
  )

}

export default ProfilePage