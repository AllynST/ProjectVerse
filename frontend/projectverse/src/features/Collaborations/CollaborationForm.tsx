import { Field, FieldArray, Formik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import ProjectSchema from '../../data/ValidationSchemas/ProjectSchema'
import ribbon from '../../assets/ribbon.png'
import { useSelector } from 'react-redux';
import User from '../../data/User';
import { TextFieldS } from '../../customElements/styledTextField';
import { Box, Button, Chip, FormControl, FormGroup, FormHelperText, InputLabel, MenuItem, OutlinedInput, Select, TextField, TextareaAutosize } from '@mui/material';
import TextareaAutosizeS from '../../customElements/TextareaAutosizeS';
import { ButtonS } from '../../customElements/ButtonS';
import technologiesList from '../../data/tempTechnologiesList';
import CollaborationSchema from '../../data/ValidationSchemas/CollaborationSchema';

const CollaborationForm: React.FC<{ submitHandler: Function }> = ({ submitHandler }) => {

  const navigate = useNavigate();
  const user: User = useSelector((state: any) => state.auth.user);

  return (
    <Formik
      initialValues={
        {
          name: "",
          description: "",
          projectUrl: "",
          difficulty: 0,
          technologies: [],
          collaborationPositions: [
            {
              name: "",
              description: ""
            }
          ]

        }
      }
      validationSchema={CollaborationSchema}
      onSubmit={async (collabData, { setSubmitting }) => {

        setSubmitting(true);

        try {
          console.log(collabData);
          // submitHandler(collabData)
          // .then(()=>{navigate("/portfolio")})               
        }

        catch (err) {
          console.log(err)
        }

        setSubmitting(false);
      }

      }
    >
      {({ values, handleChange, handleBlur, handleSubmit, errors }) => (



        <form className="bg-background w-full max-w-3xl flex flex-col gap-5 p-10 neo rounded-xl z-20" onSubmit={handleSubmit}>


          <div className='m-auto w-full h-full flex flex-col gap-4 items-center text-white p-3 relative animate-fadeIn max-w-[800px] bg-glassMorph rounded-xl'>
            <div className='absolute w-full -top-1 h-1/6 z-20'>
              <img src={ribbon} alt="" />
              {/* TODO RIBBON HERE */}

            </div>

            <div className='relative w-full h-1/6 text-black z-30'>

              <div className="absolute left-5 top-8 text-4xl font-bold">
                <Field
                  style={{ width: "100%", color: "black" }}
                  sx={{ color: "black" }}
                  value={values.name}
                  onChange={handleChange}
                  name="name"
                  label="Collaboration name"
                  variant="outlined"
                  error={errors.name ? true : false}
                  helperText={errors.name}
                  as={TextField}
                />
                {/* OPIS APKI MAMY TUTAJ ALE NIE WIEM BO NIE MAMY TEGO W MODELACH FIXME */}
              </div>

              <div className="absolute right-3 top-8 text-2xl flex gap-5 items-center">

                {user.username}
                <img className='w-12 border rounded-full' />
              </div>

            </div>
            <div className='neo text-xl w-full p-5 pt-[150px] rounded-xl bg-background'>

              <h2 className='text-2xl py-3'>
                About the <span className='text-accent'>Project</span>
              </h2>

              <Field
                style={{ width: "100%" }}
                value={values.description}
                onChange={handleChange}
                name="description"
                label="Description"
                variant="outlined"
                error={errors.description ? true : false}
                helperText={errors.description}
                as={TextareaAutosizeS}
              />

            </div>
            <div className='neo text-xl w-full py-5 px-5 rounded-xl bg-background'>

              <h2 className=' pb-4'>
                <span className='text-accent'>Technologies</span> we use
              </h2>

              <FormControl style={{ width: "100%" }}>
                <InputLabel id="demo-multiple-chip-label">Used technologies in order of importance</InputLabel>
                <Select
                  multiple

                  id="usedTechnologies"
                  name="usedTechnologies"
                  value={values.technologies}
                  error={errors.technologies ? true : false}
                  onChange={handleChange}
                  input={<OutlinedInput sx={{ width: "100%" }} id="select-multiple-chip" label="usedTechnologies" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip variant="outlined" key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {technologiesList.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>

                <FormHelperText>
                  {errors.technologies}
                </FormHelperText>

              </FormControl>



            </div>
            <div className='neo text-xl w-full p-5 rounded-xl h-2/5 flex flex-wrap gap-10 bg-background'>

              <div className='w-full text-justify justify-between'>
                <h2 className='w-full'>
                  <span className='text-accent'>Who</span> we'll need
                </h2>
                <p style={{ fontSize: "0.7em", lineHeight: "1.4em" }} className='w-full opacity-70 text-justify justify-between animate-fadeIn'>

                </p>

                <Field
                  style={{ width: "100%" }}
                  value={values.collaborationPositions[0].name}
                  onChange={handleChange}
                  name="description"
                  label="Position title"
                  variant="outlined"
                  error={errors.description ? true : false}
                  helperText={errors.description}
                  as={TextFieldS}
                />

                <Field
                  style={{ width: "100%" }}
                  value={values.collaborationPositions[0].description}
                  onChange={handleChange}
                  name="description"
                  label="Position title"
                  variant="outlined"
                  error={errors.description ? true : false}
                  helperText={errors.description}
                  as={TextareaAutosizeS}
                />
          
              </div>




            </div>
          </div>

          <ButtonS>Submit</ButtonS>

        </form>

      )}


    </Formik >
  )
}

export default CollaborationForm