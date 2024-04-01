import { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import ButtonAppBar from './Components/appBar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import { Container, Divider, Grid, IconButton, Link, List, Paper, Toolbar, Typography, createTheme, styled } from '@mui/material'
import {listItems, secondaryListItems} from './Components/listItems';
import Deposits from './Components/Deposits';

import Orders from './Components/Orders';
import Chart  from './Components/Chart';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const dashboardTheme = createTheme({

});
function App() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };  

  return (
    <>
      <ThemeProvider theme={dashboardTheme}>
<Box sx={{display:'flex'}}>
  <CssBaseline />
<ButtonAppBar />
<Drawer>
  <Toolbar>
    <IconButton onClick={toggleDrawer}>
      <ChevronLeftIcon />
    </IconButton>
  </Toolbar>
  <Divider />
  <List component='nav'>
  {listItems}
   <Divider />
  {secondaryListItems}
  </List>
</Drawer>
 <Box component='main'
 sx={{}}
 
 >
<Toolbar />
<Container maxWidth="lg" sx={{mt:4, mb:4}}>
  <Grid container spacing={3}>

<Grid item xs={12} md={8} lg={9}>
  <Paper sx={{
    p:2,
    display:'flex',
    flexDirection:'column',
    height:240,
  }}>
    <Chart  />
  </Paper>
</Grid>
  // recent deposits
  <Grid item xs={12} md={4} lg={3}>
  <Paper sx={{
    p:2,
    display:'flex',
    flexDirection:'column',
    height:240,
  }}>
   <Deposits />
    </Paper>
    
  </Grid>
  // recent orders
  <Grid item xs={12}>
   <Paper sx={{p:2, display: 'flex', flexDirection: 'column'}}>
    <Orders />
    </Paper>
    </Grid>
  </Grid>

  


<Copyright />
  
</Container>
 </Box>
</Box>
        </ThemeProvider>
    </>
  )
}

export default App
