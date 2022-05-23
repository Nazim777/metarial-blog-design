import React from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Link, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
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
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
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
  },
];

const RightBar = () => {
  
  return (
    <div style={{marginTop:'30px',position:'sticky',top:'60px'}}>
        <Typography style={{ textAlign:'center',fontWeight:'bolder',marginBottom:'20px'}}>Online Friends</Typography>
        <AvatarGroup max={5} style={{marginRight:'130px'}} >
      <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </AvatarGroup>
    <Typography style={{marginTop:'20px',textAlign:'center',fontWeight:'bolder'}}>
      Gallery
    </Typography>
    <ImageList sx={{ width: 450, height: 300 ,marginLeft:'30px',marginRight:'30px' }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
   <div style={{marginLeft:'30px'}}>
     <Typography style={{fontWeight:'bolder',marginTop:'30px',marginBottom:'10px'}}>
       Categories
     </Typography>
   <Link style={{fontSize:'20px',  marginLeft:'5px',cursor:'pointer'}} variant='body2' >Food</Link> 
   <Link style={{fontSize:'20px', marginLeft:'5px',cursor:'pointer'}} variant='body2'>Science</Link> 
   <Link style={{fontSize:'20px', marginLeft:'5px',cursor:'pointer'}} variant='body2'>Education</Link> <br />
   <Link style={{fontSize:'20px', marginLeft:'5px',cursor:'pointer'}} variant='body2'>Business</Link> 
   <Link style={{fontSize:'20px', marginLeft:'5px',cursor:'pointer'}} variant='body2'>Sports</Link>
   <Link style={{fontSize:'20px', marginLeft:'5px',cursor:'pointer'}} variant='body2'>Religion</Link>
        
        
   </div>


      
    </div>
  )
}

export default RightBar
