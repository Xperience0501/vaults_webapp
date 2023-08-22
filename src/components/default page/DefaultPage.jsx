import React, { useState } from "react";
import staduim from "../../assets/defaultstdm.svg";
import cricket from "../../assets/cricket.svg";
import dropdownarrow from "../../assets/dropdownarrow.svg";
import platButton from "../../assets/playbutton.svg";
import "./defaultpage.scss";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

function DefaultPage() {
    const [isAccordionExpanded, setIsAccordionExpanded] = useState(null);
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleAccordinChnage = (match)=>{
    if(match === isAccordionExpanded){
        setIsAccordionExpanded(null)
    }else {
        setIsAccordionExpanded(match)
    }
    
  }
  return (
    <div className="defaultPage-main">
      <div className="default-div1">
        <div className="lrc">
          <span style={{width:'30%'}}>liquidity pool size</span>
          <span style={{width:'30%' }}>Reward distribution in</span>
          <div className="create-new-pool">
            Create new pool
          </div>
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



      <div className={`default-div2 ${isAccordionExpanded === 'pak/nz' ? 'expanded' : ''}`} >
        <span className="selected-sport">
        <img src={cricket} alt="" style={{ marginLeft: "5%" }} />
        CRICKET (2)
        </span>
        <div className="match-dropdown">
        <Accordion expanded = {isAccordionExpanded === 'pak/nz'} onChange={()=>handleAccordinChnage('pak/nz')}>
          <AccordionSummary
            expandIcon={<img src={dropdownarrow} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Pakistan Vs. New Zealand Test Series</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="match-details">
              <div className="match-name">
                {arr.map((val, id) => {
                  return (
                    <div key={id}
                      className="map-details"
                      style={{
                        width: "100%",
                        height: "12.5%",
                        borderBottom: "2px solid #73a3ea",
                      }}
                    >
                      <span className="play-btn">
                        <img src={platButton} alt="" />
                      </span>
                      Pakistan New Zealand{" "}
                    </div>
                  );
                })}
              </div>
              <div className="liquidity">
                {arr.map((val, id) => {
                  return (
                    <div key={id}
                      className="map-details"
                      style={{
                        width: "100%",
                        height: "12.5%",
                        borderBottom: "2px solid #73a3ea",
                      }}
                    >
                      {" "}
                      liquidity{" "}
                    </div>
                  );
                })}
              </div>
              <div className="volume">
                {arr.map((val, id) => {
                  return (
                    <div key={id}
                      className="map-details"
                      style={{
                        width: "100%",
                        height: "12.5%",
                        borderBottom: "2px solid #73a3ea",
                      }}
                    >
                      {" "}
                      volume{" "}
                    </div>
                  );
                })}
              </div>
              <div className="fees">
                {arr.map((val, id) => {
                  return (
                    <div key={id}
                      className="map-details"
                      style={{
                        width: "100%",
                        height: "12.5%",
                        borderBottom: "2px solid #73a3ea",
                      }}
                    >
                      {" "}
                      fees{" "}
                    </div>
                  );
                })}
              </div>
              <div className="apr">
                {arr.map((val, id) => {
                  return (
                    <div key={id}
                      className="map-details"
                      style={{
                        width: "100%",
                        height: "12.5%",
                        borderBottom: "2px solid #73a3ea",
                      }}
                    >
                      {" "}
                      apr{" "}
                    </div>
                  );
                })}
              </div>
              {/* </div> */}
            </div>
          </AccordionDetails>
        </Accordion>
        </div>
      </div>
     

      <div  className={`default-div2 ${isAccordionExpanded === 'ind/nz' ? 'expanded' : ''}`} >
        <span className="selected-sport">
        <img src={cricket} alt="" style={{ marginLeft: "5%" }} />
        CRICKET (2)
        </span>
        <div className="match-dropdown">
        <Accordion expanded = {isAccordionExpanded === 'ind/nz'} onChange={()=>handleAccordinChnage('ind/nz')} >
          <AccordionSummary
            expandIcon={<img src={dropdownarrow} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>India Vs. New Zealand Test Series</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="match-details">
              <div className="match-name">
                {arr.map((val, id) => {
                  return (
                    <div key={id}
                      className="map-details"
                      style={{
                        width: "100%",
                        height: "12.5%",
                        borderBottom: "2px solid #73a3ea",
                      }}
                    >
                      <span className="play-btn">
                        <img src={platButton} alt="" />
                      </span>
                      Pakistan New Zealand{" "}
                    </div>
                  );
                })}
              </div>
              <div className="liquidity">
                {arr.map((val, id) => {
                  return (
                    <div key={id}
                      className="map-details"
                      style={{
                        width: "100%",
                        height: "12.5%",
                        borderBottom: "2px solid #73a3ea",
                      }}
                    >
                      {" "}
                      liquidity{" "}
                    </div>
                  );
                })}
              </div>
              <div className="volume">
                {arr.map((val, id) => {
                  return (
                    <div key={id}
                      className="map-details"
                      style={{
                        width: "100%",
                        height: "12.5%",
                        borderBottom: "2px solid #73a3ea",
                      }}
                    >
                      {" "}
                      volume{" "}
                    </div>
                  );
                })}
              </div>
              <div className="fees">
                {arr.map((val, id) => {
                  return (
                    <div key={id}
                      className="map-details"
                      style={{
                        width: "100%",
                        height: "12.5%",
                        borderBottom: "2px solid #73a3ea",
                      }}
                    >
                      {" "}
                      fees{" "}
                    </div>
                  );
                })}
              </div>
              <div className="apr">
                {arr.map((val, id) => {
                  return (
                    <div key={id}
                      className="map-details"
                      style={{
                        width: "100%",
                        height: "12.5%",
                        borderBottom: "2px solid #73a3ea",
                      }}
                    >
                      {" "}
                      apr{" "}
                    </div>
                  );
                })}
              </div>
              {/* </div> */}
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      </div>
    </div>
  );
}

export default DefaultPage;
