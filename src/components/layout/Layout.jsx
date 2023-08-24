

import { Grid } from '@mui/material'
import React from 'react'
import LayoutHeader from '../header/LayoutHeader'
import './layout.scss';
import SideBar from '../sideBar/SideBar';
import { Route, Routes } from 'react-router-dom';
import DefaultPage from '../default page/DefaultPage';
import SwapComponent from '../swap/SwapComponent';
import AssetComponent from '../asset/AssetComponent';
import DashBoardComp from '../dashboard/DashboardComp';

function Layout({children}) {
  let pageName = window.location.pathname === '/pool';
  return (
    <div className='main-layout'>
       <Grid container height={'100%'}>
        <Grid height={'8%'} item xs={12} sm={12} md={12} lg={12}>
          <LayoutHeader/>
          </Grid>
           <Grid height={'92%'} item  sm={2.15} md={2.15} lg={2.15}>
           <SideBar/>
          </Grid> 
          <Grid height={'92%'} item  sm={9.85} md={9.85} lg={9.85} sx={{overflow:'auto'}}>
          <Routes>
            <Route path='/' element={ <DefaultPage/>}/>
            <Route path='/swap' element={ <SwapComponent/>}/>
            <Route path='/assets' element={ <AssetComponent/>}/>
           </Routes>
          </Grid>
      </Grid>
        
        
   </div>
  )
}

export default Layout