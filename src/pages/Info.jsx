import Box from '@mui/material/Box'
import React from 'react'
import ResumeInput from '../components/ResumeInput'
import Preview from '../components/Preview'
import Stack from '@mui/material/Stack'
export default function Info() {
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
            <ResumeInput/>
        </Box>
         <Box>
            <Preview/>
        </Box>

      </Stack>
    </div>
  )
}
