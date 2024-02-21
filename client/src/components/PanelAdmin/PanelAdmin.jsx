import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router-dom";
import GavelIcon from "@mui/icons-material/Gavel";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {logout, DataPersonal} from '../../redux/action';
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
const drawerWidth = 240;

function PanelAdmin(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleLogout = () => {
    // Antes de eliminar el token, verifica que esté almacenado correctamente
    const storedToken = localStorage.getItem('token');
    console.log('Token almacenado:', storedToken);
  
    // Dispatch de la acción de cierre de sesión (asegúrate de que esto funcione correctamente)
    dispatch(logout());
  
    // Navega a la ruta '/' después del cierre de sesión (asegúrate de que navigate esté definido)
    navigate('/');
  
    // Elimina el token del localStorage
    localStorage.removeItem('token');
    console.log('Token eliminado');
  
    // Puedes agregar más mensajes de depuración según sea necesario
  };
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List > 
        <Link className="enlaces-decoration" to="register">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AppRegistrationIcon />
              </ListItemIcon>
              <ListItemText primary="Registrar" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link className="enlaces-decoration" to="/home">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GavelIcon />
              </ListItemIcon>
              <ListItemText primary="Inventarios" />
            </ListItemButton>
          </ListItem>
        </Link>
     {/*    <Link className="enlaces-decoration" to="contract">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GavelIcon />
              </ListItemIcon>
              <ListItemText primary="Crear contrato" />
            </ListItemButton>
          </ListItem>
        </Link> */}
      </List>
      <ListItem sx={{ position: "absolute", bottom: 0 }} disablePadding>
            <ListItemButton  onClick={handleLogout}>
              <ListItemText className="text-menu">
                <span className="text-menu">CERRAR SESIÓN</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: 'transparent',
          boxShadow: 0
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          {/*   Responsive drawer */}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

PanelAdmin.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default PanelAdmin;
