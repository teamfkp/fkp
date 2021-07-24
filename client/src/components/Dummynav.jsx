import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../images/blacklogo.png';

function Dummynav() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            
          >
            <MenuIcon />
          </IconButton>
         
          <Typography 
          variant="h1"
           color="initial"
            component="div" sx={{display:'flex',alignItems:"center",justifyContent:"center",mx:"auto"}}>
          <img src={logo} alt=""  style={{heigth:"1em",width:"2em"}} />
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    )
}

export default Dummynav
