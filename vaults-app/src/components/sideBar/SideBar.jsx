import React from "react";
import swapIcon from "../../assets/swapIcon.svg";
import poolIcon from "../../assets/poolIcon.svg";
import assetsIcon from "../../assets/assetsIcon.svg";
import stakeIcon from "../../assets/stakeIcon.svg";
import voteIcon from "../../assets/voteIcon.svg";
import statsIcon from "../../assets/statsIcon.svg";
import supportIcon from "../../assets/supportIcon.svg";

import "./sideBar.scss";
function SideBar() {
  return (
    <div className="sidebar-main">
      <div className="sidebar-tabs">
        <div className="sidebar-tab" tabIndex={0}>
          <img src={swapIcon} alt="" />
          Swap
        </div>
        <div className="sidebar-tab" tabIndex={0}>
          <img src={poolIcon} alt="" />
          Pool
        </div>
        <div className="sidebar-tab" tabIndex={0}>
          <img src={assetsIcon} alt="" />
          Assets
        </div>
        <div className="sidebar-tab" tabIndex={0}>
          <img src={stakeIcon} alt="" />
          Stake
        </div>
        <div className="sidebar-tab" tabIndex={0}>
          <img src={voteIcon} alt="" />
          Vote
        </div>
        <div className="sidebar-tab" tabIndex={0}>
          <img src={statsIcon} alt="" />
          Stats
        </div>
        <div className="sidebar-tab" tabIndex={0}>
          <img src={supportIcon} alt="" />
          Support
        </div>
      </div>
    </div>
  );
}

export default SideBar;
