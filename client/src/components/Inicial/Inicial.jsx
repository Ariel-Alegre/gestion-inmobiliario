import React, { useState, useEffect } from "react";
import { Button } from "antd";
import "../../styles/App.css";
import CircularProgress from "@mui/material/CircularProgress";
import {Link} from 'react-router-dom'

const Inicial = () => {
  
  return (
    <>
     
        <div>
          <div className="Logo-login">
            <img src={require("../../image/Logo.png")} alt="Not found" />
          </div>
          <div className="Inicial-container">
            <div className="login-box">
            <div style={{ textAlign: 'center' }}>
                <label id="text-initial">Ya tienes una cuenta con nosotros? Haz click aquí!</label>
               <Link to= '/login'>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                      borderColor: "black",
                      border: "none",
                      backgroundColor: "#0080577B",
                      width: "100%",
                      borderRadius: 0,
                      outline: "none",
                      fontSize: '16px'
                    }}
                    >
                  INICIAR SESIÓN
                </Button>
                    </Link>
              </div>

            

              <div style={{ textAlign: 'center' }}>
              {/* <label id="text-initial">No te has registrado? Ingresa con tus datos aquí!</label> */}
              <Link to= '/admin'>

                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    borderColor: "black",
                    border: "none",
                    backgroundColor: "#0080577B",
                    width: "100%",
                    borderRadius: 0,
                    outline: "none",
                    fontSize: '16px'
                  }}
                >
                  Administradores
                </Button>
                </Link>

              </div>
            </div>
          </div>
        </div>
    </>
  );
};
export default Inicial;
