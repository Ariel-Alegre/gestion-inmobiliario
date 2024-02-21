import * as React from "react";
import "../../../styles/App.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Lote from "./Lotes";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "react-bootstrap/Button";
import Modal from "@mui/material/Modal";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ButtonMaterial from "@mui/material/Button";
import SantosueloE1 from "./Lotes/SantosueloE1";
import SantosueloE2 from "./Lotes/SantosueloE2";
import SantosueloE3 from "./Lotes/SantosueloE3";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Carrusel() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [santosuelE1, setSantosuelE1] = React.useState(false);
  const [santosuelE2, setSantosuelE2] = React.useState(false);
  const [santosuelE3, setSantosuelE3] = React.useState(false);
  const [magicaVentura, setMagicaVentura] = React.useState(false);



  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option) => {
    setSantosuelE2(false)
    setSantosuelE3(false)
    setMagicaVentura(false)
    setSantosuelE1(true)
    handleClose();
  };

  const handleSantosuelE2 = (option) => {

    setSantosuelE1(false)
    setSantosuelE3(false)
    setMagicaVentura(false)

    setSantosuelE2(true)
    handleClose();
  };

  const handleSantosuelE3 = (option) => {
    setMagicaVentura(false)

    setSantosuelE1(false)
    setSantosuelE2(false)

    setSantosuelE3(true)
    handleClose();
  };
  const handleMagicaVentura = (option) => {
    
    setSantosuelE1(false)
    setSantosuelE2(false)
    
    setSantosuelE3(false)
    setMagicaVentura(true)
    handleClose();
  };

  return (
    <div>
      <Splide
        options={{
          type: "slide",
          perPage: 1,
          perMove: 1,
          pagination: false,
        }}
      >
        <SplideSlide>
          <div className="img-carrusel-container">
            
            {magicaVentura ? (
              <SantosueloE1 className="img-santoueloE1" />

              ) : santosuelE2 ? (
                <SantosueloE2 className="img-santoueloE1" />
                
                ) : santosuelE3 ? (
                  <SantosueloE3 className="img-santoueloE1" />
                  
                  ) : (
              <Lote className="img-carrusel" />


            )}
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="img-carrusel-container">
            <Lote />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="img-carrusel-container">
            <Lote className="img-carrusel" />
          </div>
        </SplideSlide>
      </Splide>
      <div      style={{
          position: "fixed",
          bottom: "70px",
          right: "100px",
          background: "transparent",
          color: "blue",
          textAlign: "center"
     
        }}>
          
      VER PROYECTO COMPLETO
      </div>
      <div>
      <Button
        variant="primary"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "20%",
          background: "transparent",
          color: "#000",
          border: "2px solid #000",
          "&:hover": {
            border: "2px solid #000",
            background: "transparent",
          },
        }}
        onClick={handleClick}
      >
                {magicaVentura ? (
          <span>SANTOSUELO: MAGICAVENTURA</span>
        ) : santosuelE2 ? (
          <span>SANTOSUELO: ETAPA 2</span>
        ) : santosuelE3 ? (
          <span>SANTOSUELO: ETAPA 3</span>
        ) : (
          <span>SANTOSUELO: ETAPA 1</span>
        )}
      </Button>
      <Menu
        id="my-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom', // Despliega desde la parte inferior
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top', // Despliega hacia arriba
          horizontal: 'center',
        }}

      >
        <MenuItem onClick={handleMagicaVentura}>Magicaventura</MenuItem>

        <MenuItem onClick={handleSantosuelE3}>Santosuelo:E3</MenuItem>

        <MenuItem onClick={ handleSantosuelE2}>Santosuelo:E2</MenuItem>
        <MenuItem onClick={handleMenuItemClick}>Santosuelo:E1</MenuItem>
        {/* Agrega más opciones según sea necesario */}
      </Menu>
    </div>
      
      </div>
  );
}
