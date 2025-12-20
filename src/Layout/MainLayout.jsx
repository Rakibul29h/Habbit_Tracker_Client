
import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from './../Components/Footer/Footer';
import { Toaster } from 'react-hot-toast';



const MainLayout = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Navbar></Navbar>
            <div className='min-h-[90vh]'>

            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayout;