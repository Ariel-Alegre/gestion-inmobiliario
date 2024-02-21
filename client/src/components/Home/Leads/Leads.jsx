import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import FilterListIcon from "@mui/icons-material/FilterList";
import "../../../styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import { AllLead, DeleteClient, UpdateClient } from "../../../redux/action";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import SearchIcon from "@mui/icons-material/Search";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import UploadButton from "./TableButtonLead/UploadButton";
import { MdDelete } from "react-icons/md";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { ClientLead } from "../../../redux/action";
import { GrContact } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { TfiCommentAlt } from "react-icons/tfi";
import { MdOutlineEmail } from "react-icons/md";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { AiOutlineSolution } from "react-icons/ai";
import CssBaseline from "@mui/material/CssBaseline";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Card, CardContent, Typography, useTheme } from "@mui/material";
import { useDropzone } from "react-dropzone";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 300,
  bgcolor: "background.paper",
  border: "5px solid #000",
  boxShadow: 24,
  p: 8,
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
const drawerWidth = 300;
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function createData(id, name, calories, fat, carbs, protein) {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData(1, "Cupcake", 305, 3.7, 67, 4.3),
  createData(2, "Donut", 452, 25.0, 51, 4.9),
  createData(3, "Eclair", 262, 16.0, 24, 6.0),
  createData(4, "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(6, "Honeycomb", 408, 3.2, 87, 6.5),
  createData(7, "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(8, "Jelly Bean", 375, 0.0, 94, 0.0),
  createData(9, "KitKat", 518, 26.0, 65, 7.0),
  createData(10, "Lollipop", 392, 0.2, 98, 0.0),
  createData(11, "Marshmallow", 318, 0, 81, 2.0),
  createData(12, "Nougat", 360, 19.0, 9, 37.0),
  createData(13, "Oreo", 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    label: "Dessert (100g serving)",
  },
  {
    label: "Calories",
  },
  {
    label: "Fat (g)",
  },
  {
    label: "Carbs (g)",
  },
  {
    label: "Protein (g)",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{ background: "#000" }}>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        <TableCell sx={{ color: "white", fontSize: "20px" }}>LOTES</TableCell>
        <TableCell sx={{ color: "white", fontSize: "20px" }}>NOMBRE</TableCell>
        <TableCell sx={{ color: "white", fontSize: "20px" }}>ESTATUS</TableCell>
        <TableCell sx={{ color: "white", fontSize: "20px" }}>
          ACCIONES
        </TableCell>
        <TableCell sx={{ color: "white", fontSize: "20px" }}>
          <img
            src={require("../../../image/ícono seleccionar.png")}
            alt="not found"
            className="icons-table-title"
          />
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      <Tooltip title="Filter list">
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function Leads() {
  const { clientId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allLead = useSelector((state) => state.allLead);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [openDetails, setOpenDetails] = React.useState(false);
  const [openSucces, setOpenSuccess] = React.useState(false);
  const theme = useTheme();
  const [identifyImage, setIdentifyImage] = React.useState(null);
  const [addressImage, setAddressImage] = React.useState(null);
  const [imagePreview, setImagePreview] = React.useState(null);
  const [loadingAdd, setLoadingAdd] = React.useState(false);
  const [identifyOficial, setIdentifyOficial] = React.useState(null);
  const [proofPreview, setProofPreview] = React.useState(null);

  const [dataClient, setDataClient] = React.useState({
    name: "",
    lastName: "",
    birthDate: "",
    age: "",
    outdoor_Number: "",
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

  const clientLead = useSelector((state) => state.clientLead);
  const [state, setState] = React.useState({
    left: false,
  });

  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
  };

  const handleOpenDetails = async () => {
    setOpenDetails(true);
  };
  const obtenerCliente = React.useCallback(() => {
    dispatch(ClientLead(clientId));
  }, [dispatch, clientId]);

  // Llama a la función memoizada en el useEffect
  React.useEffect(() => {
    obtenerCliente();

    // Aquí puedes realizar cualquier otra operación que desees realizar en el useEffect
  }, [obtenerCliente]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingAdd(true);
    try {
      await dispatch(UpdateClient(clientId, dataClient));
      setOpenSuccess(true);
      setTimeout(async () => {
        window.location.reload();
      }, 1000);
      setLoadingAdd(false);
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
              src={
                clientLead.avatar
                  ? clientLead.avatar
                  : "/static/images/avatar/1.jpg"
              }
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

  // Llama a la función memoizada en el useEffect

  const handleClickOpen = () => {
    setOpen(!open);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setOpenDetails(false);
    navigate("");
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  React.useEffect(() => {
    dispatch(AllLead());
  }, [dispatch]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300 }}
      role="presentation"
    >
      <div className="input-filter-container">
        <div>
          <Typography
            sx={{ textAlign: "center", fontWeight: 600, fontSize: 15 }}
          >
            FILTRAR LEADS POR:{" "}
          </Typography>
          <input type="text" className="input-filter" placeholder="Buscar..." />
        </div>
        <IconButton
          type="button"
          sx={{ p: "10px", marginLeft: 25, marginTop: 2, position: "absolute" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </div>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <div className="linea-account"></div>

        <ListItemButton onClick={handleClickOpen}>
          <ListItemIcon>
            <Checkbox edge="start" tabIndex={-1} disableRipple />
          </ListItemIcon>
          <ListItemText primary="NOMBRE" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
        <div className="linea-account"></div>

        <ListItemButton onClick={handleClickOpen}>
          <ListItemIcon>
            <Checkbox edge="start" tabIndex={-1} disableRipple />
          </ListItemIcon>
          <ListItemText primary="UBICACIÓN" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
        <div className="linea-account"></div>

        <ListItemButton onClick={handleClickOpen}>
          <ListItemIcon>
            <Checkbox edge="start" tabIndex={-1} disableRipple />
          </ListItemIcon>
          <ListItemText primary="ASESOR" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>

        <div className="linea-account"></div>

        <ListItemButton onClick={handleClickOpen}>
          <ListItemIcon>
            <Checkbox edge="start" tabIndex={-1} disableRipple />
          </ListItemIcon>
          <ListItemText primary="FECHA" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <div className="leads-add-delete">
        <div>De dd/mm/aa</div>
        <div className="">
          <button>
            <DeleteOutlineIcon />
          </button>
          <button>
            <AddIcon />
          </button>
        </div>
      </div>
    </Box>
  );

  return (
    <Box sx={{ width: "100%", border: "none", background: "transparent" }}>
      <Paper sx={{ width: "100%", mb: 2, background: "transparent" }}>
        {/* <EnhancedTableToolbar  /> */}
        <div>
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button
                onClick={toggleDrawer(anchor, true)}
                className="btn-filtro-leads"
              >
                <img
                  src={require("../../../image/Ícono filtro.png")}
                  alt="Not found"
                  className="img-filtro-leads"
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
        <TablePagination
          rowsPerPageOptions={[2, 5, 8]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {allLead.map((row, index) => {
                const labelId = index;

                return (
                  row.name && (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      tabIndex={-1}
                      key={row.id}
                    >
                      <TableCell></TableCell>
                      <TableCell
                        component="tD"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.lote}
                      </TableCell>

                      <TableCell>{row.name}</TableCell>

                      <TableCell>Enganche</TableCell>
                      <TableCell>
                        <div className="icons-table-leads">
                          <div>
                            <Link to={`/home/leads/${row.id}`}>
                              <Button
                                onClick={handleOpen}
                                sx={{ fontSize: 30, color: "#000" }}
                              >
                                <GrContact />
                              </Button>
                            </Link>
                          </div>

                          <Link
                            to={`/home/leads/${row.id}`}
                            className="icons-table-leads"
                          >
                            <Button
                              onClick={handleOpenDetails}
                              sx={{ fontSize: 30, color: "#000" }}
                            >
                              <AiOutlineSolution />
                            </Button>
                          </Link>

                          <div>
                            <UploadButton />
                          </div>
                          <Link to={`/home/leads/${row.id}`}>
                            <Button
                              onClick={() => {
                                dispatch(DeleteClient(row.id));
                                window.location.href = "/home/leads";
                              }}
                              sx={{ fontSize: 30, color: "#000" }}
                            >
                              <MdDelete />
                            </Button>
                          </Link>
                        </div>
                      </TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                  )
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="table-modal-contact">
              <div className="avatar-contact">
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={
                      clientLead.avatar
                        ? clientLead.avatar
                        : "/static/images/avatar/1.jpg"
                    }
                    sx={{ width: 100, height: 100, border: "3px solid #000" }}
                  />
                </Stack>
                <span className="name-table-modal">{clientLead.name}</span>
              </div>
              <div className="lead-modal-contact">
                <div>
                  <strong>TELÉFONO</strong> : {clientLead.phone}
                </div>
                <div>
                  <strong>EMAIL</strong> :
                  <input
                    type="text"
                    className="lead-input-contact"
                    value={clientLead.email}
                  />
                </div>
                <div className="icons-contact-container">
                  <a href={`tel://${clientLead.phone}`} target="_blank">
                    <LuPhoneCall className="icons-contact" />
                  </a>
                  <a
                    href={`sms:${clientLead.phone}`}
                    class="email"
                    target="_blank"
                  >
                    <TfiCommentAlt className="icons-contact" />
                  </a>

                  <a
                    href={`https://wa.me/${clientLead.phone}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp className="icons-contact" />
                  </a>
                  <a
                    href={`mailto:${clientLead.email}`}
                    class="email"
                    target="_blank"
                  >
                    <MdOutlineEmail className="icons-contact" />
                  </a>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <div>
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
              {/*      value={dataClient.name || clientLead.name || ""} */}

              <form onSubmit={handleSubmit} className="details-container">
                <div className="details-input-container">
                  <div className="details-input">
                    <div className="input-details">
                      <label>NOMBRE</label>
                      <input
                        type="text"
                        name="name"
                        className="lead-input-detail"
                        value={dataClient.name || clientLead.name || ""}
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
                        value={dataClient.lastName || clientLead.lastName || ""}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="input-details">
                      <label>Fecha de nacimiento</label>
                      <input
                        type="text"
                        name="birthDate"
                        className="lead-input-detail"
                        value={
                          dataClient.birthDate || clientLead.birthDate || ""
                        }
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="input-details">
                      <label>Edad</label>
                      <input
                        type="text"
                        name="age"
                        className="lead-input-detail"
                        value={dataClient.age || clientLead.age || ""}
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
                        value={
                          dataClient.nationality || clientLead.nationality || ""
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-details">
                      <label>CURP</label>
                      <input
                        name="curp"
                        type="text"
                        className="lead-input-detail"
                        value={dataClient.curp || clientLead.curp || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-details">
                      <label>RFC</label>
                      <input
                        type="text"
                        name="rfc"
                        className="lead-input-detail"
                        value={dataClient.rfc || clientLead.rfc || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-details">
                      <label>ESTADO CIVIL</label>
                      <input
                        type="text"
                        name="civil_status"
                        className="lead-input-detail"
                        value={
                          dataClient.civil_status ||
                          clientLead.civil_status ||
                          ""
                        }
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="details-input">
                    <div className="input-details">
                      <label>Número exterior</label>
                      <input
                        type="text"
                        name="outdoor_Number"
                        className="lead-input-detail"
                        value={
                          dataClient.outdoor_Number ||
                          clientLead.outdoor_Number ||
                          ""
                        }
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="input-details">
                      <label>Fraccionamiento o colonia</label>
                      <input
                        type="text"
                        name="fractionation_or_colony"
                        className="lead-input-detail"
                        value={
                          dataClient.fractionation_or_colony ||
                          clientLead.fractionation_or_colony ||
                          ""
                        }
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="input-details">
                      <label>Municipio o alcaldia</label>
                      <input
                        type="text"
                        name="municipality_or_mayor"
                        className="lead-input-detail"
                        value={
                          dataClient.municipality_or_mayor ||
                          clientLead.municipality_or_mayor ||
                          ""
                        }
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="input-details">
                      <label>Codigo postal</label>
                      <input
                        type="text"
                        name="postal_code"
                        className="lead-input-detail"
                        value={
                          dataClient.postal_code || clientLead.postal_code || ""
                        }
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
                        value={dataClient.phone || clientLead.phone || ""}
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
                        value={dataClient.email || clientLead.email || ""}
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
                        value={
                          dataClient.country_of_origin ||
                          clientLead.country_of_origin ||
                          ""
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-details">
                      <label>OCUPACIÓN</label>
                      <input
                        type="text"
                        name="occupation"
                        className="lead-input-detail"
                        value={
                          dataClient.occupation || clientLead.occupation || ""
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-details">
                      <label>LOTE DE INTERÉS</label>
                      <input
                        type="text"
                        name="lote"
                        className="lead-input-detail"
                        value={dataClient.lote || clientLead.lote || ""}
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
                        value={dataClient.country || clientLead.country || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-details">
                      <label>ESTADO</label>
                      <input
                        type="text"
                        name="state"
                        className="lead-input-detail2"
                        value={dataClient.state || clientLead.state || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-details">
                      <label>MUNICIPIO</label>
                      <input
                        type="text"
                        name="municipality"
                        value={
                          dataClient.municipality ||
                          clientLead.municipality ||
                          ""
                        }
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
                        value={dataClient.address || clientLead.address || ""}
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
                        value={dataClient.country || clientLead.country || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-details">
                      <label>ESTADO</label>
                      <input
                        type="text"
                        className="lead-input-detail2"
                        name="state"
                        value={dataClient.state || clientLead.state || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-details">
                      <label>MUNICIPIO</label>
                      <input
                        type="text"
                        className="lead-input-detail2"
                        name="municipality"
                        value={
                          dataClient.municipality ||
                          clientLead.municipality ||
                          ""
                        }
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
                        value={dataClient.address || clientLead.address || ""}
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
                              background: clientLead.identify_oficial
                                ? `url(${clientLead.identify_oficial})`
                              
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
                              clientLead.proof_of_address
                              ? `url(${clientLead.proof_of_address})`
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
                  <Button
                    variant="contained"
                    sx={{
                      width: "20%",
                      left: "50%",
                      transform: "translateX(-20%)",
                    }}
                    type="submit"
                  >
                    {loadingAdd ? "Guardando..." : "GUARDAR"}
                  </Button>
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
              </form>
            </Box>
          </Modal>
        </div>
      </Paper>
    </Box>
  );
}
