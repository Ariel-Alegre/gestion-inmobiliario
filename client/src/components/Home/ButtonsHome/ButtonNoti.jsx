import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../../../styles/App.css";
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 0,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    border: "3px solid #000",
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function ButtonNoti() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <img
        onClick={handleClick}
        srcset={require("../../../image/Campana.png")}
        alt="Not found"
        className="icono-navbar"
        
      />

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <div className="icon-container">

          <img
            src={require("../../../image/Ícono trofeo CRM_.png")}
            alt="Not found"
            className="icon-notification"
            />
            </div>
          <div className="text-notif">
            <h4>VENTA COMPLETADA</h4>
            <span className="subdescription-notif">
              LOTE HVZ-1 / 24 MENS. /$600,000.00 MXN
            </span>
          </div>
        </MenuItem>
        <div className="linea-notif"></div>
        <MenuItem onClick={handleClose} disableRipple>
          <div className="icon-container">

          <img
            src={require("../../../image/ïcono dinero CRM.png")}
            alt="Not found"
            className="icon-notification"

            />
            </div>
          <div className="text-notif">
            <h4>PAGO DE COMISÓN</h4>
            <span className="subdescription-notif">
              LOTE HVZ-1 / 10% /$60,000.00 MXN
            </span>
          </div>
        </MenuItem>
        <div className="linea-notif"></div>
        <MenuItem onClick={handleClose} disableRipple>
        <div className="icon-container">


          <img
            src={require("../../../image/Ícono trofeo CRM_.png")}
            alt="Not found"
            className="icon-notification"
            />
            </div>
          <div className="text-notif">
            <h4></h4>
            <span className="subdescription-notif">
            </span>
          </div>
        </MenuItem>
        <div className="linea-notif"></div>
        <MenuItem onClick={handleClose} disableRipple>
        <div className="icon-container">

          <img
            src={require("../../../image/Ícono trofeo CRM_.png")}
            alt="Not found"
            className="icon-notification"
          />
          </div>

          <div className="text-notif">
            <h4></h4>
            <span className="subdescription-notif">
            </span>
          </div>
        </MenuItem>
        <div className="linea-notif"></div>
        <MenuItem onClick={handleClose} disableRipple>
        <div className="icon-container">

          <img
            src={require("../../../image/Ícono trofeo CRM_.png")}
            alt="Not found"
            className="icon-notification"
          />
          </div>

          <div className="text-notif">
            <h4></h4>
            <span className="subdescription-notif">
            </span>
          </div>
        </MenuItem>
        <div className="linea-notif"></div>
        <MenuItem onClick={handleClose} disableRipple>
        <div className="icon-container">

          <img
            src={require("../../../image/Ícono trofeo CRM_.png")}
            alt="Not found"
            className="icon-notification"
          />
          </div>

          <div className="text-notif">
            <h4></h4>
            <span className="subdescription-notif">
            </span>
          </div>
        </MenuItem>
        <div className="linea-notif"></div>
        <MenuItem onClick={handleClose} disableRipple>
          <span id="go-noti">IR A CENTRO DE NOTIFICACIONES</span>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
