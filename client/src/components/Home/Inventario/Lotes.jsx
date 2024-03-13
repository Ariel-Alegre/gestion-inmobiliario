import * as React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ButtonMaterial from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { DataPersonal, addLead, AllLead, Lotes } from "../../../redux/action";
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
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import SendIcon from "@mui/icons-material/Send";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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
  const allLotes = useSelector((state) => state.lotes);
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
    e.preventDefault();
    setContrat(true);
  };

 

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

    formData.append(
      "fractionation_or_colony",
      dataClient.fractionation_or_colony
    );
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
    dispatch(AllLead());
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
              <img srcSet={clientLead.identify_oficial} alt="not" />
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

  React.useEffect(() => {
    dispatch(Lotes());
  }, []);

  const [modalStates, setModalStates] = React.useState({});

  const handleOpenModal = (loteId) => {
    setModalStates((prevState) => ({
      ...prevState,
      [loteId]: true,
    }));
  };

  const handleCloseModal = (loteId) => {
    setModalStates((prevState) => ({
      ...prevState,
      [loteId]: false,
    }));
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
                          <button onClick={hanleContrat}>contrato</button>
                          {contrat ? (
                            <div className="btn-option">
                              <div>
                                <button onClick={generatePdf}>
                                  {" "}
                                  {loading ? (
                                    <CircularProgress
                                      color="inherit"
                                      sx={{ height: 2 }}
                                    />
                                  ) : (
                                    <DriveFolderUploadIcon />
                                  )}
                                </button>
                              </div>
                              <div>
                                <button endIcon={<SendIcon />}>Enviar</button>
                              </div>
                            </div>
                          ) : null}
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
          {allLotes.map((lote) => (
            <React.Fragment key={lote.id}>
              <path
                key={lote.id}
                id={lote.id_path}
                d={lote.D}
                className={lote.Status ? "st1" : "st4"}
                onClick={
                  lote.Status ? () => handleOpenModal(lote.id) : undefined
                }
              />
              <Modal
                open={modalStates[lote.id]}
                onClose={() => handleCloseModal(lote.id)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div className="modal-header-left">
                    <button
                      className="close-button"
                      onClick={() => handleCloseModal(lote.id)}
                    >
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
                        <h4>{lote.Lote}</h4>
                        <h4>Area: {lote.Metros_totales} m2</h4>
                        <h4>Precio m2: ${lote.Precio_por_metro}mxn</h4>
                        <h4>Precio Total: ${lote.Precio_total}mxn</h4>
                        <ButtonMaterial
                          sx={{
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
            </React.Fragment>
          ))}
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
            id="path1138"
            d="M277.46 298.06c.56-.26 1-.18 1.47.29 4.85 4.88 9.72 9.74 14.58 14.61.26.26.69.53.36.98-.38.51-.82.34-1.21-.04-.29-.28-.57-.56-.86-.84-4.36-4.35-8.71-8.71-13.06-13.07-.55-.55-1.28-1.01-1.26-1.95l-.02.02z"
            className="st11"
          />{" "}
          <path
            id="path1042"
            d="M202.68 210.73c-.19.61-.32 1.24-.58 1.82-1.32 2.96-4.63 4.76-7.62 4.16-3.36-.67-5.75-3.35-5.91-6.62-.16-3.48 1.99-6.43 5.33-7.32 3.03-.81 6.4.66 7.94 3.5.34.62.53 1.33.79 2 .56.8.63 1.62.05 2.46"
            className="st11"
          />{" "}
          <path
            id="path1024"
            d="M214.67 509.55c.08-3.91 3.36-7.02 7.33-6.94 3.91.08 7.02 3.39 6.89 7.34-.12 3.79-3.4 6.93-7.17 6.88-3.88-.06-7.13-3.42-7.05-7.28"
            className="st11"
          />
          <path
            id="path998"
            d="M339.4 352.64c3.99-.01 7.14 3.12 7.11 7.09a7.058 7.058 0 0 1-6.97 7.02c-3.97.05-7.2-3.06-7.26-6.99-.05-3.92 3.15-7.11 7.12-7.12"
            className="st11"
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
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={openLead}
        onClose={handleCloseLed}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
            marginLeft: "280px",
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
          <MenuItem onClick={handleOpenDetails}>Asignar lead</MenuItem>
        )}
      </Menu>
    </>
  );
};
export default SvgComponent;