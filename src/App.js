// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import SwapComponent from './components/swap/SwapComponent';
import AssetComponent from './components/asset/AssetComponent';

function App() {
  return (
    <div className='app' style={{width:'100vw',height:'100vh'}}>
      <Layout>
        <Routes>
            <Route path='/swap' element={ <SwapComponent/>}/>
            <Route path='/assets' element={ <AssetComponent/>}/>
        </Routes>
      </Layout>

    </div>
  );
}

export default App;
