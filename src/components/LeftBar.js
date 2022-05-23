import { Home } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
import ListIcon from '@mui/icons-material/List';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import AppsIcon from '@mui/icons-material/Apps';
import CollectionsIcon from '@mui/icons-material/Collections';
import StoreIcon from '@mui/icons-material/Store';
import LogoutIcon from '@mui/icons-material/Logout';
const usestyles= makeStyles(()=>({
div:{
    display:'flex',
    marginTop:'20px',
    cursor:'pointer'
},

}))
const LeftBar = () => {
    const classes= usestyles()
  return (
    <div style={{marginTop:'70px',position:'sticky',top:'70px'}}>
       <div className={classes.div}>
           <Home />
           <Typography style={{marginLeft:'10px'}}>Home</Typography>
       </div>
       <div className={classes.div}>
           <GroupIcon/>
           <Typography style={{marginLeft:'10px'}}>Friend</Typography>
       </div>
       <div className={classes.div}>
           <ListIcon />
           <Typography style={{marginLeft:'10px'}}>List</Typography>
       </div>
       <div className={classes.div}>
           <CameraAltIcon/>
           <Typography style={{marginLeft:'10px'}}>Camera</Typography>
       </div>
       <div className={classes.div}>
           <VideoCameraFrontIcon />
           <Typography style={{marginLeft:'10px'}}>Video</Typography>
       </div>
       <div className={classes.div}>
           < AppsIcon />
           <Typography style={{marginLeft:'10px'}}>Apps</Typography>
       </div>
       <div className={classes.div}>
           <CollectionsIcon />
           <Typography style={{marginLeft:'10px'}}>Collections</Typography>
       </div>
       <div className={classes.div}>
           <StoreIcon />
           <Typography style={{marginLeft:'10px'}}>Market Place</Typography>
       </div>
       <div className={classes.div}>
           <LogoutIcon />
           <Typography style={{marginLeft:'10px'}}>LogOut</Typography>
       </div>
      
    </div>
  )
}

export default LeftBar
