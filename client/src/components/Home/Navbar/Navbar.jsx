import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import "../../../styles/App.css";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import ButtonMenu from "../ButtonsHome/ButtonMenu";
import ButtonNoti from "../ButtonsHome/ButtonNoti";
import ButtonAccount from "../ButtonsHome/ButtonAccount";

import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Carrusel from "../Inventario/Carrusel";
import Leads from "../Leads/Leads";
import ButtonAddLeads from "../ButtonsHome/ButtonAddLeads";
import ButtonsOptions from "../ButtonsOptions/ButtonsOptions";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
 

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
         <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem className="icons">
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error" sx={{ color: "#000" }}>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error" sx={{ color: "#000" }}>
          <img
              src={require("../../../image/Botón añadir lead.png")}
              alt="Not found"
              className="icono-navbar"

            />
          </Badge>
        </IconButton>
        <p>Añadir</p>
      </MenuItem>
    
    </Menu>
  );

  return (
    <>
    <Box >
      <AppBar
        position="static"
        sx={{ mr: 2, background: "transparent", boxShadow: "0 0 0 0" }}
      >
        <Toolbar>
        <Box sx={{ display: { xs: "none", md: "flex", } }}>


          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, color: "#000", }}
          >
            <ButtonMenu/>
          </IconButton>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, color: "#000", marginTop: "5px" }}
          >
              <img
              src={require("../../../image/Botón mensajes.png")}
              alt="Not found"
    className="icono-navbar"

            />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, color: "#000" }}
            >
           <ButtonAddLeads/>
          </IconButton>

          </Box>
        

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex", } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              sx={{ mr: 2, color: "#000" }}
            >
              <Badge badgeContent={4} color="error">
<ButtonNoti/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              sx={{ mr: 2, color: "#000" }}
            >
              <Badge>
              <img srcset={require('../../../image/Botón modo noche.png')}  alt="Not found"  
              width={90}
              />


              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              sx={{ mr: 2, color: "#000" }}
            >
              <ButtonAccount/>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      
      {renderMobileMenu}
    </Box>
    <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ textAlign: "center", flexGrow: 5, color: "#a52a2a" }}
          >
            <img
              src={require("../../../image/Logo.png")}
              alt="Not found"
              className="img-Logo"
            />
          </Typography>
    </>

  );
}