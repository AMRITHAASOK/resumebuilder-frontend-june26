import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import DescriptionIcon from '@mui/icons-material/Description';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';




export default function Header() {
 
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


    return (
    <div>
    <AppBar position="sticky" sx={{
        position:'fixed',
        top:'0'
    }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>


            
<Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "space-between",
    alignItems: "center",
    width:'100%'
  }}
  
>
   <Link to={'/'}  sx={{
              textDecoration:"none"
            }}>
    <Typography
          variant='h4'
            noWrap
            sx={{
              color:'white',
              textDecoration: "none"
            }}
          >
           Resume Builder  
          </Typography>
   </Link>
        

 <Box  direction="row"
  spacing={8}
  sx={{
    justifyContent: "space-between",
    alignItems: "center",
    width:'500px'

  }}>
            <Link to={"/all-resumes"}>
                <Button variant='contained'>All Resumes</Button>
            </Link>
            <Link to={'/downloads'}>
                <Button variant='contained'>All Downloads</Button>
            </Link>
            <Button variant='contained'>About Us</Button>
          </Box>
</Stack>
         
          
      

       

         
          
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  )
}
