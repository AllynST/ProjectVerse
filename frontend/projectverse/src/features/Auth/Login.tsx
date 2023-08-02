import { Button, TextField } from '@mui/material';
import { TextFieldS } from '../../CustomElements/styledTextField';
import { ButtonS } from '../../CustomElements/ButtonS';
import { Field, Formik } from 'formik';
import LoginSchema from '../../data/ValidationSchemas/LoginSchema';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from './authApiSlice';
import { useDispatch } from 'react-redux';
import { setCredentials } from './authSlice';
import { parseError } from '../../utils/fetchErrorCodes';
import { Loader } from '../../components/Loader';

export const Login = () => {

  const navigate = useNavigate();  
  const [login,{isLoading}] = useLoginMutation();
  const dispatch = useDispatch()

  
  if(isLoading) return <Loader />

  return (

    <Formik
      initialValues={{ login: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={async (data,{setSubmitting}) => {
        setSubmitting(true);

        try{
          const userData = await login(data).unwrap();
          dispatch(setCredentials(userData));
             
        }
        catch(err){
          // parseError(err);
        }         

        setSubmitting(false);
        navigate('/');
      }     

      }
    >
      {({ values, handleChange, handleBlur, handleSubmit,errors }) => (
        <>

          <form className="w-full flex flex-col gap-5 p-5" onSubmit={handleSubmit}>

            <h1 className="text-accent text-5xl font-bold my-5">Sign In</h1>
            <Field
              name="login"
              value={values.login}             
              label="Email"              
              variant="outlined"   
              error={errors.login ? true : false}                        
              helperText={errors.login}
              as={TextFieldS}
              />
            <Field
            
              value={values.password} 
              onChange={handleChange}
              onBlur={handleBlur}
              name="password" 
              label="Password" 
              variant="outlined"
              error={errors.password ? true : false}            
              helperText={errors.password}
              as={TextFieldS} 
            />
            <div className='flex flex-col'>
              <ButtonS variant="contained" type="submit">Sign In</ButtonS>
              {/*TODO FORGOT PASSWORD*/}
              <a href="" className="text-white text-sm flex justify-end p-1">Forgot password?</a>
            </div>
          </form>
          <div className='flex gap-5'>
            <div className='bg-white' style={{ width: "35px", height: "35px" }}></div>
            <div className='bg-white' style={{ width: "35px", height: "35px" }}></div>

            {/* INSERT METODY LOGOWANIA HERE */}
          </div>
        </>
      )}


    </Formik>
  )
}
