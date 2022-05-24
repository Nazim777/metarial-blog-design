import React from 'react'
import LeftBar1 from './components/Metarialuiv5/LeftBar1'
import RightBar1 from './components/Metarialuiv5/RightBar1'
import Feeed1 from './components/Metarialuiv5/Feeed1'
import { Box, Grid, Stack } from '@mui/material'
import Navbar from './components/Metarialuiv5/Navbar1'
const App = () => {
  return (
    <div>
      <Box>
        <Navbar/>
      <Grid container spacing={2}>
  <Grid item  sm={2} >
  <LeftBar1/>
  </Grid>
  <Grid item  sm={6} >
  <Feeed1/>
  </Grid>
  <Grid item  sm={4} >
  <RightBar1/>
  </Grid>
  
</Grid>

      </Box>
      
     
     
    </div>
  )
}

export default App
