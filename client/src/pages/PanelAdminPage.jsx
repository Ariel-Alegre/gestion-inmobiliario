import React, { useState, useEffect } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import "../styles/App.css";
import PanelAdmin from "../components/PanelAdmin/PanelAdmin";

export default function PanelAdminPage() {
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
                <PanelAdmin/>
             </div>
      )}

        </div>
    )
}