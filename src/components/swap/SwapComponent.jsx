import { Box, Grid } from "@mui/material";
import swapArt from "../../assets/art.svg";
import settings from "../../assets/Glyph.svg";
import walletIcon from "../../assets/walletIcon.svg";
import downArrow from "../../assets/downArrow.svg";
import menuArrow from "../../assets/menuArrow.svg";
import React from "react";
import "./swap.scss";

function SwapComponent() {
  return (
    <div className="swap-main">
      <div className="swap-main-content">
        <div className="down-arrow">
          <img src={downArrow} alt="" />
        </div>
        <div className="swap-content">
          <div className="swap-heading-1">
            SWAP
            <img src={settings} alt="" />
          </div>
          <div className="swap-details">
            <span className="available-cryp">Available 0 ATOM</span>
            <div className="half-max">
              <span className="half">HALF</span>
              <span className="max">MAX</span>
            </div>
            <div className="cryp-div">
              <div className="cryp-menu">
                ATOM
                <img src={menuArrow} alt="" />
              </div>
              <span className="cosmo">Cosmos Hub</span>
            </div>
            <span className="selected-cryp">
              0
            </span>
          </div>
          <div className="swap-details">
          <div className="convertTo cryp-div">
              <div className="cryp-menu">
                OSMO
                <img src={menuArrow} alt="" />
              </div>
              <span className="cosmo">Osmosis</span>
            </div>
            <span className="selected-cryp">
              = 0
            </span>
          </div>
          <div className="swap-heading-2">
            <span style={{ marginLeft: "10px" }}>1 aTOM = 16.636593 OSMO</span>
          </div>
          <div className="swap-heading-3">
            <img src={walletIcon} alt="" />
            Connect wallet
          </div>
        </div>
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
