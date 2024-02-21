import * as React from "react";
import "../../../../styles/App.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { addLead, ClientLead } from "../../../../redux/action";
import { useDispatch } from "react-redux";
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import CardActions from "@mui/material/CardActions";
import AddIcon from "@mui/icons-material/Add";
import { PiUploadSimpleBold } from "react-icons/pi";
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


export default function UploadButton() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const [identifyImage, setIdentifyImage] = React.useState(null);
  const [addressImage, setAddressImage] = React.useState(null);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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

  return (
    <React.Fragment>
      <Button
  sx={{fontSize: 30, color: "#000"}}
        onClick={handleOpen}
      >
       <PiUploadSimpleBold/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 650, border: "5px solid #000" }}>
          <div className="input-img">
            <div>
              <Typography
                sx={{ fontSize: "15px", textAlign: "center", fontWeight: 700 }}
              >
                IDENTIFICACIÓN OFICIAL
              </Typography>
              <Card
                sx={{ minWidth: 275, border: "2px solid #000", height: 150 }}
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
                  {identifyImage ? (
                    <img
                      src={identifyImage}
                      alt="Uploaded"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : isDragActive ? (
                    <Typography variant="body1" component="div" color="primary">
                      Suelta la imagen aquí...
                    </Typography>
                  ) : (
                    <AddIcon sx={{ fontSize: "5em", color: "gray" }} />
                  )}
                </CardContent>
              </Card>
            </div>

            <div>
              <Typography
                sx={{ fontSize: "15px", textAlign: "center", fontWeight: 700 }}
              >
                COMPROBANTE DE DOMICILIO
              </Typography>
              <Card
                sx={{ minWidth: 275, border: "2px solid #000", height: 150 }}
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
                    <Typography variant="body1" component="div" color="primary">
                      Suelta la imagen aquí...
                    </Typography>
                  ) : (
                    <AddIcon sx={{ fontSize: "5em", color: "gray" }} />
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <Typography
              sx={{ fontSize: "15px", textAlign: "center", fontWeight: 700 }}
            >
              IDENTIFICACIÓN OFICIAL
            </Typography>
            <Card sx={{ minWidth: 275, border: "2px solid #000", height: 150 }}>
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
    </React.Fragment>
  );
}