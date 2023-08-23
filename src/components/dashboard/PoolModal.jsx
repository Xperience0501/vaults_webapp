import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "22%",
  left: "15%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: "20px",
  background:
    "linear-gradient(191deg, rgba(0, 47, 215, 0.30) 11.32%, rgba(255, 255, 255, 0.08) 100%)",

  pt: 2,
  px: 4,
  pb: 3,
};

export default function PoolModal({ open, setModalOpen }) {
  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Typography color={"white"} fontSize={"25px"}>
            Menu
          </Typography>
          <Box padding={"4%"}>
            <Box display={"flex"} justifyContent={"space-between"}>
              {" "}
              <Typography color={"#FFF"}>Overview</Typography>
              <Typography color={"#FFF"}>Pools</Typography>{" "}
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              {" "}
              <Typography color={"#FFF"}>Overview</Typography>
              <Typography color={"#FFF"}>Pools</Typography>{" "}
            </Box>
          </Box>
          <Typography color={"white"} fontSize={"25px"}>
            Products
          </Typography>
          <Box padding={"4%"}>
            <Box display={"flex"} justifyContent={"space-between"}>
              {" "}
              <Typography color={"#FFF"}>Sports betting</Typography>
              <Typography color={"#FFF"}>Games</Typography>{" "}
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
