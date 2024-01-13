import React from 'react'
import img from '../../assets/logo.png'
import ribbon from '../assets/ribbon.png'
import { useSelector } from 'react-redux'
import CollaborationForm from '../features/Collaborations/CollaborationForm'


const AddColabPage = () => {

  
  const user:User  = useSelector((state:any) => state.auth.user);


  const addCollabHandler = (data:{name: "", description: string,  projectUrl:string,  usedTechnologies:[], isPrivate:boolean, isPublished:boolean,}) =>{
    console.log("submit handler");
    console.log(data);
  }

  return (
    <CollaborationForm submitHandler={addCollabHandler}/>

  )
}

export default AddColabPage