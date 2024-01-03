import React, { Suspense, lazy } from 'react'
import test from '../../../assets/HeaderBanners'
import { useSelector } from 'react-redux'
import headerImg from '../../../assets/HeaderBanners/bg1.png'
import { Skeleton } from '@mui/material';



const ComponentImgBanner = () => {
  const { headerBanner } = useSelector(state => state.designer.theme);

  
  return (
    <div className='w-full h-[200px] rounded-md overflow-hidden'>
        <Suspense fallback={
          <Skeleton animation="wave" />
        }>

        <img className='w-full h-full relative' src={`src/assets/HeaderBanners/${headerBanner}.png`} />
        
        </Suspense>
    </div>
  );
};

export default ComponentImgBanner