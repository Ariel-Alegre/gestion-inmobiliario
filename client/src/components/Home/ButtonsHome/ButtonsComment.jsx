import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "../../../styles/App.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";



export default function ButtonsComment() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div>
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 400 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Stack direction="row" spacing={2}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56, border: "3px solid #000" }}
                  />
                </Stack>
              </ListItemIcon>
              <ListItemText className="text-menu">
                <span className="text-menu">ANTONELLA PERALTA R.</span>
          <span className="subtext">codigo de asesor:123456</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <div className="linea-account"></div>
          <div className="Sublinea-account"></div>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText className="text-menu">
                <span className="text-menu">INFORMACIÓN PERSONAL</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <div className="Sublinea-account"></div>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText className="text-menu">
                <span className="text-menu">CAMBIAR CONTRASEÑA</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <div className="Sublinea-account"></div>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText className="text-menu">
                <span className="text-menu">BUZÓN RRHH</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <div className="Sublinea-account"></div>

        </List>
      </Box>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {" "}
            <img
                  src={require("../../../image/Botón mensajes.png")}
                  alt="Not found"
                  className="icono-navbar"
                />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
