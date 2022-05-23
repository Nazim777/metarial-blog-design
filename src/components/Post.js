import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Post = () => {
  return (
    <div>
        <Card sx={{ maxWidth: 700,marginTop:'70px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://images.pexels.com/photos/68525/soap-colorful-color-fruit-68525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            My First Post
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minus voluptate, quibusdam deserunt blanditiis hic inventore quis ratione rerum commodi eligendi, eius labore sed nisi. At assumenda nulla vitae ducimus modi veritatis. Temporibus, laborum voluptas dolorum libero dolor necessitatibus officiis excepturi obcaecati aliquam accusantium placeat non earum? Facilis a amet necessitatibus similique eveniet tempora magni reprehenderit quod. Expedita illo laudantium quae incidunt accusantium blanditiis temporibus, dolore nihil amet necessitatibus non enim, deleniti 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Read more...
        </Button>
      </CardActions>
    </Card>
      
    </div>
  )
}

export default Post
