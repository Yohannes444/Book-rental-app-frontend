import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import UploadIcon from '@mui/icons-material/Upload';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{ width: 240, flexShrink: 0 }}
      anchor="left"
    >
      <Box sx={{ width: 240 }}>
        <List>
          <ListItem button>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><UploadIcon /></ListItemIcon>
            <ListItemText primary="Book Upload" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><NotificationsIcon /></ListItemIcon>
            <ListItemText primary="Notification" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary="Login as Admin" />
          </ListItem>
        </List>
        <Box sx={{ mt: 'auto', p: 2 }}>
          <IconButton><ExitToAppIcon /> Logout</IconButton>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
