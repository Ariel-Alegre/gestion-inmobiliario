import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import "../../../styles/App.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, DataPersonal } from "../../../redux/action";
import Divider from "@mui/material/Divider";

export default function ButtonAccount() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataPersonal = useSelector((state) => state.dataPersonal);
  const token = useSelector((state) => state.token);
  const role = useSelector((state) => state.role);

  const [state, setState] = React.useState({
    right: false,
  });

  React.useEffect(() => {
    dispatch(DataPersonal(token));
  }, [dispatch, token]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleLogout = () => {
    // Antes de eliminar el token, verifica que esté almacenado correctamente
    const storedToken = localStorage.getItem("token");
    console.log("Token almacenado:", storedToken);

    // Dispatch de la acción de cierre de sesión (asegúrate de que esto funcione correctamente)
    dispatch(logout());

    // Navega a la ruta '/' después del cierre de sesión (asegúrate de que navigate esté definido)
    navigate("/");

    // Elimina el token del localStorage
    localStorage.removeItem("token");
    console.log("Token eliminado");

    // Puedes agregar más mensajes de depuración según sea necesario
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
                    src={
                      dataPersonal.avatar
                        ? dataPersonal.avatar
                        : "/static/images/avatar/1.jpg"
                    }
                    sx={{
                      width: 56,
                      height: 56,
                      border: "3px solid #000",
                      backgroundColor: dataPersonal.backgroundColor,
                    }}
                  >
                    {dataPersonal.name ? dataPersonal.name[0] : null}
                  </Avatar>
                </Stack>
              </ListItemIcon>
              <ListItemText className="text-menu">
                <span className="text-menu">
                  {dataPersonal.name} {dataPersonal.lastName}{" "}
                </span>
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
        {role === "admin" ? (
          <Link to="/admin">
            <ListItem
              sx={{ position: "absolute", bottom: 50, color: "#000" }}
              disablePadding
            >
              <ListItemButton>
                <ListItemText className="text-menu">
                  <span className="text-menu">PANEL ADMINISTRATIVO</span>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
        ) : null}
        <ListItem sx={{ position: "absolute", bottom: 0 }} disablePadding>
          <ListItemButton onClick={handleLogout}>
            <ListItemText className="text-menu">
              <span className="text-menu">CERRAR SESIÓN</span>
            </ListItemText>
          </ListItemButton>
        </ListItem>
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
              srcset={require("../../../image/Botón cuentas.png")}
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
