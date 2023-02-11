import React from 'react'
import { Link } from "react-router-dom";
import { Box, ListItem } from '@mui/material'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';

import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ForumIcon from '@mui/icons-material/Forum';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Sidebar = ({mode, setMode}) => {
  return (
    <Box
      flex={1} 
      p={2}
      sx={{display: {xs: "none", sm: "block"}}}
    >
      <Box position="fixed">
        <List>
          <ListItem>
            <Link to="/">
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText sx={{textDecoration: "none"}} primary="Homepage" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/profile">
              <ListItemButton>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/inbox">
              <ListItemButton>
                <ListItemIcon>
                  <ForumIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/friends">
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Friends" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/marketplace">
              <ListItemButton>
                <ListItemIcon>
                  <StoreIcon />
                </ListItemIcon>
                <ListItemText primary="Marketplace" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/settings">
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <DarkModeIcon />
              </ListItemIcon>
              <Switch  onChange={e => setMode(mode === 'light' ? "dark" : "light")} />
            </ListItemButton>  
          </ListItem>
        </List> 
      </Box>
    </Box>
  )
}

export default Sidebar