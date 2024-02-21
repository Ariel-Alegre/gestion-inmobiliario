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
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ClientLead, UpdateClient } from "../../../../redux/action";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { AiOutlineSolution } from "react-icons/ai";
import { LuPhoneCall } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { TfiCommentAlt } from "react-icons/tfi";
import { MdOutlineEmail } from "react-icons/md";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
const styleDetails = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "90%",
  bgcolor: "background.paper",
  border: "5px solid #000",
  boxShadow: 24,
  p: 8,

  "@media (max-width: 1440px)": {
    width: "95%",
    height: "95%",
  },
};
const drawerWidth = 300;

function DetailsButton(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Remove this const when copying and pasting into your project.
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openDetails, setOpenDetails] = React.useState(false);

  const clientLead = useSelector((state) => state.clientLead);
  const handleOpenDetails = () => {
    setOpenDetails(true);
  };

  const handleClose = () => setOpenDetails(false);
  const [openSucces, setOpenSuccess] = React.useState(false);
  const [dataClient, setDataClient] = React.useState({
    name: "",
    email: "",
    phone: "",
    nationality: "",
    curp: "",
    country_of_origin: "",
    rfc: "",
    occupation: "",
    civil_status: "",
    lot_of_interest: "",
    municipality: "",
    country: "",
    state: "",
    address: "",
  });

  React.useEffect(() => {
    
  }, []);

  const handleSubmit = async (e) => {
    try {
      await dispatch(UpdateClient(clientLead.id, dataClient));
      console.log("Guardado exitosamente");


    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataClient((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <div className="avatar-details">
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 100, height: 100, border: "3px solid #000" }}
            />
          </Stack>
          <span className="details-name-modal">{clientLead.name}</span>
        </div>
        <div className="linea-account"></div>
        <div className="status-detail-lead">
          <div>
            ESTATUS: <span className="interesed">INTERESADO</span>
          </div>
          <div>
            CONTRATO: <span className="no-env">NO ENVIADO</span>
          </div>
          <div>
            MEDIO: <span className="whatsapp">WHATSAPP</span>
          </div>
          <div>
            ASESOR: <span>NAYELI S.</span>
          </div>
        </div>
      </List>
      <div className="icons-details-container">
        <LuPhoneCall className="icons-details" />
        <TfiCommentAlt className="icons-details" />
        <FaWhatsapp className="icons-details" />
        <MdOutlineEmail className="icons-details" />
      </div>
    </div>
  );
  return (
    <>
      <Button onClick={handleOpenDetails} sx={{ fontSize: 30, color: "#000" }}>
        <AiOutlineSolution />
      </Button>
      <Modal
        open={openDetails}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleDetails}>
          <CssBaseline />

          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
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

          <form onSubmit={handleSubmit} className="details-container">
            <div className="details-input-container">
              <div className="details-input">
                <div className="input-details">
                  <label>NOMBRE</label>
                  <input
                    type="text"
                    name="name"
                    className="lead-input-detail"
                    value={dataClient.name }
                    onChange={handleChange}
                  />
                </div>
                <div className="input-details">
                  <label>NACIONALIDAD</label>
                  <input
                    type="text"
                    name="nationality"
                    className="lead-input-detail"
                    value={dataClient.nationality || clientLead.nationality}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-details">
                  <label>CURP</label>
                  <input
                  name="curp"
                  type="text"
                   className="lead-input-detail"
                    value={dataClient.curp || clientLead.curp}
                    onChange={handleChange}
                    />
                </div>
                <div className="input-details">
                  <label>RFC</label>
                  <input
                   type="text"
                   name="rfc" 
                   className="lead-input-detail"
                   value={dataClient.rfc || clientLead.rfc}
                   onChange={handleChange}
                    />
                </div>
                <div className="input-details">
                  <label>ESTADO CIVIL</label>
                  <input
                   type="text"
                   name="civil_status"
                    className="lead-input-detail"
                    value={dataClient.civil_status || clientLead.civil_status}
                    onChange={handleChange}
                     />
                </div>
              </div>

              <div className="details-input">
                <div className="input-details">
                  <label> N* DE TELEFONO</label>
                  <input 
                  type="text"
                  name="phone"
                   className="lead-input-detail"
                   value={dataClient.phone || clientLead.phone}
                   onChange={handleChange}
                    />
                </div>
                <div className="input-details">
                  <label>EMAIL</label>
                  <input 
                  type="email"
                  name="email"
                   className="lead-input-detail"
                   value={dataClient.email || clientLead.email}
                   onChange={handleChange}
                    />
                </div>
                <div className="input-details">
                  <label>PAÍS DE ORIGEN</label>
                  <input 
                  type="text" 
                  name="country_of_origin" 
                  className="lead-input-detail" 
                    value={dataClient.country_of_origin || clientLead.country_of_origin}
                   onChange={handleChange}
                  />
                </div>
                <div className="input-details">
                  <label>OCUPACIÓN</label>
                  <input 
                  type="text"
                  name="occupation" 
                  className="lead-input-detail" 
                  value={dataClient.occupation || clientLead.occupation}
                  onChange={handleChange}
                  />
                </div>
                <div className="input-details">
                  <label>LOTE DE INTERÉS</label>
                  <input
                   type="text"
                   name="lot_of_interest"
                    className="lead-input-detail" 
                    value={dataClient.lot_of_interest || clientLead.lot_of_interest}
                    onChange={handleChange}
                    />
                </div>
              </div>
            </div>

            <div className="details-input-container2">
              <div className="details-input2">
                <div className="input-details">
                  <label>PAÍS</label>
                  <input type="text" className="lead-input-detail2" />
                </div>
                <div className="input-details">
                  <label>ESTADO</label>
                  <input type="text" className="lead-input-detail2" />
                </div>
                <div className="input-details">
                  <label>MUNICIPIO</label>
                  <input type="text" className="lead-input-detail2" />
                </div>
              </div>
            </div>

            <div className="details-textarea">
              <div className="details-input2">
                <div className="textarea-details">
                  <label>DIRECCIÓN</label>
                  <textarea type="text" className="lead-input-textarea" />
                </div>
              </div>
            </div>

            <div className="text-details">
              <strong>
                El domicilio es el mismo para el envío de contrato?
              </strong>
              <input type="checkbox" name="" id="" />
            </div>

            <div className="details-input-container2">
              <div className="details-input2">
                <div className="input-details">
                  <label>PAÍS</label>
                  <input type="text" className="lead-input-detail2" />
                </div>
                <div className="input-details">
                  <label>ESTADO</label>
                  <input type="text" className="lead-input-detail2" />
                </div>
                <div className="input-details">
                  <label>MUNICIPIO</label>
                  <input type="text" className="lead-input-detail2" />
                </div>
              </div>
            </div>

            <div className="details-textarea">
              <div className="details-input2">
                <div className="textarea-details">
                  <label>DIRECCIÓN</label>
                  <textarea type="text" className="lead-input-textarea" />
                </div>
              </div>
            </div>

            <div className="btn-add-details ">
              <Button
                variant="contained"
                sx={{
                  width: "20%",
                  left: "50%",
                  transform: "translateX(-20%)",
                }}
                type="submit"
              >
                GUARDAR
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
}

DetailsButton.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default DetailsButton;
