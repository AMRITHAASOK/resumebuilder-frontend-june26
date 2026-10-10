import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'

export default function Preview({resumeDetails}) {
  return (
    <div>
            <Paper elevation={24} sx={{padding:'30px',width:'600px',height:'600px'}} >
                    <Typography variant='h3' sx={{textAlign:'center',fontWeight:'900 '}}>
                     { resumeDetails.fullName? resumeDetails.fullName: "Full Name"}
                    </Typography>
                     <Typography variant='h4' sx={{textAlign:'center',fontWeight:'500 '}}>
                        { resumeDetails.job? resumeDetails.job: "Job Title"} 
                    </Typography>
                   
                    <Typography variant='h6' sx={{textAlign:'center',fontWeight:'200 '}}>
                         { resumeDetails.email? resumeDetails.email: "name@gmail.com"}  |       { resumeDetails.phone? resumeDetails.phone: "98989889898"}   |  { resumeDetails.location? resumeDetails.location: "Thrissur"}  |  { resumeDetails.linkedin? resumeDetails.linkedin: "linkedIn"}  | { resumeDetails.github? resumeDetails.github: "github"}  
                    </Typography>
                    
                   <Divider>
                    <Typography variant='h5' sx={{textAlign:'center',fontWeight:'500 '}}>
                    Education
                    </Typography>
                    </Divider>
                     <Typography variant='h5' sx={{textAlign:'center',fontWeight:'500 '}}>
                      { resumeDetails.degree? resumeDetails.degree: "Qualification"}  
                    </Typography>
                    <Typography variant='h5' sx={{textAlign:'center',fontWeight:'500 '}}>
                    University/College Name : { resumeDetails.college? resumeDetails.college: ""}  
                    </Typography>
                    <Typography variant='h5' sx={{textAlign:'center',fontWeight:'500 '}}>
                   Year of Graduation : { resumeDetails.year? resumeDetails.year: ""}
                    </Typography>
                    <Divider>
                    <Typography variant='h5' sx={{textAlign:'center',fontWeight:'500 '}}>
                    Proffessional Summary
                  
                    </Typography>
                    </Divider>
                     <Box >
                     { resumeDetails.summary? resumeDetails.summary: ""}
                   </Box>
<Divider>
                    <Typography variant='h5' sx={{textAlign:'center',fontWeight:'500 '}}>
                      Skills 

                    </Typography>
                    </Divider>

                    <Stack direction='row' sx={{direction:'column', flexWrap:'wrap' ,justifyContent:'space-around',alignItems:'center'}}>
                        {
                        resumeDetails?.skills?.map(item=>(
                            <Button>{item}</Button>
                        ))
                      }
                    </Stack>

                    
            </Paper>
    </div>
  )
}
