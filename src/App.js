// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import SwapComponent from "./components/swap/SwapComponent";
import DashBoardHeader from "./components/dashboardHeader/DashBoardHeader";
import DashBoardComp from "./components/dashboard/DashboardComp";

function App() {
  return (
    <div className="app" style={{ width: "100vw", height: "100vh" }}>
      {/* <Layout>
        <Routes>
          <Route path="/swap" element={<SwapComponent />} />
          <Route path="/swap" element={<DashBoard />} />
        </Routes>
      </Layout> */}
      <DashBoardComp />
    </div>
  );
}

export default App;
