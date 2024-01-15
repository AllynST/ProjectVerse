import React from 'react'
import ComponentWrapper from '../[Common]/ComponentWrapper'
import ComponentHeader from '../[Common]/ComponentHeader'
import ComponentParagraph from '../[Common]/ComponentParagraph'
import { ProfileDataTarget } from '../../../data/ProfileData'
import { useSelector } from 'react-redux'

const Achievements:React.FC<{editFlag:boolean,dataChanged:Function}> = ({editFlag = false,dataChanged}) => {
  
  const {Achievements} = useSelector(state=> state.designer.profileData);

  const targetContent:ProfileDataTarget = "Achievements";

  const dataChangedHandler = (data:any) =>{
    dataChanged(targetContent, data);
  }

  return (
    
    <ComponentWrapper>

      <ComponentHeader hContent='Achievements' />
      <ComponentParagraph targetData={targetContent} paragraphDataChanged={dataChangedHandler} editFlag={editFlag} pContent={Achievements} />

    </ComponentWrapper>
 
  )
}

export default Achievements