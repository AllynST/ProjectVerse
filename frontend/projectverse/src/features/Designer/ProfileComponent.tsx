import React, { Suspense, lazy, useEffect, useRef, useState } from 'react'
import ProfileComponent from '../../data/ProfileComponent'
import { Loader } from '../../components/Loader';
import StartIcon from '@mui/icons-material/Start';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComponent, editProfileData, expandComponent, highlightComponent, shrinkComponent } from './designerSlice';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';
import { ProfileDataTarget } from '../../data/ProfileData';

const ProfileComponentElem: React.FC<{ component: ProfileComponent, editable: boolean }> = ({ component, editable = false }) => {

  const dispatch = useDispatch();
  const selectedComponent = useSelector(state => state.designer.highlightedID)

  const [editFlag, setEditable] = useState(false)

  let placement = {
    gridColumnStart: component.colStart,
    gridColumnEnd: component.colEnd,
    gridRowStart: component.rowStart,
    gridRowEnd: component.rowEnd
  }

  let dataChangeData = {
    target:"" as ProfileDataTarget,
    data:""
  }

  const compName = `../DesignerComponents/${component.componentType.category}/${component.componentType.type}`;
  const Component = lazy(() => import(compName));

  const componentClickHandler = () => {
    dispatch(highlightComponent({ id: component.id! }))
  }

  const editBtnHandler = () => {
    setEditable(true);
  }

  const deleteBtnHandler = () => {
    dispatch(deleteComponent({ id: component.id! }))
    console.log("Component Deleted");
  }

  const profileDataChanged = (targetData:ProfileDataTarget,data:any) =>{
    dataChangeData.target = targetData
    dataChangeData.data = data;
  }


  const confirmDataChangleHandler = () =>{
    console.log("data changed in component")
    console.log(dataChangeData);

    dispatch(editProfileData({
      target:dataChangeData.target,
      data:dataChangeData.data
      }
      ));
      
    setEditable(false);
  }

  const handleSizeChange = (action: "Shrink" | "Expand", direction: "Top" | "Bottom" | "Left" | "Right") => {

    if (action == "Shrink") {
      dispatch(shrinkComponent({
        id: component.id!,
        direction: direction
      }));
    }
    else {
      dispatch(expandComponent({
        id: component.id!,
        direction: direction
      }));
    }

  }

  return (

    <div style={placement} className='rounded-md'>

      <div className="relative w-full h-full">

        <Suspense fallback={<Loader />}>

          {(selectedComponent == component.id && editable) ?

            <div className='w-full h-full overflow-hidden rounded-xl' onClick={componentClickHandler} style={{ border: "1px white solid" }}>
              <Component dataChanged={profileDataChanged} editFlag={selectedComponent && editFlag} />
            </div>
            :
            <div className='w-full h-full' onClick={componentClickHandler}>
              <Component />
            </div>

          }

        </Suspense>

        {(selectedComponent == component.id && editable) &&

          <>

            <div className='absolute flex gap-2 top-5 right-5'>

              {editFlag ?

                <Button onClick={confirmDataChangleHandler} variant="outlined" startIcon={<EditIcon className='' />}>
                  Apply changes
                </Button>
                  :
                <Button onClick={editBtnHandler} variant="outlined" startIcon={<EditIcon className='' />}>
                  Edit
                </Button>

              }

              <Button onClick={deleteBtnHandler} variant="outlined" startIcon={<DeleteForeverIcon className='' />}>
                Delete
              </Button>

            </div>

            <StartIcon onClick={() => { handleSizeChange("Expand", "Left") }} className='absolute left-0 text-white top-[45%]' />
            <StartIcon onClick={() => { handleSizeChange("Shrink", "Right") }} className='absolute right-0 text-white top-[45%]' style={{ transform: 'rotate(180deg)' }} />
            <StartIcon onClick={() => { handleSizeChange("Shrink", "Bottom") }} className='absolute -bottom-5 text-white left-[45%]' style={{ transform: 'rotate(-90deg)', marginBottom: '20px' }} />
            <StartIcon onClick={() => { handleSizeChange("Expand", "Top") }} className='absolute -top-5 text-white left-[45%]' style={{ transform: 'rotate(90deg)', marginTop: '20px' }} />

            <StartIcon onClick={() => { handleSizeChange("Shrink", "Left") }} className='absolute left-0 text-white top-[45%]' style={{ transform: 'rotate(180deg)', marginLeft: '-24px' }} />
            <StartIcon onClick={() => { handleSizeChange("Expand", "Right") }} className='absolute -right-0 text-white top-[45%]' style={{ transform: 'rotate(0deg)', marginRight: '-24px' }} />
            <StartIcon onClick={() => { handleSizeChange("Shrink", "Top") }} className='absolute -top-0 text-white left-[45%]' style={{ transform: 'rotate(-90deg)', marginTop: '-24px' }} />
            <StartIcon onClick={() => { handleSizeChange("Expand", "Bottom") }} className='absolute bottom-0 text-white left-[45%]' style={{ transform: 'rotate(90deg)', marginBottom: '-24px' }} />

          </>

        }


      </div>

    </div>

  )
}

export default ProfileComponentElem