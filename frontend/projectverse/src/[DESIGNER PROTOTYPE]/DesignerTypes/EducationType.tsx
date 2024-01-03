import React, { Component } from 'react'
import { useSelector } from 'react-redux';

const EducationType = () => {


  return (
    <div>EducationType</div>
  )
}

export default EducationType;


interface ComponentBuilder{
  
  constuctor(dataType:string):void;

  addComponent():ComponentBuilder;
  render():React.FC;

}

class componentBuilder implements ComponentBuilder{

  dataType:string;

  components:React.FC[] = []

  constructor(dataType:string){
    this.dataType = dataType;
  }

  addComponent(component:React.FC){
      
    this.components.push(component)
    return this
  }

  render(){
    return this.components
  }



}




