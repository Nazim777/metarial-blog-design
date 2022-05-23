import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { Alert, FormControl, FormControlLabel, FormLabel, Modal, Radio, RadioGroup, Snackbar } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    height:'400px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const Add = () => {
    const [open, setopen] =useState(false)
  // const handleClose = () => setopen(false);
  const [openbar, setopenbar] =useState(false)
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setopenbar(false);
  };
    
  return (
    <div>
        <Box sx={{ '& > :not(style)': { m: 1 }, position:'fixed',bottom:'20px',right:'20px' }}>
      <Fab color="primary" aria-label="add" onClick={()=>setopen(true)}>
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
     
    </Box>
    <Modal
        open={open}
       // onClose={handleClose}
        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
       <form action="">
       <TextField id="outlined-basic" label="title" variant="outlined" />
        <TextField
        sx={{marginTop:'10px'}}
          id="outlined-multiline-static"
          label="description"
          multiline
          rows={4}
          
        />
        <div>
          
            <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">who can comments?</FormLabel>
      <RadioGroup
       
      >
        <FormControlLabel value="Everybody" control={<Radio />} label="Everybody" />
        <FormControlLabel value="My Friend" control={<Radio />} label="My Friend" />
        <FormControlLabel value="Nobody" control={<Radio />} label="Nobody" />
      </RadioGroup>
    </FormControl>
        </div>
        <Button variant='contained' color='secondary'sx={{marginTop:'10px'}} onClick={()=>setopenbar(true)}>Create</Button>
       
        <Button variant='contained' color='primary'sx={{marginTop:'10px',marginLeft:'10px'}} onClick={()=>setopen(false)}>Cancel</Button>
       </form>
        </Box>
      </Modal>

      <Snackbar open={openbar} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
         Your post is successfully created!
        </Alert>
      </Snackbar>
      
    </div>
  )
}

export default Add
