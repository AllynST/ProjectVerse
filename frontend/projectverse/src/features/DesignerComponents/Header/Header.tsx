import React from 'react'
import { useSelector } from 'react-redux';
import ComponentWrapper from '../[Common]/ComponentWrapper';
import ComponentHeader from '../[Common]/ComponentHeader';
import img from "../../../assets/testimage.png"
import ComponentTextMuted from '../[Common]/ComponentTextMuted';
import ComponentText from '../[Common]/ComponentText';
import ComponentLink from '../[Common]/ComponentLink';
import Social from '../../../data/Social';
import IconByTechnology from '../../../components/CustomIcon';

const Header:React.FC<{}> = () => {

  const {User,Projects,Certificates,Socials,PrimaryTechnology} = useSelector(state=> state.designer.profileData);
  

  // const targetContent:ProfileDataTarget = "AboutMe" 

  // const dataChangedHandler = (data:any) =>{
  //   dataChanged(targetContent, data);
  // }

  return (
    
    <ComponentWrapper>

      <div className='flex gap-5 h-[90%] justify-around items-center p-5'>

        <div className="flex justify-center items-center gap-2">

          <img className='w-[170px] aspect-square rounded-[20px]' src={img} alt="" />
          <div className='h-full flex flex-col gap-2 justify-center text-white '>
            <ComponentText size={"2xl"} content={User.username}/>
            <ComponentTextMuted content={User.email}/>
          </div>

        </div>

        <div className='text-center'>
          <ComponentText size={"2xl"} content={"Projects"} />
          <ComponentText size = {"2xl"} content={Projects.length} />      
        </div>

        <div className='text-center'>
          <ComponentText size={"2xl"} content={"Certificates"} />
          <ComponentText size = {"2xl"} content={Certificates.length} />      
        </div>

        <div className='text-center'>          
          <IconByTechnology technologyName={PrimaryTechnology.name}/>
        </div>

      </div>

      <div className='text-white flex gap-5 w-full justify-center'>
        {Socials.map((social:Social)=><ComponentLink key={social.id} text={social.name} link={social.link} />)}
        
      </div>

    </ComponentWrapper>
 
  );
}

export default Header