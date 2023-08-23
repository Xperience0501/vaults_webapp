import { Box, Button, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import "./dashboardHeader.scss";
import poolIcon from "../../assets/poolIcon.svg";
import ustdIcon from "../../assets/ustdIcon.svg";
import settings from "../../assets/Glyph.svg";
import searchIcon from "../../assets/search.svg";
const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
function DashBoardHeader({ modalOpen, setModalOpen }) {
  return (
    <div className="header-dashboard-main">
      <Grid container height={"100%"}>
        <Grid item sx={{ paddingTop: "0px" }} md={0.9} lg={0.9}>
          <Box className="header-dashboard-logo">
            <Button
              className="Btn1"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <img src={poolIcon} alt="" width="16px" height="15.238px" />
              <span> Pools</span>
            </Button>
          </Box>
        </Grid>
        <Grid item sx={{ paddingTop: "0px" }} md={0.9} lg={0.9}>
          <Box className="header-dashboard-logo">
            <Button className="Btn2">
              {" "}
              <img src={poolIcon} alt="" width="16px" height="15.238px" />
              <span> POLYGON</span>
            </Button>
          </Box>
        </Grid>
        <Grid item sx={{ paddingTop: "0px" }} md={0.9} lg={0.9}>
          <Box className="header-dashboard-logo">
            <Button className="Btn2">
              <img src={ustdIcon} alt="" width="16px" height="15.238px" />
              <span> USDT</span>
            </Button>
          </Box>
        </Grid>
        <Grid item md={6.5} lg={6.5} sx={style}>
          {/* <Box className="header-dashboard-serch">
            <img src={searchIcon} alt="" />
            <input
              type="text"
              placeholder="Search any event eg. P Kypson v Riedi"
            />
          </Box> */}
        </Grid>
        <Grid item md={0.75} lg={0.75} sx={style}>
          <Box className="header-dashboard-settings">
            <img src={settings} alt="" />
          </Box>
        </Grid>
        <Grid item md={1.5} lg={1.5} sx={style}>
          <Box className="header-dashboard-walletBtn">Connect Wallet</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default DashBoardHeader;
