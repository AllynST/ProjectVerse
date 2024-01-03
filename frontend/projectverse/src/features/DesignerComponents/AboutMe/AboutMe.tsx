import React from 'react'
import ComponentParagraph from '../[Common]/ComponentParagraph'
import { useSelector } from 'react-redux'
import ComponentHeader from '../[Common]/ComponentHeader'
import ComponentWrapper from '../[Common]/ComponentWrapper'

const AboutMe = () => {

  const {aboutMe} = useSelector(state=> state.designer.profileData);

  return (
    
    <ComponentWrapper>

      <ComponentHeader hContent='About me' />
      <ComponentParagraph pContent={aboutMe} />

    </ComponentWrapper>
 
  );
};

export default AboutMe;