import Box from '@mui/material/Box'
import React from 'react'
import ResumeInput from '../components/ResumeInput'
import Preview from '../components/Preview'
import Stack from '@mui/material/Stack'

export default function Info() {

const [resumeDetails,setResumeDetails] = React.useState({
      fullName:"",location:"",job:"",email:"",phone:"",linkedin:"",github:"",degree:"",college:"",year:"",skills:[],summary:""
    })
    
  return (
    <div>
      <Stack direction={{ xs: 'column', sm: 'row' }}
      sx={{
        justifyContent:'space-evenly',
        alignItems:'center',
        marginTop:'100px'
       }}
      >
        <Box>
            <ResumeInput resumeDetails={resumeDetails} setResumeDetails={setResumeDetails}/>
        </Box>
         <Box>
            <Preview resumeDetails={resumeDetails}/>
        </Box>

      </Stack>
    </div>
  )
}
