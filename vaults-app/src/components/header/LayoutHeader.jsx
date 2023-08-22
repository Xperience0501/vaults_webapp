import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import "./layoutHeader.scss";
import headerLogo from "../../assets/Logo.svg";
import settings from "../../assets/Glyph.svg";
import searchIcon from "../../assets/search.svg";

function LayoutHeader() {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className="header-main">
      <Grid container height={"100%"}>
        <Grid item sx={{ paddingTop: "0px" }} md={2.15} lg={2.15}>
          <Box className="header-logo">
            <img src={headerLogo} alt="" />
          </Box>
        </Grid>
        <Grid item md={7.5} lg={7.5} sx={style}>
          <Box className="header-serch">
            <img src={searchIcon} alt="" />
            <input
              type="text"
              placeholder="Search any event eg. P Kypson v Riedi"
            />
          </Box>
        </Grid>
        <Grid item md={0.75} lg={0.75} sx={style}>
          <Box className="header-settings">
            <img src={settings} alt="" />
          </Box>
        </Grid>
        <Grid item md={1.5} lg={1.5} sx={style}>
          <Box className="header-walletBtn">Connect Wallet</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default LayoutHeader;
