import React, { Suspense, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProjectQuery } from '../features/Portfolio/portfolioApiSlice';
import { Loader } from '../components/Loader';
import { Project } from '../data/Project';
import { useUpdateViewCountQuery } from '../features/Feed/feedApiSlice';

const ProjectPage = () => {

  const params = useParams()
  const id = params.id!;

  const {data,error,isLoading} = useGetProjectQuery(id);
 

  if(isLoading){
    return <Loader />
  }

  const project = data as Project;

  return (

    <>
    <div>{data.name}</div>
    <Suspense>
     <iframe src={data.projectUrl} height="700px" width="100%" referrerPolicy='no-referrer' title="Iframe Example"></iframe>
    </Suspense>
    
    </>
    
  )
}

export default ProjectPage