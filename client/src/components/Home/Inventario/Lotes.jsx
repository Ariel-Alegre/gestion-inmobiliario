import * as React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ButtonMaterial from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { DataPersonal, addLead, AllLead } from "../../../redux/action";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import { GrContact } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { TfiCommentAlt } from "react-icons/tfi";
import { MdOutlineEmail } from "react-icons/md";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { useDropzone } from "react-dropzone";
import AddIcon from "@mui/icons-material/Add";
import Snackbar from "@mui/material/Snackbar";
import { Card, CardContent, Typography, useTheme } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import "../../../styles/App.css";
import ReactDOMServer from "react-dom/server";
import html2pdf from "html2pdf.js";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import SendIcon from '@mui/icons-material/Send';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';



const ITEM_HEIGHT = 48;
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
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const drawerWidth = 300;

const SvgComponent = (props) => {
  const { clientId } = useParams();
  const dispatch = useDispatch();
  const clientLead = useSelector((state) => state.clientLead);
  const allLead = useSelector((state) => state.allLead);
  const [identifyImage, setIdentifyImage] = React.useState(null);
  const theme = useTheme();
  const [addressImage, setAddressImage] = React.useState(null);
  const [lote, setLotes] = React.useState("apa");
  const [selectedLote, setSelectedLote] = React.useState(null);
  const [imagePreview, setImagePreview] = React.useState(null);
  const [proofPreview, setProofPreview] = React.useState(null);
  const [identifyOficial, setIdentifyOficial] = React.useState(null);
  const [contrat, setContrat] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openLead = Boolean(anchorEl);
  const handleClickLead = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseLed = () => {
    setAnchorEl(null);
  };
  const hanleContrat = (e) => {
    e.preventDefault()
    setContrat(true)

  }


  const [openPoly, setOpenPoly] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);
  const [open9, setOpen9] = React.useState(false);
  const [open10, setOpen10] = React.useState(false);
  const [open11, setOpen11] = React.useState(false);
  const [open12, setOpen12] = React.useState(false);
  const [open13, setOpen13] = React.useState(false);
  const [open14, setOpen14] = React.useState(false);
  const [open15, setOpen15] = React.useState(false);
  const [open16, setOpen16] = React.useState(false);
  const [open17, setOpen17] = React.useState(false);
  const [open18, setOpen18] = React.useState(false);
  const [open19, setOpen19] = React.useState(false);
  const [open20, setOpen20] = React.useState(false);
  const [open21, setOpen21] = React.useState(false);
  const [open22, setOpen22] = React.useState(false);
  const [open23, setOpen23] = React.useState(false);
  const [open24, setOpen24] = React.useState(false);
  const [open25, setOpen25] = React.useState(false);
  const [open26, setOpen26] = React.useState(false);
  const [open27, setOpen27] = React.useState(false);
  const [open28, setOpen28] = React.useState(false);
  const [open29, setOpen29] = React.useState(false);
  const [open30, setOpen30] = React.useState(false);
  const [open31, setOpen31] = React.useState(false);
  const [open32, setOpen32] = React.useState(false);
  const [open33, setOpen33] = React.useState(false);
  const [open34, setOpen34] = React.useState(false);
  const [open35, setOpen35] = React.useState(false);
  const [open36, setOpen36] = React.useState(false);
  const [open37, setOpen37] = React.useState(false);
  const [open38, setOpen38] = React.useState(false);
  const [open39, setOpen39] = React.useState(false);
  const [open40, setOpen40] = React.useState(false);
  const [open41, setOpen41] = React.useState(false);
  const [open42, setOpen42] = React.useState(false);
  const [open43, setOpen43] = React.useState(false);
  const [open44, setOpen44] = React.useState(false);
  const [open45, setOpen45] = React.useState(false);
  const [open46, setOpen46] = React.useState(false);
  const [open47, setOpen47] = React.useState(false);
  const [open48, setOpen48] = React.useState(false);
  const [open49, setOpen49] = React.useState(false);
  const [open50, setOpen50] = React.useState(false);
  const [open51, setOpen51] = React.useState(false);
  const [open52, setOpen52] = React.useState(false);
  const [open53, setOpen53] = React.useState(false);
  const [open54, setOpen54] = React.useState(false);
  const [open55, setOpen55] = React.useState(false);
  const [open56, setOpen56] = React.useState(false);
  const [open57, setOpen57] = React.useState(false);
  const [open58, setOpen58] = React.useState(false);
  const [open59, setOpen59] = React.useState(false);
  const [open60, setOpen60] = React.useState(false);
  const [open61, setOpen61] = React.useState(false);
  const [open62, setOpen62] = React.useState(false);
  const [open63, setOpen63] = React.useState(false);
  const [open64, setOpen64] = React.useState(false);
  const [open65, setOpen65] = React.useState(false);
  const [open66, setOpen66] = React.useState(false);
  const [open67, setOpen67] = React.useState(false);
  const [open68, setOpen68] = React.useState(false);
  const [open69, setOpen69] = React.useState(false);
  const [open70, setOpen70] = React.useState(false);
  const [open71, setOpen71] = React.useState(false);
  const [open72, setOpen72] = React.useState(false);
  const [open73, setOpen73] = React.useState(false);
  const [open74, setOpen74] = React.useState(false);
  const [open75, setOpen75] = React.useState(false);
  const [open76, setOpen76] = React.useState(false);
  const [open77, setOpen77] = React.useState(false);
  const [open78, setOpen78] = React.useState(false);
  const [open79, setOpen79] = React.useState(false);
  const [open80, setOpen80] = React.useState(false);
  const [open81, setOpen81] = React.useState(false);
  const [open82, setOpen82] = React.useState(false);
  const [open83, setOpen83] = React.useState(false);
  const [open84, setOpen84] = React.useState(false);
  const [open85, setOpen85] = React.useState(false);
  const [open86, setOpen86] = React.useState(false);
  const [open87, setOpen87] = React.useState(false);
  const [open88, setOpen88] = React.useState(false);
  const [open89, setOpen89] = React.useState(false);
  const [open90, setOpen90] = React.useState(false);
  const [open91, setOpen91] = React.useState(false);
  const [open92, setOpen92] = React.useState(false);
  const [open93, setOpen93] = React.useState(false);
  const [open94, setOpen94] = React.useState(false);
  const [open95, setOpen95] = React.useState(false);
  const [open96, setOpen96] = React.useState(false);
  const [open97, setOpen97] = React.useState(false);
  const [open98, setOpen98] = React.useState(false);
  const [open99, setOpen99] = React.useState(false);
  const [open100, setOpen100] = React.useState(false);
  const [open101, setOpen101] = React.useState(false);
  const [open102, setOpen102] = React.useState(false);
  const [open103, setOpen103] = React.useState(false);
  const [open104, setOpen104] = React.useState(false);
  const [open105, setOpen105] = React.useState(false);
  const [open106, setOpen106] = React.useState(false);
  const [open107, setOpen107] = React.useState(false);
  const [open108, setOpen108] = React.useState(false);
  const [open109, setOpen109] = React.useState(false);
  const [open110, setOpen110] = React.useState(false);
  const [open111, setOpen111] = React.useState(false);
  const [open112, setOpen112] = React.useState(false);
  const [open113, setOpen113] = React.useState(false);
  const [open114, setOpen114] = React.useState(false);
  const [open115, setOpen115] = React.useState(false);
  const [open116, setOpen116] = React.useState(false);
  const [open117, setOpen117] = React.useState(false);
  const [open118, setOpen118] = React.useState(false);
  const [open119, setOpen119] = React.useState(false);
  const [open120, setOpen120] = React.useState(false);
  const [open121, setOpen121] = React.useState(false);
  const [open122, setOpen122] = React.useState(false);
  const [open123, setOpen123] = React.useState(false);
  const [open124, setOpen124] = React.useState(false);
  const [open125, setOpen125] = React.useState(false);
  const [open126, setOpen126] = React.useState(false);
  const [open127, setOpen127] = React.useState(false);
  const [open128, setOpen128] = React.useState(false);
  const [open129, setOpen129] = React.useState(false);
  const [open130, setOpen130] = React.useState(false);
  const [open131, setOpen131] = React.useState(false);
  const [open132, setOpen132] = React.useState(false);
  const [open133, setOpen133] = React.useState(false);
  const [open134, setOpen134] = React.useState(false);
  const [open135, setOpen135] = React.useState(false);
  const [open136, setOpen136] = React.useState(false);
  const [open137, setOpen137] = React.useState(false);
  const [open138, setOpen138] = React.useState(false);
  const [open139, setOpen139] = React.useState(false);
  const [open140, setOpen140] = React.useState(false);
  const [open141, setOpen141] = React.useState(false);
  const [open142, setOpen142] = React.useState(false);
  const [open143, setOpen143] = React.useState(false);
  const [open144, setOpen144] = React.useState(false);
  const [open145, setOpen145] = React.useState(false);
  const [open146, setOpen146] = React.useState(false);
  const [open147, setOpen147] = React.useState(false);
  const [open148, setOpen148] = React.useState(false);
  const [open149, setOpen149] = React.useState(false);
  const [open150, setOpen150] = React.useState(false);
  const [open151, setOpen151] = React.useState(false);
  const [open152, setOpen152] = React.useState(false);
  const [open153, setOpen153] = React.useState(false);
  const [open154, setOpen154] = React.useState(false);
  const [open155, setOpen155] = React.useState(false);
  const [open156, setOpen156] = React.useState(false);
  const [open157, setOpen157] = React.useState(false);
  const [open158, setOpen158] = React.useState(false);
  const [open159, setOpen159] = React.useState(false);
  const [open160, setOpen160] = React.useState(false);
  const [open161, setOpen161] = React.useState(false);
  const [open162, setOpen162] = React.useState(false);
  const [open163, setOpen163] = React.useState(false);
  const [open164, setOpen164] = React.useState(false);
  const [open165, setOpen165] = React.useState(false);
  const [open166, setOpen166] = React.useState(false);
  const [open167, setOpen167] = React.useState(false);
  const [open168, setOpen168] = React.useState(false);
  const [open169, setOpen169] = React.useState(false);
  const [open170, setOpen170] = React.useState(false);
  const [open171, setOpen171] = React.useState(false);
  const [open172, setOpen172] = React.useState(false);
  const [open173, setOpen173] = React.useState(false);
  const [open174, setOpen174] = React.useState(false);
  const [open175, setOpen175] = React.useState(false);
  const [open176, setOpen176] = React.useState(false);
  const [open177, setOpen177] = React.useState(false);
  const [open178, setOpen178] = React.useState(false);
  const [open179, setOpen179] = React.useState(false);
  const [open180, setOpen180] = React.useState(false);
  const [open181, setOpen181] = React.useState(false);
  const [open182, setOpen182] = React.useState(false);
  const [open183, setOpen183] = React.useState(false);
  const [open184, setOpen184] = React.useState(false);
  const [open185, setOpen185] = React.useState(false);
  const [open186, setOpen186] = React.useState(false);
  const [open187, setOpen187] = React.useState(false);
  const [open188, setOpen188] = React.useState(false);
  const [open189, setOpen189] = React.useState(false);
  const [open190, setOpen190] = React.useState(false);
  const [open191, setOpen191] = React.useState(false);
  const [open192, setOpen192] = React.useState(false);
  const [open193, setOpen193] = React.useState(false);
  const [open194, setOpen194] = React.useState(false);
  const [open195, setOpen195] = React.useState(false);
  const [open196, setOpen196] = React.useState(false);
  const [open197, setOpen197] = React.useState(false);
  const [open198, setOpen198] = React.useState(false);
  const [open199, setOpen199] = React.useState(false);
  const [open200, setOpen200] = React.useState(false);
  const [open201, setOpen201] = React.useState(false);
  const [open202, setOpen202] = React.useState(false);
  const [open203, setOpen203] = React.useState(false);
  const [open204, setOpen204] = React.useState(false);
  const [open205, setOpen205] = React.useState(false);
  const [open206, setOpen206] = React.useState(false);
  const [open207, setOpen207] = React.useState(false);
  const [open208, setOpen208] = React.useState(false);
  const [open209, setOpen209] = React.useState(false);
  const [open210, setOpen210] = React.useState(false);
  const [open211, setOpen211] = React.useState(false);
  const [open212, setOpen212] = React.useState(false);
  const [open213, setOpen213] = React.useState(false);
  const [open214, setOpen214] = React.useState(false);
  const [open215, setOpen215] = React.useState(false);
  const [open216, setOpen216] = React.useState(false);
  const [open217, setOpen217] = React.useState(false);
  const [open218, setOpen218] = React.useState(false);
  const [open219, setOpen219] = React.useState(false);
  const [open220, setOpen220] = React.useState(false);
  const [open221, setOpen221] = React.useState(false);
  const [open222, setOpen222] = React.useState(false);
  const [open223, setOpen223] = React.useState(false);
  const [open224, setOpen224] = React.useState(false);
  const [open225, setOpen225] = React.useState(false);
  const [open226, setOpen226] = React.useState(false);
  const [open227, setOpen227] = React.useState(false);
  const [open228, setOpen228] = React.useState(false);
  const [open229, setOpen229] = React.useState(false);
  const [open230, setOpen230] = React.useState(false);
  const [open231, setOpen231] = React.useState(false);
  const [open232, setOpen232] = React.useState(false);
  const [open233, setOpen233] = React.useState(false);
  const [open234, setOpen234] = React.useState(false);

  const dataPersonal = useSelector((state) => state.dataPersonal);
  const token = useSelector((state) => state.token);
  const [currentDate, setCurrentDate] = React.useState(new Date());

  React.useEffect(() => {
    dispatch(DataPersonal(token));
  }, [dispatch, token]);

  React.useEffect(() => {
    // Esta función se ejecutará después de que el componente se monte
    const intervalId = setInterval(() => {
      // Actualizar el estado con la fecha actual
      setCurrentDate(new Date());
    }, 24 * 60 * 60 * 1000); // Intervalo de 24 horas

    // Esta función se ejecutará cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);
  const [loading, setLoading] = React.useState(false);
  const [loadingAdd, setLoadingAdd] = React.useState(false);

  const [dataClient, setDataClient] = React.useState({
    name: "",
    lastName: "",
    birthDate: "",
    age: "",
    outdoor_Number: "",
    ine_passport: "",
    name_conyugue: "",
    age_conyugue: "",
    fractionation_or_colony: "",
    municipality_or_mayor: "",
    postal_code: "",
    avatar: "",
    email: "",
    phone: "",
    nationality: "",
    curp: "",
    country_of_origin: "",
    rfc: "",
    occupation: "",
    civil_status: "",
    lot_of_interest: "",
    identify_oficial: "",
    proof_of_address: "",
    municipality: "",
    country: "",
    state: "",
    address: "",
    lote: "",
  });
  const [openSucces, setOpenSuccess] = React.useState(false);

  const [openDetails, setOpenDetails] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingAdd(true);

    const formData = new FormData();
    formData.append("name", dataClient.name);
    formData.append("lastName", dataClient.lastName);
    formData.append("birthDate", dataClient.birthDate);
    formData.append("age", dataClient.age);
    formData.append("outdoor_Number", dataClient.outdoor_Number);

    formData.append("fractionation_or_colony", dataClient.fractionation_or_colony);
    formData.append("municipality_or_mayor", dataClient.municipality_or_mayor);

    formData.append("postal_code    ", dataClient.postal_code);

    
    formData.append("avatar", dataClient.avatar);
    formData.append("email", dataClient.email);
    formData.append("phone", dataClient.phone);
    formData.append("nationality", dataClient.nationality);
    formData.append("curp", dataClient.curp);
    formData.append("country_of_origin", dataClient.country_of_origin);
    formData.append("rfc", dataClient.rfc);
    formData.append("occupation", dataClient.occupation);
    formData.append("civil_status", dataClient.civil_status);
    formData.append("lot_of_interest", dataClient.lot_of_interest);
    formData.append("municipality", dataClient.municipality);
    formData.append("country", dataClient.country);
    formData.append("state", dataClient.state);
    formData.append("address", dataClient.address);
    formData.append("lote", dataClient.lote);
    formData.append("proof", dataClient.proof_of_address);
    formData.append("identify", dataClient.identify_oficial);
    formData.append("ine_passport", dataClient.ine_passport);
    formData.append("name_conyugue", dataClient.name_conyugue);
    formData.append("age_conyugue", dataClient.age_conyugue);



    try {
      await dispatch(addLead(formData));
      setLoadingAdd(false);
      setOpenSuccess(true);

      setTimeout(async () => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataClient({
      ...dataClient,
      [name]: value,
    });
  };

  const tableCellStyle = {
    border: "1px solid black",
    textAlign: "left",
  };

  React.useEffect(() => {
    dispatch(AllLead())
  }, [dispatch]);
  const pfd = (
    <div>
      <div id="pdfContent">
        <div className="awesome">
          <p>
            <b>CARÁTULA DE CONTRATO DE PROMESA DE COMPRAVENTA </b>
          </p>
          <p style={{ textAlign: "end" }}>
            <b> CA-PF-001/2023 </b>
          </p>
          <p> </p>
          <p style={{ textAlign: "center" }}>
            FECHA DE FIRMA DEL CONTRATO:{" "}
            <label className="linea-data">
              {" "}
              {currentDate.toLocaleString()}
            </label>
          </p>
          <p>
            <b>
              1.- Descripción del inmueble objeto de la promesa de compraventa:
            </b>
          </p>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                <th style={tableCellStyle}>a) Nombre del Desarrollo</th>
                <th style={tableCellStyle}>Santo Suelo.</th>
                <th style={tableCellStyle}>
                  b) Folio Electrónico de todo el Terreno:
                </th>
                <th style={tableCellStyle}>__</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tableCellStyle}>c) Etapa y régimen</td>
                <td style={tableCellStyle}>Cora, Régimen Condominal.</td>
                <td style={tableCellStyle}>d) Municipio y Estado</td>
                <td style={tableCellStyle}>Valladolid, Yucatán </td>
              </tr>
              <tr>
                <td style={tableCellStyle}>
                  e) Número de identificación del Lote (El Inmueble)
                </td>
                <td style={tableCellStyle}>
                  (poner número de lote prometido en venta- en número y letra-){" "}
                </td>
                <td style={tableCellStyle}>
                  f) Superficie del Lote en metros cuadrados.{" "}
                  <p>g) Figura del Lote.</p>
                </td>
                <td style={tableCellStyle}>
                  __#__ m. ___ metros cuadrados.letra <hr />{" "}
                  <p>Regular / Irregular</p>
                </td>
              </tr>

              <tr>
                <td style={tableCellStyle}>
                  h) Descripción de medidas del Lote (El Inmueble).
                </td>
                <td style={tableCellStyle}>
                  Fondo:_#_m._letra___metros.{" "}
                  <p>Ancho: _#_m._letra__ metros. </p>
                </td>
                <td style={tableCellStyle}>
                  i) Arras Confirmatorias convenidas{" "}
                  <p>
                    j) Precio cierto y en dinero consistente en la cantidad
                    máxima acordada.{" "}
                  </p>{" "}
                </td>
                <td style={tableCellStyle}>
                  i) y j): $__ (Son ## pesos Mexicanos__/100 M.N.).{" "}
                  <p>
                    {" "}
                    <tr>
                      <td style={tableCellStyle}>
                        k) Referencia bancaria para este
                        pago:____________(Claúsula 3a){" "}
                      </td>
                    </tr>
                  </p>{" "}
                </td>
              </tr>

              <tr>
                <td style={tableCellStyle}>
                  l) Fecha compromiso para la celebración del Contrato
                  definitivo de compraventa del Inmueble y de su entrega.{" "}
                </td>
                <td style={tableCellStyle}>
                  24 veinticuatro /48 cuarenta y ocho /60 sesenta meses Contados
                  a partir del día siguiente a la fecha de firma del presente.{" "}
                </td>
                <td style={tableCellStyle}>
                  m) Fecha de término de este Contrato.{" "}
                </td>
                <td style={tableCellStyle}>
                  __EN LETRA___ Ejem: treinta de diciembre de dos mil Ejem:
                  treinta de diciembre de dos mil veintiséis.{" "}
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <b>
              2.- Información y Generales que proporciona y manifiesta bajo
              protesta de decir verdad el Promitente Comprador:{" "}
            </b>
          </p>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                <th style={tableCellStyle}>NOMBRE (S)</th>
                <th style={tableCellStyle}>{dataClient.name}</th>
                <th style={tableCellStyle}>APELLIDOS</th>
                <th style={tableCellStyle}>{dataClient.lastName}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tableCellStyle}>Lugar de Nacimiento</td>
                <td style={tableCellStyle}>{dataClient.country_of_origin}</td>
                <td style={tableCellStyle}>Fecha de nacimiento</td>
                <td style={tableCellStyle}>{dataClient.birthDate}</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>Nacionalidad</td>
                <td style={tableCellStyle}>{dataClient.nationality}</td>
                <td style={tableCellStyle}>Edad</td>
                <td style={tableCellStyle}>{dataClient.age}</td>
              </tr>

              <tr>
                <td style={tableCellStyle}>Estado Civil y Régimen de bienes</td>
                <td style={tableCellStyle}>
                  Soltero / Casado <hr />{" "}
                  <p>
                    No aplica (para soltero) / Separación de bienes / Sociedad
                    legal/conyugal.
                  </p>
                </td>
                <td style={tableCellStyle}>Nombre y Apellidos del cónyuge</td>
                <td style={tableCellStyle}>{dataClient.name_conyugue}</td>
              </tr>

              <tr>
                <td style={tableCellStyle}>Ocupación</td>
                <td style={tableCellStyle}>{dataClient.occupation}</td>
                <td style={tableCellStyle}>CURP</td>
                <td style={tableCellStyle}>{dataClient.curp}</td>
              </tr>

              <tr>
                <td style={tableCellStyle}>
                  Registro Federal de Contribuyente
                </td>
                <td style={tableCellStyle}>___</td>
                <td style={tableCellStyle}>Régimen Fiscal vigente</td>
                <td style={tableCellStyle}>
                  (escribir tal y como lo señala su CSF),
                </td>
              </tr>

              <tr>
                <td style={tableCellStyle}>Identificación Oficial</td>
                <td style={tableCellStyle}>
                  INE/PASAPORTE Número: {dataClient.ine_passport}
                </td>
                <td style={tableCellStyle}>Número telefónico</td>
                <td style={tableCellStyle}>{dataClient.phone}</td>
              </tr>

              <tr>
                <td style={tableCellStyle}>Domicilio Calle</td>
                <td style={tableCellStyle}>{dataClient.address}</td>
                <td style={tableCellStyle}>Número exterior Número interior</td>
                <td style={tableCellStyle}>{dataClient.outdoor_Number}</td>
              </tr>

              <tr>
                <td style={tableCellStyle}>Fraccionamiento o Colonia</td>
                <td style={tableCellStyle}>
                  {dataClient.fractionation_or_colony}
                </td>
                <td style={tableCellStyle}>Municipio o Alcaldía</td>
                <td style={tableCellStyle}>
                  {dataClient.municipality_or_mayor}
                </td>
              </tr>

              <tr>
                <td style={tableCellStyle}>Estado</td>
                <td style={tableCellStyle}>{dataClient.state}</td>
                <td style={tableCellStyle}>País</td>
                <td style={tableCellStyle}>{dataClient.country}</td>
              </tr>

              <tr>
                <td style={tableCellStyle}>Código Postal</td>
                <td style={tableCellStyle}>{dataClient.postal_code}</td>
                <td style={tableCellStyle}>Correo Electrónico</td>
                <td style={tableCellStyle}>{dataClient.email}</td>
              </tr>
            </tbody>
          </table>
          <p>
            Esta Carátula es parte integral del Contrato con folio al rubro
            señalado, constante de 11 fojas útiles, debidamente firmado por Las
            Partes. Misma que en lo sucesivo cuando se aluda la “<b>Carátula</b>
            ”, se entenderá por el contenido de esta página.
          </p>
          <p>
            <b> </b>
          </p>
          <div className="flex">
            <div className="grid">
              <b>La Promitente Vendedora </b>
              <div>
                <p className="linea-data">
                  {dataPersonal.name} {dataPersonal.lastName}
                </p>
              </div>
            </div>
            <div className="grid">
              <b>El Promitente Comprador</b>
              <div>
                <div className="grid-info">{dataClient.name}</div>
                <b>_______________________ </b>
                <p>
                  <b>NOMBRE Y APELLIDOS</b>
                </p>
              </div>
            </div>
          </div>
          <div>
            <p>
              CONTRATO DE ADHESIÓN DE PROMESA DE COMPRAVENTA DE INMUEBLE QUE
              CELEBRAN POR UNA PARTE LA PERSONA MORAL DENOMINADA “INTERMAYA DEL
              CARIBE” S.A. DE C.V., REPRESENTADA EN ESTE ACTO POR EL C. EDGAR
              IVAN RIVERA VAZQUEZ EN SU CARÁCTER DE ADMINISTRADOR ÚNICO, EN
              REPRESENTACIÓN DE “QR BIENES RAÍCES” S.A.P.I. DE C.V., COMO SU
              MANDATARIA; EN LO SUCESIVO LA PROMITENTE VENDEDORA Y POR LA OTRA
              PARTE EL C. __________________________________________, EN LO
              SUCESIVO EL PROMITENTE COMPRADOR Y CONJUNTAMENTE SE LES DENOMINARÁ
              LAS PARTES, DE CONFORMIDAD CON LAS SIGUIENTES DECLARACIONES Y
              CLÁUSULAS.
              ----------------------------------------------------------
            </p>
            <p>
              <b>
                --I.- Declara la Promitente Vendedora por conducto de su
                Administrador Único que:
              </b>
            </p>
            <p>
              <b>--I.1</b> Es una sociedad mercantil denominada “INTERMAYA DEL
              CARIBE, S.A. DE C.V.”, legalmente constituida conforme a las leyes
              de los Estados Unidos Mexicanos, según consta en la escritura
              pública número mil cuatrocientos siete de fecha 18 de diciembre de
              2020, otorgada ante la Fe del Licenciado Edgar Gregorio Ordoñez
              Durán, Titular de la Notaría Pública número setenta y nueve del
              estado de Quintana Roo en Cancún; inscrita en el Registro Público
              de la Propiedad y del Comercio de la citada ciudad, bajo el folio
              mercantil número trescientos sesenta y ocho mil trescientos
              setenta y seis y el electrónico N-2021009142. Que cuenta con su
              Registro Federal de Contribuyentes RFC ICA2012185T0, con Régimen
              General de Ley Personas Morales.
              -------------------------------------------------------------------------------------------------------------------------------------------------
            </p>

            <p>
              <b>--I.2</b> Está autorizada según su objeto social, para
              suscribir el presente Contrato y realizar cualquier acto
              relacionado con la industria de la construcción y su
              comercialización, elaboración de proyectos de Desarrollo
              residencial, habitacional, en general cualquier clase de obras y/o
              proyectos de construcción, edificación, urbanización, la
              promoción, proyecto, diseño, fraccionamiento, comercialización y
              construcción por cuenta propia o de terceros, de conjuntos
              inmobiliarios, entre otros, como consta en su escritura
              constitutiva ya descrita, por lo que tiene capacidad jurídica y
              económica para obligarse en los términos de este Contrato.
              --------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>
            <p>
              <b>--I.3 EL C. EDGAR IVAN RIVERA VAZQUEZ</b> comparece en este
              acto en su carácter de Administrador Único con facultades de
              apoderado legal de “INTERMAYA DEL CARIBE”, S.A. DE C.V., cuenta
              plena capacidad y facultades para obligarla en los términos y
              condiciones de este Contrato, como consta en la Escritura Pública
              descrita en la Declaración I.1 que antecede; facultades que no le
              han sido revocadas ni modificadas en forma alguna. Asimismo, se
              identifica con credencial de elector número 1896084617, expedida
              por el Instituto Nacional Electoral.
              ------------------------------------------------------------------------------------
            </p>
            <p>
              <b>--I.4</b> Posee los derechos de comercialización y venta sobre
              una fracción equivalente a cincuenta hectáreas del Tablaje
              denominado X-Yalxam y Anexas X-Kamlun, ubicado en la Localidad de
              Tikuch, Municipio de Valladolid, Estado de Yucatán; clase rústico,
              superficie de 696,051.92m2 y las siguientes Colindancias: al Norte
              en 29.44 + 49.51 + 34.23 + 48.80 + 52.60 + 27.84 + 34.33 + 24.87 +
              39.02 + 53.21 + 48.20 + 23.38 + 33.08 + 23.27 + 11.72 + 20.96 +
              15.79 + 24.95 metros con Ejido Tikuch – César Kumul Pool; al
              Noroeste en 50.26 + 61.02 + 21.61 + 31.38 + 38.28 + 28.47 + 103.37
              + 69.19 + 112.69 + 83.35 + 32.35 + 27.82 + 11.48 metros con Predio
              Kantu - César Kumul Pool; al Sureste en 65.29 + 113.82 + 124.44 +
              40.47 + 124.44 + 40.47 + 129.86 + 52.22 + 28.48 + 28.26 metros con
              Predio Santa María – Máximo Loria Keuel; al Suroeste en 237.33
              metros con Predio Santosuelo y al Oeste en 1,479.18 metros con
              Predio conocido como Santosuelo; visible en la Chepina Adjunta al
              presente con el número de Anexo 1 como parte integral de este
              Contrato; en el que se constituirá un Desarrollo Inmobiliario en
              condominio horizontal, que se conocerá como etapa denominada
              “Cora”, dentro del proyecto del Desarrollo General, conocido como
              “Santosuelo”, que estará conformada por quinientos cuarenta y dos
              Lotes; sujeto al régimen condominal en términos de su escritura
              pública constitutiva, instrumento en el que estarán referidas las
              correspondientes áreas de uso común y porcentaje de indiviso; del
              que cuenta con su posesión derivada y es adquirente en
              proceso.--------------------------------------------------------------------
              ---Esto último consta en el Contrato privado de fecha 14 de
              noviembre de 2022, celebrado entre la empresa denominada “QR
              Bienes Raíces” S.A.P.I. de C.V. e “Intermaya del Caribe” S.A. DE
              C.V. por conducto de sus respectivos representantes legales, así
              como en el mandato descrito en la siguiente Declaración. Este
              documento conformará el pack legal de la presente promesa de
              compraventa y una vez que sea emitido y aprobado conforme a la ley
              estatal de la materia, podrá ser consultado en la página web
              descrito en la Declaración I.9 del presente apartado.
              -----------------------------------------------------------------------------------------------
            </p>
            <p>
              <b>--I.5</b> Es mandataria general y para actos de dominio de la
              persona moral denominada “QR Bienes Raíces” S.A.P.I. de C.V.,
              respecto de El Inmueble descrito y deslindado en la Declaración
              I.4 para llevar a cabo la comercialización del Lote de terreno
              objeto del presente Contrato, denominado El Inmueble, en su nombre
              y representación, así como otorgar su promesa de compraventa,
              pudiendo en su momento comparecer por conducto de su apoderado, a
              otorgar y firmar las escrituras públicas que contengan la
              formalización de la transmisión del dominio prometida en el
              presente, entre otras facultades; como consta en el Acta Notarial
              número doscientos setenta y cuatro, de fecha veintisiete de marzo
              de dos mil veintitrés, otorgada ante el Licenciado en Derecho
              Fernando Villanueva Jorge, Notario Público del Estado en
              ejercicio, Titular de la Notaría Pública número Cuarenta y Seis,
              con residencia en la Ciudad de Mérida, Yucatán; en relación con el
              Contrato de Asociación en Participación suscrito entre ambas
              partes en fecha 14 de noviembre de dos mil veintidós.
              -----------------------------------------------------------------------------------------
            </p>

            <p>
              <b>--I.6</b> La propiedad actual de la mandante en mención se
              acredita con la escritura pública número ciento setenta y ocho de
              fecha 13 de agosto de 2010, otorgada ante la fe del Lic. José
              Antonio Tadeo Castellanos Gual, titular de la notaría número 78
              del Estado de Yucatán, con sede en el municipio de Mérida;
              inscrito en el Folio Electrónico 809467 y Número de Inscripción
              1249672, del Registro Público de la Propiedad y del Comercio de
              esta entidad, del Instituto de Seguridad Jurídica Patrimonial de
              Yucatán (INSEJUPY), cuya Cédula Catastral vigente se tiene a la
              vista del Promitente Comprador para su consulta.------------------
            </p>

            <p>
              <b>--I.7</b> Se encuentra en proceso de gestión de las
              autorizaciones correspondientes ante la Dirección de Catastro del
              Ayuntamiento de Valladolid Yucatán y, del INSEJUPY, para obtener
              la autorización de factibilidad de Uso de Suelo Urbano y posterior
              Licencia de Uso de Suelo, para la creación del Régimen en
              Condominio, que contendrá la subdivisión en la cantidad de Lotes
              señalada, que lo conformarán, identificables como ¨Unidades
              Privativas¨ del predio descrito y deslindado en la Declaración
              I.4.------------------
            </p>
            <p>
              <b>--I.8</b> Cumplidas las formalidades y concluidos los tramites
              y requisitos legales de división y Lotificación catastral, la
              Promitente Vendedora reservará a favor del Promitente Comprador la
              fracción de terreno con número de identificación interna por Lote
              y etapa en la que se ubica, con superficie y descripción, todos
              descritos en el número 1 de la Carátula de este Contrato, bajo la
              modalidad Ad Corpus, conforme al artículo 1429 del Código Civil
              del Estado de Yucatán. En lo sucesivo se identificará a dicho Lote
              como El Inmueble.
              -----------------------------------------------------------------------------------------------------------------------------------
              --La superficie del Lote en mención en ningún caso será menor a
              una superficie de 608.5 metros cuadrados, el cual no se encuentra
              sujeto a algún régimen especial, ejidal o comunal, podrá
              escriturarse una vez autorizada su subdivisión; y se identifica en
              el croquis adjunto bajo el número de Anexo 2, que firmado por Las
              Partes forma parte integrante del presente Contrato. ------
            </p>
            <p>
              <b>--I.9 </b>Toda la documentación descrita en las presentes
              declaraciones puede ser consultada por el Promitente Comprador en
              el link:
              https://drive.google.com/drive/u/2/folders/1QZues1RzHodPfOO5AY-tHkoQAhpZQaro.---------------------------------------------------
            </p>

            <p>
              <b>--I.10</b> Está interesada en celebrar el presente Contrato de
              promesa de compraventa con el Promitente Comprador, respecto a una
              futura transmisión de propiedad plena de El Inmueble conforme a lo
              señalado en el artículo 1021 del Código Civil del Estado de
              Yucatán.
              -----------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>

            <p>
              <b>--I.11 </b>Exhibió y explicó al Promitente Comprador el
              Proyecto Ejecutivo en formato digital, del Desarrollo en el que se
              encuentra el Lote de terreno que promete comprar en este Contrato,
              mismo que junto con su maqueta digital se encuentran disponibles
              para su consulta en la oficina de atención a clientes señalada en
              la Cláusula Decimoctava del presente. Así como puso a su
              disposición la información y documentación especificada en los
              Anexos 7, 8 y 9.
              --------------------------------------------------------------
            </p>
            <p>
              <b>--I.12</b> Tiene su domicilio convencional para efectos de este
              Contrato, el ubicado en Avenida Bonampak, Manzana Lote setenta y
              tres guión cero uno, Edificio Global Cancún, Torre B piso tres,
              Interior: oficina número trescientos dos en la Colonia
              Supermanzana tres Centro, Cancún, Quintana Roo, C.P. 77500.
              --------------------------------------------------------------------------------------
              ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>

            <p>
              <b>--II.- Declara el Promitente Comprador que:</b>{" "}
              --------------------------------------------------------------------------------------------------------------
            </p>
            <p>
              <b>--II.1 </b> Manifiesta bajo protesta de decir verdad que se
              llama como ha quedado escrito en el Proemio y en la Carátula del
              presente Contrato, tiene plena capacidad jurídica y económica para
              obligarse en los términos de este Contrato, de nacionalidad,
              estado civil, ocupación, Régimen Fiscal, identificación oficial
              vigente, mayoría de edad por haber nacido en la fecha y lugar
              descritos; todos declarados en el número 2 de la Carátula del
              presente.
              -----------------------------------------------------------------------------------------
            </p>

            <p>
              <b>--II.2 Declara y manifiesta</b> bajo protesta de decir verdad
              que: los recursos que aportará en concepto de Arras Confirmatorias
              y, para los pagos estipulados en este Contrato, una vez cumplidas
              las condiciones para la celebración de la escritura de compraventa
              definitiva ante Notario Público; provienen de fuentes lícitas, no
              emanan ni son producto de alguna actividad ilícita y ninguna
              autoridad o tribunal competente ha identificado los recursos
              señalados como producto de actividades ilícitas. Acto seguido
              afirma que aporta directamente dichos recursos en su propio nombre
              y no por interpósita persona; por lo que no tiene conocimiento de
              la existencia de algún dueño beneficiario. Así lo constata de
              conformidad con los artículos 17 fracción V y 18 de la Ley Federal
              para la Prevención e Identificación de Operaciones con Recursos de
              Procedencia Ilícita.----------
            </p>
            <p>
              <b>--II.3 </b>Conoce el estado físico y jurídico actual de El
              Inmueble que se le promete en venta y que es su deseo adquirirlo,
              identificado como Lote descrito y deslindado en el numeral 1
              incisos a), b), c) y d) de la Carátula de este Contrato,
              resultante de la subdivisión en condominio por otorgarse, bajo la
              condición de que se le enajene libre de gravamen, sin
              restricciones al derecho de propiedad, sin adeudo de
              contribuciones y jurídicamente alineado.
              -------------------------------------------------------------------
            </p>
            <p>
              <b>--II.4</b> Tiene pleno conocimiento que El Inmueble formará
              parte de una subdivisión y en su caso de un régimen de propiedad
              en condominio, mismo que contará con sus estatutos y reglamentos
              que le serán obligatorios en su calidad de condómino, en términos
              de la Ley sobre el Régimen de Propiedad en Condominio del Estado
              de Yucatán. Por lo anterior, se obliga y compromete a cumplir con
              todas las disposiciones del régimen de propiedad en condominio,
              sus estatutos, reglamentos internos y todas las demás
              disposiciones vigentes que le sean aplicables.
              -------------------------------------------------------------------------------------
            </p>

            <p>
              <b>--II.5</b> Se encuentra interesado en celebrar el presente
              Contrato de promesa de venta con la Promitente Vendedora respecto
              a la adquisición de una futura transmisión de propiedad plena de
              El Inmueble conforme a lo señalado en el artículo 1021 del Código
              Civil del Estado de Yucatán.
              --------------------------------------------------------------------------------------------------------------------------------------
            </p>
            <p>
              <b>--II.6</b> Tiene su domicilio convencional para todo lo
              relacionado con este Contrato, el predio descrito en el numeral 2
              de la Carátula de este Contrato.
              ---------------------------------------------------------------------------------------------------------------------------------------
              ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>
            <p>
              <b>--III. Declaran Las Partes que:</b>{" "}
              ---------------------------------------------------------------------------------------------------------------------------------
            </p>

            <p>
              <b>--III.1</b> Es su voluntad celebrar el presente Contrato, así
              como han leído su contenido y conocen sus alcances, por lo que no
              existe dolo, error, lesión, ni cualquier vicio que afecte la
              validez o existencia de este Contrato. Están conformes y estiman
              justo el precio asignado a El Inmueble objeto de esta promesa de
              compraventa; tampoco sufren lesión o menoscabo en su patrimonio en
              virtud de éste, no teniendo nada que reclamarse mutuamente sobre
              este particular, por lo que están de acuerdo en someterse a las
              siguientes:
              --------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>
            <p>
              <b>
                ----------------------------------------------------------------------C
                L Á U S U L A
                S-----------------------------------------------------------------------------
              </b>
            </p>
            <p>
              <b>--PRIMERA.- Objeto.</b> Las Partes acuerdan que el presente
              Contrato sólo da origen a obligaciones de hacer a cargo de las
              partes, las cuales prometen celebrar un Contrato de compraventa en
              la fecha designada en la Carátula; al tenor del cual, la
              Promitente Vendedora, como mandataria de “QR Bienes Raíces”
              S.A.P.I. de C.V., promete vender al Promitente Comprador el
              terreno destinado a casa habitación identificado como El Inmueble,
              con descripción de Lote, su superficie, medidas y colindancias así
              como la totalidad de precio cierto y en dinero consistente en la
              cantidad máxima acordada, bajo la modalidad Ad Corpus, descritos
              todos en el numeral 1 incisos e), f), g) y h) de la Carátula; a su
              vez, el Promitente Comprador promete adquirirlo al pagar en su
              totalidad el precio cierto y en dinero, que constituye el monto
              total, alzado y único manifestado y acordado por Las Partes en el
              número 1 inciso j) de la Carátula y una vez cumplidas las
              condiciones suspensivas acordadas en el presente..--------
            </p>

            <p>
              <b>--SEGUNDA.- Gastos Operativos.</b> Las partes convienen que el
              Promitente Comprador pagará a la Promitente Vendedora la cantidad
              de $5,000.00 (Son cinco mil pesos 00/100 M.N.), en concepto de
              reserva de Lote seleccionado para su futura adquisición para el
              Promitente Comprador, así como gastos de investigación,
              administración y elaboración de Contrato de promesa de
              compraventa, por lo que esta cantidad no forma parte del precio
              prometido para la venta definitiva en la Cláusula Primera, ni de
              las Arras Confirmatorias descritas en las Cláusulas Tercera y
              Tercera Bis. Por lo que no estará sujeto a su devolución, por
              aplicarse para su objeto de forma inmediata al ser
              recibido.-------------------------------------------------------------------------
            </p>

            <p>
              <b>-- TERCERA.- Arras Confirmatorias.</b> Las Partes acuerdan que
              con el objeto de garantizar las condiciones señaladas en las
              cláusulas de este Contrato y su debido cumplimiento, el Promitente
              Comprador se obliga a entregar a La Promitente Vendedora, en
              concepto de Arras Confirmatorias, la cantidad y forma de pago
              descrita en el numeral 1 inciso i) de la Carátula, tal y como se
              señala en la Tabla de amortización que como Anexo 1 forma parte
              integral de este Contrato, lo que hará mediante transferencia
              electrónica de fondos inmediatamente disponibles a la cuenta
              bancaria número 1223150778 con la referencia bancaria que al
              efecto se le asigna en el numeral 1 inciso k) de la Carátula, del
              Banco: Banco Mercantil del Norte, S.A. Institución de Banca
              Múltiple, Grupo Financiero BANORTE; a nombre de “Intermaya del
              Caribe, S.A. de
              C.V.”.------------------------------------------------------- --El
              Promitente Comprador manifiesta bajo protesta de decir verdad que
              todo depósito o transferencia que realice conforme a esta cláusula
              provendrá directamente de éste y no por tercero, de conformidad
              con el artículo 18 de la Ley federal para la prevención e
              identificación de operaciones con recursos de procedencia
              ilícita.--------------------------------------------------------------------------------------
              --Asimismo Las Partes acuerdan que dichas Arras Confirmatorias
              conservarán esa calidad hasta el momento en que se formalice la
              compraventa definitiva en escritura ante fedatario público, por lo
              que en caso de ser pagadas en su totalidad, serán tomadas a cuenta
              y aplicadas al pago del precio convenido para la compraventa
              definitiva prometida en la Cláusula Primera de este instrumento
              jurídico, al momento de firma de la referida escritura pública de
              la compraventa definitiva de El Inmueble.-----------
            </p>
            <p style={{ color: "green" }}>
              (Nota: para los casos de pago de contado, la sig. cláusula podrá
              ser eliminada por no ser aplicable).
            </p>

            <p>
              <b>--TERCERA BIS.- Parcialidades y Anticipo de pagos.</b> Las
              Partes acuerdan que el Promitente Comprador podrá entregar a La
              Promitente Vendedora las Arras Promisorias descritas en la
              Cláusula Tercera en parcialidades, en las fechas acordadas en
              común, conforme a la Tabla de Amortización contenida en el Anexo
              3, para lo que el Promitente Comprador podrá en cualquier momento
              de la vigencia de este Contrato realizar depósitos de la cantidad
              acordada en forma anticipada sin penalización, pudiendo elegir
              entre:
              -----------------------------------------------------------------------------------------------------------------------------------------------
            </p>

            <p>
              <b>A.</b>Reducir el plazo originalmente pactado en este Contrato;
              o
              ----------------------------------------------------------------------------------
            </p>
            <p>
              <b>B.</b>Reducir el monto de la cantidad mensual pactada,
              subsistiendo el plazo original.
              ------------------------------------------------------
            </p>
            <p>
              --Para este efecto, Las Partes convienen que la elección del
              Promitente Comprador, que modifique la Tabla de amortizaciones
              contenida en el Anexo 3 deberá constar en una Adenda modificatoria
              del mismo, que firmada por ambas formará parte de este Contrato,
              dejando subsistente el resto del contenido del citado Anexo que no
              sea modificado. ------------------------------------------------
            </p>

            <p>
              <b>--CUARTA.- Modificaciones al Proyecto Ejecutivo.</b> Las Partes
              convienen que el proyecto de División de la propiedad conocida
              como Santosuelo y el Lote que se promete en compraventa, que está
              ubicado dentro de la etapa denominada Cora, pueden sufrir
              modificaciones durante su construcción y desarrollo, incluyendo la
              reubicación de vialidades, áreas comunes y privativas, el cambio
              de dimensiones en las mismas, así como cualquier otro que
              involucre el proyecto; por lo que el Promitente Comprador acuerda
              que la Promitente Vendedora puede llevar a cabo las modificaciones
              que considere necesarias, dando aviso al Promitente Comprador de
              aquellas, mediante correo electrónico designado y avalado por éste
              en la Cláusula Decimoctava.-------- --Las partes acuerdan y
              reconocen que El Inmueble objeto del presente Contrato puede ser
              reubicado en forma excepcional dentro del mismo proyecto del
              Desarrollo por disposición de la autoridad competente, caso en el
              que la Promitente Vendedora se obliga a reubicar El Inmueble
              dentro de la etapa Cora, en la zona más cercana a dicho lote
              materia del presente, donde determine esta última, con la estricta
              condición y garantía en favor del Promitente Comprador, que se
              conservará la misma superficie total y características descritas
              en el numeral 1 incisos e) al h) de la Carátula, tal y como fuera
              aquí acordado por Las Partes.-------------
            </p>

            <p>
              <b>
                --QUINTA.- Especificaciones de El Inmueble y calidad de
                Condómino.
              </b>{" "}
              Las Partes convienen que El Inmueble tiene las especificaciones de
              identificación, características, extensión, estado físico general,
              en su caso áreas de uso común con otros inmuebles y porcentaje de
              indiviso, detalle del equipamiento urbano existente en la
              localidad donde se ubica El Inmueble y aquellos sistemas y medios
              de transporte existentes para llegar a él; todos descritos en los
              Anexos 1,2 y 4 del presente Contrato, que firmado por Las Partes
              forma parte integral de
              este.---------------------------------------------------------------------------------------------------
              --Asimismo, El Inmueble objeto de este Contrato sólo incluye las
              amenidades entregables acordadas en el Anexo 5, así como:
              servicios de distribución de energía eléctrica hasta el Registro
              de toma subterránea a pie de cada lote o unidad privativa, no
              incluye Contrato individual de servicios públicos.
              ------------------------------------------------------------------------------------------------------------
              -- La Promitente Vendedora no ofrece servicios adicionales,
              especiales o conexos.
              ---------------------------------------------------------------
              --El Promitente Comprador obtendrá la calidad de condómino por el
              hecho de adquirir El Inmueble en la escritura definitiva de
              compraventa, por lo que tendrá derecho a participar en las
              Asambleas de Condóminos con voz y voto, a disfrutar de las
              instalaciones, áreas comunes, amenidades y servicios que le
              ofrezca el Desarrollo inmobiliario. Sin embargo, estas
              instalaciones, amenidades y servicios estarán a su disposición
              cuando sus construcciones e instalaciones hayan sido completadas,
              independientemente de que ya se hayan firmado las escrituras
              definitivas de compraventa. Las amenidades estarán sujetas para su
              disfrute si el condómino se encuentra al corriente en todas y cada
              una de sus obligaciones de aportación de cuotas condominales,
              cumple con los reglamentos internos correspondientes. Salvo lo
              antes mencionado, una vez que el Promitente Comprador comience a
              pagar sus cuotas condominales conforme a este Contrato, a pesar de
              no haber escriturado, gozará de similares derechos y obligaciones
              que un condómino ya establecido, en su calidad de Residente.
              -------------------------------------------
            </p>
            <p>
              <b>
                --SEXTA.- Relación de los derechos y obligaciones de las partes.
              </b>{" "}
              Las Partes convienen que sus respectivos derechos y obligaciones
              para efectos de cumplimiento del objeto de este Contrato son los
              señalados en su clausulado y los que a continuación se enlistan en
              forma enunciativa, mas no
              limitativa:----------------------------------------------------------------------------------------
            </p>
            <p>
              <b>
                --SEXTA.- Relación de los derechos y obligaciones de las partes.
              </b>{" "}
              Las Partes convienen que sus respectivos derechos y obligaciones
              para efectos de cumplimiento del objeto de este Contrato son los
              señalados en su clausulado y los que a continuación se enlistan en
              forma enunciativa, mas no
              limitativa:----------------------------------------------------------------------------------------
            </p>

            <p>
              <b>--1.- Obligaciones de la Promitente Vendedora:</b>{" "}
              ----------------------------------------------------------------------------------------------------------
            </p>
            <p>
              <b>A.</b>Brindar información y publicidad veraz, clara y
              actualizada del Proyecto Ejecutivo del Desarrollo y de El
              Inmueble.-------------
            </p>
            <p>
              <b>B.</b>Poner a disposición del Promitente Comprador la
              información y documentación de El Inmueble e informarle de los
              avances de los licenciamientos que se vayan obteniendo para la
              conclusión del Desarrollo en
              mención.-----------------------------------
            </p>

            <p>
              <b>C.</b>No condicionar la operación de consumo principal a la
              contratación de servicios adicionales y mantener una política de
              no discriminación, así como prohibición de negativa de trato y de
              ventas atadas, como se indica en el Anexo 6.----------------
            </p>
            <p>
              <b>D.</b>Responsabilizarse de los daños y perjuicios ocasionados
              al Promitente Comprador si procede con dolo o mala fe en la
              contratación.-----------------------------------------------------------------------------------------------------------------------------------------------
            </p>
            <p>
              <b>E.</b>Realizar todos los trámites y diligencias necesarios para
              subdividir física, jurídica y administrativamente en quinientos
              cuarenta y dos Lotes del terreno y deslindado en la Declaración
              I.4 que antecede, bajo el régimen condominal y se obliga a su vez
              a vender al Promitente Comprador El Inmueble, que resulte de la
              citada división, cumpliendo con sus características descritas y
              deslindadas en el numeral 1 incisos e) al h) de la Carátula y
              Cláusula Primera; por lo tanto desde la presente fecha de firma se
              obliga a no comprometer, gravar o enajenar dicha parte resultante
              a persona distinta al Promitente Comprador o de la persona que
              éste designe al momento de formalizar la escrituración de
              compraventa definitiva prometida. Salvo lo acordado en la Cláusula
              Decimotercera del presente.--------------------------------
            </p>
            <p>
              <b>F.</b>Realizar la enajenación que promete, libre de gravamen o
              carga, sin restricciones al derecho de propiedad, sin adeudo de
              contribuciones e impuesto predial así como de cualquier obligación
              fiscal, adeudo, o procedimiento judicial o extrajudicial
              relacionado con El Inmueble en los términos de las Cláusulas
              Octava y Novena.-------------------------------------
            </p>
            <p>
              <b>G.</b>Entregar El Inmueble semi urbanizado, con calles blancas,
              banquetas de concreto, luz a pie de cada lote y, con las
              amenidades descritas en el Anexo 5 de este
              Contrato.---------------------------------------------------------------------------------------
            </p>
            <p>
              <b>H.</b>Entregar El Inmueble a partir de la fecha señalada en el
              numeral 1 inciso l) de la Carátula, previa escrituración ante
              Notario Público, una vez cumplidas las condiciones suspensivas de
              este Contrato; así como entregar Las amenidades del Desarrollo,
              etapa Cora, en cuarenta y ocho meses contados a partir de la fecha
              de firma de este Contrato, prorrogable en forma excepcional, por
              un año más, como período de gracia en caso fortuito o de fuerza
              mayor o situación ajena a la voluntad de la Promitente
              Vendedora.-----------------------------------------------------------------------------------
            </p>
            <p>
              <b>I.</b> Las demás obligaciones que adquiere en el clausulado y
              Anexos de este instrumento
              jurídico.-----------------------------------
            </p>
            <p>
              <b>--2.- Derechos de la Promitente Vendedora:</b> Requerir al
              Promitente Comprador aquellos derechos que le son reconocidos y
              protegidos en el clausulado de este Contrato preparatorio y en sus
              Anexos, así como exigirle su
              cumplimiento.--------------------------
            </p>
            <p>
              <b>--3.- Obligaciones del Promitente Comprador:</b> El Promitente
              Comprador se obliga y compromete incondicionalmente a:
            </p>
            <p>
              <b>A.</b> Cumplir con los Estatutos y Reglamentos Internos a que
              estará sujeto el Desarrollo en Condominio conocido como Santosuelo
              y la etapa denominada Cora, a la que pertenece El Inmueble objeto
              de este Contrato, cuando queden legalmente constituidos bajo ese
              régimen y se den las condiciones para realizar el procedimiento de
              escrituración descrito en la Cláusula Séptima de este
              Contrato.----------------------------------------------------------------------------------------------
            </p>
            <p>
              <b>B.</b> Cubrir a la Promitente Vendedora o a quien administre el
              Condominio en el que se ubique El Inmueble, las cuotas de
              mantenimiento ordinarias y extraordinarias, establecidas al
              constituirse su régimen condominal, las cuales se pagarán a partir
              de los quince días en que surgió su obligación de señalar al
              Notario para escriturar. En el entendido de estas cuotas son
              independientes del pago del precio acordado en la Cláusula Primera
              y número 1 inciso j) de la Carátula, no forman parte de éste, ni
              de las Arras Confirmatorias acordadas y desglosadas en este
              Contrato y en su Anexo 3.----------
            </p>
            <p>
              <b>C.</b> Acudir a la notaría que designe, el día de la cita para
              celebrar el Contrato definitivo de compraventa en escritura
              pública y recibir en ese momento El Inmueble con su
              posesión.--------------------------------------------------------------------------------------
            </p>
            <p>
              <b>D.</b> Cumplir con las demás obligaciones que adquiere en este
              Contrato.----------------------------------------------------------------------
            </p>
            <p>
              <b>--4.- Derechos del Promitente Comprador:</b> Los descritos en
              el Clausulado de este Contrato y aquellos descritos en el Anexo 8.
            </p>

            <p>
              <b>
                --SÉPTIMA.- Contrato Definitivo en Escritura Pública,
                condiciones y fecha de entrega.
              </b>{" "}
              Las Partes acuerdan que el procedimiento y condiciones a seguir
              para la firma del Contrato definitivo serán los siguientes:
              ------------------------------------------------
            </p>
            <p>
              <b>A.</b> Las Partes se obligan a firmar ante Notario, la
              escritura pública de compraventa definitiva de El Inmueble en la
              fecha señalada en el número 1 inciso l) de la Carátula, siempre
              que se cumplan las condiciones acordadas en este Contrato, se
              encuentre constituido el régimen condominal de la etapa del
              Desarrollo Cora y, se encuentren liquidadas las Arras convenidas
              para garantizar el cumplimiento de este Contrato, las cuales serán
              compensadas para el pago total del precio acordado en la Cláusula
              Primera al momento de
              escriturar.-----------------------------------------------------------------------------------
            </p>

            <p>
              <b>
                ---PROCEDIMIENTO:------------------------------------------------------------------------------------------------------------------------------------
              </b>
            </p>
            <p>
              <b>B.</b> El Promitente Comprador se obliga a designar por escrito
              al Notario que prefiera, con competencia dentro del Estado de
              Yucatán, dentro de los siguientes sesenta días naturales previos
              al vencimiento de la fecha acordada en el inciso l) del número 1
              de la Carátula, mediante correo electrónico dirigido a la
              Promitente Vendedora señalado en la cláusula Decimoctava; para lo
              que esta última le podrá recomendar algunos, quienes laboran
              independientes a ella, sin responsabilidad para ambos
              signantes.-------------------------------------------------------------------------------------------------------------
            </p>

            <p>
              <b>C.</b>Una vez designado el Notario, Las Partes se obligan a
              entregarle la información y documentación necesarias para la
              elaboración de la Escritura Pública en la que se consigne la
              compraventa definitiva, con hasta sesenta días naturales de
              anticipación a la fecha de firma de esta, contados a partir del
              día siguiente de la recepción de dicha designación, obligándose
              Las Partes a presentarse en las instalaciones de la referida
              notaría, ya sea personalmente o por conducto de sus respectivos
              representantes o apoderados legales, el día y hora que al efecto
              señale el Notario asignado, para suscribir y perfeccionar en
              Escritura Pública el Contrato definitivo de compra
              venta.---------------------------------------------------
            </p>
            <p>
              <b>a.</b>En caso de que el Promitente Comprador lo solicite por
              escrito, en forma excepcional y debidamente justificada, se podrá
              ampliar el término antes mencionado, hasta por un máximo de diez
              meses más. Sin embargo, será requisito para la procedencia de este
              apoyo, la firma del convenio correspondiente y que El promitente
              comprador, en calidad de Residente, comience a pagar con
              oportunidad el predial de El Inmueble y sus cuotas de
              mantenimiento ordinarias y en su caso extraordinarias,
              establecidas por la administración del condominio, mismos que
              debieron corresponderle en la fecha ordinaria de
              escrituración.------------------------------------------------------------------------------------
            </p>
            <p>
              <b>b.</b>Para la celebración de la escritura pública, el
              Promitente Comprador acepta y conviene que estará sujeto a las
              condiciones suspensivas que las autoridades competentes requieran
              a la Promitente Vendedora, ya sea por caso fortuito, o por fuerza
              mayor y/o atrasos que pudieran surgir con las diferentes
              dependencias gubernamentales, situación excepcional en la que la
              Promitente Vendedora tendrá derecho a modificar el plazo acordado,
              según sea el caso concreto, sin responsabilidad para esta; de lo
              que deberá dar aviso oportuno al Promitente Comprador por
              cualquiera de los medios designados por este último, en la
              Cláusula Decimoctava.--------------------------------------------
            </p>
            <p>
              <b>D.</b>La Promitente Vendedora se obliga a trasladar al
              Promitente Comprador el dominio pleno y entregar la posesión
              física y real de El Inmueble al momento en que firmen la escritura
              definitiva de compraventa, conforme a este Contrato. Por lo que a
              partir de ese momento, el adquirente será responsable del uso que
              dé a El Inmueble y del pago de todas sus contribuciones y cuotas
              de mantenimiento
              condominal.----------------------------------------------------------------------------------------
            </p>

            <p>
              <b>--OCTAVA.- Pago de impuestos y honorarios.</b> Las Partes
              convienen que todos los gastos, derechos, impuestos y honorarios
              que cause la obtención de licencias, permisos y autorizaciones, el
              Impuesto sobre la Renta del vendedor y el Impuesto Cedular por
              enajenación de bienes inmuebles, quedarán a cargo de la Promitente
              Vendedora. Ahora bien, todos los certificados, constancias,
              impuestos, incluidos el ISAI e ISR del comprador por adquisición
              de inmuebles, derechos, patentes, honorarios y demás gastos
              notariales que causare la protocolización de la escritura de
              compraventa, serán por cuenta del Promitente
              Comprador.--------------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>

            <p>
              <b>--NOVENA.- Pago del Impuesto Predial de El Inmueble.</b> Las
              Partes acuerdan que una vez que El Inmueble sea autorizado por la
              autoridad competente y quede debidamente inscrito en el Registro
              Público de la Propiedad y del Comercio del INSEJUPY, así como
              vencido el plazo ordinario acordado para escriturar, convenido en
              el inciso l) número 1 de la Carátula, El Promitente Comprador se
              obliga a responder a su costa, por el pago del impuesto predial de
              El Inmueble, considerando que a partir de ese momento es su
              responsabilidad la suscripción oportuna de la escritura pública de
              la compra venta prometida.----------------------------
            </p>

            <p>
              <b>--DÉCIMA.- Cancelación o Revocación.</b> La Promitente
              Compradora cuenta con un plazo de cinco días hábiles posteriores a
              la firma del presente Contrato, para revocar su consentimiento
              sobre la operación sin responsabilidad alguna de su parte,
              mediante aviso por escrito mediante los canales de comunicación
              convenidos entre Las Partes. Para el caso de que la revocación se
              realice por correo certificado o registrado o servicio de
              mensajería privada, se tomará como fecha de revocación la de
              recepción para su envío. La devolución de las Arras entregadas se
              realizará sólo en este supuesto, dentro de los quince días hábiles
              siguientes a la recepción de este comunicado, sin que incluya el
              pago de los gastos operativos acordados en la Cláusula Segunda del
              presente, por haber quedado consumado su
              destino.--------------------------------------------------------------------------------------------------------------------
            </p>

            <p>
              <b>
                --DECIMOPRIMERA.- Cesión o Fideicomiso por la Promitente
                Vendedora.{" "}
              </b>{" "}
              Las Partes acuerdan que la Promitente Vendedora podrá
              unilateralmente ceder, y/o fideicomitir El Inmueble objeto de este
              Contrato, así como en su caso los derechos que se deriven a su
              favor en virtud del presente Contrato de promesa de compraventa,
              sin necesidad de pedir la aprobación por parte del Promitente
              Comprador, siempre y cuando no le haya sido liquidado la totalidad
              del precio pactado, o no se le hubiese entregado la cantidad total
              acordada en concepto de Arras y El Inmueble no se haya escriturado
              de manera de definitiva ante fedatario público, bajo la condición
              de que dichos actos sean para poder llevar a cabo la etapa Cora
              del Desarrollo conocido como
              Santosuelo.------------------------------------------------------------------------------------------------------------------------------------------------------------
              --En los casos de cesión o fideicomiso antes mencionados, la
              Promitente Vendedora se obliga a notificar por escrito al
              Promitente Comprador, a su cuenta de correo electrónico que señaló
              y autorizó en la Cláusula Decimoctava, acompañando el instrumento
              jurídico correspondiente y el Promitente Comprador acuerda en este
              acto que a partir del día siguiente, realizará los siguientes
              pagos de sus Arras Confirmatorias al subrogante de los derechos de
              la Promitente Vendedora o a la Fiduciaria, para el caso de que
              hayan acordado Las Partes su pago en
              parcialidades.------------------------------------------------------------------------------------------------
            </p>

            <p>
              <b>--DECIMOSEGUNDA.- Cesión por el Promitente Comprador.</b> Las
              Partes convienen que para el caso de que el Promitente Comprador
              acuerde el pago en parcialidades de las Arras Confirmatorias, ante
              su imposibilidad para continuarlas pagando, o por así ser su
              voluntad, podrá solicitar debidamente justificado, el Traspaso o
              Cesión de sus derechos y obligaciones derivados de este Contrato,
              aclarando que ese acto será su exclusiva responsabilidad, por ser
              beneficiosa para sus derechos e intereses; para lo que necesitará
              recabar la aprobación previa y por escrito de la Promitente
              Vendedora.-------------------------------------------------------
              --Para la procedencia de la aprobación mencionada, El Promitente
              Comprador se obliga a pagar a La Promitente Vendedora la cantidad
              convenida en la Cláusula Segunda de este instrumento jurídico, en
              concepto de gastos operativos para la generación del nuevo
              Contrato con el cesionario; la cual no estará sujeta a su
              devolución, por las razones expuestas en la citada Cláusula. El
              comprobante de ese pago deberá enviarse junto con su solicitud de
              aprobación de la cesión de derechos. Asimismo, en caso de que el
              Promitente Comprador se encuentre pagando las Arras Confirmatorias
              en las parcialidades acordadas, pagará adicionalmente una Comisión
              del diez por ciento de la cantidad total acordada como Arras
              Confirmatorias en la Cláusula Tercera y Anexo 3, como condición
              para que la Promitente Vendedora otorgue su autorización y en caso
              de adeudar parcialidades, deberá ponerse al corriente en los pagos
              para que proceda la
              cesión.---------------------------------------------------------------------------------
              --Las Partes conciertan que por la naturaleza de la cesión, no
              procederá devolución alguna en concepto de Arras Confirmatorias,
              por lo que el cedente y cesionario se deberán poner de acuerdo en
              la forma en que el segundo las restituirá al
              primero.--------------- --A partir de la liquidación y firma de
              los actos jurídicos mencionados, Las Partes quedan libres de sus
              obligaciones recíprocas resultantes de este Contrato, las cuales
              quedaron trasladadas al cesionario o titular del
              traspaso.--------------------------------------------
            </p>
            <p>
              <b>
                --DECIMOTERCERA.- Incumplimiento al Contrato y Pena
                Convencional.{" "}
              </b>{" "}
              Si vencido el plazo fijado en la Cláusula Primera para la
              celebración del Contrato definitivo de compraventa en escritura
              pública, alguna de Las Partes no cumple su obligación de hacer en
              mérito, la contraparte perjudicada puede elegir entre solicitarle
              el cumplimiento de la promesa de contratar y dar al Contrato la
              forma legal correspondiente, o la rescisión de la promesa
              bilateral de contratar, sin necesidad de que medie resolución o
              determinación judicial.
              -----------------------------------------------------------------------------------------------------------------------------------------------
              --Las Partes convienen que en ambas opciones, incluso de
              terminación anticipada, la parte que incumpla estará obligada a
              pagar a su contraparte afectada, la Pena Convencional por la
              cantidad del 30% del total de las Arras Confirmatorias acordadas
              en la Cláusula Tercera, en concepto de reparación de los daños y
              perjuicios causados. Cantidad que será exigible dentro de los
              siguientes treinta días naturales a la fecha en que le fuera
              notificado el aviso de la decisión por correo electrónico. Esta
              penalización deberá ser pagada en la cuenta bancaria señalada en
              este Contrato por la parte afectada. La omisión a este pago
              oportuno causará un interés moratorio al tipo del 5% cinco por
              ciento mensual sobre la suerte principal, por el tiempo que medie
              el retraso. Esta penalización aplica también a cargo de quien pida
              la terminación
              anticipada.------------------------------------------------------
              --Las partes acuerdan que en caso de que sea el Promitente
              Comprador el responsable de la terminación anticipada o de la
              rescisión, éste faculta a la Promitente Vendedora para aplicar a
              su favor las cantidades recibidas al amparo del presente Contrato
              en concepto de Arras Confirmatorias hasta el momento del
              comunicado de la decisión o petición, para cubrir la Pena
              Convencional a cargo del primero; y en caso de que exista algún
              saldo a favor de éste, La Promitente Vendedora se obliga a
              devolverlo, mediante transferencia electrónica a la cuenta
              bancaria designada por el Promitente
              Comprador.----------------------------- LOS SIGUIENTES PÁRRAFOS
              SÓLO APLICAN PARA CONTRATOS A PLAZOS. SE ADECÚAN LOS INCISOS A AL
              C. --Las partes acuerdan que para el caso de la Cláusula Tercera
              Bis, si el Promitente Comprador incumple con el pago puntual de
              las Arras Confirmatorias acordadas en el presente y en su Anexo 3,
              por tres meses seguidos o cuatro interrumpidos durante la vigencia
              de este Contrato, a la tercera mensualidad vencida (sea
              consecutiva o interrumpida durante la vigencia del Contrato) del
              monto total de esas Arras Confirmatorias, este perderá el derecho
              a mantener reservada la ubicación preferencial de El Inmueble
              objeto de este Contrato; en consecuencia, acepta que mientras no
              liquide dichos adeudos y ponga al corriente esos pagos en los
              tiempos y cantidades convenidas en la referida Tabla de
              amortización, faculta a la Promitente Vendedora para poner en
              venta o en promesa de venta dicho Lote o Lotes, sin
              responsabilidad legal a su cargo.
              ---------------------------------------------------------------------
              --En caso de que el Promitente Comprador se ponga al corriente en
              sus pagos atrasados en mención y ya no se encuentre disponible la
              ubicación de El Inmueble prometido en venta, Las Partes convienen
              que éste tendrá derecho a ser reubicado dentro del mismo
              Desarrollo Inmobiliario en la zona más cercana disponible, previo
              aviso por escrito a la Promitente Vendedora, de que ya liquidó sus
              adeudos, conforme al procedimiento descrito en los incisos A al D
              siguientes:---------------------------------------------------
            </p>
            <p>
              <b>A.</b> La parte interesada se obliga a enviar escrito dirigido
              a la otra parte, por el que le comunica su petición o decisión,
              acompañado de sus comprobantes, dentro de los cinco días hábiles
              siguientes a la fecha en que se genere el inicio del
              procedimiento.
            </p>

            <p>
              <b>B.</b> Para el caso descrito en los párrafos tercero y cuarto
              de esta Cláusula, el Promitente Comprador se obliga a enviar
              escrito dirigido a La Promitente Vendedora, por el que le comunica
              su petición de reubicación, acompañado de sus comprobantes, dentro
              de los cinco días hábiles siguientes a la fecha de la erogación de
              los pagos efectuados por los adeudos a las parcialidades previstas
              en la Tabla de Amortización del Anexo 3.
            </p>
            <p>
              <b>C.</b> Dentro los mismos cinco días señalados, El Promitente
              Comprador se obliga a pagar a La Promitente Vendedora la cantidad
              convenida en la Cláusula Segunda de este instrumento jurídico, en
              concepto de gastos operativos para la generación de la
              documentación legal; la cual no estará sujeta a su devolución, por
              las razones expuestas en la citada Cláusula.
            </p>
            <p>
              <b>D.</b>Una vez enviada toda la documentación probatoria de los
              pagos indicados, Las Partes se obligan a suscribir dentro de los
              diez días hábiles siguientes a su recepción, el convenio
              modificatorio a este Contrato, que describa en forma clara el
              nuevo número de identificación del o los Lotes reubicados, su
              deslinde y descripción, acompañado de la adecuación a los Anexos
              que apliquen, quedando intocado el resto de su clausulado, a fin
              de crear certeza jurídica al Promitente Comprador.
            </p>
            <p>
              --Las partes convienen que no se considerará responsable del
              incumplimiento a este Contrato por parte de la Promitente
              Vendedora en caso fortuito o de fuerza mayor, o aquellos ajenos a
              la voluntad de esta, como expropiación, mandato de autoridad
              competente, o similares.
            </p>
            <p>
              <b>--DECIMOCUARTA.- Terminación anticipada.</b> Las partes
              convienen que cualquiera de ellas podrá pedir la terminación
              anticipada de este Contrato por mutuo acuerdo, para lo que
              suscribirán el convenio que de fin y extinga este Contrato sin
              responsabilidad para ellas, dentro de los treinta días siguientes
              a la recepción de la petición, que servirá de finiquito; quedando
              ambas libres de toda responsabilidad y sin adeudo pendiente entre
              ellas.
            </p>

            <p>
              --Para estos efectos, la solicitante deberá cubrir en favor de la
              otra, la Pena Convencional concertada en el segundo párrafo de la
              Cláusula Decimotercera del presente. En caso de incumplimiento a
              este pago, o si alguna de Las Partes no signe el convenio de
              terminación, la otra podrá optar por lo indicado en la Cláusula
              siguiente.
            </p>
            <p>
              <b>--DECIMOQUINTA.- Rescisión.</b> Las Partes convienen que serán
              causas de rescisión, sin necesidad de determinación judicial,
              cualquier incumplimiento puntual por alguna de ellas a sus
              respectivas obligaciones contraídas por virtud de este Contrato,
              así como las que a continuación se describen de manera
              enunciativa, más no limitativa:
            </p>
            <p>
              <b>A.</b> Si el Promitente Comprador no paga completas las Arras
              Confirmatorias acordadas, en los tiempos y términos convenidos por
              Las Partes en este Contrato y su Anexo 3, al cuarto adeudo
              consecutivo o interrumpido durante la vigencia del presente; o si
              no paga puntual y completo el precio acordado en la Cláusula
              Primera.
            </p>
            <p>
              <b>B.</b> Si al Promitente Comprador le fueran embargados los
              derechos derivados del presente Contrato o si los diera en
              garantía de pago de cualquier deuda u obligación que tenga con
              otra persona que no sea la Promitente Vendedora; o si los cede o
              transmite por cualquier medio sin autorización de la Promitente
              Vendedora.
            </p>
            <p>
              <b>C.</b> Si se inicia Concurso Mercantil al Promitente Comprador
              en su calidad de comerciante, o si se le declara en quiebra; lo
              mismo si se le inicia Concurso Civil ya sea judicial o
              extrajudicial.
            </p>
            <p>
              <b>D.</b> Si el (los) Beneficiario(s) Sucesor(es) o el
              representante común de éstos, designado por el Promitente
              Comprador en este Contrato, o su(s) heredero(s), no continúa con
              el cumplimiento puntual de las obligaciones aquí contraídas, o no
              acredita la defunción con el Acta correspondiente o su calidad de
              heredero, conforme a la Cláusula Decimoséptima del presente,
              dentro de los siguientes dos meses a su defunción, lo que podrá
              prorrogarse por otros cuatro meses en caso fortuito o de fuerza
              mayor previamente avisado por escrito a la Promitente Vendedora.
            </p>

            <p>
              <b>E.</b> Si el Promitente Comprador no cumple puntual el
              procedimiento de escrituración acordado por Las Partes en la
              Cláusula Séptima de este Contrato, no designa por escrito en
              tiempo y forma al Notario de su preferencia, o no firma la
              escritura pública traslativa del dominio y entrega de El Inmueble,
              salvo caso fortuito o de fuerza mayor.
            </p>
            <p>
              <b>F.</b>Si la Promitente Vendedora se niega a firmar la escritura
              traslativa del dominio y entregar El Inmueble en los términos y
              fechas acordados en el presente, estando ya saldado por el
              Promitente Comprador el precio total acordado en la Cláusula
              Primera de este Contrato y cumplidas las condiciones suspensivas
              para ello.
            </p>

            <p>
              <b>G.</b>Cualquiera de las demás estipuladas por este Contrato o
              en el Código Civil de Yucatán.
            </p>
            <p>
              <b>--Procedimiento:</b>
            </p>
            <p>
              --Para este efecto, bastará sólo que la parte interesada comunique
              por escrito debidamente firmado a la parte culpable del
              incumplimiento, el aviso de esta decisión acompañado del soporte
              documental que la justifique y acredite, mediante correo
              electrónico designado y autorizado en la Cláusula Decimoctava por
              cada una de ellas. La rescisión surtirá sus efectos inmediatos en
              la fecha de envío de dicho correo electrónico, con la
              correspondiente imposición de la Pena Convencional, que deberá ser
              pagada en el término y condiciones acordadas en los párrafos
              primero y segundo de la Cláusula Decimotercera de este instrumento
              jurídico.
            </p>

            <p>
              --Las Partes convienen que a partir del día siguiente al envío del
              aviso de rescisión en los medios y términos aquí convenidos, cada
              una de ellas acepta que da por extinguido el presente Contrato,
              quedando sin efectos y el Promitente Comprador acepta que la
              Promitente Vendedora quedará libre para disponer libremente de El
              Inmueble y enajenarlo a cualquier otra persona, sin necesidad
              Declaración judicial alguna.
            </p>
            <p>
              --Si la parte culpable de la rescisión es la Promitente Vendedora,
              en cumplimiento al artículo 1409 del Código Civil del Estado de
              Yucatán, devolverá al Promitente Comprador las Arras entregadas,
              con otro tanto, que es la Pena Convencional convenida en el
              segundo párrafo de la Cláusula Decimotercera; con la reserva de
              ejercer en favor del Promitente Comprador, la Garantía de
              Seguridad Jurídica convenida en la Cláusula Decimosexta sin
              responsabilidad para esta, en los casos fortuito o de fuerza mayor
              o por tratarse de situación ajena a su voluntad. Una vez realizada
              cualquiera de estas dos opciones, el Promitente Comprador se
              tendrá por enteramente pagado y liquidado, extendiendo su más
              amplio finiquito, por lo que toda deuda motivo del presente
              Contrato resultará debidamente saldada y la Promitente Vendedora
              quedará libre de cualquier pena, daño y/o perjuicio.
            </p>
            <p>
              --Las Partes convienen que independientemente de lo señalado en
              los supuestos descritos en los incisos A, B, C o D, si el
              Promitente Comprador se encuentra en estas circunstancias por caso
              fortuito o de fuerza mayor o situación debidamente justificada,
              gozará del beneficio de reestructurar su deuda de las Arras
              Confirmatorias y continuar con este Contrato, con la condición de
              que mantenga acercamiento en amigable composición con la
              Promitente Vendedora, enviando por correo electrónico su solicitud
              de reestructura máximo dentro de los siguientes tres meses a su
              primer vencimiento de pago, acompañando los documentos que
              acrediten la justificación de su petición; con un tiempo de
              respuesta de diez días hábiles contados a partir del día siguiente
              a la recepción de su comunicado.
            </p>
            <p>
              <b>--DECIMOSEXTA.- Garantía de Seguridad Jurídica.</b> Las Partes
              convienen que para el caso de que el Promitente Comprador se
              encuentre cumpliendo en tiempo y forma con sus obligaciones
              establecidas en este Contrato y la Promitente Vendedora se vea
              imposibilitada para cumplir con las suyas, ya sea por causa ajena
              a su voluntad o, por caso fortuito o, de fuerza mayor, otorga en
              favor del Promitente Comprador como garantía de seguridad
              jurídica, sustituir El Inmueble que en el caso remoto no pudiese
              entregar, por un predio ubicado en similar o mejor lugar, con las
              mismas características y valor económico, respetando los pagos que
              en concepto de Arras haya cubierto el Promitente Comprador y sin
              que esto genere a costa de este pago alguno por cantidades
              excedentes a las acordadas en este instrumento jurídico.
              <p>
                --En este supuesto, la Promitente Vendedora garantiza que El
                Inmueble se reubicará prioritariamente dentro de la misma etapa
                del Desarrollo Inmobiliario en que se situaría inicialmente En
                consecuencia, el Promitente Comprador exime a la Promitente
                Vendedora de la obligación de reembolsarle cantidad alguna en
                los términos del presente Contrato, al no existir
                responsabilidad alguna por su parte con la correspondiente
                sustitución de Lotes.
              </p>
            </p>
            <p>
              <b>
                --DECIMOSÉPTIMA.- Procedimiento en caso de fallecimiento del
                Promitente Comprador.
              </b>{" "}
              Las Partes acuerdan que este Contrato no se termina por la muerte
              o extinción de Las Partes, por lo que se presume que su(s)
              sucesor(es) legítimo(s) le sucede(n) en todos los derechos y
              obligaciones derivados de este Contrato, salvo que manifieste(n) a
              la vendedora su deseo de no continuar con la compraventa, para lo
              que aplicará el procedimiento de Terminación Anticipada del
              Contrato acordada en la Cláusula Decimocuarta. Para este efecto,
              designa a sus sucesores en el Anexo 11 del presente Contrato.
              <p>
                --Las Partes acuerdan que el Beneficiario Sucesor o en su caso,
                el representante común de éstos, deberá informar del
                fallecimiento a la Promitente Vendedora dentro de los siguientes
                dos meses a su acontecimiento y la segunda se compromete a
                informar al primero, el estado que guarda la presente promesa de
                compraventa, los importes entregados y los pendientes por
                entregar de las Arras acordadas, así como le permitirá seguir
                con el plan de entregas de las Arras Confirmatorias pendientes
                que se pactó con el Promitente Comprador en la Tabla de
                Amortización (Anexo 3), mediante la suscripción del Contrato
                correspondiente, previo pago de los gastos operativos, en los
                mismos términos y condiciones acordados en la Cláusula Tercera
                del presente, cuando así lo solicite por escrito, previa
                acreditación fehaciente de su identidad y personalidad, con
                identificación oficial y el testimonio del testamento.
              </p>
            </p>

            <p>
              <b>--DECIMOCTAVA.- Notificaciones entre Las Partes.</b> Las Partes
              convienen que todas las comunicaciones, notificaciones,
              requerimientos, autorizaciones, avisos, ejercicio de derechos de
              cancelación, derechos ARCO o cualquier otra comunicación escrita
              que deban darse entre ellas en los términos acordados este
              Contrato, deben considerarse como debidamente entregadas si se
              encuentran firmadas por la respectiva parte contractual o su
              representante o su apoderado legal y entregadas con acuse de
              recibo al destinatario o confirmación de recepción
              en:------------------------------------------------------------------------------------------------------
            </p>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <thead>
                <tr>
                  <th style={tableCellStyle}>Promitente Vendedora</th>
                  <th style={tableCellStyle}>Promitente Comprador .</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>
                    Domicilio: Avenida Bonampak, Manzana Lote setenta y tres
                    guión cero uno, Edificio Global Cancún, Torre B piso tres,
                    Int. oficina número trescientos dos en la Colonia
                    Supermanzana tres Centro, Cancún, Quintana Roo. C.P.
                    77500----------------------------------------------------------------
                    Correo Electrónico para atención a clientes:
                    ----------------------------------- postventas@grupouruz.com
                    Correo Electrónico para el ejercicio de los derechos ARCO:
                    ------------- juridico@grupouruz.com
                  </td>
                  <td style={tableCellStyle}>
                    Domicilio y correo electrónico: Los señalados por el
                    Promitente Comprador en el numeral 2 de la Carátula de este
                    Contrato, mismos que ratifica con su
                    firma.------------------------------------------------------------------------------------------
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              --Por lo tanto, en este acto Las Partes aceptan que designan y
              autorizan en el recuadro anterior y en la Carátula de este
              Contrato, su dirección de correo electrónico para que sirva
              también como un mecanismo fehaciente y válido entre ellos para
              dirigirse en formato digital las comunicaciones escritas
              estipuladas en este Contrato, recabando la correspondiente
              constancia de recibido del destinatario.
              --------------------------------------------------------------------------------------------------------------------------------------------
            </p>

            <p>
              <b>--DECIMONOVENA.- Canales de Atención a Ventas y Postventa.</b>{" "}
              Las Partes acuerdan que cuentan con el siguiente canal de atención
              digital para recibir comentarios, sugerencias y quejas del
              Promitente Comprador: al correo electrónico
              postventas@grupouruz.com o al número telefónico por la aplicación
              WhatsApp: 9984968059, que estarán habilitados los días Lunes a
              Viernes en un horario de 9:00 a 13:00 horas en zona horaria de
              Cancún, Quintana Roo; con un plazo de respuesta es de cinco días
              hábiles.---------------------------------------------------------------------------------------------------------------------------------------------------
            </p>
            <p>
              <b>
                --VIGÉSIMA.- Confidencialidad y Protección de Datos Personales.
              </b>{" "}
              Las Partes convienen que los datos personales que obtenga la
              Promitente Vendedora serán tratados conforme a los principios de
              licitud, consentimiento, información, calidad, finalidad, lealtad,
              proporcionalidad y
              responsabilidad.-------------------------------------------------------------------------------------------------------
            </p>
            <p>
              --Las Partes se obligan a no divulgar los términos y condiciones
              de este Contrato, mismo que constituye un convenio de
              confidencialidad, por cuanto a que su contenido es considerado
              como secreto industrial conforme a la Ley de la Propiedad
              Industrial, por lo que la violación al presente acuerdo de
              confidencialidad faculta a la parte afectada para exigir a la
              parte que lo incumplió, el pago de daño y perjuicios.
              ------------------------------------------------------------------------------------------------------------------------
              <p>
                --Para efectos de lo dispuesto en la Ley Federal de Protección
                de Datos Personales en Posesión de Particulares, la Promitente
                Vendedora adjunta al presente su Aviso de Privacidad, en el
                Anexo 10, por el que informa al titular de los datos personales,
                qué información recabará y con qué finalidades, así como su
                tratamiento. No serán recabados datos personales
                sensibles.----------------
              </p>
              <p>
                <b>--Derechos A.R.C.O.: </b> El titular de los datos personales
                o su apoderado o representante legal podrán solicitar a la
                promitente vendedora en cualquier momento el Acceso,
                Rectificación, Cancelación u Oposición al tratamiento de sus
                datos personales; mediante escrito libre que incluya su nombre
                completo, número de Contrato, número telefónico y correo
                electrónico designado y reconocido para recibir notificaciones;
                el cual deberá ser enviado por correo electrónico a la dirección
                juridico@grupouruz.com o presentado en las oficinas de atención
                a clientes Señalada en la Cláusula Decimoctava; con un tiempo de
                respuesta de diez días hábiles contados a partir del siguiente a
                la recepción de la petición acompañada de la información y
                documentación señaladas en el Aviso de Privacidad, tales como
                identificación oficial (credencial para votar con fotografía o
                pasaporte vigente, en su caso poder notariado si se actúa en
                representación del titular del derecho) y C.U.R.P. actualizado a
                la fecha de la petición.--------------------------
              </p>
              <p>
                --También podrá hacer uso de los siguientes formatos de
                solicitud por tipo de derecho a ejercer (Acceso, Rectificación,
                Cancelación u Oposición, de datos personales), que podrán
                descargar en el siguiente link:
                https://drive.google.com/drive/u/2/folders/1QZues1RzHodPfOO5AY-tHkoQAhpZQaro
                ----------------------------------------------------------
              </p>
            </p>
            <p>
              <b>
                --VIGESIMOPRIMERA.- Competencia administrativa de la PROFECO.
              </b>{" "}
              Las Partes convienen que ante cualquier controversia que se
              suscite sobre la interpretación o cumplimiento del presente
              Contrato, la Promitente Compradora puede acudir a la Procuraduría
              Federal de Protección al Consumidor (PROFECO), con funciones de
              autoridad administrativa encargada de promover y proteger los
              derechos e intereses de los consumidores y procurar la equidad y
              certeza jurídica en las relaciones de consumo, desde su ámbito
              competencial.---------------------------------------------------------------------------------------------------------------------
            </p>
            <p>
              <b>
                --VIGESIMOSEGUNDA.- Plazo para ejercer la acción de
                responsabilidad civil o de la evicción.
              </b>{" "}
              En caso de que el incumplimiento de una de Las Partes al presente
              Contrato le ocasione a su contraparte daños y/o perjuicios, la
              segunda podrá ejercer la acción de responsabilidad civil en el
              plazo de dos años contados a partir de la firma de este Contrato,
              ante las autoridades jurisdiccionales designadas en la Cláusula
              Vigesimotercera; conforme al artículo 970 fracción V del Código
              Civil del Estado de
              Yucatán.--------------------------------------------------------------------------------------------------------------------------------------------------
              <p>
                --La Promitente Vendedora responderá por la evicción, en los
                términos de los artículos 1290 a 1311 del Código Civil citado,
                la cual prescribe en un año, contado a partir de la entrega de
                El
                Inmueble.------------------------------------------------------------------------------------
              </p>
            </p>
            <p>
              <b>--VIGESIMOTERCERA.- Jurisdicción.</b> Las Partes convienen que
              para resolver cualquier controversia que se suscite sobre la
              interpretación o cumplimiento del presente Contrato, privilegiarán
              su solución en amigable composición. En caso de que esto no sea
              posible, consienten realizar prórroga de jurisdicción, por lo que
              voluntariamente se someten a las autoridades jurisdiccionales y
              Tribunales del Estado de Yucatán, con sede en la Ciudad de Mérida,
              Yucatán, México; renunciando expresamente a cualquier otra
              jurisdicción que pudiera corresponderles en razón de sus
              respectivos domicilios presentes o futuros o por cualquier
              otra.-------
            </p>
            <p>
              <b>
                --VIGESIMOCUARTA.- Registro del modelo de Contrato de Adhesión.
              </b>{" "}
              El presente modelo de Contrato de adhesión fue inscrito el ___ de
              ___ de dos mil veintitrés en el Registro Público de Contratos de
              Adhesión de la PROFECO bajo el número _______. Cualquier
              diferencia entre el texto del Contrato registrado y el utilizado
              en perjuicio de los consumidores, se tendrá por no
              puesta.---------------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>

            <p>
              Leído que fue por Las Partes el contenido del presente Contrato y
              sabedoras de su alcance legal, al ser nuestra deliberada y
              espontánea voluntad, firmamos este instrumento jurídico por
              duplicado, de los que queda un tanto acompañado de sus anexos y
              apéndice, en poder de cada parte contratante, en la Ciudad de
              Mérida, Yucatán, México, el día señalado en su Carátula.
              ----------
            </p>
            <p>
              <b>
                -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                -------------------------------------------------------------------------------FIN
                DEL
                TEXTO------------------------------------------------------------------------
              </b>
            </p>
            <p>
              <img srcSet={clientLead.identify_oficial} alt="not"/>
            </p>
            <p>
              <div className="flex">
                <div className="grid">
                  <b>La Promitente Vendedora </b>

                  <div>
                    <b className="linea-data">
                      {dataPersonal.name} {dataPersonal.lastName}
                    </b>
                    <p>
                      <b>NOMBRE Y APELLIDOS</b>
                    </p>
                  </div>
                </div>
                <div className="grid">
                  <b>El Promitente Comprador</b>
                  <div>
                    <b className="linea-data">{dataClient.name} </b>
                    <p>
                      <b>NOMBRE Y APELLIDOS</b>
                    </p>
                  </div>
                </div>
              </div>
            </p>

            <p>
              El presente Contrato y sus anexos pueden signarse de forma
              autógrafa original o a través e una firma electrónica avanzada o
              fiable que será considerada para todos los efectos con la misma
              fuerza y consecuencia que la firma autógrafa original física de la
              parte firmante. Autorización para la utilización de la información
              con fines mercadotécnicos o publicitarios.- La promitente
              compradora si ( ) no ( ) acepta que la promitente vendedora ceda o
              transmita a terceros, con fines mercadotécnicos o publicitarios,
              la información proporcionada con motivo del presente Contrato y si
              ( ) no ( ) acepta que la promitente vendedora le envíe publicidad
              sobre bienes y servicios que comercialice.
            </p>
            <p>
              <div className="flex">
                <div className="grid">
                  <b>El Promitente Comprador</b>
                  <div>
                    <b className="linea-data">{dataClient.name} </b>
                    <p>
                      <b>NOMBRE Y APELLIDOS</b>
                    </p>
                  </div>
                </div>
              </div>
            </p>
            <p>
              Todo consumidor que no desee recibir publicidad por parte de los
              proveedores en términos de la Ley Federal de Protección al
              Consumidor, puede inscribir de forma gratuita su número de
              teléfono en el Registro Público de Consumidores (también
              denominado Registro Público para Evitar Publicidad) de la PROFECO,
              a través del portal web https://repep.profeco.gob.mx/ o al
              5596280000 (desde la ciudad de México, Guadalajara y Monterrey) u
              8009628000 (desde el resto de la República
              Mexicana).-------------------------------------------------------------------------------------------------------
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const generatePdf = async (e) => {
    e.preventDefault();

    // Marcar el estado como "cargando" al iniciar la generación del PDF
    setLoading(true);

    const { name, email, phone } = dataClient;
    const contentDiv = document.createElement("div");
    contentDiv.id = "pdfContent";
    // Otro código ...
    contentDiv.innerHTML = ReactDOMServer.renderToString(pfd);
    contentDiv.style.fontSize = "10px";
    contentDiv.style.lineHeight = "1.5";
    contentDiv.style.background = "#fff";
    try {
      const pdfOutput = await html2pdf(contentDiv, {
        margin: 10,
        filename: "formulario.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      });

      pdfOutput.save("formulario.pdf");
    } catch (error) {
      console.error("Error al generar el PDF:", error);
    } finally {
      // Marcar el estado como "no cargando" después de que la operación haya terminado (ya sea éxito o error)
      setLoading(false);
    }
  };

  const handleOpenDetails = () => {
    setAnchorEl(null);
    const lotes = dataClient.lote;
    if (lotes) {
      // Realiza cualquier acción necesaria para abrir los detalles
      setOpenDetails(true);

      // Resto del código de handleClickLead...
    }
  };
  const handleCloseAdd = () => {
    setOpenDetails(false);
  };
  const handleOpen = () => {
    setOpen(true);

    setDataClient({
      ...dataClient,
      lote: "LMV01",
    });
  };
  const handleOpenLote2 = () => {
    setOpen2(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote3 = () => {
    setOpen3(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote4 = () => {
    setOpen4(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote5 = () => {
    setOpen5(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote6 = () => {
    setOpen6(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote7 = () => {
    setOpen7(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };

  const handleOpenLote8 = () => {
    setOpen8(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote9 = () => {
    setOpen9(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote10 = () => {
    setOpen10(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote11 = () => {
    setOpen11(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote12 = () => {
    setOpen12(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote13 = () => {
    setOpen13(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote14 = () => {
    setOpen14(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote15 = () => {
    setOpen15(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote16 = () => {
    setOpen16(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote17 = () => {
    setOpen17(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote18 = () => {
    setOpen18(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote19 = () => {
    setOpen19(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote20 = () => {
    setOpen20(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote21 = () => {
    setOpen21(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote22 = () => {
    setOpen22(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote23 = () => {
    setOpen23(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote24 = () => {
    setOpen24(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote25 = () => {
    setOpen25(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote26 = () => {
    setOpen26(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote27 = () => {
    setOpen27(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote28 = () => {
    setOpen28(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote29 = () => {
    setOpen29(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote30 = () => {
    setOpen30(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote31 = () => {
    setOpen31(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote32 = () => {
    setOpen32(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLotePoly = () => {
    setOpenPoly(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote33 = () => {
    setOpen33(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote34 = () => {
    setOpen34(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote35 = () => {
    setOpen35(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote36 = () => {
    setOpen36(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote37 = () => {
    setOpen37(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote38 = () => {
    setOpen38(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote39 = () => {
    setOpen39(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote40 = () => {
    setOpen40(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote41 = () => {
    setOpen41(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote42 = () => {
    setOpen42(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote43 = () => {
    setOpen43(true);
  };
  const handleOpenLote44 = () => {
    setOpen44(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote45 = () => {
    setOpen45(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote46 = () => {
    setOpen46(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote47 = () => {
    setOpen47(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote48 = () => {
    setOpen48(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote49 = () => {
    setOpen49(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote50 = () => {
    setOpen50(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote51 = () => {
    setOpen51(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote52 = () => {
    setOpen52(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote53 = () => {
    setOpen53(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote54 = () => {
    setOpen54(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote55 = () => {
    setOpen55(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote56 = () => {
    setOpen56(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote57 = () => {
    setOpen57(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote58 = () => {
    setOpen58(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote59 = () => {
    setOpen59(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote60 = () => {
    setOpen60(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote61 = () => {
    setOpen61(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote62 = () => {
    setOpen62(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote63 = () => {
    setOpen63(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote64 = () => {
    setOpen64(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote65 = () => {
    setOpen65(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote66 = () => {
    setOpen66(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote67 = () => {
    setOpen67(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote68 = () => {
    setOpen68(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote69 = () => {
    setOpen69(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote70 = () => {
    setOpen70(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote71 = () => {
    setOpen71(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote72 = () => {
    setOpen72(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote73 = () => {
    setOpen73(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote74 = () => {
    setOpen74(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote75 = () => {
    setOpen75(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote76 = () => {
    setOpen76(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote77 = () => {
    setOpen77(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote78 = () => {
    setOpen78(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote79 = () => {
    setOpen79(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote80 = () => {
    setOpen80(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote81 = () => {
    setOpen81(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote82 = () => {
    setOpen82(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote83 = () => {
    setOpen83(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote84 = () => {
    setOpen84(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote85 = () => {
    setOpen85(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote86 = () => {
    setOpen86(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote87 = () => {
    setOpen87(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote88 = () => {
    setOpen88(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote89 = () => {
    setOpen89(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote90 = () => {
    setOpen90(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote91 = () => {
    setOpen91(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote92 = () => {
    setOpen92(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote93 = () => {
    setOpen93(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote94 = () => {
    setOpen94(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote95 = () => {
    setOpen95(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote96 = () => {
    setOpen96(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote97 = () => {
    setOpen97(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote98 = () => {
    setOpen98(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote99 = () => {
    setOpen99(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote100 = () => {
    setOpen100(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote101 = () => {
    setOpen101(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote102 = () => {
    setOpen102(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote103 = () => {
    setOpen103(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote104 = () => {
    setOpen104(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote105 = () => {
    setOpen105(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote106 = () => {
    setOpen106(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote107 = () => {
    setOpen107(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote108 = () => {
    setOpen108(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote109 = () => {
    setOpen109(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote110 = () => {
    setOpen110(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote111 = () => {
    setOpen111(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote112 = () => {
    setOpen112(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote113 = () => {
    setOpen113(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote114 = () => {
    setOpen114(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote115 = () => {
    setOpen115(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote116 = () => {
    setOpen116(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote117 = () => {
    setOpen117(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote118 = () => {
    setOpen118(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote119 = () => {
    setOpen119(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote120 = () => {
    setOpen120(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote121 = () => {
    setOpen121(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote122 = () => {
    setOpen122(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote123 = () => {
    setOpen123(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote124 = () => {
    setOpen124(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote125 = () => {
    setOpen125(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote126 = () => {
    setOpen126(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote127 = () => {
    setOpen127(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote128 = () => {
    setOpen128(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote129 = () => {
    setOpen129(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote130 = () => {
    setOpen130(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote131 = () => {
    setOpen131(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote132 = () => {
    setOpen132(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote133 = () => {
    setOpen133(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote134 = () => {
    setOpen134(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote135 = () => {
    setOpen135(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote136 = () => {
    setOpen136(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote137 = () => {
    setOpen137(true);
    setDataClient({
      ...dataClient,
      lote: "M-82",
    });
  };
  const handleOpenLote138 = () => {
    setOpen138(true);
    setDataClient({
      ...dataClient,
      lote: "PEM-05",
    });
  };
  const handleOpenLote139 = () => {
    setOpen139(true);
    setDataClient({
      ...dataClient,
      lote: "PEM-10",
    });
  };
  const handleOpenLote140 = () => {
    setOpen140(true);
    setDataClient({
      ...dataClient,
      lote: "PEM-12",
    });
  };
  const handleOpenLote141 = () => {
    setOpen141(true);
    setDataClient({
      ...dataClient,
      lote: "PEM-08",
    });
  };
  const handleOpenLote142 = () => {
    setOpen142(true);
    setDataClient({
      ...dataClient,
      lote: "PEM-04",
    });
  };
  const handleOpenLote143 = () => {
    setOpen143(true);
    setDataClient({
      ...dataClient,
      lote: "PEM-13",
    });
  };
  const handleOpenLote144 = () => {
    setOpen144(true);
    setDataClient({
      ...dataClient,
      lote: "PEM-09",
    });
  };
  const handleOpenLote145 = () => {
    setOpen145(true);
    setDataClient({
      ...dataClient,
      lote: "PEM-14",
    });
  };
  const handleOpenLote146 = () => {
    setOpen146(true);
    setDataClient({
      ...dataClient,
      lote: "SMOOV04",
    });
  };
  const handleOpenLote147 = () => {
    setOpen147(true);
    setDataClient({
      ...dataClient,
      lote: "SMOOV-05",
    });
  };
  const handleOpenLote148 = () => {
    setOpen148(true);
    setDataClient({
      ...dataClient,
      lote: "SMOOV-02",
    });
  };
  const handleOpenLote149 = () => {
    setOpen149(true);
    setDataClient({
      ...dataClient,
      lote: "SMOOV-03",
    });
  };
  const handleOpenLote150 = () => {
    setOpen150(true);
    setDataClient({
      ...dataClient,
      lote: "SMOOV-1",
    });
  };
  const handleOpenLote151 = () => {
    setOpen151(true);
    setDataClient({
      ...dataClient,
      lote: "SMOOV-08",
    });
  };
  const handleOpenLote152 = () => {
    setOpen152(true);
    setDataClient({
      ...dataClient,
      lote: "SMOOV-07",
    });
  };
  const handleOpenLote153 = () => {
    setOpen153(true);
    setDataClient({
      ...dataClient,
      lote: "SMOOV-06",
    });
  };
  const handleOpenLote154 = () => {
    setOpen154(true);
    setDataClient({
      ...dataClient,
      lote: "SMOOV-11",
    });
  };
  const handleOpenLote155 = () => {
    setOpen155(true);
    setDataClient({
      ...dataClient,
      lote: "SMOOV-09",
    });
  };
  const handleOpenLote156 = () => {
    setOpen156(true);
    setDataClient({
      ...dataClient,
      lote: "SMOOV-10",
    });
  };
  const handleOpenLote157 = () => {
    setOpen157(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-03",
    });
  };
  const handleOpenLote158 = () => {
    setOpen158(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-08",
    });
  };
  const handleOpenLote159 = () => {
    setOpen159(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-07",
    });
  };
  const handleOpenLote160 = () => {
    setOpen160(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-04",
    });
  };
  const handleOpenLote161 = () => {
    setOpen161(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-02",
    });
  };
  const handleOpenLote162 = () => {
    setOpen162(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };

  const handleOpenLote163 = () => {
    setOpen163(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };

  const handleOpenLote164 = () => {
    setOpen164(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote165 = () => {
    setOpen165(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote166 = () => {
    setOpen166(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote167 = () => {
    setOpen167(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote168 = () => {
    setOpen168(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote169 = () => {
    setOpen169(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote170 = () => {
    setOpen170(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote171 = () => {
    setOpen171(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote172 = () => {
    setOpen172(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };

  const handleOpenLote173 = () => {
    setOpen173(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };

  const handleOpenLote174 = () => {
    setOpen174(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };

  const handleOpenLote175 = () => {
    setOpen175(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };

  const handleOpenLote176 = () => {
    setOpen176(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote177 = () => {
    setOpen177(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote178 = () => {
    setOpen178(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote179 = () => {
    setOpen179(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote180 = () => {
    setOpen180(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote181 = () => {
    setOpen181(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote182 = () => {
    setOpen182(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote183 = () => {
    setOpen183(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote184 = () => {
    setOpen184(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote185 = () => {
    setOpen185(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote186 = () => {
    setOpen186(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };

  const handleOpenLote187 = () => {
    setOpen187(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote188 = () => {
    setOpen188(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote189 = () => {
    setOpen189(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote190 = () => {
    setOpen190(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote191 = () => {
    setOpen191(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote192 = () => {
    setOpen192(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };

  const handleOpenLote193 = () => {
    setOpen193(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };

  const handleOpenLote194 = () => {
    setOpen194(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote195 = () => {
    setOpen195(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote196 = () => {
    setOpen196(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote197 = () => {
    setOpen197(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote198 = () => {
    setOpen198(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote199 = () => {
    setOpen199(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote200 = () => {
    setOpen200(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };

  const handleOpenLote201 = () => {
    setOpen201(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote202 = () => {
    setOpen202(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote203 = () => {
    setOpen203(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote204 = () => {
    setOpen204(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote205 = () => {
    setOpen205(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote206 = () => {
    setOpen206(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote207 = () => {
    setOpen207(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };

  const handleOpenLote208 = () => {
    setOpen208(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote209 = () => {
    setOpen209(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote210 = () => {
    setOpen210(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote211 = () => {
    setOpen211(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote212 = () => {
    setOpen212(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };

  const handleOpenLote213 = () => {
    setOpen213(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };

  const handleOpenLote214 = () => {
    setOpen214(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote215 = () => {
    setOpen215(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote216 = () => {
    setOpen216(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote217 = () => {
    setOpen217(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };

  const handleOpenLote218 = () => {
    setOpen218(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };

  const handleOpenLote219 = () => {
    setOpen219(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote220 = () => {
    setOpen220(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote221 = () => {
    setOpen221(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote222 = () => {
    setOpen222(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote223 = () => {
    setOpen223(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote224 = () => {
    setOpen224(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote225 = () => {
    setOpen225(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote226 = () => {
    setOpen226(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote227 = () => {
    setOpen227(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote228 = () => {
    setOpen228(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote229 = () => {
    setOpen229(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };

  const handleOpenLote230 = () => {
    setOpen230(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote231 = () => {
    setOpen231(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };

  const handleOpenLote232 = () => {
    setOpen232(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote233 = () => {
    setOpen233(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };
  const handleOpenLote234 = () => {
    setOpen234(true);
    setDataClient({
      ...dataClient,
      lote: "AOV-01",
    });
  };

  const handleClose = () => {
    setOpen(false);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
    setOpen5(false);
    setOpen6(false);
    setOpen7(false);
    setOpen8(false);
    setOpen9(false);
    setOpen10(false);
    setOpen11(false);
    setOpen12(false);
    setOpen13(false);
    setOpen14(false);
    setOpen15(false);
    setOpen16(false);
    setOpen17(false);
    setOpen18(false);
    setOpen19(false);
    setOpen20(false);
    setOpen21(false);
    setOpen22(false);
    setOpen23(false);
    setOpen24(false);
    setOpen25(false);
    setOpen26(false);
    setOpen27(false);
    setOpen28(false);
    setOpen29(false);
    setOpen30(false);
    setOpen31(false);
    setOpen32(false);
    setOpen33(false);
    setOpen34(false);
    setOpen35(false);
    setOpen36(false);
    setOpen37(false);
    setOpen38(false);
    setOpen39(false);
    setOpen40(false);
    setOpen41(false);
    setOpen42(false);
    setOpen43(false);
    setOpen44(false);
    setOpen45(false);
    setOpen46(false);
    setOpen47(false);
    setOpen48(false);
    setOpen49(false);
    setOpen50(false);
    setOpen51(false);
    setOpen52(false);
    setOpen53(false);
    setOpen54(false);
    setOpen55(false);
    setOpen56(false);
    setOpen57(false);
    setOpen58(false);
    setOpen59(false);
    setOpen60(false);
    setOpen61(false);
    setOpen62(false);
    setOpen63(false);
    setOpen64(false);
    setOpen65(false);
    setOpen66(false);
    setOpen67(false);
    setOpen68(false);
    setOpen69(false);
    setOpen70(false);
    setOpen71(false);
    setOpen72(false);
    setOpen73(false);
    setOpen74(false);
    setOpen75(false);
    setOpen76(false);
    setOpen77(false);
    setOpen78(false);
    setOpen79(false);
    setOpen80(false);
    setOpen81(false);
    setOpen82(false);
    setOpen83(false);
    setOpen84(false);
    setOpen85(false);
    setOpen86(false);
    setOpen87(false);
    setOpen88(false);
    setOpen89(false);
    setOpen90(false);
    setOpen91(false);
    setOpen92(false);
    setOpen93(false);
    setOpen94(false);
    setOpen95(false);
    setOpen96(false);
    setOpen97(false);
    setOpen98(false);
    setOpen99(false);
    setOpen100(false);
    setOpen101(false);
    setOpen102(false);
    setOpen103(false);
    setOpen104(false);
    setOpen105(false);
    setOpen106(false);
    setOpen107(false);
    setOpen108(false);
    setOpen109(false);
    setOpen110(false);
    setOpen111(false);
    setOpen112(false);
    setOpen113(false);
    setOpen114(false);
    setOpen115(false);
    setOpen116(false);
    setOpen117(false);
    setOpen118(false);
    setOpen119(false);
    setOpen120(false);
    setOpen121(false);
    setOpen122(false);
    setOpen123(false);
    setOpen124(false);
    setOpen125(false);
    setOpen126(false);
    setOpen127(false);
    setOpen128(false);
    setOpen129(false);
    setOpen130(false);
    setOpen131(false);
    setOpen132(false);
    setOpen133(false);
    setOpen134(false);
    setOpen135(false);
    setOpen136(false);
    setOpen137(false);
    setOpen138(false);
    setOpen139(false);
    setOpen140(false);
    setOpen141(false);
    setOpen142(false);
    setOpen143(false);
    setOpen144(false);
    setOpen145(false);
    setOpen146(false);
    setOpen147(false);
    setOpen148(false);
    setOpen149(false);
    setOpen150(false);
    setOpen151(false);
    setOpen152(false);
    setOpen153(false);
    setOpen154(false);
    setOpen155(false);
    setOpen156(false);
    setOpen157(false);
    setOpen158(false);
    setOpen159(false);
    setOpen160(false);
    setOpen161(false);
    setOpen162(false);
    setOpen163(false);
    setOpen164(false);
    setOpen165(false);
    setOpen166(false);
    setOpen167(false);
    setOpen168(false);
    setOpen169(false);
    setOpen170(false);
    setOpen171(false);
    setOpen172(false);
    setOpen173(false);
    setOpen174(false);
    setOpen175(false);
    setOpen176(false);
    setOpen177(false);
    setOpen178(false);
    setOpen179(false);
    setOpen180(false);
    setOpen181(false);
    setOpen182(false);
    setOpen183(false);
    setOpen184(false);
    setOpen185(false);
    setOpen186(false);
    setOpen187(false);
    setOpen188(false);
    setOpen189(false);
    setOpen190(false);
    setOpen191(false);
    setOpen192(false);
    setOpen193(false);
    setOpen194(false);
    setOpen195(false);
    setOpen196(false);
    setOpen197(false);
    setOpen198(false);
    setOpen199(false);
    setOpen200(false);
    setOpen201(false);
    setOpen202(false);
    setOpen203(false);
    setOpen204(false);
    setOpen205(false);
    setOpen206(false);
    setOpen207(false);
    setOpen208(false);
    setOpen209(false);
    setOpen210(false);
    setOpen211(false);
    setOpen212(false);
    setOpen213(false);
    setOpen214(false);
    setOpen215(false);
    setOpen216(false);
    setOpen217(false);
    setOpen218(false);
    setOpen219(false);
    setOpen220(false);
    setOpen221(false);
    setOpen222(false);
    setOpen223(false);
    setOpen224(false);
    setOpen225(false);
    setOpen226(false);
    setOpen227(false);
    setOpen228(false);
    setOpen229(false);
    setOpen230(false);
    setOpen231(false);
    setOpen232(false);
    setOpen233(false);
    setOpen234(false);
  };
  /*   React.useEffect(() => {
    dispatch(AllLead());
    dispatch(ClientLead(clientLead.id));

  }, [dispatch]); */

  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
  };
  const onDrop = (acceptedFiles) => {
    // Puedes hacer algo con los archivos, como cargarlos a un servidor
    // Aquí, simplemente asumiremos que el primer archivo es una imagen y lo mostraremos
    const uploadedImageFile = acceptedFiles[0];

    if (uploadedImageFile) {
      const imageUrl = URL.createObjectURL(uploadedImageFile);
      setIdentifyImage(imageUrl);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const dropzoneStyles = (theme, isDragActive) => ({
    borderRadius: "4px",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
  });

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const handleImageChange = React.useCallback(
    (e) => {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        getBase64(file, (imageUrl) => {
          setImagePreview(imageUrl);
          setDataClient({
            ...dataClient,
            avatar: file,
          });
        });
      }
    },
    [dataClient]
  );

  const handleIndentifyChange = (e) => {
    try {
      const file = e.target.files[0];
      if (file) {
        getBase64(file, (imageUrl) => {
          setIdentifyOficial(imageUrl);
          setDataClient({
            ...dataClient,
            identify_oficial: file,
          });
        });
      }
    } catch (error) {
      console.error("Error al procesar archivos:", error);
    }
  };

  const handleProofChange = (e) => {
    try {
      const file = e.target.files[0];
      if (file) {
        getBase64(file, (imageUrl) => {
          setProofPreview(imageUrl);
          setDataClient({
            ...dataClient,
            proof_of_address: file,
          });
        });
      }
    } catch (error) {
      console.error("Error al procesar archivos:", error);
    }
  };

  return (
    <>
      <div>
        <Modal
          open={openDetails}
          onClose={handleCloseAdd}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <form onSubmit={handleSubmit}>
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
                            src={
                              imagePreview
                                ? imagePreview
                                : dataClient.avatar
                                ? dataClient.avatar
                                : "/static/images/avatar/1.jpg"
                            }
                            sx={{
                              width: 100,
                              height: 100,
                              border: "3px solid #000",
                            }}
                          />
                          <div className="input-select-image">
                            <AddAPhotoIcon
                              style={{
                                cursor: "pointer",
                                fontSize: 30,
                                color: "#000",
                                "&:hover": {
                                  backgroundColor: "transparent", // Reemplaza 'yourHoverColor' con el color deseado
                                },
                              }}
                              onClick={() =>
                                document.getElementById("avatar").click()
                              }
                            />

                            <input
                              id="avatar"
                              type="file"
                              name="avatar"
                              onChange={handleImageChange}
                              accept="image/jpeg, image/png"
                              style={{ display: "none" }}
                            />
                          </div>
                        </Stack>
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
                          {dataPersonal &&
                          dataPersonal.role &&
                          typeof dataPersonal.role === "string"
                            ? dataPersonal.role.toUpperCase()
                            : "N/A"}
                          :{" "}
                          <span>
                            {dataPersonal && dataPersonal.name}{" "}
                            {dataPersonal && dataPersonal.lastName}
                          </span>
                        </div>
                        <div className="btn-generar">
                        <button onClick={hanleContrat}  >
                          contrato
                          </button>
                          {contrat ? (

                          <div className="btn-option">

                 <div>

                        <button onClick={generatePdf} >  {loading ?  <CircularProgress color="inherit" sx={{height: 2}} />: <DriveFolderUploadIcon/> }</button>
                 </div>
                 <div>

                        <button endIcon={<SendIcon />}>
  Enviar
</button>
</div>

                        </div>
                          ): null}

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
                </Drawer>
              </Box>
              <div className="details-container">
                <div className="details-input-container">
                  <div className="details-input">
                    <div className="input-details">
                      <label>NOMBRE</label>
                      <input
                        type="text"
                        name="name"
                        className="lead-input-detail"
                        value={dataClient.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="input-details">
                      <label>Apellido</label>
                      <input
                        type="text"
                        name="lastName"
                        className="lead-input-detail"
                        value={dataClient.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="input-details">
                      <label>FECHA DE NACIMIENTO</label>
                      <input
                        type="text"
                        name="birthDate"
                        className="lead-input-detail"
                        value={dataClient.birthDate}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="input-details">
                      <label> EDAD</label>
                      <input
                        type="text"
                        name="age"
                        className="lead-input-detail"
                        value={dataClient.age}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="input-details">
                      <label>NACIONALIDAD</label>
                      <input
                        type="text"
                        name="nationality"
                        className="lead-input-detail"
                        value={dataClient.nationality}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-details">
                      <label>CURP</label>
                      <input
                        name="curp"
                        type="text"
                        className="lead-input-detail"
                        value={dataClient.curp}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-details">
                      <label>RFC</label>
                      <input
                        type="text"
                        name="rfc"
                        className="lead-input-detail"
                        value={dataClient.rfc}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-details">
                      <label>ESTADO CIVIL</label>
                      <input
                        type="text"
                        name="civil_status"
                        className="lead-input-detail"
                        value={dataClient.civil_status}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-details">
                      <label>INE/PASAPORTE</label>
                      <input
                        type="text"
                        name="ine_passport"
                        className="lead-input-detail"
                        value={dataClient.ine_passport}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-details">
                      <label>EDAD DEL CONYUGE</label>
                      <input
                        type="text"
                        name="age_conyugue"
                        className="lead-input-detail"
                        value={dataClient.age_conyugue}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="details-input">
                  <div className="input-details">
                      <label>NOMBRE DEL CONYUGE</label>
                      <input
                        type="text"
                        name="name_conyugue"
                        className="lead-input-detail"
                        value={dataClient.name_conyugue}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-details">
                      <label>NUMERO EXTERIOR</label>
                      <input
                        type="text"
                        name="outdoor_Number"
                        className="lead-input-detail"
                        value={dataClient.outdoor_Number}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="input-details">
                      <label>FRACCIONAMIENTO O COLONIA</label>
                      <input
                        type="text"
                        name="fractionation_or_colony"
                        className="lead-input-detail"
                        value={dataClient.fractionation_or_colony}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="input-details">
                      <label>MUNICIPIO O ALCADIA</label>
                      <input
                        type="text"
                        name="municipality_or_mayor"
                        className="lead-input-detail"
                        value={dataClient.municipality_or_mayor}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="input-details">
                      <label>CODIGO POSTAL</label>
                      <input
                        type="text"
                        name="postal_code"
                        className="lead-input-detail"
                        value={dataClient.postal_code}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="input-details">
                      <label> N* DE TELEFONO</label>
                      <input
                        type="text"
                        name="phone"
                        className="lead-input-detail"
                        value={dataClient.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="input-details">
                      <label>EMAIL</label>
                      <input
                        type="email"
                        name="email"
                        className="lead-input-detail"
                        value={dataClient.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="input-details">
                      <label>PAÍS DE ORIGEN</label>
                      <input
                        type="text"
                        name="country_of_origin"
                        className="lead-input-detail"
                        value={dataClient.country_of_origin}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-details">
                      <label>OCUPACIÓN</label>
                      <input
                        type="text"
                        name="occupation"
                        className="lead-input-detail"
                        value={dataClient.occupation}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-details">
                      <label>LOTE DE INTERÉS</label>
                      <input
                        type="text"
                        name="lote"
                        className="lead-input-detail"
                        value={dataClient.lote}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="details-input-container2">
                  <div className="details-input2">
                    <div className="input-details">
                      <label>PAÍS</label>
                      <input
                        type="text"
                        name="country"
                        className="lead-input-detail2"
                        value={dataClient.country}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-details">
                      <label>ESTADO</label>
                      <input
                        type="text"
                        name="state"
                        className="lead-input-detail2"
                        value={dataClient.state}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-details">
                      <label>MUNICIPIO</label>
                      <input
                        type="text"
                        name="municipality"
                        value={dataClient.municipality}
                        onChange={handleChange}
                        className="lead-input-detail2"
                      />
                    </div>
                  </div>
                </div>

                <div className="details-textarea">
                  <div className="details-input2">
                    <div className="textarea-details">
                      <label>DIRECCIÓN</label>
                      <textarea
                        type="text"
                        name="address"
                        value={dataClient.address}
                        onChange={handleChange}
                        className="lead-input-textarea"
                      />
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
                      <input
                        type="text"
                        className="lead-input-detail2"
                        name="country"
                        value={dataClient.country}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-details">
                      <label>ESTADO</label>
                      <input
                        type="text"
                        className="lead-input-detail2"
                        name="state"
                        value={dataClient.state}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-details">
                      <label>MUNICIPIO</label>
                      <input
                        type="text"
                        className="lead-input-detail2"
                        name="municipality"
                        value={dataClient.municipality}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="details-textarea">
                  <div className="details-input2">
                    <div className="textarea-details2">
                      <label>DIRECCIÓN</label>
                      <textarea
                        type="text"
                        className="lead-input-textarea"
                        name="address"
                        value={dataClient.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <React.Fragment>
                    <div className="input-img">
                      <div>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            textAlign: "center",
                            fontWeight: 700,
                          }}
                        >
                          IDENTIFICACIÓN OFICIAL
                        </Typography>
                        <Card
                          sx={{
                            minWidth: 400,
                            border: "2px solid #000",
                            height: 150,
                          }}
                        >
                          <CardContent
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "100%",
                              background:
                                identifyOficial || dataClient.identify_oficial
                                  ? `url(${
                                      identifyOficial ||
                                      dataClient.identify_oficial
                                    })`
                                  : "",
                              backgroundSize: "cover",
                            }}
                            style={dropzoneStyles(theme, isDragActive)}
                          >
                            <label
                              htmlFor="identifyInput"
                              style={{ cursor: "pointer" }}
                            >
                              {!identifyOficial ? (
                                <AddIcon
                                  sx={{ fontSize: "5em", color: "gray" }}
                                />
                              ) : null}
                              <input
                                id="identifyInput"
                                type="file"
                                name="identify"
                                onChange={handleIndentifyChange}
                                accept="image/jpeg, image/png"
                                style={{ display: "none" }}
                              />
                            </label>
                          </CardContent>
                        </Card>
                      </div>

                      <div>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            textAlign: "center",
                            fontWeight: 700,
                          }}
                        >
                          COMPROBANTE DE DOMICILIO
                        </Typography>
                        <Card
                          sx={{
                            minWidth: 400,
                            border: "2px solid #000",
                            height: 150,
                          }}
                        >
                          <CardContent
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "100%",
                              background:
                                proofPreview || dataClient.proof_of_address
                                  ? `url(${
                                      proofPreview ||
                                      dataClient.proof_of_address
                                    })`
                                  : "",
                              backgroundSize: "cover",
                            }}
                            style={dropzoneStyles(theme, isDragActive)}
                          >
                            <label
                              htmlFor="identifyInputProof"
                              style={{ cursor: "pointer" }}
                            >
                              {!proofPreview ? (
                                <AddIcon
                                  sx={{ fontSize: "5em", color: "gray" }}
                                />
                              ) : null}
                              <input
                                id="identifyInputProof"
                                type="file"
                                name="proof"
                                onChange={handleProofChange}
                                accept="image/jpeg, image/png"
                                style={{ display: "none" }}
                              />
                            </label>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                    <div>
                      <Typography
                        sx={{ fontSize: "15px", fontWeight: 700 }}
                      ></Typography>
                      <Card
                        sx={{
                          width: 400,
                          border: "2px solid #000",
                          height: 150,
                        }}
                      >
                        <CardContent
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                          }}
                          {...getRootProps()}
                          style={dropzoneStyles(theme, isDragActive)}
                        >
                          <input {...getInputProps()} />
                          {addressImage ? (
                            <img
                              src={addressImage}
                              alt="Uploaded"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          ) : isDragActive ? (
                            <Typography
                              variant="body1"
                              component="div"
                              color="primary"
                            >
                              Suelta la imagen aquí...
                            </Typography>
                          ) : (
                            <AddIcon sx={{ fontSize: "5em", color: "gray" }} />
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </React.Fragment>
                </div>

                <div className="btn-add-details ">
                  <ButtonMaterial
                    variant="contained"
                    sx={{
                      width: "20%",
                      left: "50%",
                      transform: "translateX(-20%)",
                    }}
                    type="submit"
                  >
                    {loadingAdd ? "Guardando..." : "GUARDAR"}
                  </ButtonMaterial>
                </div>
                <div>
                  <Stack spacing={2} sx={{ width: "100%" }}>
                    <Snackbar
                      open={openSucces}
                      autoHideDuration={1000}
                      onClose={handleCloseSuccess}
                    >
                      <Alert
                        onClose={handleCloseSuccess}
                        severity="success"
                        sx={{ width: "100%" }}
                      >
                        Guardado correctamente
                      </Alert>
                    </Snackbar>
                  </Stack>
                </div>
              </div>
            </Box>
          </form>
        </Modal>
      </div>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      id="svg1239"
      x={0}
      y={0}
      style={{
        enableBackground: "new 0 0 612 792",
      }}
      viewBox="0 0 612 792"
      {...props}
      className="lotes-container"
    >
      <style id="style627" type="text/css">
        {
          ".st1{fill:#9c7b69}.st4{fill:#d1d1d1}.st5{fill:#d5d5d5}.st6{fill:#d3d3d3}.st11{fill:#fff}.st17{fill:#ffd558}.st24{fill:#b2b1af}.st28{fill:#b9b8b4}.st31{fill:#9e9e9e}.st34{fill:#fefefe}.st35{fill:#d9d9d9}.st1:hover{fill:#8d00fa;cursor:pointer}"
        }
      </style>

      <g id="Capa_12">
        <path
          id="path629"
          d="M331.71 744H19.68V48.48h572.16V744h-200.6c-7.8-2.15-14.4-6.78-21.47-10.43-22.62-11.69-43.12-26.8-64.7-40.19-3.12-1.94-6.14-4.05-9.33-5.87-3.16-1.79-6.8-2.24-10.24-3.24-6.14-1.78-12.32-3.4-18.46-5.18-3.13-1.65-6.5-2.69-9.78-3.95-3-1.16-3.16-1.85-1.58-4.56 5.92-10.12 13.23-19.18 20.76-28.13 6.23-7.41 11.64-15.46 17.22-23.37 5.37-7.61 11.34-14.65 17.91-21.24 10.27-10.31 20.23-20.93 30.33-31.4 8.77-9.09 17.4-18.33 26.32-27.26 5.87-5.87 12.46-11.01 18.73-16.47 10.55-9.2 21.1-18.38 31.68-27.54 9.01-7.8 18.02-15.59 26.98-23.45 6.97-6.11 14.07-12.07 20.78-18.5 13.05-12.49 26.21-24.87 39.27-37.36 5.72-5.47 11.65-10.72 17.19-16.37 5.88-5.99 11.32-12.39 16.95-18.62 4.88-5.4 9.85-10.71 14.6-16.21 2.52-2.91 2.38-3.85-.92-6-28.03-18.27-55.07-37.92-81.92-57.87-5.65-4.2-11.3-8.4-17.06-12.45-4.2-2.95-7.07-7.14-10.38-10.92-6.8-7.76-13.46-15.64-20.23-23.41-1.29-1.48-2.81-2.59-4.48-3.55-10.3-5.99-20.36-12.41-30.79-18.18-6.69-3.7-12.37-8.53-17.62-13.9-5.54-5.66-11.81-10.28-18.46-14.45-2.38-1.5-4.98-2.64-7.64-3.44-6.23-1.87-10.45-6.24-14.57-10.87-2.82-3.16-3.68-7.23-5.5-10.85-1.92-3.83-2.08-7.61-1.38-11.82 3.7-22.01 7.43-44.01 10.93-66.05.21-1.35.52-2.67.85-3.99 2.47-9.77 4.9-19.55 7.26-29.35.53-2.2.31-2.65-2.02-3.1-5.97-1.15-11.94-2.29-17.93-3.36-2.6-.47-5.17-1.07-7.78-1.47-2.98-.45-3.39-.13-3.95 2.9-1.85 9.99-3.7 19.98-5.62 29.95-.65 3.38-.92 3.62-4.42 3.63-4.56.02-9.12-.02-13.68.01-3.28.02-3.68.45-3.7 3.8-.01 2.64.02 5.28-.01 7.92-.03 3.24-.38 3.61-3.57 3.62-7.52.03-15.04 0-22.56.01-3.49 0-3.92.17-3.54 3.66.48 4.48-1.5 7.07-5.08 9.36-10.68 6.86-22.18 11.5-34.83 12.71-6.99.67-14.07.18-21.11.14-1.3-.01-2.08-.65-2.27-1.98-.78-5.56-3.76-9.58-8.69-12.19-1.36-.72-1.88-1.87-1.88-3.35-.01-1.76.01-3.52-.01-5.28-.04-2.77-.28-3.02-3.01-3.07-.64-.01-1.28 0-1.92 0h-39.84c-1.6 0-3.21.12-4.67-.74-.42-.25-.95-.36-1.39-.13-2.73 1.39-5.67.99-8.5.82-5.02-.3-9.87.67-14.73 1.55-4.46.8-8.75-.03-13.04-1.03-1.1-.26-2.19-.46-3.32-.46-6.64-.01-13.28-.02-19.92.01-2.7.01-3.01.35-3.08 3.05-.02.8-.01 1.6-.01 2.4v463.42c0 .88.07 1.77-.01 2.64-.2 2.11.78 3.38 2.57 4.42 13.34 7.74 26.56 15.71 39.84 23.56 20.64 12.21 41.23 24.49 61.88 36.68 4.7 2.78 9.38 5.58 14.05 8.4.23.22.58.48.53.75-.45 2.69 1.61 3.26 3.37 4.24 2.18 1.2 4.75 1.74 6.45 3.77.13 1.72-.78 2.43-2.39 2.46-.39.01-.79-.01-1.18.03-.68.07-1.66-.25-1.96.44-.37.88.67 1.28 1.2 1.79.92.89 2.52 1.14 2.6 2.82 0 .26-.04.51-.11.76-.28 3.7-.54 3.9-4.29 3.88-1.37-.01-2.65-.63-4.02-.44 2.37.07 2.37.07 2.48 3.24.2 3.14.97 6.15 2 9.1.28.72.6 1.34 1.57.91.51-.22 1.01-.47 1.54-.67.61-.22 1.26-.42 1.81.08.59.53.37 1.21.12 1.78-.47 1.06-.61 1.82.92 1.93.7.05 1.52.22 1.61 1.13.09.84-.63 1.21-1.2 1.65-.7.54-1.93.73-1.44 2.09 2.45 3.13 5.09 6.05 8.61 8.02 1.1.51 1.44-.41 1.81-1.05 1-1.68 2.2-1.98 4-1.13 4.79 2.26 9.89 3.02 15.16 2.68 6.04-.83 11.65-2.76 16.46-6.64 1.22-.99 2.48-.79 3.82-.18 7.13 3.24 14.22 6.56 21.29 9.93 2.95 1.15 5.63 2.88 8.63 3.93 3.6 1.68 7.03 3.7 10.73 5.17 10.56 4.9 20.66 10.69 30.98 16.05 4.6 2.39 9.13 4.91 13.76 7.23.9.47 2.25.65 2.11 2.19z"
          style={{
            fill: "none",
            stroke: "#606060",
            strokeMiterlimit: 10,
          }}
        />
      </g>

      <g id="Capa_1">
          <path
            id="path632"
            d="M126.03 113.74c1.7-.09 3.4-.74 5.1 0 1.67 1.23 2.39 3.16 3.49 4.8 3.57 5.28 7.07 10.59 10.62 15.89 1.97 2.95 1.95 2.94-.82 5.06-3.1 2.37-6.19 4.76-8.96 7.52-1.02 1.01-1.81 1.09-2.81.09-6.62-6.61-13.25-13.2-19.83-19.85-.84-.85-1.11-1.71-.07-2.67 4.2-3.89 8.34-7.86 13.28-10.84"
            className="st1"
            onClick={handleOpen}
          />

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-01</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    onClick={handleClickLead}
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path634"
            d="M319.58 62.93c5.86.93 11.69 1.97 17.47 3.3.38 3.15-.87 6.1-1.22 9.16-.2 1.74-.75 3.44-.97 5.17-.16 1.33-.66 1.83-2.03 1.53-4.76-1.01-9.57-1.77-14.35-2.67-1.72-.33-2.26-1.07-1.89-2.81.82-3.82 1.48-7.68 2.17-11.52.13-.75.07-1.62.82-2.16"
            className="st1"
            onClick={handleOpenLote2}
          />
        <Modal
          open={open2}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AJ-01</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $720,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    onClick={handleClickLead}

                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path636"
          d="M159.43 445.55c-12.63.25-24.42-2.18-35.86-7.03.18-1.48 1.05-2.74 1.59-4.12.31-.8.79-.7 1.5-.4 9.89 4.21 20.22 6.29 30.96 6.29 1.72 0 1.74.03 1.79 1.67.05 1.18.02 2.37.02 3.59"
          style={{
            fill: "#c57034",
          }}
        />
        <path
          id="path638"
          d="M309.45 411.11c21.05 10.86 41.74 10.34 62.34-1.77-3.64 4.68-20.35 10.04-30.97 10.17-11.24.15-21.74-2.49-31.37-8.4"
          style={{
            fill: "#d4d4d4",
          }}
        />
        <path
          id="path640"
          d="M308.98 412.85c17.14 9.21 34.86 10.26 53.11 3.8-12.3 7.54-42.97 5.35-53.11-3.8"
          className="st4"
        />
        <path
          id="path642"
          d="M204.34 478.85c10.58-7.18 27.67-6.43 37.31 1.52-12.17-7.27-24.58-7.73-37.31-1.52"
          className="st5"
        />
        <path
          id="path644"
          d="M238.74 480.78c-11.32-5.81-22.58-5.71-34.26.38 7.36-6.22 24.04-7.68 34.26-.38"
          className="st6"
        />
        <path
          id="path646"
          d="M251.14 525.75c5.35-11.08 5.17-22.08-.46-33.01 6.59 8.65 6.45 24.95.46 33.01"
          className="st6"
        />
        <path
          id="path648"
          d="M254.5 523.25c3.28-9.04 3.26-18.02-.07-27.01 3.84 5.12 4.44 19.57.07 27.01"
          className="st4"
        />
        <path
          id="path650"
          d="M188.97 496.2c-3.42 9.43-3.03 18.8.45 28.12-4.26-9.31-4.51-18.68-.45-28.12"
          style={{
            fill: "#cfcfcf",
          }}
        />
        <path
          id="path652"
          d="M190.9 522.83c-3.88-8.73-3.86-17.46-.04-26.19-3.1 8.73-3.11 17.46.04 26.19"
          style={{
            fill: "#d0d0d0",
          }}
        />
        <path
          id="path654"
          d="M234.82 540.47c-5.67 4.03-20.93 3.98-27.1-.45 8.97 3.75 18 3.89 27.1.45"
          style={{
            fill: "#ccc",
          }}
        />
        <path
          id="path656"
          d="M233.88 543.07c-8.07 3.05-16.14 3-24.22.02 8.08 2.37 16.16 2.42 24.22-.02"
          style={{
            fill: "#cdcdcd",
          }}
        />
        <path
          id="path658"
          d="M163.21 302.81c-.48.04-.97.07-1.45.11-2.71 1.09-5.41.7-8.12.01-.49-.03-.98-.07-1.46-.1 1.1-1.63 1.05-1.52 2.72-.92 2.01.72 4.07.91 6.08-.16 1.29-.69 1.77-.44 2.23 1.06"
          className="st11"
        />
        <path
          id="path660"
          d="M151.38 302.9c-1.94.51-3.92.78-5.9 1.01-.02-.79.3-1.56 1.12-1.44 1.59.21 3.28-.57 4.78.43"
          className="st11"
        />
        <path
          id="path662"
          d="M334.14 447.25c.19-.15.38-.31.57-.46 3.13-1.07 6.25-1.07 9.38 0 .19.15.38.31.57.46-3.51.25-7.02.25-10.52 0"
          style={{
            fill: "#2727ff",
          }}
        />
        <path
          id="path664"
          d="M167.51 303.37c-1.16-.11-2.35.04-3.45-.49.46-.04.86-.24 1.27-.47 1.4-.76 1.46-.72 2.18.96"
          className="st11"
        />
        <path
          id="path666"
          d="M347 447.31c1.27-.46 2.6-.43 3.92-.43-.19.99-.55 1.76-1.68.91-.71-.52-1.48-.42-2.24-.48"
          className="st11"
        />
        <path
          id="path668"
          d="M327.87 446.89c1.32 0 2.65-.04 3.93.43-.77.06-1.54-.04-2.24.49-1.13.84-1.49.07-1.69-.92"
          className="st11"
        />
        <path
          id="path670"
          d="M252.45 203.65c-.52-1.12-.37-2.33-.49-3.51.97.46 1.67.96.74 2.13-.25.32-.17.91-.25 1.38"
          className="st11"
        />
          <path
            id="path672"
            d="M110.13 227.09c1.1 4.97 2.42 9.56 4.13 14.04.6 1.57.59 1.61-.93 2.24-5.31 2.2-10.63 4.39-15.95 6.57-3.18 1.3-6.35 2.61-9.53 3.9-1.73.7-1.76.69-2.4-.92-2.37-5.95-4.18-12.06-5.59-18.31-.21-.92-.15-1.51.95-1.72 9.71-1.9 19.41-3.83 29.32-5.8"
            className="st1"
            onClick={handleOpenLote3}
          />
        <Modal
          open={open3}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-07</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path674"
            d="M109.04 192.12c-3.28-.67-6.71-1.39-10.15-2.07-5.86-1.16-11.73-2.3-17.59-3.45-1.69-.33-1.7-.34-1.34-2.01 1.34-6.16 3.13-12.19 5.47-18.05.68-1.71.71-1.75 2.33-1.08 8.55 3.52 17.08 7.08 25.63 10.6.88.36 1.56.58 1.04 1.85-1.75 4.28-3.02 8.73-4.04 13.24-.25 1.08-.3 1.07-1.35.97"
            className="st1"
            onClick={handleOpenLote4}
          />
        <Modal
          open={open4}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path676"
            d="M122.78 161.49c-1.29 2.23-2.58 4.34-3.75 6.51-1.13 2.11-2.22 4.25-3.16 6.44-.58 1.35-.69 1.55-2.26.89-7.35-3.1-14.72-6.14-22.08-9.19-1.61-.67-3.23-1.34-4.93-2.04.03-.81.4-1.41.68-2.04 2.5-5.71 5.43-11.19 8.8-16.44.49-.75.79-1.51 1.98-.7 8.18 5.54 16.42 11.02 24.72 16.57"
            className="st1"
            onClick={handleOpenLote5}
          />

        <Modal
          open={open5}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-03</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path678"
            d="M97.65 143.52c2.19-4.06 9.52-13.07 13.87-17.05.61.06.89.58 1.27.95 6.49 6.51 12.98 13.03 19.46 19.56 1.35 1.36 1.57 1.11 0 2.77-2.98 3.14-5.72 6.47-8.15 10.05-.56.82-1 1-1.89.39-8.08-5.46-16.19-10.87-24.28-16.3-.13-.07-.19-.24-.28-.37"
            className="st1"
            onClick={handleOpenLote6}
          />
        <Modal
          open={open6}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-02</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path680"
            d="M108.88 201.94c-.65 1.85-.44 3.79-.46 5.69-.01 1.23-.41 1.65-1.66 1.64-5.67-.05-11.34-.01-17-.02-4.15-.01-8.3-.04-12.45-.07-.13-6.89.6-13.7 1.85-20.46.31-1.66.38-1.71 1.99-1.39 7.43 1.48 14.85 2.97 22.27 4.46 1.72.35 3.42.8 5.15 1.04 1.2.17 1.4.71 1.19 1.77-.46 2.41-.93 4.84-.88 7.34"
            className="st1"
            onClick={handleOpenLote7}
          />
        <Modal
          open={open7}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-05</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path682"
            d="M77.32 210.28c9.83-.02 19.65-.03 29.48-.09 1.28-.01 1.62.46 1.63 1.66.02 1.74-.22 3.52.43 5.21-.07 2.57.44 5.08.88 7.59.28 1.59.28 1.65-1.41 1.99-7.73 1.57-15.47 3.09-23.21 4.64-1.41.28-2.81.57-4.21.89-1.03.24-1.55.04-1.76-1.19-1.17-6.86-1.98-13.74-1.83-20.7"
            className="st1"
            onClick={handleOpenLote8}
          />

        <Modal
          open={open8}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-06</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path684"
            d="M108.97 268.05c2.87-1.9 5.65-3.75 8.43-5.59 1.66-1.1 3.34-2.19 4.98-3.32.63-.44 1.06-.53 1.56.2 2.83 4.16 6.1 7.96 9.42 11.45-4.09 4.09-8.08 8.08-12.18 12.17a99.436 99.436 0 0 1-12.21-14.91"
            className="st1"
            onClick={handleOpenLote9}
          />
        <Modal
          open={open9}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-09</h4>
                  <h4>Area: 601 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $721,200.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path686"
            d="M122.9 257.85c-4.84 3.21-9.49 6.3-14.1 9.36-.78-.19-.96-.87-1.29-1.38-2.94-4.57-5.47-9.35-7.68-14.31-.52-1.15-.38-1.63.83-2.1 4.45-1.75 8.86-3.61 13.27-5.44.84-.35 1.37-.45 1.82.63 1.91 4.55 4.32 8.86 7.15 13.24"
            className="st1"
            onClick={handleOpenLote10}
          />

        <Modal
          open={open10}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-08</h4>
                  <h4>Area: 601 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $721,200.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path688"
            d="M134.51 271.91c3.67 3.58 7.74 6.91 12.22 10-.63 1-1.2 1.94-1.8 2.85-2.25 3.4-4.54 6.77-6.75 10.2-.65 1-1.08 1.3-2.2.5-4.89-3.49-9.54-7.25-13.67-11.37 4.04-4.04 8.04-8.03 12.2-12.18"
            className="st1"
            onClick={handleOpenLote11}
          />
        <Modal
          open={open11}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-10</h4>
                  <h4>Area: 601 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $721,200.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path690"
            d="M112.16 293.54c2.93-2.88 5.68-5.56 8.39-8.27.61-.61 1.04-.79 1.76-.09 4.19 4.08 8.69 7.79 13.53 11.06.75.51.89.92.34 1.71-2.06 2.95-4.06 5.93-6.06 8.92-.43.64-.79.86-1.52.35-5.79-4.01-11.22-8.45-16.44-13.68"
            className="st1"
            onClick={handleOpenLote12}
          />
        <Modal
          open={open12}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: LMV-10</h4>
                  <h4>Area: 542 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $650,400.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path692"
            d="M93.7 558.72c.89 8.42 5.28 14.68 12.18 19.46-.87 1.99-2.1 3.74-3.19 5.58-3.05 5.14-6.12 10.27-9.18 15.4-2.66-.03-4.47-1.93-6.52-3.16-5.68-3.38-11.41-6.67-17.07-10.09-1.25-.76-1.79-1.61-1.79-3.06.04-8.31.01-16.61.03-24.92 0-.69-.16-1.47.6-1.94 5.58-.04 11.17-.08 16.75-.11 2-.01 3.99-.01 5.99 0 1.93.01 1.92.03 2.08 1.9.02.31.08.62.12.94"
            className="st1"
            onClick={handleOpenLote13}
          />
        <Modal
          open={open13}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: LCOM-01</h4>
                  <h4>Area: 2157 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $2,588,400.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path694"
            d="M93.02 411.85c.44 2.46.14 4.93.19 7.4.05 2.71.03 5.42.01 8.14-.01 1.71-.04 1.74-1.69 1.75-3.51.02-7.02 0-10.53.01l-12.2.03-.13-.09c-.1-.13-.26-.25-.27-.38-.44-5.39-.32-10.79-.07-16.18.01-.26.27-.38.43-.55 4.84-.04 9.67-.08 14.51-.11 3.25-.03 6.5-.02 9.75-.02"
            className="st1"
            onClick={handleOpenLote14}
          />
        <Modal
          open={open14}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AL-08</h4>
                  <h4>Area: 840 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $1,008,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path696"
            d="M93.03 519.86c.44 2.54.13 5.09.19 7.64s.02 5.11.01 7.66c-.01 1.97-.03 1.99-1.93 2-3.35.02-6.7 0-10.05.01l-12.44.03-.13-.09c-.1-.13-.26-.25-.27-.38-.44-5.39-.32-10.79-.07-16.18.01-.26.27-.38.43-.55 4.84-.04 9.67-.08 14.51-.11 3.24-.04 6.5-.03 9.75-.03"
            className="st1"
            onClick={handleOpenLote15}
          />
        <Modal
          open={open15}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AL-13</h4>
                  <h4>Area: 840 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $1,008,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path698"
            d="M93.03 375.85c.44 2.54.13 5.09.19 7.64s.02 5.11.01 7.66c-.01 1.97-.03 1.99-1.93 2-3.35.02-6.7 0-10.05.01l-12.44.03-.13-.09c-.1-.13-.26-.25-.27-.38-.44-5.39-.32-10.79-.07-16.18.01-.26.27-.38.43-.55 4.84-.04 9.67-.08 14.51-.11 3.24-.04 6.5-.03 9.75-.03"
            className="st1"
            onClick={handleOpenLote16}
          />
        <Modal
          open={open16}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AL-06</h4>
                  <h4>Area: 840 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $1,008,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    onClick={handleClickLead}
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path700"
            d="M93.03 483.85c.44 2.54.13 5.09.19 7.64s.02 5.11.01 7.66c-.01 1.97-.03 1.99-1.93 2-3.35.02-6.7 0-10.05.01l-12.44.03-.13-.09c-.1-.13-.26-.25-.27-.38-.44-5.39-.32-10.79-.07-16.18.01-.26.27-.38.43-.55 4.84-.04 9.67-.08 14.51-.11 3.24-.03 6.5-.02 9.75-.03"
            className="st1"
            onClick={handleOpenLote17}
          />
        <Modal
          open={open17}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AL-12</h4>
                  <h4>Area: 840 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $1,008,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path702"
            d="M93.03 447.85c.44 2.54.13 5.09.19 7.64s.02 5.11.01 7.66c-.01 1.97-.03 1.99-1.93 2-3.35.02-6.7 0-10.05.01l-12.44.03-.13-.09c-.1-.13-.26-.25-.27-.38-.44-5.39-.32-10.79-.07-16.18.01-.26.27-.38.43-.55 4.84-.04 9.67-.08 14.51-.11 3.24-.04 6.5-.03 9.75-.03"
            className="st1"
            onClick={handleOpenLote18}
          />
        <Modal
          open={open18}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AL-10</h4>
                  <h4>Area: 840 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $1,008,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path704"
            d="m68.81 357.98 22.25.03c2.31 0 2.17-.11 2.17 2.24 0 4.31.01 8.61-.01 12.92 0 .71-.12 1.42-.19 2.13-7.22 0-14.44 0-21.66-.01-.87 0-1.74-.07-2.61-.11-.53-.36-.59-.92-.59-1.48-.03-4.7-.03-9.39 0-14.09 0-.57.1-1.11.51-1.55l.13-.08z"
            className="st1"
            onClick={handleOpenLote19}
          />
        <Modal
          open={open19}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AL-05</h4>
                  <h4>Area: 840 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $1,008,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path706"
            d="m68.81 465.99 22.25.03c2.31 0 2.17-.11 2.17 2.24 0 4.31.01 8.61-.01 12.92 0 .71-.12 1.42-.19 2.13-7.22 0-14.44 0-21.66-.01-.87 0-1.74-.07-2.61-.11-.53-.36-.59-.92-.59-1.48-.03-4.7-.03-9.39 0-14.09 0-.57.1-1.11.51-1.55l.13-.08z"
            className="st1"
            onClick={handleOpenLote20}
          />
        <Modal
          open={open20}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AL-11</h4>
                  <h4>Area: 840 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $1,008,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path708"
            d="m68.81 537.99 22.25.03c2.31 0 2.17-.11 2.17 2.24 0 4.31.01 8.61-.01 12.92 0 .71-.12 1.42-.19 2.13-7.22 0-14.44 0-21.65-.01-.87 0-1.74-.07-2.61-.11-.53-.36-.59-.92-.59-1.48-.03-4.7-.03-9.39 0-14.09 0-.57.1-1.11.51-1.55l.12-.08z"
            className="st1"
            onClick={handleOpenLote21}
          />
        <Modal
          open={open21}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AL-15</h4>
                  <h4>Area: 840 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $1,008,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path710"
            d="m68.81 429.98 22.25.03c2.31 0 2.17-.11 2.17 2.24 0 4.31.01 8.61-.01 12.92 0 .71-.12 1.42-.19 2.13-7.22 0-14.44 0-21.66-.01-.87 0-1.74-.07-2.61-.11-.53-.36-.59-.92-.59-1.48-.03-4.7-.03-9.39 0-14.09 0-.57.1-1.11.51-1.55l.13-.08z"
            className="st1"
            onClick={handleOpenLote22}
          />
        <Modal
          open={open22}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AL-09</h4>
                  <h4>Area: 840 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $1,008,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path712"
            d="m68.81 501.99 22.25.03c2.31 0 2.17-.11 2.17 2.24 0 4.31.01 8.61-.01 12.92 0 .71-.12 1.42-.19 2.13-7.22 0-14.44 0-21.66-.01-.87 0-1.74-.07-2.61-.11-.53-.36-.59-.91-.59-1.48-.03-4.7-.03-9.39 0-14.09 0-.57.1-1.11.51-1.55l.13-.08z"
            className="st1"
            onClick={handleOpenLote23}
          />
        <Modal
          open={open23}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AL-13</h4>
                  <h4>Area: 840 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $1,008,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path714"
            d="M68.81 393.98c7.26.01 14.53 0 21.79.06.85.01 2.26-.58 2.48.57.26 1.36.73 2.98-.73 4.2-2.11 1.77-2.94 4.1-2.7 6.83.17 1.92 1 3.49 2.34 4.84.22.22.35.53.52.79-7.28.01-14.56.01-21.83.01-.64 0-1.27-.07-1.91-.11-.53-.36-.59-.92-.59-1.48-.03-4.7-.03-9.39 0-14.09 0-.57.1-1.11.51-1.55l.12-.07z"
            className="st1"
            onClick={handleOpenLote24}
          />
        <Modal
          open={open24}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AL-07</h4>
                  <h4>Area: 779 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $934,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path716"
            d="M69.17 285.64c1.34.29 2.71.11 4.06.13.91.01 1.29.37 1.28 1.28-.02 4.95-.02 9.91 0 14.87 0 .98-.51 1.19-1.36 1.21-1.35.03-2.72-.18-4.05.16-.15-.09-.31-.19-.46-.28-.24-.23-.42-.5-.43-.83-.11-5.09-.1-10.18-.01-15.27.01-.42.2-.76.55-1 .15-.09.28-.18.42-.27"
            className="st1"
            onClick={handleOpenLote25}
          />
        <Modal
          open={open25}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: NST-01</h4>
                  <h4>Area: 240 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $288,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path718"
            d="M69.13 339.76c1.35.03 2.7.1 4.05.08.85-.01 1.33.2 1.33 1.18-.03 5.01-.02 10.03 0 15.04 0 .85-.4 1.09-1.17 1.09-1.51-.01-3.02.02-4.53.03l-.13-.09c-.1-.13-.26-.25-.27-.39-.43-5.41-.33-10.83-.07-16.25.01-.25.26-.39.43-.56.13-.01.25-.06.36-.13"
            className="st1"
            onClick={handleOpenLote26}
          />
        <Modal
          open={open26}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: NST-04</h4>
                  <h4>Area: 240 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $288,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path720"
            d="M69.13 303.75c1.35.03 2.71.1 4.06.08.87-.01 1.32.23 1.32 1.2-.03 4.95-.03 9.89 0 14.84 0 .97-.45 1.21-1.32 1.2-1.35-.02-2.71.05-4.06.08a.719.719 0 0 0-.37-.13c-.59-.44-.59-1.1-.6-1.74-.02-4.55-.02-9.1 0-13.66 0-.64 0-1.29.6-1.73.14-.02.26-.06.37-.14"
            className="st1"
            onClick={handleOpenLote27}
          />

        <Modal
          open={open27}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: NST-02</h4>
                  <h4>Area: 240 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $288,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>

        <path
          id="path722"
          d="M68.76 303.89v17.13c-.38.03-.84.19-.98-.34-.1-.38-.09-.79-.09-1.18 0-4.7-.02-9.39.01-14.09.01-.68-.38-1.78 1.06-1.52"
          className="st1"
        />
          <path
            id="path724"
            d="M140.75 626.94c3.37-5.05 6.21-10.41 9.37-15.59.83-1.36 1.66-2.73 2.43-4.13.39-.71.77-.86 1.5-.43 4.51 2.72 9.04 5.41 13.83 8.26-4.11 7-8.17 13.92-12.23 20.84-.11-.02-.19.02-.24.12-1.29.32-2.03-.74-2.95-1.25-3.58-2.01-7.1-4.12-10.62-6.24-.48-.29-.98-.54-1.06-1.18l-.03-.4"
            className="st1"
            onClick={handleOpenLote28}
          />
        <Modal
          open={open28}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AK-04</h4>
                  <h4>Area: 840 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $1,008,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path726"
            d="M156.32 636.42c4.05-6.95 8.11-13.9 12.24-20.98 5.01 2.98 9.85 5.86 14.81 8.8-1.72 2.94-3.39 5.75-5.02 8.58-2.34 4.08-4.94 8-7.06 12.21-.14.03-.28.08-.41.15-1.31.38-2.04-.72-2.96-1.23-3.46-1.94-6.9-3.94-10.25-6.06-.57-.36-1.4-.52-1.35-1.47"
            className="st1"
            onClick={handleOpenLote29}
          />
        <Modal
          open={open29}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AK-05</h4>
                  <h4>Area: 840 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $1,008,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path728"
            d="M125.28 617.77c3.79-5.73 7.02-11.8 10.57-17.69.57-.95 1.13-1.9 1.78-2.99 2.51 1.49 4.91 2.91 7.3 4.32 1.31.77 2.63 1.52 3.91 2.34 1.13.72 2.94 1.04 3.2 2.29.25 1.2-1.12 2.37-1.79 3.53-3.33 5.73-6.7 11.44-10.05 17.16-.11.02-.2.07-.26.17-1.97-.24-3.37-1.63-5.01-2.51-2.85-1.52-5.56-3.28-8.33-4.93-.53-.32-1.18-.52-1.28-1.28-.02-.13-.02-.27-.04-.41"
            className="st1"
            onClick={handleOpenLote30}
          />
        <Modal
          open={open30}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AK-03</h4>
                  <h4>Area: 840 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $1,008,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path730"
            d="M109.87 608.95c2.8-5.28 6.02-10.31 9.01-15.48.88-1.52 1.8-3.01 2.65-4.54.45-.82.9-.87 1.69-.39 4.16 2.51 8.34 5 12.56 7.41 1.12.64.91 1.18.39 2.06-3.55 5.96-7.06 11.93-10.57 17.91-.32.54-.59 1.12-.89 1.68-.1.01-.2.04-.3.08-2.38-.34-4.06-2.09-6.09-3.12-2.62-1.33-5.06-3.02-7.61-4.5-.44-.26-.78-.58-.84-1.11"
            className="st1"
            onClick={handleOpenLote31}
          />

        <Modal
          open={open31}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AK-02</h4>
                  <h4>Area: 840 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $1,008,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
        id="polyline1257"
        d="m330.2 215.9 11.1-12.5-12.1-10.7-11.2 12.8 12.2 10.4"
        className="st1"
        onClick={handleOpenLote32}

      />
    
        <Modal
          open={open32}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AJ-06</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $720,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path732"
            d="M377.76 227.98c-3.73 4.25-7.45 8.5-11.28 12.88-4.31-3.81-8.49-7.5-12.85-11.36 3.93-4.44 7.78-8.78 11.63-13.12 2.33 1.44 4.03 3.62 6.1 5.36 2.3 1.9 4.79 3.62 6.4 6.24"
            className="st1"
            onClick={handleOpenLote32}
          />
        <Modal
          open={open32}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AJ-07</h4>
                  <h4>Area: 601 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $721,200.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path734"
            d="M339.53 272.57c2.15.1 4.31.23 6.47.29 1.24.04 1.61.58 1.47 1.8-.41 3.57-.71 7.15-1.07 10.73-.28 2.78-.64 5.56-.82 8.35-.08 1.26-.5 1.65-1.76 1.55-3.03-.25-6.08-.26-9.11.02-1.11.1-1.38-.35-1.47-1.32-.61-6.44-1.24-12.88-1.91-19.32-.13-1.21.23-1.81 1.48-1.81 2.24.01 4.47 0 6.71 0 .01-.1.01-.19.01-.29"
            className="st1"
            onClick={handleOpenLote33}
          />
        <Modal
          open={open33}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: E-04</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $738,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path736"
            d="M406.93 304.8c3.32 3.95 6.05 8.16 8.56 12.52.49.85.22 1.29-.57 1.69-2.06 1.05-4.11 2.15-6.15 3.23-3.67 1.95-7.32 3.92-11 5.86-1.53.81-1.56.8-2.37-.57-1.54-2.62-3.2-5.16-5.11-7.54-.58-.72-.52-1.18.2-1.77 5.47-4.41 10.9-8.87 16.44-13.42"
            className="st1"
            onClick={handleOpenLote34}
          />
        <Modal
          open={open34}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: E-09</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $738,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path738"
            d="M298.68 282.78c4.89-2.64 9.74-4.61 14.71-6.16.73.27.68.94.83 1.42 1.86 6.09 3.68 12.2 5.49 18.3.49 1.63.47 1.66-1 2.18-2.78.99-5.53 2.05-8.14 3.43-1.02.54-1.5.38-2.03-.64-3.22-6.13-6.5-12.23-9.86-18.53"
            className="st1"
            onClick={handleOpenLote35}
          />
        <Modal
          open={open35}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: E-02</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $738,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path740"
            d="M365.09 276.53c5.25 1.57 10.15 3.6 15.02 6.23-.79 1.48-1.52 2.86-2.26 4.24-2.53 4.71-5.08 9.4-7.57 14.12-.54 1.02-.97 1.41-2.16.77-2.67-1.43-5.49-2.55-8.38-3.46-.77-.24-1.27-.53-.96-1.51 2.12-6.75 4.19-13.52 6.31-20.39"
            className="st1"
            onClick={handleOpenLote36}
          />
        <Modal
          open={open36}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: E-06</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $738,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path742"
            d="M332.58 294.33c.18.92-.27 1.2-1.17 1.31-3.09.38-6.15.93-9.14 1.83-.95.29-1.41.03-1.71-1-1.84-6.28-3.73-12.54-5.66-18.78-.33-1.05-.22-1.5.96-1.83 4.32-1.21 8.71-1.99 13.13-2.64.84-.12 1.55-.13 1.66 1.08.61 6.6 1.27 13.19 1.92 19.78.02.07.01.15.01.25"
            className="st1"
            onClick={handleOpenLote37}
          />
        <Modal
          open={open37}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: E-03</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $738,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path744"
            d="M406.89 414.63c-5.56-4.55-11-9.02-16.45-13.46-.73-.59-.74-1.06-.17-1.77a53.04 53.04 0 0 0 5.21-7.75c.52-.93.97-1.01 1.87-.52 5.84 3.14 11.7 6.24 17.57 9.32.82.43.97.88.5 1.7-2.5 4.36-5.26 8.55-8.53 12.48"
            className="st1"
            onClick={handleOpenLote38}
          />
        <Modal
          open={open38}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: E-15</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $738,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path746"
            d="M403.79 365.76c0-3.74.04-7.16-.02-10.58-.02-1 .24-1.37 1.29-1.47 4.29-.38 8.56-.88 12.84-1.3 2.3-.23 4.61-.37 6.9-.62 1.05-.11 1.38.3 1.43 1.31.23 4.55.21 9.09-.03 13.63-.04.72-.14 1.24-1.08 1.14-7.05-.71-14.1-1.4-21.33-2.11"
            className="st1"
            onClick={handleOpenLote39}
          />
        <Modal
          open={open39}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: E-12</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $738,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path748"
            d="M344.08 446.79h-9.38c-.07-.04-.14-.07-.21-.11-.98-.53-2.49.29-3.06-.8-.5-.95.14-2.18.24-3.29.53-5.64 1.05-11.29 1.58-16.93.16-1.72.22-1.79 1.87-1.63 2.87.29 5.74.3 8.61-.01 1.61-.17 1.64-.08 1.82 1.66.61 6.12 1.23 12.23 1.84 18.35.05.48.05.96.09 1.43.04.6-.24.85-.82.91-.87.1-1.77-.04-2.58.42"
            className="st1"
            onClick={handleOpenLote40}
          />
        <Modal
          open={open40}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: E-20</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $738,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path750"
            d="M380.68 310.01c4.83-5.88 9.48-11.55 14.24-17.35 4.26 3.45 7.99 7.21 11.51 11.52-5.77 4.73-11.43 9.38-17.33 14.21-2.6-2.95-5.28-5.74-8.42-8.38"
            className="st1"
            onClick={handleOpenLote41}
          />
        <Modal
          open={open41}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: E-08</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $738,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path752"
            d="M262.45 319.12c2.62 1.38 5.15 2.71 7.68 4.05 3.6 1.91 7.17 3.86 10.8 5.7 1.16.59 1.21 1.12.65 2.19-1.33 2.55-2.39 5.22-3.3 7.95-.53 1.6-.6 1.62-2.23 1.14-6.19-1.85-12.36-3.76-18.55-5.6-.82-.24-1.33-.5-1.01-1.46 1.61-4.76 3.42-9.42 5.96-13.97"
            className="st1"
            onClick={handleOpenLote42}
          />
        <Modal
          open={open42}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: E-30</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $738,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path754"
            d="M407.43 352.69c-3.78.26-3.73.25-4.21-2.74-.34-2.12-.83-4.22-1.31-6.31-.52-2.24-.56-2.24 1.57-2.89 3.35-1.02 6.7-2.04 10.06-3.06 2.67-.81 5.34-1.59 7.99-2.46.99-.33 1.48-.08 1.73.9 1.12 4.32 2.06 8.68 2.58 13.12.15 1.27-.28 1.66-1.48 1.76-3.97.35-7.93.79-11.89 1.19-1.98.21-3.97.39-5.04.49"
            className="st1"
            onClick={handleOpenLote43}
          />
        <Modal
          open={open43}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: E-11</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $738,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path756"
            d="M422.4 333.44c.13.87-.58.91-1.19 1.09-3.66 1.11-7.32 2.22-10.97 3.34-2.51.77-5.03 1.51-7.54 2.31-1.07.34-1.73.28-2.12-1.02-.87-2.9-2.05-5.7-3.47-8.38-.41-.77-.39-1.24.47-1.7 6-3.15 11.98-6.34 17.95-9.54.63-.34 1-.26 1.33.37 2.21 4.25 4.01 8.67 5.48 13.23.03.08.03.16.06.3"
            className="st1"
            onClick={handleOpenLote44}
          />
        <Modal
          open={open44}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: E-10</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $738,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path758"
            d="M268.39 353.18c1.82.19 3.64.42 5.46.54.92.06 1.24.4 1.19 1.31-.16 3.18-.15 6.37.01 9.56.04.77-.18 1.14-1.01 1.22-2.22.21-4.43.52-6.64.74-4.44.43-8.88.79-13.31 1.27-1.07.11-1.44-.15-1.49-1.2-.22-4.54-.22-9.08-.02-13.62.05-1.11.54-1.33 1.51-1.22.87.1 1.75.08 2.62.12 2.56-.26 5.11-.02 7.66.2 1.42.13 2.82.19 4.02 1.08"
            className="st1"
            onClick={handleOpenLote45}
          />
        <Modal
          open={open45}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: E-28</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $738,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path760"
            d="M332.6 424.95c-.58 5.85-1.11 11.25-1.64 16.66-.11 1.11-.24 2.22-.28 3.34-.04 1.06-.46 1.35-1.52 1.2-4.43-.61-8.8-1.46-13.14-2.59-1.35-.35-1.4-.88-1.05-1.99 1.7-5.49 3.32-10.99 5.03-16.47.35-1.12.24-2.65 1.28-3.21.91-.49 2.1.4 3.19.59 2.28.39 4.55.83 6.82 1.27 1.35.25 1.34.27 1.31 1.2"
            className="st1"
            onClick={handleOpenLote46}
          />
        <Modal
          open={open46}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: E-21</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $738,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path762"
            d="M297.668 310.582c-2.75-3.35-5.38-6.55-8.01-9.75-1.77-2.16-3.51-4.35-5.34-6.46-.77-.89-.68-1.39.23-2.09 3.87-2.97 7.88-5.71 12.27-8.03 1.06 1.35 1.71 2.9 2.49 4.35 2.46 4.56 4.88 9.14 7.31 13.73.86 1.63.86 1.67-.65 2.55-2.82 1.64-5.49 3.53-8.3 5.7"
            className="st1"
            onClick={handleOpenLote47}
          />
        <Modal
          open={open47}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: E-01</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $738,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path764"
            d="M298.76 409.82c3.18 2.53 6.37 4.66 9.86 6.63-3.53 6.6-7.03 13.13-10.58 19.77-4.62-2.41-8.74-5.25-12.71-8.33-.67-.52-.64-.95-.13-1.57 4.48-5.43 8.93-10.87 13.56-16.5"
            className="st1"
            onClick={handleOpenLote48}
          />
        <Modal
          open={open48}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: E-23</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $738,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path766"
            d="M364.32 276.33c-2.11 6.85-4.17 13.46-6.15 20.09-.35 1.19-.92 1.29-1.92.98-2.83-.87-5.74-1.38-8.66-1.73-1.17-.14-1.49-.55-1.37-1.65.36-3.33.66-6.67.99-10l.93-9.28c.16-1.58.27-1.72 1.72-1.52 4.81.71 9.6 1.51 14.46 3.11"
            className="st1"
            onClick={handleOpenLote49}
          />
        <Modal
          open={open49}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: E-05</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $738,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path768"
            d="M380.08 436.56c-4.45 2.51-8.98 4.25-13.56 5.88-1.28.45-1.68-.14-2-1.2-1.47-4.88-2.97-9.75-4.46-14.62-.4-1.29-.78-2.59-1.22-3.87-.3-.89-.28-1.47.81-1.8 2.98-.91 5.85-2.11 8.61-3.54 1-.52 1.39-.17 1.84.67 3.27 6.1 6.57 12.19 9.98 18.48"
            className="st1"
            onClick={handleOpenLote50}
          />
        <Modal
          open={open50}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: E-18</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $738,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path770"
            d="M271.88 414.58a85.99 85.99 0 0 1-8.37-12.27c-.47-.83-.58-1.36.42-1.88 5.93-3.1 11.84-6.25 17.74-9.41.71-.38 1.14-.33 1.54.4 1.59 2.86 3.43 5.57 5.45 8.14.45.57.37.97-.17 1.4-1 .79-1.97 1.62-2.96 2.43-4.49 3.69-8.99 7.38-13.65 11.19"
            className="st1"
            onClick={handleOpenLote51}
          />
        <Modal
          open={open51}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: E-25</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $738,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path772"
            d="M258.23 351.39c-1.43-.16-2.85-.33-4.28-.46-.63-.06-1.07-.22-.99-.99.49-5.07 1.49-10.03 3.05-15.01 5.29 1.58 10.39 3.11 15.49 4.63 1.52.46 3.05.92 4.58 1.36.94.27 1.44.58 1.07 1.83-.85 2.9-1.5 5.86-1.72 8.9-.08 1.1-.52 1.5-1.7 1.28-1.24-.24-2.54-.19-3.81-.26-3.94-.13-7.88-.12-11.69-1.28"
            className="st1"
            onClick={handleOpenLote52}
          />
        <Modal
          open={open52}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: E-29</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $738,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path774"
            d="M313.52 442.71c-5.07-1.43-9.94-3.51-14.64-6.04.45-1.53 1.3-2.7 1.96-3.96 2.5-4.72 5.02-9.43 7.54-14.14.94-1.75.96-1.77 2.65-.93 2.57 1.28 5.24 2.34 7.96 3.26.76.26 1.35.43 1.03 1.45-2.08 6.69-4.14 13.38-6.22 20.07-.02.07-.11.11-.28.29"
            className="st1"
            onClick={handleOpenLote53}
          />
        <Modal
          open={open53}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: E-22</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $738,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path776"
            d="M380.08 309.5c-2.89-2.25-5.7-4.21-8.69-5.9-.64-.36-1.25-.64-.7-1.62 3.38-6.15 6.71-12.32 10.07-18.49.04-.06.12-.1.3-.23 4.4 2.32 8.54 5.13 12.49 8.23.73.57.52 1 .05 1.57-4.48 5.41-8.93 10.84-13.52 16.44"
            className="st1"
            onClick={handleOpenLote54}
          />
        <Modal
          open={open54}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: E-07</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $738,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path778"
            d="M271.85 304.86c4.99 4.08 9.86 8.07 14.72 12.05 2.59 2.12 2.55 2.1.64 4.84a102.92 102.92 0 0 0-3.89 6.02c-.51.85-.9 1.08-1.85.57-5.82-3.14-11.67-6.22-17.52-9.32-.72-.38-1.14-.77-.62-1.66 2.48-4.36 5.23-8.54 8.52-12.5"
            className="st1"
            onClick={handleOpenLote55}
          />
        <Modal
          open={open55}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: E-31</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $738,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path780"
            d="M370.13 416.52c3.43-2.01 6.66-4.06 9.86-6.64 4.72 5.75 9.4 11.45 14.26 17.35-4.2 3.48-8.6 6.4-13.45 8.99-3.58-6.59-7.1-13.1-10.67-19.7"
            className="st1"
            onClick={handleOpenLote56}
          />
        <Modal
          open={open56}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path782"
            d="M394.85 426.72c-4.74-5.78-9.39-11.45-14.01-17.08.07-.84.75-1.08 1.2-1.48 2.14-1.92 4.2-3.93 6.05-6.13.62-.74 1.09-.93 1.93-.23 5.09 4.23 10.23 8.42 15.36 12.6.63.51 1 .93.3 1.73-3.32 3.77-6.8 7.37-10.83 10.59"
            className="st1"
            onClick={handleOpenLote57}
          />
        <Modal
          open={open57}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path784"
            d="M406.54 366.79c5.64.57 11.83 1.25 18.02 1.8 1.31.12 1.35.73 1.24 1.71-.49 4.45-1.48 8.79-2.6 13.11-.32 1.23-1.03 1.13-1.97.83-4.18-1.31-8.37-2.59-12.56-3.89-1.83-.56-3.65-1.13-5.48-1.7-1.83-.58-1.8-.57-1.4-2.38.53-2.41 1.07-4.82 1.46-7.26.4-2.38.32-2.4 3.29-2.22"
            className="st1"
            onClick={handleOpenLote58}
          />
        <Modal
          open={open58}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path786"
            d="M277.72 378.85c1.24 3.51 2.41 6.73 4.02 9.77.47.9.35 1.35-.58 1.83-4.25 2.2-8.46 4.48-12.69 6.72-1.96 1.04-3.92 2.08-5.96 3.16-2.5-4.5-4.3-9.09-5.9-13.76-.4-1.17.21-1.35 1.06-1.6 4.35-1.3 8.7-2.64 13.04-3.97 2.27-.69 4.56-1.4 7.01-2.15"
            className="st1"
            onClick={handleOpenLote59}
          />
        <Modal
          open={open59}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path788"
            d="M283.91 426.68c-4.04-3.32-7.52-6.82-10.76-10.56-.48-.56-.68-1.01.02-1.58 5.49-4.48 10.97-8.98 16.53-13.55 2.7 2.91 5.28 5.72 8.45 8.29-4.73 5.8-9.41 11.51-14.24 17.4"
            className="st1"
            onClick={handleOpenLote60}
          />
        <Modal
          open={open60}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path790"
            d="M357.11 421.78c.4-.11.6.17.74.44.15.28.19.6.29.91 1.9 6.16 3.77 12.33 5.74 18.47.39 1.23.15 1.62-1.1 1.95-4.32 1.15-8.69 1.98-13.11 2.59-1.09.15-1.43-.22-1.52-1.22-.48-5.24-.99-10.47-1.48-15.7-.07-.71-.08-1.44-.18-2.15-.55-3.93-.62-2.99 2.68-3.61 2.19-.41 4.38-.79 6.54-1.36.46-.12.93-.21 1.4-.32"
            className="st1"
            onClick={handleOpenLote61}
          />
        <Modal
          open={open61}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path792"
            d="M416.34 400.32c-1.93-1.02-3.75-1.98-5.57-2.95-4.29-2.27-8.57-4.58-12.89-6.79-1.1-.57-1.28-1.09-.69-2.19 1.4-2.6 2.5-5.34 3.38-8.15.33-1.06.82-1.35 1.9-1.01 6.3 1.97 12.62 3.9 18.93 5.83.66.2 1.18.46.88 1.34-1.6 4.75-3.41 9.41-5.94 13.92"
            className="st1"
            onClick={handleOpenLote62}
          />
        <Modal
          open={open62}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path794"
            d="M272.62 366.75c2.65-.12 2.63-.12 2.88 1.75.36 2.77.87 5.52 1.69 8.18.37 1.2-.07 1.56-1.06 1.86a3107.8 3107.8 0 0 0-18.73 5.75c-.93.29-1.47.16-1.75-.88-1.15-4.32-2.1-8.67-2.62-13.11-.12-.99-.07-1.59 1.24-1.71 6.34-.58 12.68-1.27 18.35-1.84"
            className="st1"
            onClick={handleOpenLote63}
          />
        <Modal
          open={open63}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 615 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path796"
            d="M486.68 388.38c-4.88-5.14-9.48-10.01-14.11-14.85-.61-.63-.82-1.13-.04-1.75.31-.25.62-.52.87-.82 1.42-1.7 3.16-2.28 5.42-2.37 6.13-.24 12.25-.79 18.37-1.26 2.61-.2 2.73-.16 2.52 2.45-.31 3.76-1.61 7.21-4.17 9.97-2.76 2.98-5.81 5.68-8.86 8.63"
            className="st1"
            onClick={handleOpenLote64}
          />
        <Modal
          open={open64}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 680 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path798"
            d="M471.33 364.87c4.07-5.77 8.16-11.56 12.21-17.29.92.06 1.41.64 1.98 1.03 2.31 1.57 4.63 3.12 6.88 4.78 3.98 2.93 6.24 6.95 7.19 11.75.2 1.01-.13 1.41-1.22 1.47-4.94.28-9.87.64-14.81.96-1.27.08-2.61-.08-3.82.25-3.45.93-5.99-.54-8.41-2.95"
            className="st1"
            onClick={handleOpenLote65}
          />
        <Modal
          open={open65}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 680 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path800"
            d="M261.93 569.96c3.72-3.83 7.33-7.54 11.07-11.4 5.24 5.09 10.38 10.08 15.62 15.16-3.13 3.23-6.13 6.32-9.11 9.44-.52.55-.96.69-1.61.15-5.26-4.43-10.54-8.82-15.97-13.35"
            className="st1"
            onClick={handleOpenLote66}
          />
        <Modal
          open={open66}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 633 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path802"
            d="M362.98 501.53c-3.76 2.49-7.55 4.98-11.33 7.51-.74.5-1.15.15-1.59-.4-1.37-1.67-2.75-3.33-4.13-4.99-2.95-3.57-5.89-7.13-8.97-10.85 2.98-1.98 5.78-3.92 8.66-5.75 1.25-.79 2.41-2.4 3.84-2.08 1.27.28 1.92 2.02 2.83 3.12 3.1 3.76 6.17 7.55 9.24 11.34.5.61 1.13 1.14 1.45 2.1"
            className="st1"
            onClick={handleOpenLote67}
          />
        <Modal
          open={open67}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 626 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path804"
            d="M350.09 484.1c4.01-2.66 7.81-5.16 11.58-7.7 1.05-.7 1.41.11 1.89.71 3.74 4.69 7.48 9.38 11.21 14.07.39.49.75 1.01 1.17 1.57-.86.96-1.96 1.47-2.95 2.13-2.65 1.78-5.34 3.51-7.98 5.32-.79.54-1.33.64-2.01-.2-4.2-5.22-8.45-10.41-12.91-15.9"
            className="st1"
            onClick={handleOpenLote68}
          />
        <Modal
          open={open68}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 626 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path806"
            d="M372.97 466.04c5.09 5.33 9.98 10.45 14.96 15.66-3.51 3.33-6.93 6.56-10.31 9.82-.72.7-1.15.54-1.71-.17-3.96-5.01-7.92-10.01-11.93-14.98-.65-.81-.57-1.3.15-1.97 2.91-2.71 5.78-5.46 8.84-8.36"
            className="st1"
            onClick={handleOpenLote69}
          />
        <Modal
          open={open69}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote:M-82</h4>
                  <h4>Area: 611 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path808"
            d="M273.55 557.98c3.32-3.42 6.48-6.68 9.84-10.14 5.23 5.03 10.38 9.98 15.68 15.07-3.28 3.4-6.49 6.72-9.88 10.23-5.19-5.03-10.32-10-15.64-15.16"
            className="st1"
            onClick={handleOpenLote70}
          />
        <Modal
          open={open70}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path810"
            d="M383.73 455.8c.73.25 1.04.75 1.42 1.14 4.13 4.33 8.25 8.66 12.36 13.01 1.31 1.39 1.3 1.42-.11 2.77-2.65 2.53-5.34 5.03-7.97 7.59-.67.65-1.1.69-1.74 0-4.45-4.68-8.91-9.35-13.39-14.01-.52-.55-.66-.96-.01-1.56 3.18-2.97 6.34-5.99 9.44-8.94"
            className="st1"
            onClick={handleOpenLote71}
          />
        <Modal
          open={open71}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path812"
            d="M304.89 525.71c3.32-3.42 6.53-6.74 9.9-10.22 5.2 5.05 10.35 10.04 15.58 15.11-3.3 3.42-6.52 6.74-9.88 10.22-5.23-5.05-10.36-10.02-15.6-15.11"
            className="st1"
            onClick={handleOpenLote72}
          />
        <Modal
          open={open72}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path814"
            d="M453.17 419.71c-3.43 3.25-6.77 6.41-10.06 9.53-.57.08-.79-.3-1.04-.56-4.34-4.56-8.66-9.16-13.04-13.69-.84-.87-1.01-1.4-.03-2.29 2.84-2.57 5.61-5.22 8.38-7.86.62-.59 1.06-.79 1.75-.05 4.62 4.95 9.28 9.87 14.04 14.92"
            className="st1"
            onClick={handleOpenLote73}
          />
        <Modal
          open={open73}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 603 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path816"
            d="M416.5 424.62c5.02 5.29 9.94 10.48 14.94 15.75-3.48 3.31-6.83 6.49-10.15 9.64-1.53-1.49-3.04-2.89-4.48-4.38-3.15-3.28-6.27-6.59-9.39-9.9-1.2-1.27-1.21-1.32-.04-2.44 2.99-2.87 6-5.71 9.12-8.67"
            className="st1"
            onClick={handleOpenLote74}
          />
        <Modal
          open={open74}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path818"
            d="M420.55 450.72c-3.25 3.09-6.28 5.94-9.27 8.82-.66.64-1.13.94-1.92.1-4.58-4.9-9.21-9.75-13.89-14.68.35-.92 1.12-1.38 1.72-1.97 2.47-2.39 4.98-4.74 7.45-7.13.62-.6 1.09-.77 1.78-.05 4.65 4.93 9.33 9.84 14.13 14.91"
            className="st1"
            onClick={handleOpenLote75}
          />
        <Modal
          open={open75}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path820"
            d="M293.87 537.06c5.33 5.13 10.43 10.05 15.65 15.08-3.11 3.21-6.12 6.27-9.06 9.39-.86.91-1.34.35-1.93-.22-3.5-3.38-7.01-6.76-10.51-10.14-1.09-1.05-2.16-2.13-3.28-3.15-.63-.57-.55-1 .01-1.57 3-3.07 5.99-6.16 9.12-9.39"
            className="st1"
            onClick={handleOpenLote76}
          />
        <Modal
          open={open76}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path822"
            d="M460.22 383.37c4.97 5.27 9.88 10.48 14.91 15.81-3.45 3.24-6.82 6.39-10.15 9.51-.79-.12-1.11-.72-1.54-1.17-4.11-4.35-8.22-8.7-12.31-13.06-1.24-1.32-1.24-1.35.08-2.6 2.94-2.79 5.91-5.57 9.01-8.49"
            className="st1"
            onClick={handleOpenLote77}
          />
        <Modal
          open={open77}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path824"
            d="M309.69 551.19c-4.95-4.77-10.05-9.69-15.27-14.72 3.14-3.24 6.16-6.3 9.13-9.41.9-.95 1.36-.21 1.92.33 3.96 3.84 7.92 7.66 11.87 11.51 2.58 2.51 2.62 2.57.02 5.11-2.44 2.4-4.99 4.69-7.67 7.18"
            className="st1"
            onClick={handleOpenLote78}
          />
        <Modal
          open={open78}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path826"
            d="M458.46 329.57c-1.92 2.75-3.73 5.37-5.55 7.97-2.01 2.88-4.02 5.75-6.04 8.62-.41.58-.74 1.3-1.67.64-3.57-2.53-7.15-5.04-10.86-7.64 1.84-2.61 3.57-5.08 5.31-7.55 2.16-3.06 4.31-6.12 6.47-9.18.38-.53.7-1.06 1.51-.49 3.57 2.54 7.15 5.04 10.83 7.63"
            className="st1"
            onClick={handleOpenLote79}
          />
        <Modal
          open={open79}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path828"
            d="M453.75 419.17c-4.8-5.09-9.37-9.98-13.98-14.83-.63-.66-.7-1.1.01-1.75 2.87-2.65 5.74-5.31 8.52-8.05.99-.97 1.47-.37 2.11.31 3.11 3.32 6.23 6.63 9.35 9.94 1.15 1.22 2.27 2.47 3.46 3.64.73.72.74 1.25-.03 1.96-3.12 2.85-6.19 5.74-9.44 8.78"
            className="st1"
            onClick={handleOpenLote80}
          />
        <Modal
          open={open80}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path830"
            d="M253.56 582.03c.27.17.61.36.93.58 5.13 3.68 10.24 7.38 15.41 11.01 1.01.71.92 1.24.28 2.1-2.24 3.02-4.45 6.05-6.6 9.13-.67.96-1.17 1.02-2.09.34-5.09-3.73-10.21-7.43-15.35-11.1-.85-.61-.88-1.1-.27-1.93 2.28-3.09 4.49-6.22 6.73-9.33.22-.3.4-.69.96-.8"
            className="st1"
            onClick={handleOpenLote81}
          />
        <Modal
          open={open81}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path832"
            d="m471.11 373.13 10.87 11.45c1.1 1.16 2.18 2.34 3.3 3.47.57.57.62.99-.01 1.57a963.53 963.53 0 0 0-8.71 8.23c-.56.53-.99.67-1.59.03-4.69-5.01-9.39-9.99-14.17-15.06 3.45-3.23 6.76-6.34 10.31-9.69"
            className="st1"
            onClick={handleOpenLote82}
          />
        <Modal
          open={open82}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path834"
            d="M458.05 355.79c-3.47-2.43-7-4.91-10.53-7.37-.55-.39-.71-.78-.29-1.38 3.94-5.61 7.87-11.24 11.9-17 3.72 2.62 7.29 5.14 10.88 7.65.59.42.63.84.23 1.4-.84 1.17-1.67 2.34-2.49 3.52-2.67 3.79-5.33 7.58-8.02 11.35-.47.63-.76 1.42-1.68 1.83"
            className="st1"
            onClick={handleOpenLote83}
          />
        <Modal
          open={open83}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path836"
            d="M394.73 445.33c5 5.27 9.88 10.41 14.92 15.72-3.39 3.24-6.71 6.4-9.96 9.5-.6-.01-.86-.34-1.13-.63-4.34-4.57-8.65-9.16-13.04-13.69-.88-.91-.85-1.41.08-2.26 3.05-2.79 6.02-5.68 9.13-8.64"
            className="st1"
            onClick={handleOpenLote84}
          />
        <Modal
          open={open84}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path838"
            d="M458.95 356.43c4.17-5.91 8.26-11.7 12.31-17.44.86-.1 1.26.5 1.75.84 3.02 2.09 6.01 4.22 9.03 6.31.72.5.94.91.36 1.72-3.72 5.19-7.39 10.42-11.07 15.64-.47.67-.85 1.05-1.71.44-3.49-2.51-7.03-4.96-10.67-7.51"
            className="st1"
            onClick={handleOpenLote85}
          />
        <Modal
          open={open85}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path840"
            d="M417.09 424.07c3.19-3.05 6.21-5.89 9.17-8.78.84-.82 1.35-.71 2.12.11 4.3 4.6 8.64 9.17 13.01 13.71.77.8.58 1.25-.13 1.91-2.8 2.61-5.57 5.25-8.32 7.92-.63.61-1.06.77-1.74.05-4.63-4.94-9.3-9.85-14.11-14.92"
            className="st1"
            onClick={handleOpenLote86}
          />
        <Modal
          open={open86}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path842"
            d="M315.35 514.92c3.38-3.47 6.54-6.73 9.84-10.13 1.57 1.51 3.05 2.93 4.53 4.35 3.34 3.21 6.68 6.42 10.01 9.64.47.46 1.26.87.42 1.72-3.06 3.12-6.1 6.27-9.26 9.51-5.21-5.06-10.3-10-15.54-15.09"
            className="st1"
            onClick={handleOpenLote87}
          />
        <Modal
          open={open87}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path844"
            d="M325.89 504.06c3.44-3.54 6.88-7.08 10.43-10.73 1.51 1.81 2.95 3.52 4.37 5.23 2.81 3.38 5.61 6.77 8.4 10.16 1.1 1.34 1.09 1.37-.16 2.67-2.16 2.25-4.35 4.47-6.48 6.74-.73.78-1.26.99-2.14.14-4.63-4.53-9.3-9-13.96-13.5-.15-.16-.25-.38-.46-.71"
            className="st1"
            onClick={handleOpenLote88}
          />
        <Modal
          open={open88}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path846"
            d="M271.5 593.84c-6.02-4.32-11.77-8.45-17.68-12.69 2.55-3.55 5-6.96 7.43-10.34.9.11 1.33.74 1.86 1.18 4.61 3.82 9.2 7.65 13.79 11.5 1.27 1.07 1.28 1.11.32 2.45-1.85 2.59-3.74 5.16-5.72 7.9"
            className="st1"
            onClick={handleOpenLote89}
          />
        <Modal
          open={open89}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 520 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path848"
            d="M345.34 321.53c-2.28-.41-4.58-.49-6.91-.48-1.61.01-3.19.2-4.76.47-1.14.2-1.59-.23-1.79-1.28-.95-4.85-1.92-9.69-2.9-14.54-.18-.88.04-1.29 1-1.44 4.27-.66 8.56-1.11 12.88-.69 1.98.19 3.98.27 5.94.69.96.21 1.11.56.93 1.46-.97 4.85-1.88 9.7-2.81 14.56-.17.88-.46 1.56-1.58 1.25"
            className="st1"
            onClick={handleOpenLote90}
          />
        <Modal
          open={open90}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path850"
            d="M386.37 328.87c3.98 5.92 6.54 12.3 8.04 19.19-1.13.94-2.56.82-3.83 1.1-3.97.88-7.98 1.61-11.96 2.44-.79.16-1.42.22-1.63-.78-.92-4.34-2.78-8.31-5.16-12.27 4.84-3.23 9.61-6.4 14.54-9.68"
            className="st1"
            onClick={handleOpenLote91}
          />
        <Modal
          open={open91}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path852"
            d="M292.92 391.25c4.92-3.3 9.68-6.49 14.51-9.72 1.13 1.36 2.15 2.69 3.26 3.93 1.76 1.96 3.69 3.77 5.84 5.3.64.46 1.08.85.49 1.73-3.03 4.49-6.01 9.02-9.1 13.68-5.96-4-10.8-8.89-15-14.92"
            className="st1"
            onClick={handleOpenLote92}
          />
        <Modal
          open={open92}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path854"
            d="M347.59 320.73c.98-5.1 1.96-10.1 2.9-15.12.18-.94.78-.9 1.43-.73 1.62.42 3.24.86 4.83 1.36 4.36 1.36 8.45 3.33 12.36 5.7.97.59 1.18 1.05.49 2.04-2.82 4.07-5.58 8.18-8.34 12.29-.45.67-.8 1.07-1.69.5-3.38-2.18-7.1-3.62-10.98-4.61-.92-.24-1.21-.65-1-1.43"
            className="st1"
            onClick={handleOpenLote93}
          />
        <Modal
          open={open93}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path856"
            d="M308.72 312.66c4.47-3.06 9.4-5.26 14.61-6.82 1.43-.43 3.11-1.5 4.32-.83 1.24.69.91 2.7 1.22 4.14.77 3.59 1.5 7.18 2.22 10.77.37 1.86.35 1.93-1.54 2.42-3.66.95-7.1 2.4-10.29 4.42-.78.49-1.21.42-1.72-.36-2.89-4.4-5.83-8.77-8.74-13.16-.07-.12-.04-.3-.08-.58"
            className="st1"
            onClick={handleOpenLote94}
          />
        <Modal
          open={open94}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path858"
            d="M394.35 371.36c-1.38 6.82-4.06 13.15-7.97 19.16-.88-.56-1.68-1.03-2.45-1.54-3.66-2.43-7.3-4.89-10.99-7.28-.96-.62-1.08-1.11-.47-2.09 2.08-3.34 3.56-6.96 4.45-10.8.17-.71.4-1.21 1.26-1.03 5.3 1.11 10.61 2.22 15.92 3.34.06.02.11.11.25.24"
            className="st1"
            onClick={handleOpenLote95}
          />
        <Modal
          open={open95}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path860"
            d="M292.43 328.84c4.62 3.1 8.98 6.06 13.39 8.95.96.63 1.06 1.12.46 2.09-2.04 3.36-3.55 6.96-4.41 10.81-.17.76-.48 1.13-1.3.97a6405.8 6405.8 0 0 0-16.15-3.26c1.31-7.09 4.1-13.41 8.01-19.56"
            className="st1"
            onClick={handleOpenLote96}
          />
        <Modal
          open={open96}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path862"
            d="M370.9 406.12c-1.62-2.41-3.18-4.72-4.74-7.03-1.43-2.12-2.84-4.25-4.29-6.35-.47-.68-.65-1.2.18-1.79 3.6-2.57 6.63-5.73 9.23-9.42 4.92 3.27 9.7 6.44 14.46 9.6-2.57 4.72-9.01 11.24-14.84 14.99"
            className="st1"
            onClick={handleOpenLote97}
          />
        <Modal
          open={open97}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path864"
            d="M292.52 390.55c-2.79-3.99-4.73-8.25-6.29-12.7-.55-1.58-1.01-3.19-1.42-4.81-.49-1.92-.42-2.02 1.41-2.38 3.44-.68 6.88-1.34 10.33-2.01 1.33-.26 2.65-.54 3.98-.83.75-.16 1.18.04 1.37.86.9 4 2.48 7.74 4.63 11.22.45.73.22 1.14-.41 1.56-4.51 3-9 6.02-13.6 9.09"
            className="st1"
            onClick={handleOpenLote98}
          />
        <Modal
          open={open98}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path866"
            d="M301.08 355.66c-.26 2.55-.27 5.11-.02 7.66-.02.24-.07.48-.04.71.34 2.88.35 2.89-2.4 3.44-4.15.83-8.29 1.65-12.44 2.46-1.87.36-2.05.25-2.32-1.61-.85-5.73-.85-11.46-.02-17.19.27-1.84.44-1.97 2.33-1.59 4.46.88 8.9 1.89 13.38 2.65 1.68.29 2.14.57 1.6 2.29-.13.37-.05.79-.07 1.18"
            className="st1"
            onClick={handleOpenLote99}
          />
        <Modal
          open={open99}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path868"
            d="M385.91 328.13c-.59.44-1.02.79-1.48 1.09-4.32 2.87-8.65 5.73-13.08 8.66-2.68-3.74-5.74-6.98-9.42-9.6-.62-.44-.5-.88-.14-1.41 2.88-4.23 5.77-8.44 8.6-12.7.7-1.06 1.24-.56 1.92-.07 5.28 3.84 9.78 8.43 13.6 14.03"
            className="st1"
            onClick={handleOpenLote100}
          />
        <Modal
          open={open100}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path870"
            d="M308.75 406.36c2.43-3.67 4.92-7.45 7.44-11.21.66-.98 1.07-2.48 2.12-2.76 1.05-.27 2.07.94 3.11 1.47 2.71 1.38 5.49 2.55 8.46 3.2 1.14.25 1.55.77 1.3 1.99-1.02 4.83-1.96 9.67-2.9 14.52-.15.76-.41 1.16-1.26.95-6.47-1.58-12.6-3.94-18.12-7.75-.05-.03-.05-.14-.15-.41"
            className="st1"
            onClick={handleOpenLote101}
          />
        <Modal
          open={open101}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path872"
            d="M360.49 392.09c3.29 4.9 6.44 9.58 9.51 14.14.04.7-.4.85-.71 1.04-5.31 3.33-11.02 5.7-17.12 7.15-1.08.26-1.54.18-1.76-1.07-.85-4.78-1.82-9.54-2.77-14.3-.2-.98-.12-1.67 1.06-1.93 4.15-.92 7.96-2.7 11.79-5.03"
            className="st1"
            onClick={handleOpenLote102}
          />
        <Modal
          open={open102}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path874"
            d="M395.54 359.65c.17 2.98-.18 5.91-.59 8.84-.24 1.68-.38 1.79-1.98 1.48-4.86-.93-9.7-1.93-14.55-2.88-.83-.16-1.02-.57-.9-1.34.64-3.97.61-7.95.04-11.93-.13-.89.04-1.3.98-1.49 4.86-.93 9.7-1.94 14.55-2.87 1.46-.28 1.65-.13 1.85 1.36.41 2.94.77 5.88.6 8.83"
            className="st1"
            onClick={handleOpenLote103}
          />
        <Modal
          open={open103}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path876"
            d="M339.31 415.88c-2.98-.11-6.01-.26-9.01-.72-1.11-.17-1.53-.47-1.28-1.67 1-4.76 1.93-9.53 2.86-14.3.22-1.12.65-1.55 1.92-1.33 3.8.65 7.64.61 11.44-.02 1.05-.17 1.45.18 1.63 1.11.94 4.93 1.87 9.87 2.85 14.79.2.99-.2 1.24-1.07 1.38-3.07.5-6.18.66-9.34.76"
            className="st1"
            onClick={handleOpenLote104}
          />
        <Modal
          open={open104}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path878"
            d="M195.73 153.53c2.89-.09 5.82.17 8.74.61 1.52.23 1.66.36 1.38 1.84-.93 4.85-1.93 9.68-2.87 14.52-.17.88-.51 1.15-1.46 1.01-3.96-.56-7.94-.61-11.9.04-.97.16-1.25-.16-1.42-1.04-.93-4.84-1.93-9.67-2.87-14.52-.29-1.51-.2-1.6 1.28-1.84 3-.45 6.01-.7 9.12-.62"
            className="st1"
            onClick={handleOpenLote105}
          />
        <Modal
          open={open105}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path880"
            d="M227.36 256.02c-.5-.17-.69-.52-.92-.85-2.76-4.11-5.49-8.24-8.29-12.32-.64-.93-.61-1.41.34-2.09 3.15-2.23 5.87-4.93 8.13-8.07.66-.92 1.16-1.02 2.12-.37 4.02 2.74 8.08 5.43 12.18 8.07.98.63 1.1 1.1.4 2.05-3.92 5.32-8.53 9.91-13.96 13.58"
            className="st1"
            onClick={handleOpenLote106}
          />
        <Modal
          open={open106}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path882"
            d="M228 188.55c4.92-3.26 9.68-6.43 14.52-9.63 1.27 1.54 2.08 3.17 2.94 4.78 2.23 4.18 3.78 8.6 4.94 13.18.26 1.01.18 1.57-1.09 1.8-4.63.85-9.22 1.85-13.84 2.76-1.95.39-2 .36-2.46-1.47-1.01-3.99-2.68-7.67-5.01-11.42"
            className="st1"
            onClick={handleOpenLote107}
          />
        <Modal
          open={open107}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path884"
            d="M216.8 177.21c-1.63-.87-3.08-1.71-4.58-2.42-2.38-1.13-4.84-2.06-7.43-2.62-.75-.16-1.36-.39-1.14-1.41 1.1-5.3 2.17-10.6 3.28-16.06 2.41.33 4.57 1.02 6.73 1.74 4.03 1.34 7.83 3.16 11.45 5.38.68.42 1.45.75.73 1.81-3.02 4.5-6 9.02-9.04 13.58"
            className="st1"
            onClick={handleOpenLote108}
          />
        <Modal
          open={open108}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path886"
            d="M226.45 256.64c-6.06 3.95-12.39 6.6-19.36 8.01-.76-1.77-.89-3.61-1.26-5.38-.71-3.43-1.4-6.87-2.13-10.3-.22-1.03-.09-1.56 1.12-1.82 3.76-.83 7.3-2.31 10.58-4.33.97-.6 1.48-.51 2.1.45 2.91 4.39 5.86 8.75 8.95 13.37"
            className="st1"
            onClick={handleOpenLote109}
          />
        <Modal
          open={open109}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path888"
            d="M242.55 240.56c-4.69-3.11-9.13-6.08-13.59-9-.75-.49-.95-.88-.42-1.7 2.12-3.32 3.64-6.92 4.51-10.76.31-1.36 1.02-1.36 2.06-1.15 3.51.71 7.04 1.4 10.55 2.11 1.25.25 2.49.57 3.75.74.92.13 1.27.49 1.04 1.41-1.59 6.47-4.04 12.57-7.9 18.35"
            className="st1"
            onClick={handleOpenLote110}
          />
        <Modal
          open={open110}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path890"
            d="M163.04 188.87c-2.22 3.6-3.97 7.51-4.94 11.73-.26 1.12-.88 1.12-1.74.95-3.6-.72-7.19-1.42-10.79-2.14-1.17-.23-2.33-.58-3.51-.71-1.14-.12-1.51-.52-1.22-1.69 1.47-5.93 3.68-11.54 6.91-16.73.88-1.42.92-1.43 2.33-.49 4.05 2.7 8.09 5.41 12.14 8.13.3.21.69.38.82.95"
            className="st1"
            onClick={handleOpenLote111}
          />
        <Modal
          open={open111}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path892"
            d="M192.02 248.04c2.39.24 4.78.24 7.18.01.08.01.16.02.24.04 1.08.21 2.35-.95 3.16 0 .6.7.59 1.94.79 2.95.79 3.91 1.56 7.82 2.34 11.72.42 2.08.37 2.21-1.61 2.5-5.64.83-11.3.82-16.94.01-2.07-.3-2.17-.43-1.78-2.39.91-4.61 1.92-9.21 2.76-13.83.22-1.19.68-1.47 1.74-1.24.7.13 1.39.4 2.12.23"
            className="st1"
            onClick={handleOpenLote112}
          />
        <Modal
          open={open112}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path894"
            d="M164.06 163.18c3.28 4.95 6.46 9.73 9.7 14.6-3.69 2.66-6.86 5.68-9.43 9.29-.47.66-.9.72-1.58.27-4.24-2.86-8.48-5.71-12.75-8.53-1.1-.72-.45-1.31.01-1.94 3.82-5.3 8.4-9.82 14.05-13.69"
            className="st1"
            onClick={handleOpenLote113}
          />
        <Modal
          open={open113}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path896"
            d="M163.07 230.47c-.01.53-.37.72-.7.93-4.24 2.85-8.49 5.67-12.71 8.55-.86.59-1.23.26-1.68-.45-3.32-5.33-5.64-11.06-7.14-17.14-.24-1-.01-1.4 1.06-1.6 4.7-.88 9.38-1.88 14.07-2.79 1.81-.35 1.86-.31 2.29 1.41.91 3.58 2.33 6.95 4.21 10.12.22.33.42.67.6.97"
            className="st1"
            onClick={handleOpenLote114}
          />
        <Modal
          open={open114}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path898"
            d="M164.07 256.14c-5.7-3.88-10.35-8.52-14.27-13.92-.59-.81-.38-1.21.36-1.7 4.19-2.77 8.37-5.55 12.53-8.37.75-.51 1.21-.47 1.76.28 2.35 3.26 5.18 6.05 8.42 8.43.57.42.93.75.42 1.52-3.08 4.54-6.11 9.11-9.22 13.76"
            className="st1"
            onClick={handleOpenLote115}
          />
        <Modal
          open={open115}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path900"
            d="M184.07 154.69c.7 1.94.92 3.92 1.31 5.86.68 3.36 1.34 6.73 2.07 10.08.2.9-.01 1.34-.92 1.54-3.94.86-7.59 2.43-11.02 4.53-.96.59-1.38.26-1.9-.53-2.71-4.14-5.43-8.28-8.22-12.37-.63-.92-.37-1.32.47-1.83 5.64-3.45 11.65-5.93 18.21-7.28"
            className="st1"
            onClick={handleOpenLote116}
          />
        <Modal
          open={open116}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path902"
            d="M164.73 256.58c3.3-4.93 6.5-9.69 9.74-14.53 3.9 2.38 7.87 4.21 12.19 5.15.85.18.99.61.84 1.36-.98 4.84-1.93 9.69-2.93 14.53-.32 1.52-.49 1.62-2.15 1.21-5.45-1.36-10.62-3.42-15.45-6.29-.67-.4-1.33-.85-2.24-1.43"
            className="st1"
            onClick={handleOpenLote117}
          />
        <Modal
          open={open117}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path904"
            d="m251.95 206.48.03 5.57c-.65 2.23-.43 4.58-.89 6.85-.24 1.21-.64 1.36-1.74 1.13-4.6-.97-9.21-1.84-13.82-2.77-1.82-.36-1.9-.4-1.67-2.1.5-3.66.58-7.31-.03-10.96-.19-1.14.08-1.74 1.31-1.97 4.85-.92 9.69-1.91 14.52-2.9.93-.19 1.19.13 1.41 1.02.5 2.03.2 4.15.88 6.13"
            className="st1"
            onClick={handleOpenLote118}
          />
        <Modal
          open={open118}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $730,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path906"
            d="M139.38 210.51c-.07-2.65.29-6.38.8-10.1.16-1.17.69-1.18 1.63-.98 3.98.84 7.97 1.61 11.96 2.41.23.05.46.13.7.18 3.18.63 3.25.64 2.8 3.67-.46 3.04-.25 6.05.1 9.07.24 2.11.2 2.14-1.72 2.52-4.54.9-9.08 1.78-13.62 2.67-1.57.31-1.53.29-1.83-1.18-.49-2.37-.53-4.77-.82-8.26"
            className="st1"
            onClick={handleOpenLote119}
          />
        <Modal
          open={open119}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path908"
            d="M277.92 509.84c.18 2.94-.19 5.88-.62 8.8-.25 1.66-.48 1.7-2.01 1.38-4.6-.98-9.24-1.79-13.86-2.68-1.69-.33-1.66-.34-1.44-2 .49-3.74.55-7.5-.02-11.23-.18-1.19.12-1.58 1.17-1.79 4.93-.98 9.86-1.97 14.78-2.98 1.27-.26 1.29.66 1.39 1.41.44 3 .77 6.01.61 9.09"
            className="st1"
            onClick={handleOpenLote120}
          />
        <Modal
          open={open120}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 608.5 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path910"
            d="M276.65 521.87c-.91 4.05-2.16 7.74-3.8 11.31-1.03 2.25-2.24 4.41-3.53 6.53-.49.81-.94.86-1.71.34-4.17-2.83-8.35-5.62-12.56-8.39-.79-.52-.83-1.01-.36-1.77 2.14-3.41 3.66-7.09 4.58-11 .18-.79.56-1.09 1.34-.94 5.09.98 10.19 1.96 15.28 2.93.71.14.94.53.76.99"
            className="st1"
            onClick={handleOpenLote121}
          />
        <Modal
          open={open121}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 608.5 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path912"
            d="M166.85 520.24c-.93-1.97-.92-4.08-1.08-6.11-.35-4.3-.21-8.61.43-12.89.3-2.02.3-2.02 2.39-1.62 4.38.85 8.76 1.7 13.14 2.56 2.04.4 1.95.4 1.75 2.63-.31 3.5-.47 7.02.18 10.5.22 1.15 0 1.77-1.24 1.99-5.18.94-10.34 1.94-15.57 2.94"
            className="st1"
            onClick={handleOpenLote122}
          />
        <Modal
          open={open122}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 608.5 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path914"
            d="M221.67 453.54c3.17-.04 6.03.15 8.87.61 1.68.27 1.73.31 1.43 1.92-.89 4.62-1.77 9.24-2.69 13.85-.34 1.72-.38 1.67-2.15 1.49-3.74-.36-7.5-.5-11.22.14-1.11.19-1.45-.2-1.63-1.1-.98-4.93-1.94-9.86-2.95-14.77-.25-1.19.49-1.36 1.31-1.48 3.1-.45 6.2-.75 9.03-.66"
            className="st1"
            onClick={handleOpenLote123}
          />
        <Modal
          open={open123}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 608.5 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path916"
            d="M268.75 478.82c3.78 5.84 6.39 11.87 7.85 18.4.22.98-.05 1.26-.94 1.44-4.77.93-9.54 1.92-14.31 2.84-1.64.32-1.67.26-2.1-1.35-.99-3.64-2.33-7.14-4.35-10.33-.62-.99-.47-1.48.47-2.1 4.4-2.88 8.77-5.83 13.38-8.9"
            className="st1"
            onClick={handleOpenLote124}
          />
        <Modal
          open={open124}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 608.5 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path918"
            d="M174.93 540.57c-2.15-3-3.72-6.19-5.1-9.5-1.14-2.73-2-5.53-2.72-8.39-.27-1.08-.18-1.7 1.22-1.94 4.63-.79 9.22-1.78 13.83-2.68 1.75-.34 1.78-.31 2.26 1.4 1.01 3.62 2.4 7.09 4.4 10.28.55.87.45 1.37-.4 1.93-4.48 2.92-8.92 5.88-13.49 8.9"
            className="st1"
            onClick={handleOpenLote125}
          />
        <Modal
          open={open125}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 608.5 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path920"
            d="M213.62 471.12c.11.53-.22.9-.86 1.04-4.08.93-7.87 2.56-11.43 4.75-.51.31-.89.21-1.21-.27-.18-.27-.37-.52-.55-.79-2.62-3.91-5.25-7.81-7.85-11.73-.88-1.33-.88-1.38.41-2.18 5.19-3.22 10.74-5.57 16.71-6.93 1.54-.35 1.56-.31 1.86 1.16.92 4.53 1.83 9.06 2.73 13.59.08.41.12.81.19 1.36"
            className="st1"
            onClick={handleOpenLote126}
          />
        <Modal
          open={open126}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 608.5 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path922"
            d="M175.22 478.24c3.93-5.72 8.48-10.36 13.83-14.24.66-.48 1.17-.7 1.75.17 2.99 4.51 6.02 9 9.04 13.51-1.69 1.47-3.28 2.8-4.81 4.19a29.417 29.417 0 0 0-4.41 5.04c-.59.85-1.08.91-1.93.33-4.42-3-8.88-5.94-13.47-9"
            className="st1"
            onClick={handleOpenLote127}
          />
        <Modal
          open={open127}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 608.5 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path924"
            d="M229.84 471.02c.79-3.98 1.53-7.74 2.27-11.5.25-1.25.55-2.5.74-3.76.15-.98.56-1.07 1.47-.86 6.22 1.4 11.99 3.85 17.39 7.21.66.41.88.76.38 1.5-2.87 4.23-5.71 8.49-8.53 12.75-.53.8-1 .76-1.75.3-3.36-2.05-6.95-3.59-10.8-4.47-.75-.16-1.45-.36-1.17-1.17"
            className="st1"
            onClick={handleOpenLote128}
          />
        <Modal
          open={open128}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 608.5 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path926"
            d="M252.55 556.67c-5.08 3.41-10.38 5.7-16.02 7.25-3.49.96-3.48.93-4.16-2.61-.79-4.14-1.61-8.28-2.46-12.41-.18-.89-.25-1.44.91-1.69 3.84-.84 7.45-2.33 10.78-4.4 1.02-.64 1.51-.4 2.09.5 2.89 4.39 5.81 8.77 8.86 13.36"
            className="st1"
            onClick={handleOpenLote129}
          />

        <Modal
          open={open129}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 608.5 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path928"
            d="M190.91 556.69c3.13-4.72 6.09-9.17 9.03-13.63.48-.74.95-.92 1.75-.42 3.41 2.13 7.09 3.65 11 4.55 1.23.28 1 1.04.86 1.81-.5 2.66-1.03 5.32-1.57 7.98-.39 1.95-.81 3.9-1.23 5.85-.4 1.86-.47 1.93-2.35 1.44-4.49-1.16-8.84-2.72-12.92-4.95-1.45-.79-2.88-1.65-4.57-2.63"
            className="st1"
            onClick={handleOpenLote130}
          />

        <Modal
          open={open130}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 608.5 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path930"
            d="M190.42 556c-.85-.12-1.3-.6-1.81-.98a55.763 55.763 0 0 1-12.29-12.34c-.97-1.33-.96-1.4.26-2.22 4.11-2.76 8.25-5.47 12.35-8.23.77-.52 1.21-.44 1.76.3 2.32 3.19 5.07 5.95 8.26 8.27.67.49.99.9.43 1.73-3.03 4.5-6.01 9.02-8.96 13.47"
            className="st1"
            onClick={handleOpenLote131}
          />
        <Modal
          open={open131}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 608.5 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path932"
            d="M211.2 564.82c1.07-5.41 2.11-10.56 3.09-15.73.24-1.27.88-1.43 2.01-1.24 3.65.61 7.32.62 10.97 0 1.22-.21 1.67.16 1.89 1.37.92 4.86 1.91 9.71 2.93 14.55.18.86-.09 1.19-.87 1.29-1.42.2-2.84.47-4.27.59-5.18.45-10.34.3-15.75-.83"
            className="st1"
            onClick={handleOpenLote132}
          />
        <Modal
          open={open132}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 608.5 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path934"
            d="M174.75 478.9c4.7 3.12 9.2 6.12 13.71 9.1.65.43.84.83.39 1.55-2.15 3.49-3.73 7.22-4.6 11.23-.22 1.03-.81.97-1.59.81-3.67-.74-7.35-1.46-11.02-2.19-1.17-.23-2.33-.58-3.51-.69-1.3-.12-1.32-.74-1.08-1.77 1.08-4.6 2.68-9.01 4.89-13.19.85-1.6 1.81-3.14 2.81-4.85"
            className="st1"
            onClick={handleOpenLote133}
          />
        <Modal
          open={open133}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 608.5 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path936"
            d="M243.52 541.63c3.98-2.76 7.31-6.05 10.08-10.01 4.65 3.11 9.09 6.08 13.54 9.04.73.48.96.91.37 1.72-3.93 5.42-8.62 10.04-14.29 13.85-3.25-4.88-6.42-9.67-9.7-14.6"
            className="st1"
            onClick={handleOpenLote134}
          />
        <Modal
          open={open134}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 608.5 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path938"
            d="M161.74 303.42c2.11.72 4.43.31 6.66 1.24-.69 3.5-1.37 7.01-2.06 10.51-.31 1.56-.6 3.13-.93 4.69-.39 1.82-.42 1.89-2.4 1.57-2.14-.35-4.29-.44-6.45-.35-1.51.06-3.02.21-4.52.44-1.12.17-1.54-.23-1.75-1.32-.89-4.7-1.86-9.38-2.81-14.07-.22-1.09-.14-1.68 1.26-1.94 1.96-.36 4-.12 5.9-.82 2.37-.42 4.74-.51 7.1.05"
            className="st1"
            onClick={handleOpenLote135}
          />
        <Modal
          open={open135}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path940"
            d="M212.98 349.19c1.07 5.31 1.32 10.31.82 15.33-.15 1.5-.23 3.02-.55 4.51-.21.96-.61 1.17-1.46 1-2.58-.51-5.17-1-7.75-1.51-2.35-.46-4.68-1-7.04-1.39-.96-.16-1.19-.61-1.05-1.46.66-3.97.67-7.95.01-11.92-.11-.69-.04-1.21.85-1.39 5.32-1.01 10.63-2.07 16.17-3.17"
            className="st1"
            onClick={handleOpenLote136}
          />
        <Modal
          open={open136}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path942"
            d="M136.62 327.36c-3.07-4.58-6.02-9.04-9.03-13.45-.61-.9-.42-1.36.43-1.89 4.3-2.65 8.85-4.77 13.7-6.17 1.49-.43 3.23-1.67 4.5-.75 1.09.79.81 2.8 1.12 4.27.77 3.67 1.48 7.34 2.27 11 .23 1.06.02 1.57-1.13 1.84-4.14.98-7.98 2.72-11.86 5.15"
            className="st1"
            onClick={handleOpenLote137}
          />
        <Modal
          open={open137}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-82</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $20,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path944"
            d="M125.86 337.94c-4.9-3.28-9.66-6.46-14.51-9.71 2.38-3.8 5.3-6.93 8.42-9.88 1.63-1.54 3.41-2.89 5.18-4.26.89-.69 1.41-.73 2.06.3 1.62 2.56 3.35 5.06 5.03 7.58 1.11 1.66 2.21 3.32 3.34 4.97.36.53.51.94-.12 1.4-3.65 2.62-6.73 5.82-9.4 9.6"
            className="st1"
            onClick={handleOpenLote138}
          />
        <Modal
          open={open138}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: PEM-05</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $730,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path946"
            d="M204.8 328.87c3.79 5.72 6.26 11.73 7.8 18.14.23.96-.03 1.47-1.05 1.67-4.93.97-9.85 1.97-14.77 2.97-.72.15-1.19.05-1.38-.82-.96-4.32-2.72-8.32-5.16-12.21 4.85-3.25 9.61-6.44 14.56-9.75"
            className="st1"
            onClick={handleOpenLote139}
          />
        <Modal
          open={open139}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: PEM-10</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $730,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path948"
            d="M204.73 390.55c-4.93-3.29-9.69-6.47-14.54-9.72 2.41-3.86 4.19-7.85 5.19-12.15.24-1.06.82-.97 1.58-.82 3.28.67 6.56 1.34 9.84 2 1.41.28 2.82.53 4.23.82 1.75.36 1.89.53 1.46 2.19-.6 2.31-1.28 4.6-2.15 6.84-1.46 3.72-3.2 7.29-5.61 10.84"
            className="st1"
            onClick={handleOpenLote140}
          />
        <Modal
          open={open140}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: PEM-12</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $730,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path950"
            d="M188.74 312.83c-2.02 3.02-3.96 5.93-5.9 8.83-1.02 1.53-2.08 3.03-3.05 4.59-.52.83-.98 1.05-1.88.48a34.208 34.208 0 0 0-10.53-4.44c-1.16-.27-1.56-.73-1.3-1.96 1.03-4.83 1.99-9.68 2.9-14.54.2-1.05.77-1.07 1.54-.88 3.25.83 6.45 1.79 9.52 3.16 2.99 1.32 5.9 2.75 8.7 4.76"
            className="st1"
            onClick={handleOpenLote141}
          />
        <Modal
          open={open141}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: PEM-08</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $730,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path952"
            d="M125.36 338.59c-1.87 3.29-3.54 6.54-4.54 10.09-.9 3.19-.94 3.17-4.24 2.5-3.9-.79-7.81-1.56-11.71-2.36-.62-.13-1.22-.32-1.97-.52.05-1.49.54-2.83.92-4.17 1.42-4.92 3.46-9.59 6.16-13.95.43-.69.77-1.43 1.82-.72 4.48 3.05 8.98 6.05 13.56 9.13"
            className="st1"
            onClick={handleOpenLote142}
          />
        <Modal
          open={open142}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: PEM-04</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $730,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path954"
            d="M189.34 406.17c-3.08-4.64-6.03-9.09-9-13.52-.48-.71-.55-1.22.24-1.78 3.52-2.53 6.49-5.63 8.97-9.14.82-.06 1.25.48 1.75.81 3.92 2.6 7.81 5.23 11.74 7.82.86.57 1.26 1.01.49 2.04-3.91 5.31-8.48 9.92-14.19 13.77"
            className="st1"
            onClick={handleOpenLote143}
          />
        <Modal
          open={open143}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: PEM-13</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $730,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path956"
            d="M189.45 313.24c5.99 4.14 10.8 8.95 14.91 14.95-4.84 3.24-9.63 6.45-14.5 9.72-.91-1.13-1.73-2.2-2.6-3.24-1.9-2.27-4.07-4.27-6.46-6.03-.61-.45-1.14-.84-.54-1.73 3.05-4.48 6.05-8.98 9.19-13.67"
            className="st1"
            onClick={handleOpenLote144}
          />
        <Modal
          open={open144}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: PEM-09</h4>
                  <h4>Area: 609 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $730,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path958"
            d="M188.69 406.62c-6.1 3.96-12.44 6.62-19.48 8.04-1.11-5.59-2.2-11.04-3.37-16.89 2.87 1.6 5.49 2.26 8.27 1.12 2.74-1.12 4.23-3.28 5.03-6.58 3.29 4.93 6.34 9.51 9.55 14.31"
            className="st1"
            onClick={handleOpenLote145}
          />
        <Modal
          open={open145}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: PEM-14</h4>
                  <h4>Area: 543 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $651,600.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path960"
            d="M271.01 189.94c-1.21-2.6-1.67-5.29-1.99-7.95-.45-3.73-.5-7.48.14-11.21.37-2.11.4-2.13 2.58-1.74 3.92.7 7.84 1.42 11.76 2.14 2.41.44 4.86.73 7.3 1.42-.67 3.1-.6 6.11.19 9.07.24.9.1 1.29-.78 1.59-6.38 2.19-12.76 4.43-19.2 6.68"
            className="st1"
            onClick={handleOpenLote146}
          />
        <Modal
          open={open146}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: SMOOV04</h4>
                  <h4>Area: 675 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $810,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path962"
            d="M283.42 208.19c-5.25-4.49-9.09-9.7-11.64-15.85-.65-1.57-.63-1.61.96-2.17 5.71-2 11.45-3.95 17.14-6.01 1.2-.43 1.85-.41 2.39.88 1.14 2.69 3.04 4.85 5.5 6.91-4.77 5.39-9.5 10.75-14.35 16.24"
            className="st1"
            onClick={handleOpenLote147}
          />
        <Modal
          open={open147}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: SMOOV-05</h4>
                  <h4>Area: 675 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $810,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path964"
            d="M296.16 143.89c-.75 4.07-1.46 7.91-2.16 11.75-.17.96-.58 1.3-1.62 1.11-5.48-1.03-10.98-1.96-16.45-3.01-1.14-.22-2.76.16-3.32-.91-.49-.93.18-2.28.4-3.44.57-2.97 1.15-5.95 1.61-8.94.17-1.07.6-1.33 1.58-1.15 6.19 1.13 12.39 2.23 18.58 3.35.8.14 1.68.26 1.38 1.24"
            className="st1"
            onClick={handleOpenLote148}
          />
        <Modal
          open={open148}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: SMOOV-02</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $720,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path966"
            d="m289.97 171.52-16.23-2.91c-1.02-.18-2.03-.42-3.05-.56-.86-.11-1.02-.58-.88-1.32.72-3.92 1.44-7.83 2.14-11.75.22-1.23 1.09-.95 1.84-.83 2.75.46 5.49.96 8.23 1.45 3.37.61 6.73 1.28 10.11 1.8 1.16.18 1.44.55 1.21 1.7-.75 3.83-1.4 7.68-2.08 11.52-.12.76-.46 1.18-1.29.9"
            className="st1"
            onClick={handleOpenLote149}
          />
        <Modal
          open={open149}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: SMOOV-03</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $720,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path968"
            d="M277.65 124.4c3.97.7 7.8 1.36 11.63 2.04 2.75.49 5.49 1.01 8.24 1.47 1.16.19 1.56.58 1.27 1.89-.78 3.5-1.42 7.03-1.98 10.58-.3 1.88-.43 1.82-2.15 1.52-4.79-.83-9.57-1.75-14.35-2.62-1.33-.24-2.67-.49-4.01-.66-.9-.11-1.27-.48-1.09-1.41.82-4.23 1.61-8.45 2.44-12.81"
            className="st1"
            onClick={handleOpenLote150}
          />
        <Modal
          open={open150}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: SMOOV-1</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $720,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path970"
            d="M306.6 228.47c4.87-5.54 9.56-10.87 14.34-16.3 3.56 3.11 7.04 6.15 10.48 9.15.01.82-.58 1.17-.98 1.63-3.94 4.5-7.89 9-11.86 13.48-1.21 1.37-1.25 1.37-2.59.21-3.06-2.65-6.12-5.32-9.39-8.17"
            className="st1"
            onClick={handleOpenLote151}
          />
        <Modal
          open={open151}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: SMOOV-08</h4>
                  <h4>Area: 598 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $717,600.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path972"
            d="M306 227.95c-3.57-3.09-7.06-6.12-10.44-9.05-.2-.53.09-.75.28-.96 4.23-4.79 8.46-9.57 12.71-14.34 1.11-1.25 1.15-1.24 2.41-.15 2.84 2.46 5.64 4.95 8.49 7.39.71.61.73 1.04.11 1.74-4.51 5.06-8.98 10.16-13.56 15.37"
            className="st1"
            onClick={handleOpenLote152}
          />
        <Modal
          open={open152}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: SMOOV-07</h4>
                  <h4>Area: 599 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $718,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path974"
            d="M298.4 192.47c3.55 3.1 7.03 6.13 10.53 9.19-.42.98-1.17 1.59-1.78 2.29-3.75 4.25-7.51 8.49-11.27 12.73-1.23 1.39-1.26 1.39-2.57.26-2.78-2.4-5.53-4.83-8.33-7.21-.75-.64-.93-1.11-.2-1.93 4.53-5.05 9.01-10.14 13.62-15.33"
            className="st1"
            onClick={handleOpenLote153}
          />
        <Modal
          open={open153}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: SMOOV-06</h4>
                  <h4>Area: 600 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $720,000.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path976"
            d="M340.58 257.98c4.89-5.56 9.53-10.82 14.26-16.19 3.62 3.17 7.1 6.21 10.72 9.37-4.8 5.45-9.47 10.78-14.34 16.31-3.56-3.17-7.05-6.28-10.64-9.49"
            className="st1"
            onClick={handleOpenLote154}
          />
        <Modal
          open={open154}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: SMOOV-11</h4>
                  <h4>Area: 598 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $717,600.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path978"
            d="M317.97 238.36c4.78-5.44 9.45-10.75 14.3-16.27 3.54 3.09 6.99 6.11 10.67 9.32-4.79 5.44-9.5 10.8-14.29 16.25-3.58-3.13-7.05-6.15-10.68-9.3"
            className="st1"
            onClick={handleOpenLote155}
          />
        <Modal
          open={open155}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: SMOOV-09</h4>
                  <h4>Area: 598 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $717,600.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path980"
            d="M329.27 248.17c2.66-3.02 5.18-5.89 7.7-8.76 1.85-2.1 3.73-4.17 5.52-6.32.81-.98 1.39-.94 2.3-.12 3.02 2.73 6.11 5.38 9.13 8.02.15.65-.29.94-.58 1.28-4 4.56-8.01 9.13-12.03 13.68-1.55 1.75-1.27 1.57-2.93.14-2.97-2.55-5.91-5.13-9.11-7.92"
            className="st1"
            onClick={handleOpenLote156}
          />
        <Modal
          open={open156}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: SMOOV-10</h4>
                  <h4>Area: 597 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $716,400.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path982"
            d="M361.22 338.55c4.09 4.23 6.6 9.03 7.87 14.51.36 1.56.6 3.13.61 4.74.01 1.53.01 1.57-1.6 1.58-3.19.03-6.39.01-9.58.01-3.27 0-6.55-.02-9.82.01-.92.01-1.52-.17-1.59-1.26-.04-.62-.3-1.24-.56-1.81-.96-2.14-.98-2.14.58-3.7 4.62-4.63 9.25-9.25 14.09-14.08"
            className="st1"
            onClick={handleOpenLote157}
          />
        <Modal
          open={open157}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AOV-03</h4>
                  <h4>Area: 621 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $745,200.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path984"
            d="M317.55 338.52c5.22 5.22 10.18 10.19 15.17 15.14.56.55.64.98.17 1.63-.37.51-.54 1.15-.87 1.69-.42.7-.05 1.75-.73 2.19-.82.53-1.87.2-2.81.21-5.83.02-11.66.02-17.49 0-1.89 0-1.94-.03-1.84-1.81.41-7.3 3.33-13.5 8.4-19.05"
            className="st1"
            onClick={handleOpenLote158}
          />
        <Modal
          open={open158}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AOV-08</h4>
                  <h4>Area: 621 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $745,200.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path986"
            d="M320.44 360.08c3.19 0 6.38.03 9.57-.02 1.04-.02 1.62.19 1.74 1.37.08.76.43 1.57.88 2.19.74 1.02.66 1.66-.27 2.57-4.51 4.4-8.93 8.89-13.4 13.34-1.37 1.36-1.41 1.37-2.68-.15-4.17-4.96-6.64-10.65-7.12-17.14-.16-2.13-.11-2.15 1.94-2.16 3.12-.01 6.23 0 9.34 0"
            className="st1"
            onClick={handleOpenLote159}
          />
        <Modal
          open={open159}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AOV-07</h4>
                  <h4>Area: 621 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $745,200.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path988"
            d="M361.07 380.77c-.99-.99-1.94-1.93-2.89-2.89-3.95-3.95-7.89-7.92-11.87-11.83-.75-.74-.98-1.28-.25-2.19.48-.6.88-1.41.95-2.16.13-1.35.76-1.67 2.01-1.66 6.3.05 12.61.01 18.92.03 1.83.01 1.87.04 1.75 1.89-.46 6.94-3.15 12.94-7.76 18.11-.21.24-.49.4-.86.7"
            className="st1"
            onClick={handleOpenLote160}
          />
        <Modal
          open={open160}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AOV-04</h4>
                  <h4>Area: 621 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $745,200.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path990"
            d="M339.76 340.42c0-3.11-.02-6.23.01-9.34.01-1.77.05-1.85 1.66-1.73 7.01.5 13.12 3.13 18.39 7.78.75.66.61 1.09-.02 1.72-4.71 4.67-9.4 9.35-14.06 14.07-.69.7-1.22.83-2 .19-.62-.5-1.36-.88-2.17-.96-1.48-.16-1.9-.92-1.84-2.38.11-3.12.03-6.24.03-9.35"
            className="st1"
            onClick={handleOpenLote161}
          />
        <Modal
          open={open161}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AOV-02</h4>
                  <h4>Area: 621 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $745,200.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
          <path
            id="path992"
            d="M338.92 340.54c0 3.28-.03 6.56.02 9.83.01.94-.19 1.47-1.21 1.61-.62.09-1.22.36-1.8.64-2.12 1.01-2.11 1.02-3.67-.53l-12.72-12.72c-1.43-1.43-1.43-1.46 0-2.69 5-4.3 10.82-6.7 17.36-7.33 1.97-.19 2-.12 2.01 1.83.02 3.12.01 6.24.01 9.36"
            className="st1"
            onClick={handleOpenLote162}
          />
        <Modal
          open={open162}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: AOV-01 </h4>
                  <h4>Area: 621 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $745,200.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                  onClick={handleClickLead}>
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path994"
          d="M360.61 381.45c-4.8 4.54-10.2 7.27-16.46 8.22-1.32.2-2.95 1.03-3.94.22-1.12-.92-.42-2.71-.43-4.11-.06-5.28-.03-10.55-.02-15.83 0-2.11.01-2.11 1.97-2.74.3-.1.6-.22.89-.36.71-.34 1.43-1 2.12-.96.85.05 1.34 1.05 1.95 1.66 4.59 4.56 9.16 9.14 13.92 13.9"
          className="st1"
        />
<<<<<<< HEAD
          <Modal
=======
                <Modal
>>>>>>> 4246ca5787a7a490489251b5c7f783428e130b75
          open={open163}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
<<<<<<< HEAD
                  <h4>Lote: AOV-01 </h4>
                  <h4>Area: 621 m2</h4>
                  <h4>Precio m2: $1,200.00mxn</h4>
                  <h4>Precio Total: $745,200.00mxn</h4>
=======
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
>>>>>>> 4246ca5787a7a490489251b5c7f783428e130b75
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
<<<<<<< HEAD
                  onClick={handleClickLead}>
=======
                    
                  >
>>>>>>> 4246ca5787a7a490489251b5c7f783428e130b75
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path996"
          d="M318.32 381.23c2.45-2.42 4.94-4.87 7.42-7.33 2.43-2.42 4.88-4.82 7.26-7.29.73-.76 1.32-1.02 2.21-.29.42.35.96.57 1.48.77 2.23.85 2.23.84 2.23 3.25 0 5.9.01 11.81 0 17.71 0 2.21-.03 2.19-2.08 1.97-6.27-.67-11.89-2.88-16.77-6.91-.6-.51-1.3-.94-1.75-1.88"
          className="st1"
        />
<Modal
          open={open164}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path998"
          d="M339.4 352.64c3.99-.01 7.14 3.12 7.11 7.09a7.058 7.058 0 0 1-6.97 7.02c-3.97.05-7.2-3.06-7.26-6.99-.05-3.92 3.15-7.11 7.12-7.12"
          className="st11"
        />
        <Modal
          open={open165}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1000"
          d="M68.11 338.95v-17c7.9-.03 15.8-.06 23.7-.11 1.07-.01 1.43.41 1.43 1.42-.03 4.8-.03 9.59 0 14.39.01 1.01-.36 1.43-1.43 1.42-7.9-.06-15.8-.09-23.7-.12"
          className="st1"
        />
        <Modal
          open={open166}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1002"
          d="M84.31 357.14c-2.56 0-5.11-.02-7.67.01-.86.01-1.31-.2-1.3-1.2.04-4.95.03-9.9 0-14.86 0-.91.3-1.26 1.24-1.26 5.11.03 10.22.04 15.34 0 1.1-.01 1.32.49 1.32 1.44-.03 4.79-.04 9.59.01 14.38.01 1.15-.37 1.54-1.51 1.51-2.48-.07-4.96-.02-7.43-.02"
          className="st1"
        />
        <Modal
          open={open167}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1004"
          d="M84.34 303.85c2.4 0 4.8.04 7.2-.02 1.15-.03 1.74.2 1.72 1.55-.07 4.72-.05 9.43-.01 14.15.01 1.08-.25 1.57-1.47 1.55-5.04-.06-10.08-.05-15.11-.01-1.1.01-1.33-.46-1.32-1.43.03-4.8.05-9.6-.01-14.39-.02-1.24.5-1.45 1.57-1.43 2.47.07 4.95.03 7.43.03"
          className="st1"
        />
        <Modal
          open={open168}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1006"
          d="M84.33 285.84c2.39 0 4.79.03 7.18-.01 1.12-.02 1.76.18 1.74 1.55-.07 4.71-.05 9.41-.01 14.12.01 1.1-.32 1.57-1.49 1.56-5.03-.04-10.05-.04-15.08 0-1.07.01-1.34-.46-1.33-1.44.03-4.79.05-9.57-.01-14.36-.01-1.23.53-1.46 1.58-1.44 2.47.05 4.95.02 7.42.02"
          className="st1"
        />
        <Modal
          open={open169}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1008"
          d="M200.72 487.79c5.4-5.06 11.75-7.98 19.24-8.42 1.11-.07 1.35.36 1.35 1.34-.02 6.63-.02 13.26 0 19.88 0 .85-.23 1.31-1.17 1.42-.69.08-1.38.39-2.02.7-1.91.94-1.91.97-3.32-.44-4.29-4.29-8.59-8.58-12.87-12.88-.43-.43-1-.79-1.21-1.6"
          className="st1"
        />
        <Modal
          open={open170}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1010"
          d="M250.68 500.12c.59 2.39 1.29 4.76 1.34 7.26.04 1.84.06 1.87-1.76 1.88-5.9.02-11.8 0-17.71.01-.88 0-1.75.03-2.63.05-.64-1.42-.72-3.06-1.77-4.34-.68-.82.19-1.29.65-1.76 3.87-3.89 7.76-7.77 11.64-11.65 1.01-1.01 2.01-2.01 3.08-3.07 3.41 3.41 5.63 7.3 7.16 11.62"
          className="st1"
        />
         <Modal
          open={open171}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1012"
          d="M229.93 510.17c6.74.02 13.47.03 20.21.06 1.79.01 1.79.02 1.97 1.93-.68 7.22-3.49 13.45-8.39 18.57-5.34-5.35-10.56-10.57-15.86-15.88 1.05-1.2 1.47-2.98 2.07-4.68"
          className="st1"
        />
         <Modal
          open={open171}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1014"
          d="M200.09 530.94c-4.19-4.36-6.82-9.27-8.01-14.94-.39-1.84-.92-3.7-.34-5.61 1.64-.44 3.32-.18 4.97-.19 5.19-.04 10.38 0 15.57-.03 1.07-.01 1.88.1 1.89 1.46 0 .45.27.91.48 1.34.34.71 1.08 1.43 1.02 2.08-.09.93-1.15 1.45-1.81 2.12l-13.77 13.77"
          className="st1"
        />
         <Modal
          open={open172}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1016"
          d="M243.01 487.92c-2.67 2.66-5.22 5.19-7.76 7.72-1.87 1.86-3.83 3.64-5.57 5.62-1.49 1.7-2.88 2.91-5.05 1.09-.68-.57-1.98.01-2.32-.92-.31-.86-.17-1.89-.17-2.84-.01-5.75-.01-11.51 0-17.26.01-2.02.03-2.04 1.95-1.91 7.3.51 13.5 3.41 18.92 8.5"
          className="st1"
        />
         <Modal
          open={open173}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1018"
          d="M199.89 488.64c.38.32.7.55.98.83 4.58 4.58 9.14 9.18 13.76 13.72.88.86 1.2 1.58.34 2.61-.29.35-.42.85-.58 1.3-.79 2.21-.79 2.21-3.22 2.21-6 0-11.99.01-17.99-.01-1.68 0-1.74-.04-1.64-1.74.44-7.3 3.3-13.55 8.35-18.92"
          className="st1"
        />
         <Modal
          open={open174}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1020"
          d="M242.91 531.56c-5.59 5.13-11.84 7.99-19.14 8.41-1.57.09-1.62.03-1.62-1.53-.02-6.39 0-12.78-.02-19.16 0-1.03.01-1.86 1.43-1.93.75-.04 1.54-.45 2.19-.89.89-.6 1.48-.56 2.25.23 4.89 4.92 9.83 9.81 14.91 14.87"
          className="st1"
        />
         <Modal
          open={open176}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1022"
          d="M200.8 531.67c.31-.79.85-1.17 1.29-1.61 4.4-4.41 8.83-8.79 13.19-13.23.85-.86 1.55-1.23 2.57-.34.29.25.7.38 1.07.52.73.27 1.75.29 2.15.8.57.73.21 1.85.22 2.8.02 5.91.02 11.82 0 17.73 0 1.69-.04 1.75-1.72 1.63-7.27-.51-13.48-3.4-18.77-8.3"
          className="st1"
        />
         <Modal
          open={open177}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1024"
          d="M214.67 509.55c.08-3.91 3.36-7.02 7.33-6.94 3.91.08 7.02 3.39 6.89 7.34-.12 3.79-3.4 6.93-7.17 6.88-3.88-.06-7.13-3.42-7.05-7.28"
          className="st11"
        />
 <Modal
          open={open178}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1026"
          d="M174.5 187.79c5.45-5.09 11.83-7.98 19.31-8.46 1.3-.08 1.46.46 1.44 1.51-.04 2.55-.01 5.11-.01 7.67 0 3.91-.02 7.83.01 11.74.01 1.03-.2 1.67-1.38 1.77-1.05.09-1.97.63-2.82 1.24-.51.37-.91.53-1.42-.01-4.97-5.17-10.33-9.96-15.13-15.46"
          className="st1"
        />
         <Modal
          open={open179}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1028"
          d="M216.99 188.02c-2.21 2.11-4.26 4.01-6.25 5.96-2.91 2.86-5.8 5.74-8.64 8.66-.8.82-1.45 1.09-2.42.3-.48-.39-1.12-.62-1.72-.82-2.02-.68-2.03-.66-2.04-2.63 0-6.08-.01-12.16 0-18.23 0-1.97.03-1.99 1.99-1.86 7.24.48 13.39 3.36 19.08 8.62"
          className="st1"
        />
         <Modal
          open={open180}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1030"
          d="m200.59 215.88 15.86 15.86c-3.46 3.43-7.74 5.78-12.56 7.17-2.15.62-4.34 1.02-6.6 1.08-1.05.03-1.39-.31-1.38-1.35.04-3.59.02-7.19.02-10.78 0-2.88.02-5.75-.01-8.63-.01-1.05.07-1.79 1.44-1.9 1.27-.1 2.35-.91 3.23-1.45"
          className="st1"
        />
         <Modal
          open={open181}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1032"
          d="M190.4 215.68c1.12.76 2.28 1.5 3.64 1.71.89.13 1.21.51 1.2 1.4-.02 6.63-.04 13.25.01 19.88.01 1.34-.69 1.37-1.67 1.31-6.15-.38-11.64-2.53-16.52-6.25-2.8-2.14-2.79-2.15-.33-4.61 3.95-3.95 7.9-7.91 11.86-11.85.57-.57 1.04-1.24 1.81-1.59"
          className="st1"
        />
         <Modal
          open={open182}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1034"
          d="M203.15 207.67c.02-.59-.25-1.08-.5-1.58-.98-1.91-.98-1.91.57-3.47 4.13-4.13 8.25-8.26 12.39-12.38.55-.55.99-1.25 1.97-1.6 5.37 5.75 8.23 12.55 8.43 20.47-.62.81-1.52.79-2.39.79-5.97.02-11.94.03-17.91 0-1.48 0-2.74-.29-2.56-2.23"
          className="st1"
        />
         <Modal
          open={open183}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1036"
          d="M173.87 188.78c.15.1.37.21.53.36 4.74 4.73 9.47 9.49 14.24 14.19.73.72 1.06 1.29.32 2.2-.39.48-.61 1.12-.81 1.71-.69 2.02-.67 2.03-2.67 2.04-6.22 0-12.45.01-18.67-.01-1.61-.01-1.69-.06-1.55-1.61.65-7.21 3.21-13.6 8.33-18.84.04-.03.15-.01.28-.04"
          className="st1"
        />
         <Modal
          open={open184}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1038"
          d="M226.02 210.34c-.24 7.91-3.1 14.7-8.54 20.44-1.02-.49-1.58-1.3-2.24-1.96-4.19-4.17-8.35-8.37-12.56-12.52-.86-.85-1.23-1.53-.32-2.57.46-.53.76-1.22.78-1.97.12-1.2.43-2.07 1.97-2.06 6.47.05 12.95 0 19.42.03.57.01 1.12.09 1.49.61"
          className="st1"
        />
         <Modal
          open={open185}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1040"
          d="M173.87 230.86c-4.48-4.69-7.15-10.01-8.21-16.16-.16-.94-.32-1.89-.39-2.85-.13-1.57-.05-1.65 1.47-1.69 1.12-.03 2.24-.01 3.36-.01 5.36 0 10.72.03 16.08-.02 1.05-.01 1.66.23 1.84 1.33.09.54.31 1.07.54 1.58.99 2.14 1 2.13-.74 3.86-4.58 4.58-9.16 9.16-13.95 13.96"
          className="st1"
        />
         <Modal
          open={open186}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1042"
          d="M202.68 210.73c-.19.61-.32 1.24-.58 1.82-1.32 2.96-4.63 4.76-7.62 4.16-3.36-.67-5.75-3.35-5.91-6.62-.16-3.48 1.99-6.43 5.33-7.32 3.03-.81 6.4.66 7.94 3.5.34.62.53 1.33.79 2 .56.8.63 1.62.05 2.46"
          className="st11"
        />
         <Modal
          open={open187}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1044"
          d="M181.39 613.37c-3.78-2.24-7.34-4.37-10.92-6.48-.71-.42-1.44-.72-.79-1.79 3.5-5.81 6.96-11.64 10.54-17.65 4.12 2.45 8.13 4.83 12.27 7.28-3.72 6.26-7.34 12.34-11.1 18.64"
          className="st1"
        />
         <Modal
          open={open188}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1046"
          d="M128.65 556.84c3.88 2.3 7.56 4.5 11.26 6.67.84.49.79.97.33 1.73-3.45 5.74-6.87 11.5-10.34 17.34-1.08-.25-1.89-.91-2.75-1.41-2.83-1.65-5.61-3.36-8.45-4.99-.85-.49-1.12-.89-.55-1.84 3.39-5.59 6.73-11.22 10.09-16.83.12-.21.25-.41.41-.67"
          className="st1"
        />
         <Modal
          open={open189}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1048"
          d="M154.63 572.25c3.91 2.32 7.87 4.67 11.78 7 .09.84-.43 1.3-.74 1.82-3.08 5.22-6.22 10.41-9.26 15.64-.63 1.09-1.12 1.23-2.2.56-3.18-1.98-6.42-3.87-9.66-5.75-.82-.48-1.17-.86-.58-1.84 3.42-5.66 6.78-11.37 10.17-17.05.08-.12.24-.19.49-.38"
          className="st1"
        />
         <Modal
          open={open190}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1050"
          d="M167.45 579.85c4.07 2.42 8.02 4.77 12.1 7.2-3.73 6.26-7.36 12.34-11.11 18.62-3.87-2.29-7.61-4.52-11.36-6.73-.8-.47-.55-.98-.18-1.58 1.08-1.78 2.12-3.57 3.19-5.35 2-3.36 4.01-6.72 6.02-10.08.39-.68.84-1.32 1.34-2.08"
          className="st1"
        />
         <Modal
          open={open191}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1052"
          d="M153.72 571.73c-3.74 6.3-7.35 12.39-11.05 18.65-3.89-2.31-7.64-4.55-11.41-6.76-1.07-.63-.32-1.21 0-1.76 2.72-4.6 5.47-9.19 8.21-13.78.53-.89 1.1-1.76 1.59-2.68.41-.77.86-.73 1.53-.34 3.61 2.19 7.24 4.35 11.13 6.67"
          className="st1"
        />
         <Modal
          open={open192}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1054"
          d="M101.33 555.26c.01-1.83.07-3.67.03-5.5-.03-1.09.27-1.58 1.47-1.57 6.38.04 12.76.04 19.14 0 1.04-.01 1.49.37 1.36 1.39-.17 1.31.42 2.7-.42 3.94-5.61 3.16-11.22 6.32-16.84 9.46-.68.38-1.31.92-2.23 1.03-1.27-1.95-1.8-4.16-2.08-6.46-.1-.77.13-1.61-.43-2.29"
          className="st1"
        />
         <Modal
          open={open193}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1056"
          d="M123.39 553.92c.47.16.94.31 1.41.46.74 1.04 2.78.98 2.75 2.32-.03 1.12-1.11 2.23-1.76 3.32-2.93 4.93-5.86 9.85-8.93 15-4.66-2.78-9.65-4.94-12.58-10.09 2.3-1.32 4.51-2.56 6.7-3.83 4.15-2.39 8.28-4.79 12.41-7.18"
          className="st1"
        />
         <Modal
          open={open194}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1058"
          d="M141.24 334.23c6.33-4.03 12.96-5.5 20.09-4.77 2.02.21 2.03.34 1.67 2.2-1.21 6.17-2.46 12.34-3.61 18.52-.21 1.12-.48 1.78-1.77 1.62-.97-.13-1.93.19-2.78.6-.84.4-1.28.22-1.76-.5-3.89-5.84-7.81-11.66-11.84-17.67"
          className="st1"
        />
         <Modal
          open={open195}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1060"
          d="M182.91 342.52c-1.5 1.02-2.87 1.96-4.26 2.88-4.39 2.9-8.8 5.77-13.17 8.7-.85.57-1.48.79-2.22-.13-.55-.68-1.33-1.18-2.16-1.45-1.02-.34-1.29-.88-1.07-1.95 1.28-6.32 2.49-12.65 3.74-18.98.3-1.5.48-1.67 1.88-1.29 7.17 1.98 12.9 6 17.26 12.22"
          className="st1"
        />
         <Modal
          open={open196}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1062"
          d="M166.48 361.82c2.5.51 5 1.01 7.5 1.52 3.99.8 7.98 1.59 11.96 2.4 1.57.32 1.62.35 1.23 1.79-1.82 6.7-5.53 12.14-11.01 16.4-1 .78-1.44.44-2.03-.46-2.72-4.14-5.5-8.23-8.26-12.34-.89-1.33-1.74-2.68-2.67-3.98-.49-.69-.6-1.22.11-1.84.85-.75 1.47-1.69 1.84-2.76.25-.7.71-.81 1.33-.73"
          className="st1"
        />
         <Modal
          open={open197}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1064"
          d="M183.34 343.24c2.8 4.27 4.31 8.76 4.75 13.6.21 2.31.18 4.63-.12 6.94-.13.99-.42 1.52-1.7 1.25-6.25-1.32-12.52-2.54-18.79-3.75-1.23-.24-2.11-.62-1.83-2.15.08-.45-.06-.96-.17-1.42-.58-2.3-.59-2.3 1.42-3.62 5.41-3.56 10.81-7.13 16.44-10.85"
          className="st1"
        />
         <Modal
          open={open198}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1066"
          d="M147.95 357.5c-3.65-1.11-7.45-1.57-11.16-2.39-2.4-.53-4.82-1.04-7.25-1.43-1.2-.19-1.49-.64-1.06-1.74.26-.66.37-1.38.55-2.07 2.2-6.18 5.91-11.22 11.23-14.98.74.17.96.73 1.26 1.17 3.52 5.22 7 10.46 10.54 15.66.7 1.02 1.17 1.86-.14 2.77-.43.3-.82.84-.96 1.34-.44 1.66-1.47 2.1-3.01 1.67"
          className="st1"
        />
         <Modal
          open={open199}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1068"
          d="M127.63 363.35c-.19-2.54-.15-5.08.1-7.62.11-1.13.4-1.5 1.62-1.24 5.61 1.19 11.23 2.28 16.85 3.4.23.05.47.04.71.07.23.05.46.11.7.16 2.11.43 2.11.43 2.46 2.62.06.39.09.79.19 1.18.53 2.04.54 2.04-1.07 3.13-5.15 3.46-10.3 6.93-15.46 10.38-.39.26-.73.62-1.42.65-2.59-3.82-4.04-8.12-4.68-12.73"
          className="st1"
        />
         <Modal
          open={open200}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1070"
          d="M109 608.36c-4.94-2.82-9.85-5.67-14.66-8.72 3.65-6.74 7.77-13.19 11.62-19.81.53-.9.97-1.02 1.87-.48 4.16 2.53 8.35 5 12.54 7.47.7.41 1.11.73.56 1.65-4.01 6.61-7.96 13.25-11.93 19.89"
          className="st1"
        />
        <Modal
          open={open201}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1072"
          d="M112.1 502.54c-3.03 0-6.07-.04-9.1.02-1.22.03-1.67-.34-1.65-1.62.07-3.75.08-7.5 0-11.25-.03-1.35.53-1.58 1.69-1.57 6.23.04 12.45.04 18.68 0 1.23-.01 1.65.35 1.63 1.62-.08 3.75-.08 7.5 0 11.25.03 1.33-.51 1.59-1.68 1.57-3.19-.05-6.38-.02-9.57-.02"
          className="st1"
        />
        <Modal
          open={open202}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1074"
          d="M112.32 533.27c3.12 0 6.23.04 9.35-.02 1.17-.02 1.71.23 1.68 1.57-.09 3.75-.06 7.51-.01 11.26.01 1.11-.3 1.55-1.48 1.54-6.31-.05-12.62-.04-18.94-.01-1.09.01-1.59-.27-1.57-1.47.06-3.83.05-7.67.01-11.5-.01-1.03.34-1.41 1.38-1.39 3.19.04 6.39.02 9.58.02"
          className="st1"
        />
        <Modal
          open={open203}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1076"
          d="M112.08 457.42c-3.04 0-6.07-.05-9.11.02-1.26.03-1.65-.4-1.62-1.65.07-3.67.05-7.35 0-11.02-.01-1.16.23-1.73 1.57-1.72 6.31.06 12.62.05 18.94 0 1.19-.01 1.49.44 1.48 1.55-.05 3.76-.08 7.51.01 11.26.03 1.35-.52 1.59-1.68 1.57-3.2-.04-6.39-.01-9.59-.01"
          className="st1"
        />
        <Modal
          open={open204}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1078"
          d="M123.29 517.65c.01 4.4-.02 8.8.05 13.2.02 1.3-.34 1.8-1.61 1.79-6.24-.05-12.47 0-18.71-.03-1.61-.01-1.64-.07-1.65-1.97-.02-4.32 0-8.63 0-12.95.61-.87 1.51-.84 2.38-.85 5.71-.03 11.42-.03 17.13 0 .88.01 1.77.01 2.41.81"
          className="st1"
        />
        <Modal
          open={open205}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1080"
          d="M123.29 473.36c.01 4.16-.02 8.31.05 12.47.02 1.23-.34 1.7-1.61 1.69-6.24-.04-12.47 0-18.71-.03-1.61-.01-1.64-.07-1.65-1.86-.02-4.08 0-8.15 0-12.23.61-.82 1.51-.8 2.38-.8 5.71-.03 11.42-.02 17.13 0 .88 0 1.77 0 2.41.76"
          className="st1"
        />
        <Modal
          open={open206}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1082"
          d="M101.38 515.43c0-3.54-.02-7.08 0-10.63.01-1.56.04-1.61 1.65-1.62 6.24-.02 12.47.01 18.71-.03 1.27-.01 1.63.4 1.61 1.47-.07 3.61-.04 7.22-.05 10.83-.54.55-1.28.49-1.99.49-5.99.01-11.97.01-17.95 0-.72.02-1.48.09-1.98-.51"
          className="st1"
        />
        <Modal
          open={open207}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1084"
          d="M101.38 472.16c0-4.08-.02-8.15 0-12.23.01-1.79.04-1.85 1.65-1.86 6.24-.03 12.47.01 18.71-.03 1.27-.01 1.63.46 1.61 1.69-.07 4.16-.04 8.31-.05 12.47-.54.63-1.28.57-1.99.57-5.99.01-11.97.02-17.95 0-.72 0-1.48.08-1.98-.61"
          className="st1"
        />
        <Modal
          open={open208}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1086"
          d="M103 371.18c2.74-.89 5.68-1.2 8.53-1.85 2.4-.55 4.84-.95 7.25-1.49.91-.2 1.35.1 1.54.95.89 3.92 2.44 7.57 4.54 10.99.49.81.37 1.23-.39 1.73-4.19 2.77-8.37 5.55-12.51 8.39-1.17.81-1.52.03-1.99-.73-3.09-5.07-5.39-10.47-6.74-16.25-.11-.54-.44-1.04-.23-1.74"
          className="st1"
        />
        <Modal
          open={open209}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1088"
          d="M111.35 391.23c4.82-3.22 9.44-6.32 14.39-9.63-.33 3.2-.01 5.87 2.15 8.02 2.19 2.19 4.87 2.48 8.01 2.09l-6.99 10.61c-.62.93-1.28 1.83-1.85 2.8-.54.93-1.08.9-1.89.31-5.35-3.9-9.94-8.51-13.82-14.2"
          className="st1"
        />
        <Modal
          open={open210}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1090"
          d="M209.5 288.79c.28-1.06.94-1.77 1.46-2.56 3.85-5.87 7.72-11.73 11.59-17.58 1.01-1.53 1.04-1.55 2.49-.48 6.66 4.88 12.69 10.43 18.14 16.63.2.23.35.5.61.88-1.17.94-2.27 1.83-3.38 2.72l-15.3 12.3c-.65.52-1.22 1.31-2.17.24-4.04-4.55-8.57-8.57-13.44-12.15"
          className="st1"
        />
        <Modal
          open={open211}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1092"
          d="M156.14 444.75c-10.18-.23-20.33-2.19-30.06-6.18-.54-.22-1.47-.2-1.24-1.11.22-.91.49-1.89 1.26-2.51.3-.24.73.11 1.1.26 5.24 2.09 10.62 3.66 16.19 4.66 4.47.8 8.97 1.22 13.5 1.32 1.67.04 1.77.24 1.8 2.45.02 1.46-.87 1.23-1.77 1.12-.16-.03-.32-.01-.78-.01"
          style={{
            fill: "#f2eeec",
          }}
        />
        <Modal
          open={open212}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1094"
          d="M431.16 452.03c3.96-3.75 7.79-7.36 11.6-10.98.54-.52 1-.7 1.61-.07 3.85 4.05 7.71 8.08 11.67 12.22-3.96 3.73-7.79 7.34-11.61 10.96-.54.51-.99.73-1.6.09-3.85-4.04-7.71-8.07-11.67-12.22"
          className="st1"
        />
        <Modal
          open={open213}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1096"
          d="M507.21 374.85c1.34-5.88 1.01-11.44-1.21-17.06 1.71-.17 3.25-.36 4.79-.47 4.46-.33 8.92-.61 13.38-.96.74-.06 1.03.21 1.11.87.09.79.21 1.58.27 2.38.31 4.06.61 8.12.92 12.18.12 1.59.08 1.7-1.66 1.88-2.3.23-4.62.37-6.93.52-3.5.22-6.99.43-10.67.66"
          className="st1"
        />
        <Modal
          open={open214}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1098"
          d="M320.99 153.63c-.96 5.3-1.91 10.32-2.77 15.35-.19 1.13-.63 1.5-1.74 1.28-4.94-.94-9.88-1.89-14.83-2.73-1.29-.22-1.31-.83-1.13-1.81.71-3.76 1.34-7.54 2.12-11.29.27-1.31-.05-3.12 1.05-3.8 1.03-.63 2.57.24 3.88.49 4.39.84 8.78 1.65 13.42 2.51"
          className="st1"
        />
        <Modal
          open={open215}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
        id="polyline1255"
        d="m314.1 193.5 10.3-11-10.7-9.8-10.3 11.1 10.7 9.7"
        className="st1"
      />
      <Modal
          open={open216}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1100"
          d="m510.9 334.28-10.34 14.69c-1.6-1.11-3.09-2.14-4.58-3.18-2.82-1.97-5.62-3.95-8.45-5.9-.7-.48-1.02-.89-.43-1.72 3.06-4.29 6.09-8.62 9.11-12.94.4-.57.75-.71 1.35-.29 4.38 3.07 8.77 6.13 13.34 9.34"
          className="st1"
        />
        <Modal
          open={open217}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1102"
          d="M458.44 319.33c-4.76-3.44-9.29-6.7-13.98-10.09 3.52-4.86 6.97-9.63 10.55-14.59 2.07 1.5 4.06 2.95 6.05 4.39 2.26 1.64 4.51 3.3 6.79 4.92.71.5.95.95.37 1.75-3.22 4.46-6.42 8.94-9.78 13.62"
          className="st1"
        />
        <Modal
          open={open218}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1104"
          d="M389.52 261.42c-4.14-3.7-8.3-7.42-12.38-11.06.03-.6.33-.87.59-1.17 3.34-3.76 6.71-7.49 10.01-11.29.82-.94 1.36-1.03 2.3-.17 3.47 3.18 7 6.3 10.52 9.43.65.58 1.14 1.04.33 1.93-3.65 4.01-7.25 8.07-10.88 12.11-.1.1-.29.13-.49.22"
          className="st1"
        />
        <Modal
          open={open219}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1106"
          d="M434.62 301.44c-4.37-3.9-8.52-7.61-12.83-11.47 4-4.51 7.9-8.9 11.93-13.43 1.85 1.65 3.62 3.22 5.39 4.79 2.14 1.91 4.27 3.84 6.44 5.72.71.62.97 1.06.2 1.91-3.7 4.07-7.33 8.2-11.13 12.48"
          className="st1"
        />
        <Modal
          open={open220}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1108"
          d="M274.28 604.15c4.93 3.53 9.66 6.92 14.35 10.28-.06.91-.65 1.38-1.05 1.94-2.6 3.64-5.25 7.24-7.82 10.91-.68.98-1.19 1.24-2.26.45-3.98-2.95-8.03-5.81-12.07-8.67-.83-.59-1.22-1.04-.45-2.07 3.09-4.17 6.09-8.4 9.3-12.84"
          className="st1"
        />
         <Modal
          open={open221}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1110"
          d="M479.38 312.21c4.25 2.97 8.55 5.99 12.87 8.98.74.51.88.95.32 1.73-3.02 4.23-6 8.48-8.96 12.75-.54.78-.98.79-1.73.25-3.97-2.83-7.98-5.61-11.98-8.39-.65-.45-1.11-.8-.48-1.69 3.23-4.46 6.4-8.97 9.6-13.45.05-.06.15-.08.36-.18"
          className="st1"
        />
         <Modal
          open={open222}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1112"
          d="M323.3 140.95c-5.51-.99-10.84-1.95-16.16-2.89-.92-.16-1.43-.49-1.22-1.57.91-4.69 1.82-9.38 2.62-14.09.21-1.25.66-1.6 1.86-1.36 5 .98 10.01 1.93 15.03 2.84.84.15 1.06.57.91 1.32-1.01 5.22-2.02 10.44-3.04 15.75"
          className="st1"
        />
         <Modal
          open={open223}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1114"
          d="M361.53 512.5c4.84-3.22 9.48-6.3 14.08-9.36.82.36 1.07 1.09 1.46 1.67 2.6 3.83 5.17 7.68 7.73 11.53 1.03 1.55 1.03 1.58-.43 2.56-3.85 2.57-7.73 5.1-11.55 7.7-.91.62-1.46.65-2.11-.34-2.98-4.53-6.02-9.02-9.18-13.76"
          className="st1"
        />
         <Modal
          open={open224}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1116"
          d="M503.21 407.89c-3.97-4.23-7.78-8.3-11.82-12.6 4.34-4.08 8.62-8.11 12.98-12.2 1.21.87 2.07 2.03 3.04 3.07 2.57 2.74 5.09 5.53 7.69 8.24.81.84 1 1.37.01 2.28-3.95 3.6-7.8 7.32-11.9 11.21"
          className="st1"
        />
         <Modal
          open={open225}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1118"
          d="M465.48 419.59c4.12 4.39 8.11 8.64 12.29 13.08-4.16 3.94-8.25 7.81-12.33 11.67-.99-.46-1.5-1.3-2.15-1.98-3.13-3.31-6.22-6.66-9.38-9.94-.72-.75-.74-1.22.02-1.93 3.8-3.55 7.56-7.13 11.55-10.9"
          className="st1"
        />
         <Modal
          open={open226}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1120"
          d="M424.12 268.08c-4.01 4.51-7.87 8.86-11.93 13.43-4.29-3.83-8.5-7.57-12.85-11.45 4-4.49 7.9-8.89 11.95-13.44 4.3 3.85 8.51 7.61 12.83 11.46"
          className="st1"
        />
         <Modal
          open={open227}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1122"
          d="M421.72 485.55c-4.06-4.25-8.08-8.45-12.08-12.64.09-.82.72-1.12 1.16-1.53 3.29-3.14 6.62-6.24 9.89-9.4.85-.83 1.4-.99 2.31-.02 3.37 3.62 6.8 7.19 10.26 10.72.89.91.82 1.45-.09 2.29-3.58 3.29-7.09 6.67-10.64 10-.22.21-.5.37-.81.58"
          className="st1"
        />
         <Modal
          open={open228}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1124"
          d="M291.86 608.13c-.93-.34-1.39-1.02-1.95-1.56-3.06-2.92-6.09-5.87-9.15-8.78-.71-.68-1.08-1.17-.37-2.18 2.84-4.06 5.95-7.89 9.51-11.34.65-.63 1.06-.71 1.74-.04 3.69 3.64 7.42 7.25 11.14 10.85.51.5.8.91.16 1.57-3.72 3.82-7.41 7.67-11.08 11.48"
          className="st1"
        />
         <Modal
          open={open229}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1126"
          d="M353.42 519.54c4.01 3.91 8.18 7.97 12.48 12.17-2.97 3.06-5.82 6.06-8.74 8.98-1.05 1.05-1.9 2.96-3.27 2.85-1.13-.09-2.15-1.72-3.18-2.71-2.89-2.76-5.73-5.57-8.64-8.3-.8-.76-.97-1.27-.08-2.1 3.79-3.56 7.52-7.16 11.43-10.89"
          className="st1"
        />
         <Modal
          open={open230}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1128"
          d="M331.74 95.61c-.77 4.19-1.43 8.12-2.23 12.03-.25 1.21.13 2.84-1.03 3.52-1 .58-2.32-.21-3.48-.41-4.24-.72-8.47-1.56-12.71-2.3-.94-.16-1.14-.5-.96-1.43.92-4.78 1.79-9.56 2.64-14.35.16-.91.3-1.42 1.49-1.18 4.92.99 9.88 1.84 14.81 2.79.8.14 1.97.17 1.47 1.33"
          className="st1"
        />
         <Modal
          open={open231}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1130"
          d="M324.25 574.91c-4.2 3.96-8.27 7.79-12.51 11.78-.51-.26-1.15-1.09-1.89-1.79-3.17-3.04-6.34-6.08-9.48-9.15-.45-.44-1.35-.86-.51-1.72 3.77-3.89 7.55-7.77 11.41-11.75 4.36 4.23 8.58 8.34 12.98 12.63"
          className="st1"
        />
         <Modal
          open={open232}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1132"
          d="M487.12 423.97c-3.94-4.19-7.63-8.16-11.38-12.08-.72-.75-.71-1.25.05-1.96 3.56-3.32 7.1-6.66 10.61-10.03.67-.64 1.12-.65 1.76.04 3.75 4.03 7.53 8.03 11.45 12.2-4.14 3.93-8.23 7.81-12.49 11.83"
          className="st1"
        />
         <Modal
          open={open233}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1134"
          d="M345.02 553.18c-3.27 3.41-6.46 6.75-9.66 10.07-2.24 2.33-2.26 2.32-4.6.07-3.5-3.37-7-6.74-10.64-10.24 2.07-2.14 4.05-4.2 6.04-6.24 1.72-1.77 3.46-3.53 5.18-5.31.51-.54.93-.75 1.58-.12 3.98 3.9 7.99 7.78 12.1 11.77"
          className="st1"
        />
         <Modal
          open={open234}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1136"
          d="M412.49 494.48c-4.14 3.99-8.15 7.86-12.18 11.74-.75-.12-1.05-.72-1.46-1.15-3.37-3.53-6.7-7.09-10.09-10.6-.72-.75-1.04-1.24-.1-2.11 3.82-3.52 7.57-7.11 11.53-10.85 4.08 4.32 8.13 8.58 12.3 12.97"
          className="st1"
        />
         <Modal
          open={open235}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1138"
          d="M277.46 298.06c.56-.26 1-.18 1.47.29 4.85 4.88 9.72 9.74 14.58 14.61.26.26.69.53.36.98-.38.51-.82.34-1.21-.04-.29-.28-.57-.56-.86-.84-4.36-4.35-8.71-8.71-13.06-13.07-.55-.55-1.28-1.01-1.26-1.95l-.02.02z"
          className="st11"
        />
         <Modal
          open={open236}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1140"
          d="M156.18 399.81c-1.9-.56-3.77-1.25-5.7-1.66-3.09-.67-4.97-2.57-6.15-5.38-.29-.7-.56-1.3-.19-2.03.65-1.28 1.28-2.57 1.93-3.85.28-.55.67-.75 1.35-.67 2.46.29 4.9.69 7.32 1.17.4.08.86.13 1 .54.56 1.7 1.76 3.3.93 5.25-.03.07-.07.15-.09.22-.58 2.04-1.55 4.07.15 6.17-.18.08-.37.16-.55.24"
          className="st1"
        />
         <Modal
          open={open237}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1142"
          d="m93.54 270.31 3.67 5.99 10.66-8.04-9.15-17.24s-.8-.93-1.27-.27l-10.58 4.45s-.45.07-.11.9c.33.83 6.78 14.21 6.78 14.21"
          className="st1"
        />
         <Modal
          open={open238}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1144"
          d="m97.21 276.31 10.66-8.04s9.76 13.31 13.3 15.35l-9.38 9.5c-.01.01-14.39-15.21-14.58-16.81"
          className="st1"
        />
         <Modal
          open={open239}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="modal-header-left">
              <button className="close-button" onClick={handleClose}>
                <h4>X</h4>
              </button>
            </div>
            <div>
              <div className="lote-modal">
                <div>
                  <img
                    src={require("../../../image/lote.png")}
                    alt="not found"
                    className="lote"
                  />
                </div>

                <div className="lote-text">
                  <h4>Lote: M-04</h4>
                  <h4>Area: 1144 m2</h4>
                  <h4>Precio m2: $1200.00mxn</h4>
                  <h4>Precio Total: $1,372,800.00mxn</h4>
                  <ButtonMaterial
                    sx={{
                      width: "100%",
                      background: "transparent",
                      color: "#000",
                      border: "2px solid #000",
                      "&:hover": {
                        border: "2px solid #000",
                        background: "transparent",
                      },
                    }}
                    
                  >
                    ASIGNAR LEAD
                  </ButtonMaterial>
                  <div className="ButtonMaterial">
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      COPIAR LINK
                    </ButtonMaterial>
                    <ButtonMaterial
                      sx={{
                        width: "100%",
                        background: "transparent",
                        color: "#000",
                        border: "2px solid #000",
                        "&:hover": {
                          border: "2px solid #000",
                          background: "transparent",
                        },
                      }}
                    >
                      IR AL PAGO
                    </ButtonMaterial>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <path
          id="path1146"
          d="M97.21 272.94c1.77 0 3.39 1.6 3.36 3.32-.03 1.78-1.61 3.39-3.34 3.4-1.71.01-3.4-1.68-3.38-3.37.01-1.75 1.61-3.34 3.36-3.35"
          style={{
            fill: "#aaa",
          }}
        />
        <path
          id="rect1148"
          d="M0 0h612v792H0z"
          style={{
            fill: "none",
          }}
        />
      </g>
      <g id="Capa_2">
        <path
          id="path1151"
          d="M209.75 671.53c-2.23-.58-4.19-1.78-6.26-2.72-1.72-.79-3.4-1.66-5.12-2.47-1.71-.8-1.7-.78-2.2 1.08-.07.27-.37.48-.56.72-.69 1.81-1.8 3.53-1.15 5.61 3.89.39 7.78.77 11.68 1.15 2.21.22 2.31.26 2.45 2.45.28 4.32 1.99 7.87 5.59 10.37 6.28 4.37 14.54 2.8 18.68-3.63 1.18-1.83 1.16-1.83 3.17-.87 3.03 1.45 6.14 2.74 9.08 4.35 6.29 3.46 13.08 5.48 19.94 7.35 7.24 1.97 14.46 4.02 21.69 6.02 1.24.35 2.37.89 3.46 1.6 19.21 12.39 38.43 24.76 57.67 37.11 1.68 1.08 3.51 1.91 5.25 2.89.74.42 1.65.63 2.13 1.45h-1.44c-21.92-12.88-42.84-27.34-64.35-40.85-.96-.6-1.95-1.07-3.04-1.37-9.76-2.74-19.52-5.49-29.28-8.21-2.39-.67-4.69-1.55-6.93-2.62-4.68-2.25-9.38-4.47-14.07-6.69-1.7-.8-1.7-.79-2.82.75-6.15 8.44-18.52 7.89-23.7-1.09-1.13-1.96-1.85-4.09-1.78-6.39.04-1.22-.42-1.63-1.63-1.73-3.89-.32-7.78-.78-11.66-1.18-.78 4.58.18 8.92 1.96 13.09 3.29 7.7 9.05 12.78 16.92 15.53.67.21 1.31.5 2.03.51.24.04.47.12.69.22 2.44.38 4.87.86 7.35.67 6.01-.68 11.48-2.65 16.12-6.65 1.08-.93 2.15-.98 3.5-.33 10.99 5.31 22.11 10.34 33.13 15.6 4.17 1.99 8.27 4.08 12.24 6.43 3.57 2.26 7.41 4.03 11.13 6.02 10.67 5.72 21.39 11.34 32.08 17.02.68.36 1.51.54 1.95 1.29h-1.92c-.25-.69-.93-.83-1.48-1.12-13.4-7.1-26.79-14.21-40.2-21.29-1.69-.89-3.57-1.39-5.14-2.53-3.61-1.9-7.3-3.65-10.92-5.53-2.97-.81-5.41-2.76-8.3-3.75-5.69-2.67-11.39-5.34-17.1-7.97-.94-.43-1.87-.9-2.78-1.39-2.54-1.37-4.62-1.59-7.24.56-4.19 3.43-9.4 4.85-14.81 5.34-3.04.57-5.97-.27-8.93-.72-.25-.02-.49-.06-.73-.11-.59-.19-1.18-.36-1.77-.55-10.98-4.03-17.43-11.9-19.73-23.28-.63-3.11.18-6.14.38-9.21l-.01.03c.62-.68-.19-1.43.09-2.13.04-.22.1-.43.17-.63.3-1.72 1.7-3.06 1.69-4.88-2.86-1.42-5.72-2.85-8.58-4.27-1.94-.96-1.93-.96-1.3-3.05.06-.19-.1-.44-.16-.66.2-.9.88-1.45 1.66-1.16.87.33.35 1.18.17 1.82-.4.79-.54 1.58.47 1.98 2.51 1.01 4.85 2.38 7.35 3.43.4.17.78.08 1.14-.12.94-.45 2.03-1.53 2.33.61.08.59.7.83 1.17 1.11 2.46 1.44 4.8 3.11 7.42 4.28.87.39 1.68.9 2.7.75.47-.07 1-.15 1.19.45.22.7.01 1.25-.73 1.51"
          style={{
            fill: "#fdd153",
          }}
        />
        <path
          id="path1153"
          d="M235.81 676.77c-.1 1.07.51 1.33 1.45 1.42 2.86.26 5.7.77 8.56.88 8.29.32 16.2 2.39 24.09 4.73 7.03 2.09 14.11 4.02 21.19 5.94 1.98.53 3.67 1.53 5.35 2.6 18.48 11.87 36.96 23.74 55.43 35.61 5.11 3.29 10.61 5.88 15.92 8.81 3.91 2.16 7.88 4.22 11.82 6.35.4.22.91.35 1.07.88h-1.44c-2.22-1.25-4.43-2.53-6.67-3.73-5.7-3.06-11.46-6.02-17.11-9.16-3-1.66-5.85-3.6-8.74-5.46-17.35-11.13-34.7-22.26-52.04-33.4a12.35 12.35 0 0 0-3.47-1.56c-10.76-3-21.51-6.04-32.25-9.09-3.33-.95-6.78-1-10.18-1.41-4.04-.49-8.08-.98-12.13-1.29-1.5-.12-1.96-.74-1.89-2.07-.05-.77-.32-1.9.78-1.82.82.08.64 1.1.26 1.77"
          className="st17"
        />
        <path
          id="path1155"
          d="M224.17 706.93c-.2-.16-.39-.32-.59-.48-.09-.22-.06-.42.11-.59 4.07-.49 8.01-1.4 11.65-3.39 1.69-.92 3.33-1.94 4.77-3.2.99-.87 1.81-.95 3-.38 3.95 1.93 7.96 3.73 11.94 5.59 3.62 1.69 7.23 3.4 10.85 5.11.04.33.03.62-.42.33-2.88-.98-5.51-2.49-8.27-3.72-4.59-2.04-9.12-4.2-13.67-6.34-.92-.43-1.67-.66-2.61.12-4.73 3.93-10.22 6.09-16.3 6.82-.15.01-.3.08-.46.13"
          style={{
            fill: "#d884c8",
          }}
        />
        <path
          id="path1157"
          d="M288.48 719.67c-1.01-.47-2.05-.89-3.03-1.42-10.98-5.86-22.43-10.74-33.64-16.11-2.8-1.34-5.68-2.54-8.42-4.01-1.43-.77-2.42-.64-3.6.4-4.2 3.69-9.2 5.63-14.68 6.45-.46.07-.95 0-1.43-.01a.67.67 0 0 1-.27-.46c.05-.18.13-.35.24-.5 1.09-.61 2.34-.34 3.51-.6 5.6-1.27 10.41-3.91 14.33-8.09.67.35-.24.92.28 1.23.34.2.67.43 1.02.6 3.67 1.74 7.35 3.48 11.03 5.21 7.22 3.38 14.41 6.81 21.67 10.09 3.86 1.74 7.51 3.86 11.29 5.74.67.33 1.59.47 1.7 1.48"
          style={{
            fill: "#d388c1",
          }}
        />
      </g>
      <g id="Capa_4">
        <path
          id="path1160"
          d="M344.68 744h-11.04c-3.37-1.42-6.55-3.23-9.77-4.95-10.24-5.49-20.52-10.91-30.81-16.31-1.69-.89-3.37-1.78-4.96-2.85-3.2-2.29-6.7-4.05-10.24-5.68-9.14-4.22-18.22-8.56-27.35-12.81-2.32-1.08-4.72-1.97-6.96-3.21-.88-.49-1.87-.85-2.22-1.98-4.84 5.19-10.96 7.55-17.81 8.39-9.79.26-17.78-3.4-23.55-11.32-1.25-1.71-.67-4.65-3.35-5.64-1.8-4.23-2.84-8.59-2.39-13.22 1.3-.78 2.69-.22 3.97-.08 2.69.31 5.4.44 8.09.86 1.46.22 2.03.91 2.18 2.33.81 7.58 5.23 12.21 12.74 12.81 4.46.35 8.22-1.55 11.11-5.07 2.1-2.55 2.22-2.53 5.2-1.05 4.8 2.38 9.6 4.76 14.53 6.85 6.64 2.8 13.78 4.09 20.64 6.22 4.27 1.32 8.6 2.47 12.93 3.59 2.62.68 4.81 2.15 7.01 3.58 15.23 9.86 30.51 19.65 45.76 29.47 4.56 2.94 8.99 6.13 13.93 8.45.66.31 1.59.54 1.46 1.62h-6.72c-2.9-1.02-5.29-2.93-7.83-4.55-16.97-10.86-33.9-21.77-50.86-32.64-2.29-1.46-4.83-2.1-7.37-2.78-7.26-1.96-14.45-4.15-21.72-6.05-2.1-.55-3.97-1.56-5.81-2.67 1.85 1.4 3.91 2.32 6.14 2.95 8.54 2.41 17.1 4.76 25.62 7.22 1.57.46 2.92 1.29 4.26 2.16 17.74 11.58 35.68 22.84 53.47 34.35.78.49 1.88.73 1.72 2.01"
          className="st11"
        />
        <path
          id="path1162"
          d="M379.24 744h-24c-5.72-2.53-10.88-6.03-16.1-9.4-16.58-10.7-33.18-21.36-49.77-32.04-2.35-1.51-5.1-1.83-7.69-2.56-8.68-2.45-17.35-4.93-26.03-7.36-1.78-.5-3.5-1.15-5.13-2-4.68-2.44-9.63-4.33-14.24-6.9-1.57-.87-2.38-.45-3.32.89-3.29 4.69-7.89 6.72-13.51 5.7-5.47-.99-9.14-4.28-10.8-9.71-.31-1.03-.37-2.06-.35-3.08.03-1.65-.69-2.13-2.27-2.24-3.42-.22-6.82-.68-10.23-1-.53-.05-1.13-.05-1.58-.46-.38-.74-.37-1.42.31-2 1.81-.4 3.87.54 5.48-1.01-1.51 1.4-3.34.85-5.08.82-.98-1.23.33-2.35.16-3.54 1.27-3.25 1.54-3.4 4.64-1.79 3.32 1.72 6.76 3.19 10.14 4.79 1.39.89 3.18 1.23 4.05 2.87.25.71.01 1.41-.06 2.12-.4 4.1 2.62 8.06 6.57 8.64 4.21.62 7.96-1.96 8.89-6.1.1-.46.15-.94.42-1.36.17-.19.37-.33.6-.42.84-.26 1.73-.21 2.57-.49.64-.12 1.26-.12 1.84.23.91 1.78 2.6 1.82 4.28 1.98 5.64.52 11.29.98 16.88 1.83 5.87.89 11.41 3.08 17.13 4.53 5.5 1.4 10.89 3.19 16.4 4.56 2.76.69 5.24 1.92 7.59 3.46 16.47 10.74 33.14 21.17 49.58 31.96 7.57 4.97 15.6 9.09 23.55 13.36 2.53 1.36 5 2.85 7.6 4.1.68.32 1.6.54 1.48 1.62"
          style={{
            fill: "#fffffe",
          }}
        />
        <path
          id="path1164"
          d="M387.88 744h-7.2c-12.36-6.49-24.82-12.78-36.53-20.45-16.55-10.84-33.24-21.46-49.94-32.06-2.99-1.9-6.64-2.2-10-3.18-8.65-2.54-17.32-5.03-26.04-7.31-4.77-1.25-9.79-1.21-14.7-1.78-2.06-.24-4.12-.41-6.18-.64-1-.11-2.23-.27-1.66-1.88.41-.35.9-.45 1.41-.5.86-.04 1.73-.02 2.55-.31 2.47.07 4.99-1 7.4.31.52-1.31 1.61-.2 2.4-.56 1.87-.85 3.76-.39 5.57.33 2.59 1.03 5.21 2 7.81 3 1.27.49 2.54.97 3.95.7 2.31-.21 4.39.79 6.52 1.38 5.85 1.61 11.68 3.32 17.55 4.87 3.32.87 6.21 2.46 9.04 4.29 18.78 12.15 37.58 24.3 56.52 36.21 6.49 4.08 13.44 7.39 20.2 11.02 3.38 1.81 6.65 3.84 10.23 5.25.56.2 1.26.44 1.1 1.31"
          style={{
            fill: "#fffefe",
          }}
        />
        <path
          id="path1166"
          d="M387.88 744c-.98-1.03-2.43-1.13-3.61-1.76-9.7-5.2-19.51-10.23-29.01-15.78-5.5-3.22-10.76-6.85-16.13-10.29-14.36-9.22-28.72-18.43-43.09-27.65-1.09-.7-2.28-1.15-3.51-1.49-7.89-2.21-15.79-4.41-23.69-6.59-.61-.17-1.25-.2-1.88-.3-.42-.55-.08-.94.26-1.34.4.01.82-.06 1.19.05 8.6 2.37 17.2 4.73 25.77 7.18 2.09.6 3.75 2.11 5.55 3.27 15.05 9.65 30.1 19.29 45.07 29.07 9.64 6.3 19.66 11.9 29.89 17.16 2.84 1.46 5.57 3.12 8.4 4.59 1.77.92 3.63 1.64 5.46 2.44.94.41 1.94.68 2.68 1.46h-3.35z"
          style={{
            fill: "#c9c9c9",
          }}
        />
        <path
          id="path1168"
          d="M344.68 744c-1.79-1.73-4.03-2.82-6.08-4.16-5.93-3.89-11.96-7.65-17.93-11.48-10.94-7.02-21.88-14.05-32.8-21.11-1.66-1.07-3.55-1.43-5.36-1.95-7.8-2.25-15.63-4.4-23.46-6.54-2.51-.68-4.67-2.01-6.83-3.36-.36-.22-.62-.52-.29-.97.22-.3.53-.34.85-.23.3.11.6.25.85.43 3.17 2.34 6.98 3.05 10.64 4.09 6.81 1.95 13.63 3.86 20.47 5.71 2.14.58 3.91 1.82 5.71 2.96 7.54 4.79 15.02 9.68 22.54 14.51 10.73 6.9 21.48 13.78 32.22 20.67.66.42 1.41.75 1.88 1.43h-2.41z"
          style={{
            fill: "#cbcbcb",
          }}
        />
        <path
          id="path1170"
          d="M192.97 672.45c.15 3.26-.3 6.52.38 9.78 1.82 8.68 6.4 15.33 14.07 19.84 1.66.97 3.44 1.65 5.19 2.4.32.64 1.1.22 1.51.65l-.05-.03c3.05.72 6.12 1.29 9.29 1.16.43.03.77.17.81.67-5.6.53-10.95-.43-16-2.89-2.05-1-1.76-.74-2.7.81-.21.34-.4.69-.62 1.02-.88 1.4-.88 1.4-2.46.21.41-.59 1.1-.89 1.48-1.53.62-1.03.7-1.9-.43-2.65-1.6-1.06-2.84-2.53-4.2-3.86-2.13-2.09-2.13-2.1-4.51-.34-.26.19-.51.38-.83.45-.85-.61-.8-1.16-.04-1.89.84-.81 2.17-.97 2.88-2.17-.8-.61-1.49-.93-2.43-.52-.53.23-.87-.16-1.14-.6-.29-.48-.29-.9.2-1.22.28-.19.5-.42.53-.74.05-.51.58-1.08-.03-1.53-.46-.34-.9.06-1.31.27-.57.28-1.11.62-1.7.84-1.11.41-1.39.19-1.82-1.27-.11-.4.09-.54.47-.59 3.17-.39 3.17-.4 2.4-3.52-.44-1.77-.88-3.54-.99-5.38-.05-.92-.13-1.78-1.33-1.89-1.03-.1-1.66.3-1.91 1.33-.1.42-.23.97-.91.83l-.03-.48c-.08-2.55-.08-2.55-2.85-3.1 2.5-.35 4.59-.09 6.67-.17 1.76-.07 1.75-.06 1.91-1.88.07-.69-.16-1.46.5-2.01"
          className="st24"
        />
        <path
          id="path1172"
          d="M193.91 698.15c.29-1.25 1.5-1.55 2.32-2.25.69-.58 1.3-.39 1.87.2.67.68 1.34 1.35 2.02 2.02 1.35 1.34 2.63 2.74 4.25 3.77.37.23 1.06.45.89.98-.29.89-.8 1.71-1.21 2.56-.35.73-1.02.62-1.65.65-1.17-.34-2.12-1.05-2.93-1.89-1.9-1.97-4.18-3.59-5.56-6.04"
          style={{
            fill: "#dedede",
          }}
        />
        <path
          id="path1174"
          d="M186.78 680.09c.13-.19.31-.37.38-.58.21-.71-.32-1.77.64-2.11.96-.34 2.04-.22 3.06-.03.6.11.65.64.65 1.12-.05 2.97.75 5.79 1.61 8.58.32 1.02-.03 1.45-.86 1.85-1.04.5-2.06.82-3.2.39-.89-.81-.91-1.97-1.17-3.01-.51-2.05-1.14-4.07-1.11-6.21"
          className="st5"
        />
        <path
          id="path1176"
          d="M193.45 670.05c-.05.84.25 1.74-.5 2.43-.06-.82-.56-1.23-1.26-1.56-1.09-.51-2-1.27-2.81-2.15-1.06-1.16-.94-1.62.66-1.97.84-.18 1.74-.28 2.58-.17 1.51.19 2.4-.36 2.77-1.8.1.11.3.24.29.32-.41 1.7-.87 3.39-1.76 4.92-.45-.19-.83-.45-.98-.95-.39-1.34-.39-1.34-2.07-1.01.67 1.28 1.89 1.59 3.08 1.94"
          className="st24"
        />
        <path
          id="path1178"
          d="M274.1 713.41c3.69 1.7 7.46 3.28 10.8 5.65-.38-.06-.81-.03-1.14-.2-3.24-1.64-6.47-3.3-9.71-4.96-.14-.12-.17-.24-.11-.34.05-.1.11-.15.16-.15"
          style={{
            fill: "#d892bc",
          }}
        />
        <path
          id="path1180"
          d="M274.1 713.41c-.02.16-.03.33-.05.49-2.99-1.04-5.78-2.53-8.58-3.99l.42-.33c2.74 1.28 5.47 2.55 8.21 3.83"
          style={{
            fill: "#d791bf",
          }}
        />
        <path
          id="path1182"
          d="m223.66 704.01-.03.74c-2.76.46-5.43-.24-8.13-.6l.06.03c-.63-.55-1.51-.03-2.16-.52-3.35-.72-6.18-2.48-8.83-4.52-5.67-4.35-9.11-10.13-10.38-17.13-.39-2.15-.8-4.37-.32-6.6.09-.4.13-.79.66-.8.26 4.21.78 8.37 2.37 12.32.41 1.01.94 1.69 2.32 1.51 1.33-.17 1.74.72.92 1.89-.68.97-.55 1.75.11 2.59 4.71 6.03 10.68 9.88 18.42 10.78 1.67.18 3.31.4 4.99.31"
          className="st28"
        />
        <path
          id="path1184"
          d="M196.54 676.9c.37 1.07.29 1.88.02 2.69-.24-.79-.28-1.59-.02-2.69"
          className="st28"
        />
        <path
          id="path1186"
          d="M197.27 683.06c.76.52.4 1.4.72 2.05-.98-.46-.58-1.35-.69-2.08l-.03.03z"
          className="st28"
        />
        <path
          id="path1188"
          d="M197.3 683.03c-.52-.45-.63-.94-.21-1.57.3.55.16 1.08.18 1.59l.03-.02"
          className="st28"
        />
        <path
          id="path1190"
          d="M213.66 674.02c1.44.82 2.97 1.54 4.31 2.5 1.61 1.16 3.31 1.37 5.19 1.11 2.28-.32 4.58-.48 6.89-.33.12 3.79-1.99 6.13-5.21 7.53-2.92 1.27-5.85.86-8.31-1.17-2.71-2.24-3.97-5.12-3.02-8.71.08-.29.1-.62.15-.93"
          style={{
            fill: "#a8a8a8",
          }}
        />
        <path
          id="path1192"
          d="M292.52 700.02c-7.33-3.26-15.23-4.51-22.79-6.88-4.86-1.52-9.81-2.79-14.69-4.25-1.84-.55-2.28-1.32-2.08-2.95.15-1.16.83-1.85 2.03-1.94.71-.05 1.42-.02 2.13.19 9.58 2.72 19.16 5.42 28.74 8.13 1.53.43 3.06.87 4.6 1.29.77.21 1.55.38 2.13 1.12-.59.46-1.04-.07-1.48-.19-7.9-2.21-15.8-4.45-23.69-6.68-3.53-1-7.06-1.98-10.58-2.97-.31-.09-.6-.25-.91-.3-1.22-.21-2.19.35-2.41 1.4-.24 1.14.37 1.89 1.35 2.24 1.58.56 3.19 1 4.81 1.45 9.51 2.65 19.03 5.3 28.55 7.91 1.67.44 3.05 1.3 4.29 2.43"
          style={{
            fill: "#cecece",
          }}
        />
        <path
          id="path1194"
          d="M194.98 671.37c1.56.13 3.13.34 4.51-.52.12-.75-.65-.97-.64-1.51.16-.21.3-.22.46-.1.25.2.52.37.73.6.93 1.06.85 1.29-.42 1.78-1.55.59-3.15.33-4.73.39-.19-.24-.16-.46.09-.64"
          className="st31"
        />
        <path
          id="path1196"
          d="m194.98 671.37-.09.65c-.56.48-.37 1.14-.43 1.74-.13-.08-.36-.16-.37-.24-.05-1.94.01-3.87 1.51-5.38.46 1.2-.79 2.08-.62 3.23"
          style={{
            fill: "#9b9687",
          }}
        />
        <path
          id="path1198"
          d="M230.62 677.15c.62-.44 1.31-.35 2-.23-.63.45-1.31.36-2 .23"
          className="st17"
        />
        <path
          id="path1200"
          d="M237.33 676.67c.65-.34 1.33-.36 2.02-.18-.64.41-1.33.35-2.02.18"
          className="st17"
        />
        <path
          id="path1202"
          d="M186.19 657.62c3.23 1.95 6.46 3.9 9.69 5.86-.59.62-1.15.24-1.73-.03-2.52-1.2-5.05-2.37-7.56-3.58-1.35-.66-1.33-.68-.4-2.25"
          style={{
            fill: "#fef5f0",
          }}
        />
        <path
          id="path1204"
          d="M223.7 705.85c-.04.2-.07.4-.11.59-3.24.07-6.45-.12-9.51-1.35 1.95.22 3.92.37 5.86.7 1.26.22 2.5.19 3.76.06"
          className="st34"
        />
        <path
          id="path1206"
          d="M215.5 704.15c2.72.1 5.39.76 8.13.6l.06.22c-2.78.22-5.53.17-8.19-.82"
          className="st11"
        />
        <path
          id="path1208"
          d="M213.4 703.66c.72.15 1.55-.14 2.16.51-.76-.01-1.51-.04-2.16-.51"
          className="st11"
        />
        <path
          id="path1210"
          d="M214.12 705.12c-.56-.08-1.22.08-1.51-.65.48.29 1.18.05 1.51.65"
          className="st34"
        />
        <path
          id="path1212"
          d="M246.27 672.97c-4.68.65-9.4.78-14.12 1.05-1.7.38-2.92.03-4.07-1.54-2.51-3.45-7-4.2-10.68-2.04-.82.48-1.56 1.17-2.63.69-5.04-2.98-10.07-5.97-15.11-8.95-.46-1.45.72-2.24 1.44-3.02 7.32-7.88 16.23-11.02 26.88-8.72 2.72.63 5.31 1.57 7.7 3.02 2.5 1.58 4.74 3.46 6.64 5.74.5.59 1.28 1.13.29 1.96-.86.72.11 1.11.38 1.5 1.7 2.46 2.65 5.24 3.51 8.07.25.77.41 1.55-.23 2.24"
          className="st11"
        />
        <path
          id="path1214"
          d="M192.05 657.6c1.34-.82 1.99-2.25 2.93-3.41 3.81-4.7 8.68-7.85 14.2-10.09 3.48-1.41 7.13-2.13 10.87-2.33.74-.04 1.61-.37 2.18.48-.73.82-.45 1.82-.45 2.75.01 1.39-.57 1.92-1.99 2.05-5.63.52-10.83 2.29-15.42 5.66-2.45 1.8-4.48 4.03-6.46 6.3-.47.54-.77 1.23-1.66 1.07-1.52-.62-2.87-1.53-4.2-2.48"
          className="st35"
        />
        <path
          id="path1216"
          d="M246.27 672.97c-.27-3.15-1.56-6.18-5.16-12.07.17-.28.4-.14.62-.08.32.08.65.16.87-.14.23-.31.03-.59-.18-.83-1.29-1.41-2.6-2.8-4.1-4-.87-.69-1.78-1.33-2.67-1.99 0-.35.31-.42.52-.58 2.33 1.41 4.39 3.13 6.14 5.23 1.41 1.68 1.41 1.68 3.28.46.52-.34 1-.77 1.9-.8-.17.83-1.82 1.2-.75 2.29 1.18 1.2 1.95-.65 3.1-.27-.19.71-.88.82-1.36 1.1-.77.46-.54 1.07.03 1.18.67.13 1.2-.05.49.81-.55.67-.09 1.23.35 1.67.44.44.93-.01 1.29-.24 1.65-1.1 3.44-1.93 5.4-2.89.01.81-.47.93-.83 1.13-.83.47-1.68.91-2.5 1.41-2.55 1.57-2.54 1.58-1.81 4.5.26 1.06.52 2.12-1.12 2.26-.4.03-.84.24-.8.7.04.44.47.61.89.63.56.04 1.12.05 1.67.07-1.06.78-2.24.35-3.38.37-.83-1.14-.59-2.08.56-2.8.89-.56.79-1.29.39-2.07-.28-.54-.73-.52-1.22-.28-.81.4-1.19.97-.95 1.92.26 1.06.69 2.13.26 3.26-.3.02-.61.03-.93.05"
          className="st35"
        />
        <path
          id="path1218"
          d="M214.78 671.13c.67-.01 1.16-.36 1.69-.76 3.9-2.92 9.36-2.29 12.09 1.64.99 1.42 1.97 2.11 3.6 2.01-1.45.57-2.97.19-4.45.36-.71.08-1.45-.06-2.12.12-3.44.92-6.33-.24-9.03-2.24-.58-.42-1.33-.53-1.78-1.13"
          style={{
            fill: "#aaa8a8",
          }}
        />
        <path
          id="path1220"
          d="M196.25 660.09c1.91-2 3.73-4.1 5.75-5.99 4.16-3.89 9.11-6.23 14.75-7.09.62-.1 1.23-.27 1.85-.41.82-.19 1.89.35 2.46-.48.51-.72.18-1.7.21-2.57.03-.67.04-1.31.96-1.31 0 .8-.01 1.59.01 2.39.03 1.95.22 2.23 2.16 2.31 2.81.11 5.51.58 7.99 1.96-.1.21-.26.34-.48.41-3.68-1.07-7.38-2.06-11.27-1.78-6.71.49-12.71 2.73-17.88 7.13-2.08 1.77-3.66 3.96-5.51 5.92-.39-.04-.76-.14-1-.49"
          style={{
            fill: "#b3b3b3",
          }}
        />
        <path
          id="path1222"
          d="M228.07 650.78c-8.29-1.9-15.78-.05-22.54 4.91-2.37 1.74-4.55 3.75-5.86 6.49-.4-.11-.74-.3-.96-.67 4.47-6.65 10.7-10.67 18.57-11.87 3.75-.57 7.62-.8 11.32.65-.03.33-.33.35-.53.49"
          style={{
            fill: "#b8b8b8",
          }}
        />
        <path
          id="path1224"
          d="M247.22 672.92c-.37-1.36-.71-2.73-1.1-4.08-.17-.6.13-.88.58-1.11.76-.4 1.52-.81 2.24-1.2.79.32.7 1.07.9 1.63.59 1.6.57 1.64-1.02 2.44-1.11.55-.5 1.52-.65 2.3-.31 0-.63.01-.95.02"
          className="st11"
        />
        <path
          id="path1226"
          d="M270.75 647.68c.32-.89.94-1.43 1.7-1.9-.12 1.45-.13 1.46-1.7 1.9"
          style={{
            fill: "#5700a7",
          }}
        />
        <path
          id="path1228"
          d="M193.45 670.05c-.57.37-1.1.49-1.75.06-.86-.58-1.7-1.15-2.39-2.2 1.34-1.03 2.83-.57 4.2-.69.61 1.07-1.56 1.87-.08 2.85l.02-.02"
          style={{
            fill: "#fafafa",
          }}
        />
        <path
          id="path1230"
          d="M240.18 644.63c-2.52-1.14-4.96-2.24-7.53-3.02-1.99-.6-3.98-1.11-6.05-1.31-1.82-.17-1.93-.28-1.96-2.24-.03-1.76-.05-3.52.01-5.28.03-1.1-.34-1.59-1.51-1.57-4.58.04-3.7-.31-3.78 3.63-.03 1.2-.04 2.4 0 3.6.04 1.09-.52 1.73-1.51 1.79-5.13.28-9.72 2.32-14.32 4.32-.03.01-.12-.09-.37-.3 2.55-1.61 5.24-2.69 8.06-3.45 2-.54 4.02-.99 6.05-1.38.91-.17 1.18-.62 1.17-1.46-.02-1.84-.03-3.68.01-5.52.04-1.66.12-1.78 1.81-1.73 1.5.04 3.34-.63 4.43.28 1.17.97.29 2.87.46 4.35.14 1.25-.52 2.78.36 3.7.75.79 2.23.64 3.39.89 3.6.77 7.1 1.84 10.35 3.62.38.19.92.26.93 1.08"
          className="st4"
        />
        <path
          id="path1232"
          d="M228.07 650.78c.18-.16.36-.32.53-.48 2.74.46 5.16 1.7 7.57 2.99-.04.32-.25.47-.52.58a25.81 25.81 0 0 0-7.58-3.09"
          style={{
            fill: "#a2a2a2",
          }}
        />
        <path
          id="path1234"
          d="M235.3 650.3c1.44.4 2.66 1.13 3.58 2.36-1.34-.57-2.65-1.16-3.75-2.16.06-.07.12-.13.17-.2"
          style={{
            fill: "#9f9f9f",
          }}
        />
        <path
          id="path1236"
          d="M231.91 649.33c.16-.14.32-.28.48-.41 1.05.29 2.07.64 2.91 1.39-.06.06-.12.13-.17.2-1.18-.11-2.12-.88-3.22-1.18"
          className="st31"
        />
      </g>
    </svg>
      
      <Menu
      id="long-menu"
      MenuListProps={{
        'aria-labelledby': 'long-button',
      }}
      anchorEl={anchorEl}
      open={openLead}
      onClose={handleCloseLed}
      PaperProps={{
        style: {
          maxHeight: ITEM_HEIGHT * 4.5,
          width: '20ch',
          marginLeft :'280px'
        },
      }}
      >
{allLead.length > 0 ? (
  <>
    {allLead.map((option) => (
      <MenuItem key={option} onClick={handleOpenDetails}>
        {option.name}
      </MenuItem>
    ))}
  </>
) : (
  <MenuItem onClick={handleOpenDetails}>
    Asignar lead
  </MenuItem>
)}

      </Menu>
    </>
  );
};
export default SvgComponent;

