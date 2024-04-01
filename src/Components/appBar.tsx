
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { useState} from 'react';
export default function ButtonAppBar() {
  const [open, setOpen] = useState(true);  
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, ...(open && {display: 'none'}) }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Innovative Management Consulting 
          </Typography>
          <Button>
          <CircleNotificationsIcon /> 
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}