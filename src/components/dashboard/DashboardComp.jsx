import React, { useState } from "react";
import "./dashboard.scss";
import DashBoardHeader from "../dashboardHeader/DashBoardHeader";
import {
  Box,
  Button,
  Grid,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import graph1 from "../../assets/graph1.svg";
import ustdIcon from "../../assets/ustdIcon.svg";
import PoolModal from "./PoolModal";
const DashBoardComp = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div>
      <DashBoardHeader modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Box className={`dashboard-main ${modalOpen ? "blurred" : ""}`}>
        <Box className="main-box">
          <Box className="first-box">
            <Grid container height={"100%"}>
              <Grid item sx={{ paddingTop: "0px" }} md={8.9} lg={8.9}>
                <Box className="data1">0x...678 Portfolio</Box>
              </Grid>
              <Grid item md={0.9} lg={0.9} sx={style}>
                <Box className="data2">Withdraw</Box>
              </Grid>
              <Grid item md={2.2} lg={2.2} sx={style}>
                <Box className="data3">Deposit +</Box>
              </Grid>
            </Grid>
          </Box>

          <Box className="second-box">
            <Box className="data1">
              <Typography className="typo1">Investment</Typography>
              <Typography className="typo2">$30,000.00</Typography>
            </Box>
            <Box className="data2">
              {" "}
              <Typography className="typo1">
                Total Gain{" "}
                <span
                  style={{
                    color: "rgba(108, 243, 122, 1)",
                    background: "rgba(0, 107, 11, 0.2)",
                  }}
                >
                  ^ +66.667%
                </span>
              </Typography>
              <Typography className="typo2">$30,000.00</Typography>
            </Box>
            <Box className="data3">
              <Typography className="typo1">My Bal=total investment</Typography>
              <Typography className="typo1">
                + total gain
                <span
                  style={{
                    color: "rgba(108, 243, 122, 1)",
                    background: "rgba(0, 107, 11, 0.2)",
                  }}
                >
                  ^ +66.667%
                </span>
              </Typography>
              <Typography className="typo2" marginBottom={"20%"}>
                $50,000.00
              </Typography>
            </Box>
            <Box className="data4">
              <Typography className="typo1">My share of pool</Typography>
              <Typography className="typo2">0.5%</Typography>
            </Box>
          </Box>

          <Box className="third-box">
            <Box className="data1">
              <Typography className="typo">Total </Typography>
              <Typography className="typo">BTC</Typography>
              <Typography className="typo">ETH</Typography>
              <Typography className="typo"> USDT</Typography>
              <Typography className="typo">XRP</Typography>
              <Typography className="typo">DOT</Typography>
              <Typography className="typo">UNI</Typography>
            </Box>
            <Box className="data11">
              <hr />
            </Box>
            <Box className="data2">
              <Box className="data21">
                <Grid container height={"100%"}>
                  <Grid item sx={{ paddingTop: "5px" }} md={6} lg={6}>
                    <Box className="data211">Total pool</Box>
                    <Box className="data21b">
                      10,000,000
                      <span className="busdspan">BUSD</span>
                    </Box>
                    <Typography className="typo1">
                      $10,000,000.00
                      <span
                        style={{
                          color: "rgba(108, 243, 122, 1)",
                          background: "rgba(0, 107, 11, 0.2)",
                          marginLeft: "4%",
                        }}
                      >
                        +4.29%
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item sx={{ paddingTop: "0px" }} md={6} lg={6}>
                    <Box className="data212">Bets placed</Box>
                    <Box className="data212b">
                      580 Bets
                      <span
                        style={{
                          color: "rgba(108, 243, 122, 1)",
                          background: "rgba(0, 107, 11, 0.2)",
                          marginLeft: "4%",
                          fontSize: "11px",
                        }}
                      >
                        {" "}
                        +4.29%
                      </span>
                    </Box>
                  </Grid>
                  <Box className="data21c">
                    <Box className="centered-content">
                      {" "}
                      <img src={graph1} />
                    </Box>
                  </Box>
                </Grid>
              </Box>
              <Box className="data22">
                <Grid container height={"100%"}>
                  <Grid item sx={{ paddingTop: "5px" }} md={6} lg={6}>
                    <Box className="data211">Pool Performance</Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
          <Box className="forth-box">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    className="tablecell"
                    sx={{ borderBottom: "none" }}
                  >
                    <Switch className="custom-switch" />
                  </TableCell>
                  <TableCell
                    className="tablecell"
                    sx={{ borderBottom: "4px solid #85BBE4;" }}
                  >
                    Date/Time
                  </TableCell>
                  <TableCell
                    className="tablecell"
                    sx={{ borderBottom: "1px solid rgba(36, 43, 58, 1)" }}
                  >
                    User address
                  </TableCell>
                  <TableCell
                    className="tablecell"
                    sx={{ borderBottom: "1px solid rgba(36, 43, 58, 1)" }}
                  >
                    Sport
                  </TableCell>
                  <TableCell
                    className="tablecell"
                    sx={{ borderBottom: "1px solid rgba(36, 43, 58, 1)" }}
                  >
                    Match
                  </TableCell>
                  <TableCell
                    className="tablecell"
                    sx={{ borderBottom: "1px solid rgba(36, 43, 58, 1)" }}
                  >
                    Last Bet
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell
                  className="tablecell"
                  sx={{ borderBottom: "none" }}
                ></TableCell>
                <TableCell className="tablecell" sx={{ borderBottom: "none" }}>
                  20-12-2022
                </TableCell>
                <TableCell className="tablecell" sx={{ borderBottom: "none" }}>
                  06x90a...0521
                </TableCell>
                <TableCell className="tablecell" sx={{ borderBottom: "none" }}>
                  Cricket
                </TableCell>
                <TableCell className="tablecell" sx={{ borderBottom: "none" }}>
                  India Vs Pak
                </TableCell>
                <TableCell className="tablecell" sx={{ borderBottom: "none" }}>
                  <img src={ustdIcon} alt="" width="16px" height="15.238px" />
                  <span> 5,000.00</span>
                </TableCell>
              </TableBody>
            </Table>
          </Box>
          <Box className="fifth-box">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    className="tablecell"
                    sx={{ borderBottom: "none" }}
                  >
                    <Switch className="custom-switch" />
                  </TableCell>
                  <TableCell
                    className="tablecell"
                    sx={{ borderBottom: "4px solid #85BBE4" }}
                  >
                    Date/Time
                  </TableCell>
                  <TableCell
                    className="tablecell"
                    sx={{ borderBottom: "1px solid rgba(36, 43, 58, 1)" }}
                  >
                    User address
                  </TableCell>
                  <TableCell
                    className="tablecell"
                    sx={{ borderBottom: "1px solid rgba(36, 43, 58, 1)" }}
                  >
                    Sport
                  </TableCell>
                  <TableCell
                    className="tablecell"
                    sx={{ borderBottom: "1px solid rgba(36, 43, 58, 1)" }}
                  >
                    Match
                  </TableCell>
                  <TableCell
                    className="tablecell"
                    sx={{ borderBottom: "1px solid rgba(36, 43, 58, 1)" }}
                  >
                    Last Bet
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell
                  className="tablecell"
                  sx={{ borderBottom: "none" }}
                ></TableCell>
                <TableCell className="tablecell" sx={{ borderBottom: "none" }}>
                  20-12-2022
                </TableCell>
                <TableCell className="tablecell" sx={{ borderBottom: "none" }}>
                  06x90a...0521
                </TableCell>
                <TableCell className="tablecell" sx={{ borderBottom: "none" }}>
                  Cricket
                </TableCell>
                <TableCell className="tablecell" sx={{ borderBottom: "none" }}>
                  India Vs Pak
                </TableCell>
                <TableCell className="tablecell" sx={{ borderBottom: "none" }}>
                  <img src={ustdIcon} alt="" width="16px" height="15.238px" />
                  <span> 5,000.00</span>
                </TableCell>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Box>
      {modalOpen && (
        <>
          <PoolModal open={modalOpen} setModalOpen={setModalOpen} />
        </>
      )}
    </div>
  );
};

export default DashBoardComp;
