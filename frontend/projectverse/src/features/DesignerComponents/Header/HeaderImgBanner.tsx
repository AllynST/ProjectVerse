import React from 'react'
import ComponentHeader from '../[Common]/ComponentHeader'
import ComponentWrapper from '../[Common]/ComponentWrapper'
import { useSelector } from 'react-redux'
import ComponentParagraph from '../[Common]/ComponentParagraph'
import ComponentImgBanner from '../[Common]/ComponentImgBanner'

const HeaderImgBanner = () => {

  const {User} = useSelector(state=>state.designer.profileData)
  console.log(User)

  return (
    <ComponentWrapper>

      <ComponentImgBanner />



      <div className="px-24  relative top-[-75px]">
        <img className='rounded-[100%] w-[150px] h-[150px]' src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt=""/>
        
        <ComponentHeader hContent={User.username} />
        <ComponentParagraph pContent={User.country} />
      </div>

    </ComponentWrapper>
  
  )
}

export default HeaderImgBanner