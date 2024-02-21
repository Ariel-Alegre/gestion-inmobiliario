import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link, Outlet } from 'react-router-dom';
const drawerWidth = 240;

function ButtonsOptions(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
   <Box sx={{ bgcolor: 'transparent', width: '100%' }}>
   <AppBar position="static" sx={{ bgcolor: 'transparent', width: '100%' }}>
  

   <ButtonGroup variant="fullWidth" aria-label="outlined primary button group">
  <Link to="inventario" className="nav-link">
    <Button  sx={{ width: "100%", bgcolor: "transparent", color: "#000", border: "2px solid #000", "&:hover": { border: "2px solid #000",  }, fontFamily: 'glacial indifference' }}>
      INVENTARIO
    </Button>
  </Link>
  <Link to="/home/leads" className="nav-link">
    <Button  sx={{ width: "100%", bgcolor: "transparent", color: "#000", border: "2px solid #000", "&:hover": { border: "2px solid #000",  }, fontFamily: 'glacial indifference' }}>
      LEADS
    </Button>
  </Link>
  <Link to="/home/ventas" className="nav-link">
    <Button  sx={{ width: "100%", bgcolor: "transparent", color: "#000", border: "2px solid #000", "&:hover": { border: "2px solid #000",  }, fontFamily: 'glacial indifference' }}>
      VENTAS
    </Button>
  </Link>
  <Link to="/home/campanas" className="nav-link">
    <Button  sx={{ width: "100%", bgcolor: "transparent", color: "#000", border: "2px solid #000", "&:hover": { border: "2px solid #000",  }, fontFamily: 'glacial indifference' }}>
      CAMPAÑAS
    </Button>
  </Link>
</ButtonGroup>

    </AppBar>

   </Box>
    <Box sx={{ display: 'flex' }}>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
       <Outlet/>
      </Box>
    </Box>
</>
  );
}

ButtonsOptions.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ButtonsOptions;