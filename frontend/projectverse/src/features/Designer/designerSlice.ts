import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProfileComponent, {sampleAboutMeComponent, sampleComponents, sampleHeaderComponent } from "../../data/ProfileComponent";
import ProfileData, { ProfileDataTarget, sampleProfileData } from "../../data/ProfileData";

export const designerSlice = createSlice({
  name:'designer',

  initialState:{    
    components:[

      sampleHeaderComponent,sampleAboutMeComponent

    ] as ProfileComponent[],
    highlightedID: null as string|null,
    profileData:sampleProfileData as ProfileData,
    theme:{
 
      primary:"#000000",
      secondary:"#F5F5F5",
      accent:"#FFC328",
      font: "Arial, Helvetica, sans-serif",
      headerBanner:"bg1"

    },
  },

  reducers:{
    addComponent:(state,action:PayloadAction<{component:ProfileComponent}>) =>{  
      state.components.push(action.payload.component);
    },

    deleteComponent:(state,action:PayloadAction<{id:string}>) =>{  
      const targetIndex = state.components.findIndex((component:ProfileComponent) => component.id == action.payload.id);
      state.components.splice(targetIndex,1);
    },

    shrinkComponent:(state,action:PayloadAction<{id:string,direction:string}>) =>{
      let index = state.components.findIndex(x=>x.id === action.payload.id)
      
      switch(action.payload.direction){
        case "Top":
          state.components[index].rowStart -= 1;
        break

        case "Bottom":
          state.components[index].rowEnd -= 1;
        break

        case "Left":
          state.components[index].colStart -= 1;
        break

        case "Right":
          state.components[index].colEnd -= 1;
        break
      }
      console.log(action.payload)
    },

    expandComponent:(state,action:PayloadAction<{id:string,direction:string}>) =>{
      let index = state.components.findIndex(x=>x.id === action.payload.id)
      
      switch(action.payload.direction){
        case "Top":
          state.components[index].rowStart += 1;
        break

        case "Bottom":
          state.components[index].rowEnd += 1;
        break

        case "Left":
          state.components[index].colStart += 1;
        break

        case "Right":
          state.components[index].colEnd += 1;
        break
      }
    },

    highlightComponent:(state,action:PayloadAction<{id:string}>) =>{
      console.log("Component: "+action.payload.id+" highlighted")
      state.highlightedID = action.payload.id
    },

    editProfileData:(state,action:PayloadAction<{target:ProfileDataTarget,data:any}>)=>{
      console.log(action.payload);
      //@ts-ignore
      state.profileData[`${action.payload.target}`] = action.payload.data;
    }


  },

  extraReducers: (builder) => {   

  },

})



export const {
addComponent,
shrinkComponent,
expandComponent,
highlightComponent,
editProfileData,
deleteComponent
} = designerSlice.actions

export default designerSlice.reducer


