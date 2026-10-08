import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Download() {
     const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
     <Container sx={{marginTop:'100px'}}>
       <Box sx={{display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        py:'10px'
       }}>
         <Typography variant='h3'>
            All Downloaded Resume Details
        </Typography>
        <Button onClick={handleOpen}>View Chart</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{backgroundColor:'gray' ,textAlign:'center'}}>
            Resume Download Count by Job Role
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Graph
          </Typography>
        </Box>
      </Modal>
       </Box>
       <Typography variant='h6' >
        Total Downloaded resumes from our site is 10
       </Typography>

       <Stack 
       direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
       sx={{display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        flexWrap:'wrap',
        my:'20px'
       }}>
     
         <Paper elevation={24}  sx={{width:'300px', height:'400px', padding:'20px'}}>
        Resume
        </Paper>
   <Paper elevation={24}  sx={{width:'300px', height:'400px', padding:'20px'}}>
        Resume
        </Paper>
          <Paper elevation={24}  sx={{width:'300px', height:'400px', padding:'20px'}}>
        Resume
        </Paper>
           <Paper elevation={24}  sx={{width:'300px', height:'400px', padding:'20px'}}>
        Resume
        </Paper>
           <Paper elevation={24}  sx={{width:'300px', height:'400px', padding:'20px'}}>
        Resume
        </Paper>
        
        

   
         <Paper elevation={24}  sx={{width:'300px', height:'400px', padding:'20px'}}>
        Resume
        </Paper>
     
       </Stack>

     </Container>
    </div>
  )
}
