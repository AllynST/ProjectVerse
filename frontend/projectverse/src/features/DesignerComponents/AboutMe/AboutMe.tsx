import React from 'react'
import ComponentParagraph from '../[Common]/ComponentParagraph'
import { useSelector } from 'react-redux'
import ComponentHeader from '../[Common]/ComponentHeader'
import ComponentWrapper from '../[Common]/ComponentWrapper'
import { ProfileDataTarget } from '../../../data/ProfileData'

const AboutMe:React.FC<{editFlag:boolean,dataChanged:Function}> = ({editFlag = false,dataChanged}) => {

  const {AboutMe} = useSelector(state=> state.designer.profileData);

  const targetContent:ProfileDataTarget = "AboutMe" 

  const dataChangedHandler = (data:any) =>{
    dataChanged(targetContent, data);
  }

  return (
    
    <ComponentWrapper>

      <ComponentHeader hContent='About me' />
      <ComponentParagraph targetData={targetContent} paragraphDataChanged={dataChangedHandler} editFlag={editFlag} pContent={AboutMe} />

    </ComponentWrapper>
 
  );
};

export default AboutMe;