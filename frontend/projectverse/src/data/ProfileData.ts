import Certificate from "./Certificate";
import Education from "./Education";
import ProfileUser from "./ProfileUser";
import { Project } from "./Project";
import Social from "./Social";
import Technology from "./Technology";
import User from "./User";

interface ProfileData{
  id:string,
  User:ProfileUser,
  AboutMe:string,
  Achievements:string,
  PrimaryTechnology:Technology
  KnownTechnologies:Technology[]
  Interests:Interest[]
  Education:Education[],
  Certificates:Certificate[],
  Projects:Project[],
  Socials:Social[]  

};

export default ProfileData;

export type ProfileDataTarget = 
"AboutMe" | "Achievements" | "Education" | "PrimaryTechnology" | "KnownTechnologies" | "Interests" |
"Education" | "Certificates" | "Socials"

export const sampleProfileData = {
  
    "id": "profile-123",
    "User": {
      "id": "user-456",
      "username": "jane_doe",
      "email": "jane.doe@example.com",
      "surname": "Doe",
      "country": "Canada"
    },
    "AboutMe": "Experienced full-stack developer with a passion for creating web applications.",
    "Achievements": "Completed multiple successful projects for clients in various industries.",
    "PrimaryTechnology": {
      "id": 1,
      "name": "React"
    },
    "KnownTechnologies": [
      {
        "id": 2,
        "name": "Node.js"
      },
      {
        "id": 3,
        "name": "Express"
      },
      {
        "id": 4,
        "name": "MongoDB"
      }
    ],
    "Interests": [
      {
        "id": "web-dev-interest",
        "name": "Web Development"
      },
      {
        "id": "ai-interest",
        "name": "Artificial Intelligence"
      },
      {
        "id": "ux-design-interest",
        "name": "UX Design"
      }
    ],
    "Education": [
      {
        "id": "edu-id-1",
        "university": "University of Toronto",
        "department": "Computer Science",
        "course": "Bachelor of Science",
        "major": "Computer Science",
        "academicTitle": "Bachelor",
        "startDate": "2016-09-01",
        "endDate": "2020-05-01"
      },
      {
        "id": "edu-id-2",
        "university": "Stanford University",
        "department": "Computer Engineering",
        "course": "Master of Science",
        "major": "Computer Engineering",
        "academicTitle": "Master",
        "startDate": "2020-09-01",
        "endDate": "2022-05-01"
      }
    ],
    "Certificates": [
      {
        "id": "cert-id-1",
        "name": "React Developer Certification",
        "institution": "React Certification Institute",
        "issuedAt": "2021-03-15",
        "expiresAt": "2023-03-15"
      },
      {
        "id": "cert-id-2",
        "name": "Node.js Certification",
        "institution": "Node.js Certification Authority",
        "issuedAt": "2022-06-10",
        "expiresAt": "2024-06-10"
      }
    ],    
    "Socials": [
      {
        "id": "github-social",
        "name": "GitHub",
        "link": "https://github.com/jane_doe"
      },
      {
        "id": "linkedin-social",
        "name": "LinkedIn",
        "link": "https://www.linkedin.com/in/jane_doe"
      }
    ],
    "Projects": [
      
    ]
  
}