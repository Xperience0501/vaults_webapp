import React, { useEffect, useState } from "react";
import swapIcon from "../../assets/swapIcon.svg";
import poolIcon from "../../assets/poolIcon.svg";
import assetsIcon from "../../assets/assetsIcon.svg";
import stakeIcon from "../../assets/stakeIcon.svg";
import voteIcon from "../../assets/voteIcon.svg";
import statsIcon from "../../assets/statsIcon.svg";
import supportIcon from "../../assets/supportIcon.svg";
import "./sideBar.scss";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const [selectedTab, setselectedTab] = useState(null);

  const navigate = useNavigate();

  const handleClick = (e) => {
    let navigateTo = e.target.innerText;
    if (navigateTo === "Swap") {
      navigate("/swap");
    } else if (navigateTo === "Assets") {
      navigate("/assets");
    }else if (navigateTo === "Pool") {
      navigate("/pool");
    }
  };

  useEffect(() => {
    if (window.location.pathname === "/swap") {
      setselectedTab("swap");
    } else if (window.location.pathname === "/assets") {
      setselectedTab("assets");
    } else if (window.location.pathname === "/pool") {
      setselectedTab("pool");
    }else {
      setselectedTab(null);
    }
  }, [window.location.pathname]);
  return (
    <div className="sidebar-main">
      <div className="sidebar-tabs">
        <div
          className="sidebar-tab"
          style={{
            backgroundColor:
              selectedTab === "swap" ? "rgba(19, 64, 114, 1)" : "transparent",
          }}
          onClick={handleClick}
        >
          <img src={swapIcon} alt="" />
          swap
        </div>
        <div
          className="sidebar-tab"
          style={{
            backgroundColor:
              selectedTab === "pool" ? "rgba(19, 64, 114, 1)" : "transparent",
          }}
          onClick={handleClick}
        >
          <img src={poolIcon} alt="" />
          pool
        </div>
        <div
          className="sidebar-tab"
          style={{
            backgroundColor:
              selectedTab === "assets" ? "rgba(19, 64, 114, 1)" : "transparent",
          }}
          onClick={handleClick}
        >
          <img src={assetsIcon} alt="" />
          assets
        </div>
        <div
          className="sidebar-tab"
          style={{
            backgroundColor:
              selectedTab === "stake" ? "rgba(19, 64, 114, 1)" : "transparent",
          }}
          onClick={handleClick}
        >
          <img src={stakeIcon} alt="" />
          stake
        </div>
        <div
          className="sidebar-tab"
          style={{
            backgroundColor:
              selectedTab === "vote" ? "rgba(19, 64, 114, 1)" : "transparent",
          }}
          onClick={handleClick}
        >
          <img src={voteIcon} alt="" />
          vote
        </div>
        <div
          className="sidebar-tab"
          style={{
            backgroundColor:
              selectedTab === "stats" ? "rgba(19, 64, 114, 1)" : "transparent",
          }}
          onClick={handleClick}
        >
          <img src={statsIcon} alt="" />
          stats
        </div>
        <div
          className="sidebar-tab"
          style={{
            backgroundColor:
              selectedTab === "support"
                ? "rgba(19, 64, 114, 1)"
                : "transparent",
          }}
          onClick={handleClick}
        >
          <img src={supportIcon} alt="" />
          support
        </div>
      </div>
    </div>
  );
}

export default SideBar;
