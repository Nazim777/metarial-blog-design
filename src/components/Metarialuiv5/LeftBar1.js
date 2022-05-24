import { Box, Typography } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ListIcon from '@mui/icons-material/List';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import AppsIcon from '@mui/icons-material/Apps';
import CollectionsIcon from '@mui/icons-material/Collections';
import StoreIcon from '@mui/icons-material/Store';
import LogoutIcon from '@mui/icons-material/Logout';
import PagesIcon from '@mui/icons-material/Pages';
const LeftBar1 = () => {
  return (
    <div >
       <Box  p={2} sx={{display:{'xs':'none','sm':'block'},marginTop:'70px',position:'fixed'}} >
          <Box sx={{display:'flex',cursor:'pointer'}}>
          <HomeIcon/> 
          <Typography sx={{marginLeft:'10px',marginBottom:'20px'}}>Home</Typography>

          </Box>
          <Box sx={{display:'flex',cursor:'pointer'}}>
          <GroupIcon/>
          <Typography sx={{marginLeft:'10px',marginBottom:'20px'}}>Fiends</Typography>

          </Box>
          <Box sx={{display:'flex',cursor:'pointer'}}>
          <ListIcon/>
          <Typography sx={{marginLeft:'10px',marginBottom:'20px'}}>List</Typography>

          </Box>
          <Box sx={{display:'flex',cursor:'pointer'}}>
          <PagesIcon/>
          <Typography sx={{marginLeft:'10px',marginBottom:'20px'}}>Pages</Typography>

          </Box>
          <Box sx={{display:'flex',cursor:'pointer'}}>
          <VideoCameraFrontIcon/>
          <Typography sx={{marginLeft:'10px',marginBottom:'20px'}}>Camera</Typography>

          </Box>
          <Box sx={{display:'flex',cursor:'pointer'}}>
          <FeaturedVideoIcon/>
          <Typography sx={{marginLeft:'10px',marginBottom:'20px'}}>Video</Typography>

          </Box>
          <Box sx={{display:'flex',cursor:'pointer'}}>
          <AppsIcon/>
          <Typography sx={{marginLeft:'10px',marginBottom:'20px'}}>Apps</Typography>

          </Box>
          <Box sx={{display:'flex',cursor:'pointer'}}>
          <CollectionsIcon/>
          <Typography sx={{marginLeft:'10px',marginBottom:'20px'}}>Collections</Typography>

          </Box>
          <Box sx={{display:'flex',cursor:'pointer'}}>
          <StoreIcon/>
          <Typography sx={{marginLeft:'10px',marginBottom:'20px'}}>Market Place</Typography>

          </Box>
          <Box sx={{display:'flex',cursor:'pointer'}}>
          <LogoutIcon/>
          <Typography sx={{marginLeft:'10px',marginBottom:'20px'}}>Logout</Typography>

          </Box>
       </Box>
      
    </div>
  )
}

export default LeftBar1
