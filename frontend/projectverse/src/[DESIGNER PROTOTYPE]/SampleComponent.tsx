import React, { Suspense, lazy, useEffect, useState } from 'react'
import { Loader } from '../components/Loader';
import Project from '../data/Project';

const SampleComponent:React.FC<{componentData:any}> = ({componentData}) => {

 

  // const Variant = lazy(() => import(`./DesignerVariants/${componentData.componentVariant.variant}Variant`));
  const Type = lazy(() => import(`./DesignerTypes/${componentData.componentType.name}Type`));


  return (

    <>
    <Suspense fallback={<Loader/>}>
      {/* Orientacje(pion poziom) wielkość */}


        {type == "project" && <ProjectType Variant = {}/>}
       


    </Suspense>
    
    <div>sampleComponent</div>
    </>
  )

}

export default SampleComponent


const ProjectType:React.FC<{project:Project,variant:string}> = ({project}) =>{

  const projectData = {} // dane ze store


  return(
    <></>

  )
}


export type ComponentType = "Project";

export type ComponentDetails = {

  type:ComponentType;
  componentElement:React.FC;
  properties:React.FC;

}

type ComponentDetailsType = {
  [key in ComponentType] : ComponentDetails
}

export const ComponentTypes : ComponentDetailsType = {
  Project:
}

