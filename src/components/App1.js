import './App.css';
import Navbar from './components/Navbar';
import { Grid, } from '@mui/material';
import LeftBar from './components/LeftBar'
import Feeed from './components/Feeed';
import Add from './components/Add'
import RightBar from './components/RightBar';

function App() {
  
  return (
    <div className="App">
     <Navbar/>
     <Grid container>
       <Grid item sm={2}>
         <LeftBar/>

       </Grid>
       <Grid item sm={6}>
         <Feeed/>

       </Grid>
       <Grid item sm={4}>
         <RightBar/>

       </Grid>
       
     </Grid>
     <Add/>

    </div>
  );
}

export default App;
