import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemButton from '@material-ui/core/ListItemButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import logo from '../images/blacklogo.png';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import { Logout } from './Logout';
function Navbar(props) {
  const [open, setOpen] = useState(false);
  const [listOpen, listsetOpen] = useState(false);

  const handleListClick = () => {
    listsetOpen(!listOpen);
  };

  const [logged, setLogged] = useState(false);

  const handleDrawer = () => {
    setOpen(true);
  }

  useEffect(() => {
    if (localStorage.getItem("accessToken") && !logged) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, [localStorage.getItem("accessToken"), props.listen])

  return (
    <div>
      <AppBar
        elevation={0}
        color='default'
      >
        <Toolbar
        // sx={{display:'flex',alignItems:"center",justifyContent:"center"}}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ color: "black", alignItems: "start" }}
            onClick={handleDrawer}
          >
            <MenuIcon
              sx={{ fontSize: "4vh" }} />
          </IconButton>
          <Typography
            variant="h1"
            color="initial"
            component="div" sx={{ display: 'flex', alignItems: "center", justifyContent: "center", mx: 'auto' }}>
            <img src={logo} alt="" style={{ heigth: "1em", width: "2em" }} />
          </Typography>
          {logged &&
            <div>
              <Button style={{ marginRight: "5px" }} variant="contained" color="warning" onClick={() => window.location.href = "/dashboard"}>Dashboard</Button>
              <Button style={{ marginRight: "5px" }} variant="contained" color="success" onClick={() => window.location.href = "/admin/contacts"}>Contacts</Button>
              <Logout setLogout={props.setLogout} />
            </div>
          }
        </Toolbar>
      </AppBar>


      <Drawer
        varient="temporary"
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}>
        <List
          sx={{ mx: 'auto' }}>

          <ListSubheader component="div">
            <Typography
              variant="h1"
              color="initial"
              component="div" sx={{ display: 'flex', alignItems: "center", justifyContent: "center", mx: 'auto' }}>
              <img src={logo} alt="" style={{ heigth: "1em", width: "2em" }} />
            </Typography>
          </ListSubheader>

          <ListItemButton>
            <ListItemText primary="Home" />
          </ListItemButton>

          <ListItemButton>
            <ListItemText primary="About us" />
          </ListItemButton>

          <ListItemButton>
            <ListItemText primary="Portfolio" />
          </ListItemButton>

          <ListItemButton>
            <ListItemText primary="Services" />
          </ListItemButton>

          <ListItemButton>
            <ListItemText primary="Contact us" />
          </ListItemButton>

          <ListItemButton onClick={handleListClick}>
            <ListItemText primary="Inbox" />
            {listOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={listOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Starred" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Starred" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>

      </Drawer>

    </div>
  )
}

export default Navbar
