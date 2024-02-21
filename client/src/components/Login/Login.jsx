import React, { useState, useEffect } from "react";
import { Button, Form, Input } from "antd";
import "../../styles/App.css";
import { useNavigate, Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/action";
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import ButtonMaterial from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(null);
  const [open, setOpen] = React.useState(false);
  const role = useSelector((state) => state.role);
  const [loading, setLoading] = useState(false);


  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activa el indicador de carga
  
    try {
      if (email && password) {
        const authResult = await dispatch(login(email, password));
        setAuth(authResult);
  
        if (authResult) {
          if (role === 'asesor') {
            navigate('/home');


          } else if (role === 'admin') {
            // Redirección a '/admin'
            navigate('/admin');
          }
        } else {
          setOpen(true);
        }
      }
    } catch (error) {
      console.error('Error durante el inicio de sesión', error);
    } finally {
      setLoading(false); // Desactiva el indicador de carga al finalizar
    }
  };

  useEffect(() => {
    if (auth) {
      if (role === 'asesor') {
        navigate('/home');
      } else if (role === 'admin') {
        navigate('/admin');
      }
    }
  }, [auth, role]);
  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };


  return (
    <>
     
        <div>
          <div className="Logo-login">
            <img src={require("../../image/Logo.png")} alt="Not found" />

          </div>
          <div>
      {/*  <Link to="/" className="btn-back">
            <ButtonMaterial
              component="label"
              variant="contained"
              startIcon={<ArrowBackIcon />}
              sx={{
                width: 100,
                top: 190,
                '@media screen and (max-width: 1800px)': {
                  // Estilos específicos para pantallas con un ancho máximo de 600px
                  top: 145,
                },
                '@media screen and (max-width: 768px)': {
                  // Estilos específicos para pantallas con un ancho máximo de 600px
                  top: 130,
                },
              }}
            >
              Volver
            </ButtonMaterial>
          </Link> */}
       </div>
          <form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onSubmit={handleSubmit}
            autoComplete="off"
            className="login-container"
          >
            <div className="login-box">
              <div>
                <label>EMAIL</label>
                <Input
                  type="email"
                  name="email"
                  onChange={handleEmail}
                  value={email}
                  style={{
                    borderColor: "black",
                    borderWidth: "3px solid #000",
                    borderRadius: 0,
                    width: "100%",
                  }}
                  required
                />
              </div>

              <div
              // Establece el ancho completo para el label
              >
                <label>CONTRASEÑA</label>

                <Input.Password
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePassword}
                  style={{
                    borderColor: "black",
                    borderWidth: "8px solid #000",
                    borderRadius: 0,
                    width: "100%",
                  }}
                  required
                />
              </div>

              <div>
                <Button
                  type="submit"
                  htmlType="submit"
                  style={{
                    color:'#fff',
                    borderColor: "black",
                    border: "none",
                    backgroundColor: "#00807772",
                    width: "100%",
                    borderRadius: 0,
                    outline: "none",
                  }}
                  
                  disabled={loading} 
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : 'INICIAR SESIÓN'}
                </Button>
            
            <Stack spacing={2} sx={{ width: "100%" }}>
           
                <Snackbar
                  open={open}
                  autoHideDuration={2000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="error"
                    sx={{ width: "100%" }}
                  >
                    El email o contraseñas  es incorrecta
                  </Alert>
                </Snackbar>
            </Stack>
          </div>
            </div>
          </form>
        </div>
    </>
  );
};
export default Login;
