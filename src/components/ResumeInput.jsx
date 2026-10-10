import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobRoles from '../assets/jobRoles.json'
import jobSkills from '../assets/jobSkills.json'
import summaries from '../assets/summaries.json'





const steps = ['Basic Informations', 'Contact Details', 'Educational Details','Review & Submit'];



export default function ResumeInput({resumeDetails,setResumeDetails}) {
    console.log(resumeDetails);
    
const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = React.useCallback((step) => {
    return step === 1;
  }, []);

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const previousActiveStepRef = React.useRef(activeStep);
  const resetButtonRef = React.useRef(null);
  const nextButtonRef = React.useRef(null);

  // Manage focus when the active step changes.
  React.useEffect(() => {
    const previousActiveStep = previousActiveStepRef.current;
    previousActiveStepRef.current = activeStep;

    if (activeStep === steps.length) {
      // If the user has completed all steps and hits "Finish", focus the "Reset" button.
    //   resetButtonRef.current.focus();
      return;
    }
    if (activeStep === 0 && previousActiveStep === steps.length) {
      // If the user has completed all steps and hits "Reset", focus the "Next" button.
    //   nextButtonRef.current.focus();
      return;
    }
    if (isStepOptional(previousActiveStep) && !isStepOptional(activeStep)) {
      // If the user hits "Skip" and the next step is not optional, focus the "Next" button.
    //   nextButtonRef.current.focus();
    }
  }, [activeStep, isStepOptional]);


  const renderFormContent=(stepCount)=>{
        switch(stepCount){
            case 0:return (
                <div>
                    <h1>Personal Detailes</h1>
                    <Stack>
                        <br />
                        <TextField 
                        onChange={(e)=>setResumeDetails({...resumeDetails,fullName:e.target.value})}
                        value={resumeDetails.fullName}
                        id="standard-basic" label="FullName" variant="standard" /> <br />
                        <TextField  onChange={(e)=>setResumeDetails({...resumeDetails,location:e.target.value})} 
                         value={resumeDetails.location}
                        id="standard-basic" label="Location" variant="standard" /> <br />
                        {/* <TextField id="standard-basic" label="JobTitle" variant="standard" /> */}
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
             <InputLabel id="demo-simple-select-label">Job </InputLabel>
                    <Select
                        onChange={(e)=>setResumeDetails({...resumeDetails,job:e.target.value})}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={resumeDetails.job}
                            label="Age"
                            // onChange={handleChange}
                        >
                        {
                            jobRoles.jobRoles.map(item=>(
                            <MenuItem value={item}>{item}</MenuItem>

                            ))
                        }

                    
                        </Select>

                        </FormControl>
            
                    </Stack>
                </div>
            )
          
             case 1:return (
                <div>
                    <h1>Contact Detailes</h1>
                    <Stack>
                        <br />
                        <TextField  onChange={(e)=>setResumeDetails({...resumeDetails,email:e.target.value})} 
                        value={resumeDetails.email}
                        id="standard-basic" label="Email" variant="standard" /> <br />
                        <TextField  onChange={(e)=>setResumeDetails({...resumeDetails,phone:e.target.value})} 
                        value={resumeDetails.phone} id="standard-basic" label="Contact Number" variant="standard" /> <br />
                        <TextField  onChange={(e)=>setResumeDetails({...resumeDetails,linkedin:e.target.value})} value={resumeDetails.linkedin} id="standard-basic" label="LinkedIn Link" variant="standard" /> <br />
                          <TextField  onChange={(e)=>setResumeDetails({...resumeDetails,github:e.target.value})} value={resumeDetails.github} id="standard-basic" label="Github Link" variant="standard" />
                    </Stack>
                </div>
            )
            
             case 2:return (
                <div>
                    <h1>Education Detailes</h1>
                     <Stack>
 <TextField  onChange={(e)=>setResumeDetails({...resumeDetails,degree:e.target.value})} value={resumeDetails.degree} id="standard-basic" label="Degree" variant="standard" /> <br />
                        <TextField  onChange={(e)=>setResumeDetails({...resumeDetails,college:e.target.value})} value={resumeDetails.college} id="standard-basic" label="College/university" variant="standard" /> <br />
                        <TextField  onChange={(e)=>setResumeDetails({...resumeDetails,year:e.target.value})} value={resumeDetails.year} id="standard-basic" label="Year of Passout" variant="standard" /> <br />
           
            
                     </Stack>
                        </div>
            )
            
             case 3:return (
                <div>
                    <Stack sx={{
                        width:'700px'
                    }}>
                    <h1>Skills and Summary</h1>
                    <p>Our AI will generate Skills & Summary according to your job role.Once the form get submitted, user won't get the chance to update the resume details. If you want ot proceed please click the Generate AI Skill & Summary button to submit.</p>
       
                    </Stack>
                            </div>
            )
        
             default:return  null
        }
  }

  const handleGenerateSummary=()=>{
    handleNext( )
    console.log(resumeDetails);

    setResumeDetails({...resumeDetails,skills:jobSkills[resumeDetails.job],summary:summaries[resumeDetails.job]})
  }

  const handleSubmitResume=()=>{
        alert("Submit")
  }

  return (
    <div>
<Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
        //   if (isStepOptional(index)) {
        //     labelProps.optional = (
        //       <Typography variant="caption">Optional</Typography>
        //     );
        //   }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleSubmitResume} >
                Submit
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box>
            Contents
            {
                renderFormContent(activeStep)
            }
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}
            <div ref={nextButtonRef}>
              {activeStep === steps.length - 1 ?
              
            //   'Finish' 
            <Button onClick={handleGenerateSummary}>Generate AI Skills and Summary</Button>
              
              : 
              
            //   'Next'
            <Button onClick={handleNext}>Next</Button>

              
              }
            </div>
          </Box>
        </React.Fragment>
      )}
    </Box>
    </div>
  )
}
