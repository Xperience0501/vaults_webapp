import React from "react";
import staduim from "../../assets/defaultstdm.svg";
import cricket from '../../assets/cricket.svg';
import "./defaultpage.scss";

function DefaultPage() {
  return (
    <div className="defaultPage-main">
      <div className="default-div1">
        <div className="lrc">
          <span>liquidity pool size</span>
          <span style={{ marginLeft: "6%" }}>Reward distribution in</span>
        </div>
        <div className="stm-main">
          <img src={staduim} alt="" className="stdim" />
          <div className="markets">
            <div className="markets-div1">
              <span className="markets-heading">Markets</span>
              <div className="market-dropdown">
                <select id="dropdown" name="color" defaultValue={"red"}>
                  <option value="red" disabled>
                    Market Types
                  </option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="yellow">Yellow</option>
                </select>
              </div>
              <div className="markets-search">
                <input type="text" placeholder="Search..." />
              </div>
            </div>
            <div className="markets-div2">
                <span>liquidity</span>
                <span>Volume (24)</span>
                <span>Fees (7D)</span>
                <span>P/l ( 24 hrs )</span>
                <span>P / l ( 7 Day )</span>
                <span>remaining days</span>
            </div>
          </div>
        </div>
      </div>

      <div className="selected-sport">
        <img src={cricket} alt="" style={{marginLeft:'5%'}} />
        CRICKET (2)
      </div>
    </div>
  );
}

export default DefaultPage;
