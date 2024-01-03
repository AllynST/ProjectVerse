import { nanoid } from "@reduxjs/toolkit";
import ProfileComponent, { ComponentType } from "../data/ProfileComponent";
import store from "../context/store";
import { addComponent } from "../features/Designer/designerSlice";

let componentType:ComponentType
let sizeSelectionFlag:boolean;

let position = {
  colStart:0,
  rowStart:0,

} as {colStart:number,rowStart:number}

export function handleDragEnd(event) {

  if (event.over) {

    let startCoordinates = event.over.data.current as {rowNumber:number,colNumber:number};

    position.colStart = startCoordinates.colNumber;
    position.rowStart = startCoordinates.rowNumber;

    let component:ProfileComponent = {    
      id:nanoid(24),
      componentType:componentType,
  
      isNew:true,
  
      colStart:position.colStart,
      colEnd:13,
      rowStart:position.rowStart,
      rowEnd:position.rowStart+3
    }

    store.dispatch(addComponent({component}))

  }

}

export function handleDragStart(event){
  componentType = event.active.data.current;
}
