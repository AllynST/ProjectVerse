import { useSelector } from "react-redux";
import { ProfileDataTarget } from "../../../data/ProfileData";
import { Button, Input, TextField } from "@mui/material";
import { ButtonS } from "../../../customElements/ButtonS";

const ComponentParagraph: React.FC<{ pContent: string, targetData: ProfileDataTarget, editFlag?: boolean, dataHandler?: Function, paragraphDataChanged:Function }> = ({ pContent, targetData,paragraphDataChanged, editFlag = false }) => {

  const { secondary } = useSelector(state => state.designer.theme)

  const currentData = useSelector(state => state.designer.profileData);

  let paragraphData = currentData[`${targetData}`];

  const paragraphChangeHandler = (event) =>{
    paragraphDataChanged(event.target.value);
  }

  return (

    <div className="h-[80%] w-full flex  items-center justify-center">
      {editFlag ?
        <div className="w-full h-full p-2 gap-5  flex flex-col items-center justify-center">
          <TextField
            fullWidth
            id="outlined-multiline-flexible"
            defaultValue={paragraphData}
            label={targetData}
            multiline
            maxRows={6}
            onChange={paragraphChangeHandler}
          />

        </div>
        :
        <p style={{ color: secondary }} className=''>
          {pContent}
        </p>
      }

    </div>
  )

}

export default ComponentParagraph;