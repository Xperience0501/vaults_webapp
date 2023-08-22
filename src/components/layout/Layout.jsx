

import { Grid } from '@mui/material'
import React from 'react'
import LayoutHeader from '../header/LayoutHeader'
import './layout.scss';
import SideBar from '../sideBar/SideBar';

function Layout({children}) {
  return (
    <div className='main-layout'>
        <Grid container height={'100%'}>
            <Grid height={'8%'} item xs={12} sm={12} md={12} lg={12}>
            <LayoutHeader/>
            </Grid>
            <Grid height={'92%'} item md={2.15} lg={2.15}>
             <SideBar/>
            </Grid>
            <Grid height={'92%'} item md={9.85} lg={9.85} sx={{overflow:'auto'}}>
                {children}
            </Grid>
        </Grid>
        
        
   </div>
  )
}

export default Layout