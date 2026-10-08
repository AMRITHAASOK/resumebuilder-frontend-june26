import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import { FaFile } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom'
export default function Resume() {
  return (
    <div>
        <Container sx={{marginTop:'100px'}}>
            <Typography variant='h3' align='center'>
                Create an ATS Friendly Resume in Minutes with AI
            </Typography>
            <Stack  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
       sx={{display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        flexWrap:'wrap',
        p:'60px'
       }}>
        <Paper elevation={24} sx={{width:'400px', height:'300px', padding:'20px', textAlign:'center', pt:'70px'}}>
                <Typography sx={{
                    color:'blue',
                    fontSize:'50px'
                }}><FaFile /></Typography>
                
                <Typography variant='h4'>Add Your Details</Typography> 
                <Typography variant='h5'>Our AI will generate Skills & Summary</Typography> 
                <Typography variant='h3'>Step 1</Typography> 
        </Paper>
        <Paper elevation={24} sx={{width:'400px', height:'300px', padding:'20px', textAlign:'center',pt:'70px'}}>
                 <Typography sx={{
                    color:'red',
                    fontSize:'50px'
                }}><FaFileDownload /></Typography>
                
                <Typography variant='h4'>Download your Resume</Typography> 
                <Typography variant='h5'>Download CV as PDF and start applying</Typography> 
                <Typography variant='h3'>Step 2</Typography> 
        </Paper>

            </Stack>
            <Stack  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
       sx={{display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'wrap',
       }}>
        <Link to={'/resume-details'}>
                <Button variant='contained'>Get Starts</Button> 
        </Link>
       </Stack>
            
        </Container>
    </div>
  )
}
