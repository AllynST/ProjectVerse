import { useSelector } from "react-redux";

const ComponentParagraph:React.FC<{pContent:string,editFlag?:boolean,dataHandler?:Function}> = ({pContent}) => {

  const {secondary} = useSelector(state => state.designer.theme)

  return(
    <p style={{color:secondary}} className=''>
      {pContent}
    </p>
  )

}

export default ComponentParagraph;