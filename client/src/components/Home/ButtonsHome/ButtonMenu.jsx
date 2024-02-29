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
import {useSelector, useDispatch} from 'react-redux'
import "../../../styles/App.css";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReactDOMServer from "react-dom/server";
import html2pdf from "html2pdf.js";
import { AllLead } from '../../../redux/action'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const ITEM_HEIGHT = 48;







const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};





export default function ButtonMenu() {
  const [state, setState] = React.useState({
    left: false,
  });
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const allLead = useSelector((state) => state.allLead);
 const [openPrice, setOpenPrice] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openLead = Boolean(anchorEl);


  const handlePrice = () => setOpenPrice(true)
  const handlePriceClose = () => setOpenPrice(false)



 
  const handleCloseLed = () => {
    setAnchorEl(null);
  };
  React.useEffect(() => {
    dispatch(AllLead())
  }, [dispatch]);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const tableCellStyle = {
  }
  const amortizacion = [
    {
      no: 1,
    fecha : "06-oct-22",
    esperando : "30.000,00",
    pago : "30.000,00",
    tipo: "enganche",
    estatus: "pagada"
},
{
  no: 2,
fecha : "06-oct-22",
esperando : "30.000,00",
pago : "30.000,00",
tipo: "enganche",
estatus: "pagada"
},
{
  no: 3,
fecha : "06-oct-22",
esperando : "30.000,00",
pago : "30.000,00",
tipo: "enganche",
estatus: "pagada"
},
{
  no: 4,
fecha : "06-oct-22",
esperando : "30.000,00",
pago : "30.000,00",
tipo: "enganche",
estatus: "pagada"
},
{
  no: 5,
fecha : "06-oct-22",
esperando : "30.000,00",
pago : "30.000,00",
tipo: "enganche",
estatus: "pagada"
},
{
  no: 6,
fecha : "06-oct-22",
esperando : "30.000,00",
pago : "30.000,00",
tipo: "enganche",
estatus: "pagada"
},
{
  no: 7,
fecha : "06-oct-22",
esperando : "30.000,00",
pago : "30.000,00",
tipo: "enganche",
estatus: "pagada"
},
{
  no: 8,
fecha : "06-oct-22",
esperando : "30.000,00",
pago : "30.000,00",
tipo: "enganche",
estatus: "pagada"
},
{
  no: 9,
fecha : "06-oct-22",
esperando : "30.000,00",
pago : "30.000,00",
tipo: "enganche",
estatus: "pagada"
}
]

  const colorText = {
   color: '#ff0000'
  };
  const pdfContent = (
    <div className='boletin_container_pdf'>
    <table className='boletin_table'>
      <div>
        <h5 style={{textAlign: 'center',paddingBottom: '50px', fontWeight: 700}}>
          ANEXO 3
        </h5>
      </div>
      <div></div>
      <div style={{display: 'flex',paddingBottom: '50px', }}>
        <div>
        <h5 style={{textAlign: 'left',paddingBottom: '50px', fontWeight: 700}}>
          ESTADO DE CUENTA 
        </h5>
      </div>

        <div>
          
        <h5 style={{marginLeft: "500px" ,paddingBottom: '50px', fontWeight: 700}}>
         24 de noviebre de 2023
        </h5>
        </div>
      </div>
      <thead>
        <tr>
          <th >Información del cliente</th>
          <th>Información del lote</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cliente: <label style={tableCellStyle}>Buenaventura Capella Fuentes</label></td>
          <td>Desarrollo:  <label  style={tableCellStyle}>SANTOSUELO / CORA</label></td>                                  
          </tr>

          <tr>
          <td>Email Cliente: <label style={tableCellStyle}>vcapella@live.com</label></td>
          <td>Teléfono:  <label  style={tableCellStyle}>998 386 7914</label></td>                                  
          </tr>

          <tr>
          <td>Fecha de Pago: <label style={tableCellStyle}>16 de Cada Mes</label></td>
          <td>Lote:  <label  style={tableCellStyle}>A01</label></td>                                  
          </tr>
          <tr>
          <td style={colorText}>¿Necesitas ayuda? ¡Llamame, estoy para ayudarte! </td>                                  
          <td>Referencia: <label style={tableCellStyle}>CR-01-A01</label></td>
          </tr>

          <tr>
          <td>Asesor: <label style={tableCellStyle}>Leticia Mejía</label></td>

          <td>Valor del Terreno: <label style={tableCellStyle}>$300.000,00</label></td>
          </tr>
          <tr>
          <td>Email: <label style={tableCellStyle}>posventas@grupouruz.com</label></td>

          <td>Total por cubrir: <label style={tableCellStyle}>$196.875,00</label></td>
          </tr>
          <tr>
          <td>Teléfono:: <label style={tableCellStyle}>9984 96 80 59</label></td>

          <td>Total Cubierto: <label style={tableCellStyle}>$103.125,00</label></td>
          </tr>
          <tr>
          <td>Ref. Banorte: <label style={tableCellStyle}>CR-01-AO1</label></td>
          <td>Pendiente por aplicar: <label style={tableCellStyle}></label></td>

          </tr>
   
      </tbody>
    </table>

    <table className='boletin_table'>


      <thead>
        <tr>
          <th >No</th>
          <th>Fecha</th>
          <th>Esperando MXN</th>
          <th>Pago MXN</th>
          <th>Tipo</th>
          <th>Estatus</th>




        </tr>
      </thead>
      <tbody>
          {amortizacion.map((row) => (  
        <tr>


            <td>{row.no}</td>
          <td>{row.fecha}</td>                                  
          <td>{row.esperando}</td>
          <td>{row.pago} </td>                                  
          <td>{row.tipo}  </td>
          <td>{row.estatus}   </td>     

          
          </tr>
          ))}

       
      </tbody>
    </table>
  </div>
  
  );
  const generatePdf = async (e) => {
    e.preventDefault();

    setLoading(true);
    const contentDiv = document.createElement("div");
    contentDiv.id = "pdfContent";
    contentDiv.innerHTML = ReactDOMServer.renderToString(pdfContent);

    try {
      const pdfOutput = await html2pdf(contentDiv, {
        margin: 10,
        filename: "formulario.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a3", orientation: "portrait" },
      });

      pdfOutput.save("formulario.pdf");
    } catch (error) {
      console.error("Error al generar el PDF:", error);
    } finally {
      setLoading(false);
    }
  };






  const list = (anchor) => (
    <div>
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300 }}
        role="presentation"

      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img
                  src={require("../../../image/ícono calendario.png")}
                  alt="Not found"
                  className="icons-menu"
                />
              </ListItemIcon>
              <ListItemText>
                <span className="text-menu">CALENDARIO</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
