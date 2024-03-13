import axios from 'axios'












//  export const register = (payload) => {
//   return async (dispatch) => {
//       const res = axios.post('https://gestion-inmobiliario.onrender.com/register', payload)
//       const data = res.data

//       return dispatch({
//           type: "REGISTER",
//           payload: data
//       })

//   }
// }

// export const login = (email, password) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.post("https://gestion-inmobiliario.onrender.com/login", {
//         email,
//         password,
//       });

//       if (response.status === 200 && response.data.token) {
//         localStorage.setItem("token", response.data.token);

//         dispatch({
//           type: "LOGIN_SUCCESS",
//           payload: {
//             token: response.data.token,
//             role: response.data.role,
//           },
//         });

//         return true; // Autenticación exitosa
//       } else {
//         throw new Error("Error durante el inicio de sesión.");
//       }
//     } catch (error) {
//       dispatch({ type: "LOGIN_ERROR" });
//       return false; // Autenticación fallida
//     }
//   };
// };


// // actions/authActions.js

// export const logout = () => {
// return {
//   type: 'LOGOUT',
// };
// };


// export const Users = () => {
//   return async (dispatch) => {
//       const res = axios.get('https://gestion-inmobiliario.onrender.com/users')
//       const data = res.data

//       return dispatch({
//           type: "ALL_USERS",
//           payload: data
//       })

//   }
// }




// export const DataPersonal = (token) => {
// return async (dispatch) => {
//   try {
//     const res = await axios.get('https://gestion-inmobiliario.onrender.com/user', {
//       method: "GET",
//       headers: {
//         Authorization: `${token}`,
//         "Content-Type": "application/json",
//       },
//     });

//     const data = res.data;

//     dispatch({
//       type: 'DATA_PERSONAL',
//       payload: data,
//     });
//   } catch (error) {
//     console.error("Error al obtener datos personales:", error);
//     // Podrías dispatch una acción de error si es necesario
//   }
// };
// };


// export const addLead = (payload) => {
//   return async (dispatch) => {
//     try {
//       const res = await axios.post('https://gestion-inmobiliario.onrender.com/lead', payload);
//       const data = res.data;

//       dispatch({
//         type: "ADD_LEAD",
//         payload: data
//       });
//     } catch (error) {
//       console.error('Error al agregar el Lead:', error);
//       // Puedes dispatchar una acción de error si es necesario.
//     }
//   };
// };


// export const AllLead = () => {
// return async (dispatch) => {
//     const res = await axios.get('https://gestion-inmobiliario.onrender.com/lead')
//     const data = res.data

//     return dispatch({
//         type: "All_LEAD",
//         payload: data
//     })

// }
// }
// export const ClientLead = (clientId) => {
//   return async (dispatch) => {
//     try {
//       // Realiza la solicitud GET a la API con el ID del cliente
//       const res = await axios.get(`https://gestion-inmobiliario.onrender.com/lead/${clientId}`);

//       // Extrae los datos de la respuesta
//       const data = res.data;

//       // Despacha la acción con los datos obtenidos
//       dispatch({
//         type: "CLIENT_LEAD",
//         payload: data
//       });

//       // Devuelve los datos para que puedan ser utilizados si es necesario
//       return data;
//     } catch (error) {
//       // Maneja errores, por ejemplo, puedes despachar una acción de error
//       console.error("Error al obtener datos del cliente:", error);
//       // Puedes despachar una acción de error si es necesario
//       dispatch({
//         type: "CLIENT_LEAD_ERROR",
//         payload: error.message // O cualquier otra información de error que desees incluir
//       });

//       // Devuelve null en caso de error
//       return null;
//     }
//   };
// };


//   export const UpdateClient = (clientId, payload) => {
//     return async (dispatch) => {
//         const res = await axios.put(`https://gestion-inmobiliario.onrender.com/lead/${clientId}`, payload)
//         const data = res.data

//         return dispatch({
//             type: "UPDATE_LEAD",
//             payload: data
//         })

//     }
//     }
//     export const DeleteClient = (clientId) => {
//       return async (dispatch) => {
//           const res = await axios.delete(`https://gestion-inmobiliario.onrender.com/lead/${clientId}`, )
//           const data = res.data
//      return dispatch({
//               type: "DELETE_LEAD",
//               payload: data
//           })


//       }
//       }  









export const register = (payload) => {
  return async (dispatch) => {
    const res = axios.post('http://localhost:3001/register', payload)
    const data = res.data

    return dispatch({
      type: "REGISTER",
      payload: data
    })

  }
}

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      if (response.status === 200 && response.data.token) {
        localStorage.setItem("token", response.data.token);

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            token: response.data.token,
            role: response.data.role,
          },
        });

        return true; // Autenticación exitosa
      } else {
        throw new Error("Error durante el inicio de sesión.");
      }
    } catch (error) {
      dispatch({ type: "LOGIN_ERROR" });
      return false; // Autenticación fallida
    }
  };
};


// actions/authActions.js

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};


export const Users = () => {
  return async (dispatch) => {
    const res = axios.get('http://localhost:3001/users')
    const data = res.data

    return dispatch({
      type: "ALL_USERS",
      payload: data
    })

  }
}



export const Lotes = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:3001/lotes`);
      const data = res.data;
      console.log(data)
      dispatch({
        type: "All_LOTES",
        payload: data
      });

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
};


export const DataPersonal = (token) => {
  return async (dispatch) => {
    try {
      const res = await axios.get('http://localhost:3001/user', {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = res.data;

      dispatch({
        type: 'DATA_PERSONAL',
        payload: data,
      });
    } catch (error) {
      console.error("Error al obtener datos personales:", error);
      // Podrías dispatch una acción de error si es necesario
    }
  };
};


export const addLead = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('http://localhost:3001/lead', payload);
      const data = res.data;

      dispatch({
        type: "ADD_LEAD",
        payload: data
      });
    } catch (error) {
      console.error('Error al agregar el Lead:', error);
      // Puedes dispatchar una acción de error si es necesario.
    }
  };
};


export const AllLead = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3001/lead')
    const data = res.data

    return dispatch({
      type: "All_LEAD",
      payload: data
    })

  }
}
export const ClientLead = (clientId) => {
  return async (dispatch) => {
    try {
      // Realiza la solicitud GET a la API con el ID del cliente
      const res = await axios.get(`http://localhost:3001/lead/${clientId}`);

      // Extrae los datos de la respuesta
      const data = res.data;

      // Despacha la acción con los datos obtenidos
      dispatch({
        type: "CLIENT_LEAD",
        payload: data
      });

      // Devuelve los datos para que puedan ser utilizados si es necesario
      return data;
    } catch (error) {
      // Maneja errores, por ejemplo, puedes despachar una acción de error
      console.error("Error al obtener datos del cliente:", error);
      // Puedes despachar una acción de error si es necesario
      dispatch({
        type: "CLIENT_LEAD_ERROR",
        payload: error.message // O cualquier otra información de error que desees incluir
      });

      // Devuelve null en caso de error
      return null;
    }
  };
};


export const UpdateClient = (clientId, payload) => {
  return async (dispatch) => {
    const res = await axios.put(`http://localhost:3001/lead/${clientId}`, payload)
    const data = res.data

    return dispatch({
      type: "UPDATE_LEAD",
      payload: data
    })

  }
}

export const DeleteClient = (clientId) => {
  return async (dispatch) => {
    const res = await axios.delete(`http://localhost:3001/lead/${clientId}`,)
    const data = res.data
    return dispatch({
      type: "DELETE_LEAD",
      payload: data
    })


  }
}







