import React, { useState, useEffect, useCallback } from "react";
import { Button, Form, Input } from "antd";
import "../../styles/App.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/action";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Users } from "../../redux/action";
import Avatar from "@mui/material/Avatar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataPersonal = useSelector(state => state.dataPersonal);
  const [imagePreview, setImagePreview] = useState(null);

  const [data, setData] = useState({
    name: "",
    lastName: "",
    avatar: "",
    email: "",
    password: "",
    phone: "",
    role: "",
  });

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    dispatch(Users());
  }, [dispatch]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (e) => {

    try {
      
   
    const formData = new FormData();
    formData.append("avatar", data.avatar); // Asegúrate de que 'avatar' sea el nombre correcto en tu servidor
    formData.append("name", data.name);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("phone", data.phone);
    formData.append("role", data.role);

    dispatch(register(formData)); 
    setOpen(true);
    setData({
      name: "",
      lastName: "",
      avatar: "",
      email: "",
      password: "",
      phone: "",
      role: "",
    });

  } catch (error) {
    console.error('Error al registrar', error);
      
  }
  };

  const handleName = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const handleLatName = (e) => {
    setData({
      ...data,
      lastName: e.target.value,
    });
  };

  const handleEmail = (e) => {
    setData({
      ...data,
      email: e.target.value,
    });
  };
  const handlePassword = (e) => {
    setData({
      ...data,
      password: e.target.value,
    });
  };
  const handleConfirmPassword = (e) => {
    setData({
      ...data,
      confirmPassword: e.target.value,
    });
  };
  const handlePhone = (e) => {
    setData({
      ...data,
      phone: e.target.value,
    });
  };

  const handleRole = (e) => {
  setData({
      ...data,
      role: e.target.value,
    }); 
  };
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  
  const handleImageChange = useCallback(
    (e) => {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        getBase64(file, (imageUrl) => {
          setImagePreview(imageUrl);
          setData({
            ...data,
            avatar: file,
          });
        });
      }
    },
    [data]
  );
  return (
    <div>
      <div>
        {/*    <div className="Logo-register">
          <img src={require("../../image/Logo.png")} alt="Not found" />
     
        </div> */}
  
        <Form
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
          onFinish={handleSubmit}
          autoComplete="off"
          className="register-container"
        >
          <div className="register-box">
          <div className="avatar-preregister">
                    <div>
                      <Avatar
                      
                          src={
                            imagePreview
                              ? imagePreview
                              : data.avatar
                              ? data.avatar
                              : "/static/images/avatar/1.jpg"
                          }
                        sx={{
                          width: 100,
                          height: 100,
                          objectFit: "cover",
                       
                        }}
                      >
                 
                      </Avatar>
                    </div>
            
                     <div className="input-select-image">
                      <input
                        type="file"
                        name="avatar"
                        onChange={handleImageChange}
                        accept="image/jpeg, image/png"
                      />
                    </div> 
                  </div>
                  <div className="input-register">

            <div
            // Establece el ancho completo para el label
            >
              <label>NOMBRE</label>

              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleName}
                style={{
                  borderColor: "black",
                  borderWidth: "8px solid #000",
                  borderRadius: 0,
                  width: "100%",
                }}
                required
              />
            </div>
            <div
            // Establece el ancho completo para el label
            >
              <label>APELLIDO</label>

              <input
                type="text"
                name="lastName"
                value={data.lastName}
                onChange={handleLatName}
                style={{
                  borderColor: "black",
                  borderWidth: "8px solid #000",
                  borderRadius: 0,
                  width: "100%",
                }}
                required
              />
            </div>
            </div>
            <div className="input-register">

            <div>
              <label>EMAIL</label>
              <input
                type="email"
                name="email"
                onChange={handleEmail}
                value={data.email}
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

              <input
                type="text"
                name="password"
                value={data.password}
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
            </div>

            <div className="input-register">

            <div
            // Establece el ancho completo para el label
            >
              <label>N* DE TELÉFONO</label>

              <input
                type="text"
                name="phone"
                value={data.phone}
                onChange={handlePhone}
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
  <label>Role</label>
  <select
    name="role"
    value={data.role}
    onChange={handleRole}
    style={{
      borderColor: "black",
      borderWidth: "8px solid #000",
      borderRadius: 0,
      width: "100%",
      padding: "10px", // Añade relleno para que se vea similar al input
      boxSizing: "border-box", // Asegura que el relleno y el borde no afecten el ancho total
    }}
    required
  >
    <option>seleccionar role</option>
    <option value="admin">administrador</option>
    <option value="asesor">asesor</option>
  </select>
</div>
            </div>


            <div>
              <Stack spacing={2} sx={{ width: "100%" }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    borderColor: "black",
                    border: "none",
                    backgroundColor: "#00807772",
                    width: "100%",
                    borderRadius: 0,
                    outline: "none",
                  }}
                >
                  REGISTRATE
                </Button>
                  <Snackbar
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      sx={{ width: "100%" }}
                    >
                      {data.role} creado existosamente
                    </Alert>
                  </Snackbar>
              </Stack>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