<Divider/>
          <ListItem disablePadding>
            <ListItemButton  onClick={handlePrice}>
              <ListItemIcon>
                <img
                  src={require("../../../image/ícono menú _cotizar_.png")}
                  alt="Not found"
                  className="icons-menu"
                />
              </ListItemIcon>
              <ListItemText>
                <span className="text-menu">COTIZAR</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>

<Divider/>
       
          <ListItem   disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img
                  src={require("../../../image/ícono contenido.png")}
                  alt="Not Found"
                  className="icono-navbar"
                />
              </ListItemIcon>
              <ListItemText>
                <span className="text-menu">CONTENIDO</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider/>

        </List>

        <ListItem sx={{ position: "absolute", bottom: 0 }}   disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img src={require("../../../image/ícono ayuda.png")} alt="Not found" className="icono-navbar" />

              </ListItemIcon>
              <ListItemText>
                <span className="text-menu">AYUDA</span>
              </ListItemText>
            </ListItemButton>
          </ListItem>

       
      </Box>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {" "}
            <img
              srcset={require("../../../image/Botón Menú_.png")}
              alt="Not Found"
            />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
          <Modal
        open={openPrice}
        onClose={handlePriceClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="price-modal">
<div>

          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{display:'flex', gap: '40%'}}>
            LEAD:     <select     style={{
                  height: "2%",
                  width: "50%",
                  background: "transparent",
                  color: "#000",
                  border: "2px solid #000",
                  "&:hover": {
                    border: "2px solid #000",
                    background: "transparent",
                  },
                }}>
            <option value="">A QUIEN CORRESPONDA</option>
           </select>
          </Typography>
</div>
<div>

          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{display:'flex', gap: '70%'}}>
            LOTE/S:  <div   >
            <label >AOL-01</label>
           </div>
          </Typography>
</div>
<div>

          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{display:'flex', gap: '40%'}}>
            MENSUALIDADES:  <select     style={{
                  height: "2%",
                  width: "50%",
                  background: "transparent",
                  color: "#000",
                  border: "2px solid #000",
                  "&:hover": {
                    border: "2px solid #000",
                    background: "transparent",
                  },
                }}>
            <option value="">6</option>
            <option value="">12</option>

            <option value="">24</option>
            <option value="">36</option>
            <option value="">48</option>



           </select>
          </Typography>
          </div>

          </div>

          <div className="ButtonMaterial">
          <Button
                sx={{
                  height: "2%",
                  width: "100%",
                  background: "transparent",
                  color: "#000",
                  border: "2px solid #000",
                  "&:hover": {
                    border: "2px solid #000",
                    background: "transparent",
                  },
                }}
                type="submit"
              >
               ELEGIR LOTE
              </Button>

              <Button
                sx={{
                  height: "2%",
                  width: "100%",
                  background: "transparent",
                  color: "#000",
                  border: "2px solid #000",
                  "&:hover": {
                    border: "2px solid #000",
                    background: "transparent",
                  },
                }}
                type="submit"
                onClick={generatePdf}
              >
                CREAR COTIZACIÓN
              </Button>
          </div>
        </Box>
      </Modal>
        </React.Fragment>
      ))}
    </div>
  );
}
