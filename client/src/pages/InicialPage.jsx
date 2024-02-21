import React, { useState, useEffect } from "react";
import Inicial from "../components/Inicial/Inicial";
import CircularProgress from "@mui/material/CircularProgress";
import "../styles/App.css";

export default function InicialPage() {
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
                <Inicial/>
            </div>
      )}

        </div>
    )
}