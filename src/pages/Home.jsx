import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <Container 
        maxWidth={false}
        sx={{
            backgroundImage:`url(https://images.pexels.com/photos/7643894/pexels-photo-7643894.jpeg?cs=srgb&dl=pexels-mart-production-7643894.jpg&fm=jpg)`,
            backgroundSize:'cover',
            backgroundAttachment:'fixed',
            backgroundPosition:'top',
            width:'100%',
            height:'800px',
            display:'flex',
            justifyContent: "center",
    alignItems: "center",
        }}
        >
                <Box 
                sx={{
                    width:'700px',
                    margin:'auto',
                    backgroundColor:"rgba(255,255,255,0.3)",
                    padding:'20px',
                    borderRadius:'20px',
                    textAlign:'center',
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
                >
                    <Typography variant='h2'>
                        Designed To Get Hired. Your Skills, Your Story, Your Next Job - All In One.
                    </Typography>
                    <Link to={'/resume'}>
                                        <Button variant='contained'>Get Started</Button>

                    </Link>
                </Box>
        </Container>
    </div>
  )
}
