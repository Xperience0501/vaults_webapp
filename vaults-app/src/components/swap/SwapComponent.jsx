import { Box, Grid } from "@mui/material";
import swapArt from "../../assets/art.svg";
import React from "react";
import "./swap.scss";

function SwapComponent() {
  return (
    <div className="swap-main">
      <div className="swap-main-content">
        
      </div>
      <div className="swap-img">
        <div className="img-container">
          <img src={swapArt} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SwapComponent;
