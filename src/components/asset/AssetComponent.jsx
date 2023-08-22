import React, { useState } from "react";
import "./asset.scss";
import {
  Box,
  Button,
  Paper,
  Switch,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from "@mui/material";
import Table from "@mui/material/Table";
import searchIcon from "../../assets/search.svg";
import sortIcon from "../../assets/sort.svg";
import styled from "@emotion/styled";
import makeStyles from "@mui/styled-engine";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
      backgroundColor: "transparent",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "transparent",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    color: "rgba(124, 231, 255, 1)",
    transition: theme.transitions?.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    border: "1px solid rgba(124, 231, 255, 1)",
    opacity: 1,
    backgroundColor: "transparent",
    boxSizing: "border-box",
  },
}));

function AssetComponent() {
  const [isSelected, setisSelected] = useState(true);
  const [className, setclassName] = useState();

  // const handleclick =()=>{

  // }
  return (
    <div className="asset-main">
      <div className="buttons-div">
        <div
          className="deposit-btn"
          onClick={() => setisSelected(true)}
          style={{
            background: isSelected ? "#7CE7FF" : "none",
            color: isSelected && "black",
          }}
        >
          Deposit
        </div>
        <div
          className="deposit-btn"
          onClick={() => setisSelected(false)}
          style={{
            background: isSelected ? "none" : "#7CE7FF",
            color: !isSelected && "black",
          }}
        >
          Withdraw
        </div>
      </div>
      <div className="asset-details">
        <div className="assets-balance">
          <span className="balance-heading">total assets</span>
          <span className="balance">$0</span>
        </div>
        <div className="assets-balance">
          <span className="balance-heading">bonded</span>
          <span className="balance">$0</span>
        </div>
        <div className="assets-balance">
          <span className="balance-heading">unbonded</span>
          <span className="balance">$0</span>
        </div>
        <div className="assets-balance">
          <span className="balance">$0</span>
        </div>
      </div>
      <div className="all-assets">
        <div className="assets-table-heading">all assets</div>
        <div className="assets-table-controls">
          <span className="zero-switch">
            hide zero balance
            <AntSwitch />
          </span>
          <div className="assets-table-search">
            <img src={searchIcon} alt="" />
            <input type="text" placeholder="Search" />
          </div>

          <span className="sort-table">
            sort by
            <img src={sortIcon} alt="" />
          </span>
        </div>
      </div>
      <div className="assets-table">
        <table className="assets-transac-table">
          <tr>
            <th
              style={{ width: "35%", textAlign: "start", paddingLeft: "35px" }}
            >
              Asset/chain
            </th>
            <th>Balance</th>
            <th>Deposit</th>
            <th>Withdraw</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default AssetComponent;
