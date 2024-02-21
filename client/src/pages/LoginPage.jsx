import React, { useState, useEffect } from "react";
import Login from '../components/Login/Login';

import CircularProgress from "@mui/material/CircularProgress";
import "../styles/App.css";



export default function LoginPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(async () => {
        setLoading(false);
      }, 1000);
    }, []);
    return (
        <div>
      {loading ? (
        <div className="loading">
          <CircularProgress />
        </div>
      ) : (
            <div>
                <Login/>
            </div>
      )}

        </div>
    )
}