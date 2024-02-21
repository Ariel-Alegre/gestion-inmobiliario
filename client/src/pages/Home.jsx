import React, { useState, useEffect } from "react";
import Index from "../components/Home";
import CircularProgress from "@mui/material/CircularProgress";
import "../styles/App.css";

function Home() {
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

      <Index />
      </div>
      )}

    </div>
  );
}

export default Home;
