import * as React from "react";
import "../../../styles/App.css";
import ButtonMaterial from "@mui/material/Button";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { addLead } from "../../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import CardActions from "@mui/material/CardActions";
import AddIcon from "@mui/icons-material/Add";
import { Card, CardContent, Typography, useTheme } from "@mui/material";
import { useDropzone } from "react-dropzone";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  objectFit: "cover",
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ButtonAddLeads() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [imagePreview, setImagePreview] = React.useState(null);
  const [proofPreview, setProofPreview] = React.useState(null);

  const [openError, setOpenError] = React.useState(false);
  const [openSucces, setOpenSuccess] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
  };

  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
  };

  const [addlead, setAddlead] = React.useState({
    name: "",
    email: "",
    phone: "",
    identify_oficial: "",
    proof_of_address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
        try {
    const formData = new FormData();
    formData.append("name", addlead.name);
    formData.append("email", addlead.email);
    formData.append("phone", addlead.phone);
    formData.append("identify", addlead.identify_oficial);
    formData.append("proof", addlead.proof_of_address);
      dispatch(addLead(formData));
      setOpenSuccess(true);
      setTimeout(async () => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddlead({
      ...addlead,
      [name]: value,
    });
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const handleImageChange = (e) => {
    try {
      const file = e.target.files[0];
      if (file) {
        getBase64(file, (imageUrl) => {
          setImagePreview(imageUrl);
          setAddlead({
            ...addlead,
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
          setAddlead({
            ...addlead,
            proof_of_address: file,
          });
        });
      }
    } catch (error) {
      console.error("Error al procesar archivos:", error);
    }
  };

  return (
    <div>
      <div onClick={() => handleOpen(true)}>
        <img
          src={require("../../../image/Botón añadir lead.png")}
          alt="Not found"
          className="icono-navbar"
        />
      </div>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit}>
          <Box sx={style}>
            <div className="modal-header-left">
              <button
                className="close-button"
                onClick={() => handleClose(false)}
              >
                <h4>X</h4>
              </button>
            </div>

            <div className="input-addLeads">
              <div className="input-label">
                <label htmlFor="nombre">NOMBRE:</label>
                <div className="input-container">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input-bottom-border"
                    value={addlead.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="input-label">
                <label htmlFor="">EMAIL:</label>
                <div className="input-container">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-bottom-border"
                    value={addlead.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="input-label">
                <label htmlFor="nombre">TELÉFONO:</label>
                <div className="input-container">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="input-addLead "
                    value={addlead.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="ButtonMaterial">
              <ButtonMaterial
                sx={{
                  height: "2%",
                  width: "150%",
                  background: "transparent",
                  color: "#000",
                  border: "2px solid #000",
                  "&:hover": {
                    border: "2px solid #000",
                    background: "transparent",
                  },
                }}
                onClick={handleOpen2}
              >
                SUBIR DOCUMENTOS
              </ButtonMaterial>
              <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
              >
                <Box sx={{ ...style, width: 650, border: "5px solid #000" }}>
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
                          minWidth: 275,
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
                            background: addlead.identify_oficial
                              ? `url(${
                                  imagePreview || addlead.identify_oficial
                                })`
                              : "",
                            backgroundSize: "cover",
                          }}
                        >
                          <label
                            htmlFor="identifyInput"
                            style={{ cursor: "pointer" }}
                          >
                            {!imagePreview ? (
                              <AddIcon
                                sx={{ fontSize: "5em", color: "gray" }}
                              />
                            ) : null}
                            <input
                              id="identifyInput"
                              type="file"
                              name="identify"
                              onChange={handleImageChange}
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
                          minWidth: 275,
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
                            background: addlead.proof_of_address
                            ? `url(${
                              proofPreview || addlead.proof_of_address
                              })`
                            : "",
                          backgroundSize: "cover",
                          }}
                        >
                          <label
                            htmlFor="proofInput"
                            style={{ cursor: "pointer" }}
                          >
                            {!proofPreview ? (
                              <AddIcon
                                sx={{ fontSize: "5em", color: "gray" }}
                              />
                            ) : null}
                            <input
                              id="proofInput"
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
                      sx={{
                        fontSize: "15px",
                        textAlign: "center",
                        fontWeight: 700,
                      }}
                    >
                    </Typography>
                    <Card
                      sx={{
                        minWidth: 275,
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
                      >
                        <AddIcon sx={{ fontSize: "5em", color: "gray" }} />
                      </CardContent>
                    </Card>
                  </div>
                </Box>
              </Modal>

              <ButtonMaterial
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
                AÑADIR LEAD
              </ButtonMaterial>
            </div>
          </Box>

          <div>
            <Stack spacing={2} sx={{ width: "100%" }}>
              <Snackbar
                open={openSucces}
                autoHideDuration={2000}
                onClose={handleCloseSuccess}
              >
                <Alert
                  onClose={handleCloseSuccess}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Lead creado correctamente
                </Alert>
              </Snackbar>
            </Stack>
          </div>
        </form>
      </Modal>
    </div>
  );
}
