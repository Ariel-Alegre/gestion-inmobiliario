import React, { useState, useEffect } from "react";
import Register from '../components/Register/Register'
import CircularProgress from "@mui/material/CircularProgress";
import "../styles/App.css";

export default function RegisterPage() {
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
       <Register/>
        </div>
      )}
    </div>
  );
}
