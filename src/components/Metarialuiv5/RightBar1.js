import React, { useState } from 'react'
import { Alert, Box, Button, Modal, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Link from '@mui/material/Link';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';


const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      cols: 2,
    },
  ];
function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }


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
const RightBar1 = () => {
    const [open, setopen] =useState(false)
    const [openbar, setopenbar] = useState(false)
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setopenbar(false);
      };
  return (
    <div >
        <Box  p={2} sx={{display:{'xs':'none','sm':'block'},marginTop:'60px',position:'fixed'}}  >
           <Typography style={{textAlign:'center',fontWeight:'bolder',marginBottom:'10px'}}>Online Friends</Typography>

           <AvatarGroup total={24} sx={{marginRight:'90px',marginBottom:'10px'}}>
      <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
      <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
    </AvatarGroup>

<Typography style={{textAlign:'center',fontWeight:'bolder',marginBottom:'10px'}}> Image Gallery</Typography>
    <ImageList
      sx={{ width: 400, height: 300 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Typography  style={{textAlign:'center',fontWeight:'bolder',marginBottom:'10px'}}>Categories</Typography>
    <div>
    <Link href="#"style={{margin:'5px',fontSize:'16px',fontWeight:'bold'}} >Science</Link>
    <Link href="#"style={{margin:'5px',fontSize:'16px',fontWeight:'bold'}}>Food</Link>
    <Link href="#"style={{margin:'5px',fontSize:'16px',fontWeight:'bold'}}>Education</Link> <br /> <br />
    <Link href="#"style={{margin:'5px',fontSize:'16px',fontWeight:'bold'}}>Business</Link>
    <Link href="#"style={{margin:'5px',fontSize:'16px',fontWeight:'bold'}}>Sports</Link>
    <Link href="#"style={{margin:'5px',fontSize:'16px',fontWeight:'bold'}}>Religion</Link>

    </div>

    <Fab color="primary" aria-label="add" style={{position:'absolute',right:'10px',bottom:'20px',backgroundColor:'purple'}} onClick={()=>setopen(true)}>
        <AddIcon />
      </Fab>

<div>




<Modal
        open={open}
        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
     >
         <Typography sx={{marginBottom:'10px'}}>Add your post</Typography>
      <TextField fullWidth label="title" id="fullWidth"sx={{marginBottom:'10px'}} />
      <TextField fullWidth label="description" id="fullWidth" sx={{marginBottom:'10px'}}/>
    </Box>
        
         
          <div style={{marginTop:'5px'}}>
          <Button variant='contained' sx={{marginRight:'5px',backgroundColor:'purple'}} onClick={()=>setopenbar(true)}>Create</Button>
          <Button onClick={()=>{setopen(false)}} variant='contained' >cancel</Button>

          </div>
         
        </Box>
      </Modal>
</div>
<div>
<Snackbar open={openbar} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Your post is successfully created!
        </Alert>
      </Snackbar>
</div>


        </Box>
    </div>
  )
}

export default RightBar1
