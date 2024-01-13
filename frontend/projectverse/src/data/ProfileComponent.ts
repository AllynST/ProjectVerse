interface ProfileComponent{
 
    id?: string,
    componentType: ComponentType

    isNew?:boolean

    colStart:number // większy bądz równy 1
    colEnd:number // mniejszy bądź równy 13
    rowStart:number //większy 
    rowEnd:number

    data?:ProfileData

}


// type ComponentType = "Project" | "AboutMe" | "ProfileHeader"
// type ComponentName= "AboutMe" | "Single"
// type Placement = `${number}/${number}`;

type ProfileData = any;
// SingleProject| 
// EducationData

; // Union type



export type ComponentType =  
  { 
    category: "AboutMe";
    type:
    "AboutMePhoto" |
    "AboutMe"
  } |
  { 
    category: "Project";
    type: 
    "Project" |
    "ProjectSingle"   
  } |
  { 
    category: "Header";
    type: 
    "Header" |
    "HeaderImgBanner"
  } 
 

  


export default ProfileComponent


export const sampleAboutMeComponent:ProfileComponent = {
  id: "1",
  componentType: { 
    category: "AboutMe",
    type: "AboutMe"
  },

  colStart: 1,
  colEnd:13,
  rowStart:1,
  rowEnd:4

}

const sampleHeaderComponent:ProfileComponent = {
  id: "2",
  componentType: {
    category: "Header",
    type: "HeaderImgBanner"
  },
  colStart: 1,
  colEnd:7,
  rowStart:1,
  rowEnd:5,

  data:{

  }
}




export const toolBarComponents = {
  "AboutMe":["AboutMe"],
  "Header" : ["Header","HeaderImgBanner"]
}



export const sampleComponents:ProfileComponent[] = [
  sampleAboutMeComponent,
  sampleHeaderComponent
]
