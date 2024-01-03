import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProfileComponent, {sampleComponents } from "../../data/ProfileComponent";
import ProfileData, { sampleProfileData } from "../../data/ProfileData";

export const designerSlice = createSlice({
  name:'designer',

  initialState:{    
    components:[] as ProfileComponent[],
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

  },

  extraReducers: (builder) => {   

  },

})



export const {
addComponent
} = designerSlice.actions

export default designerSlice.reducer


