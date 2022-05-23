import { Home, Person } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/material'
const Design2 = () => {
  return (
    <div>
        <Button variant='contained' 
       style={{backgroundColor:'green',marginRight:'5px'}} startIcon={<Person/>}>Submit</Button>
        <Button variant='outlined' color='primary' startIcon={<Home/>}>Submit</Button>
      
    </div>
  )
}

export default Design2
