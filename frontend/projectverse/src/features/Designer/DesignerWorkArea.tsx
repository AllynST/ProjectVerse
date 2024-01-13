import { useSelector } from 'react-redux'
import ProfileComponent from '../../data/ProfileComponent';
import Grid from '@mui/material/Grid';
import DesignerEmptyTile from './DesignerEmptyTile';
import ProfileComponentElem from './ProfileComponent';
import DesignerTemplateRow from './DesignerTemplateRow';



const DesignerWorkArea = () => {


  const components = useSelector(state=> state.designer.components);

  const GridItems = []

  for(let i = 1 ;i<=16; i++){
    GridItems.push(
      <DesignerTemplateRow rowNumber={i}/>
      
    )
  }

  const rows = 6;

  return (
    
    <div className="relative h-full">   

      <div className='flex absolute w-full gap-[8px] h-full flex-wrap'>
        {...GridItems}
      </div>

      <div className='absolute left 0 top-0 designerGrid gap-[8px] h-[166.6%] w-full'>
        {components.map((comp:ProfileComponent)=>
          <ProfileComponentElem key={comp.id} editable={true}  component={comp}/>
        )}
      </div>

    </div>
    
  )
}

export default DesignerWorkArea