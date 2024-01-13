import DesignerToolBar from '../features/Designer/DesignerToolBar'
import DesignerWorkArea from '../features/Designer/DesignerWorkArea'

const DesignerPage = () => {


  return (
    <div className="flex justify-between h-full gap-2 px-20">

      <div className='flex-grow max-w-[1200px] glass bg-glassMorph p-5 overflow-y-scroll overflow-x-hidden' >
        <DesignerWorkArea />
      </div>

      <div className='w-[400px] bg-glassMorph glass'>
        <DesignerToolBar />
      </div>

    </div>

    
  )
}

export default DesignerPage