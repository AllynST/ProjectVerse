import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { technologiesListIcons } from '../data/tempTechnologiesList';

const IconByTechnology:React.FC<{technologyName:string}> = ({technologyName}) => {

  const techIconObj = technologiesListIcons.find(x=>x.technologyName == technologyName);
  const iconName = techIconObj?.fontawesomeIconName.split(" ")
  const color = techIconObj?.iconColor;
  
  return (
    <div style={{color:color}}>
      <FontAwesomeIcon className="h-[90px] " icon={[iconName[0],iconName[1]]}/>
    </div>
  )
}

export default IconByTechnology