// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import SwapComponent from './components/swap/SwapComponent';
import AssetComponent from './components/asset/AssetComponent';
import DefaultPage from './components/default page/DefaultPage';
import DashBoardComp from './components/dashboard/DashboardComp';

function App() {
  return (
    <div className='app' style={{width:'100vw',height:'100vh'}}>
      <Routes>
        <Route path='*' element={ <Layout/>}/>
        <Route path='/pool' element={ <DashBoardComp/>}/>
      </Routes>
    </div>
  );
}
export default App;
