import { useSelector } from "react-redux"

const ComponentHeader:React.FC<{hContent:string,center?:boolean}> = ({hContent,center=false}) => {

  const {accent} = useSelector(state => state.designer.theme)

  return(
    
    <h2 style={{color:accent, textAlign:center ? "center" : "left"}} className='text-4xl font-black'>
     {hContent}
    </h2>
  )

}

export default ComponentHeader