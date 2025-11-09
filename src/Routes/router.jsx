import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import LogIn from '../Pages/LogIn/LogIn';
import Register from '../Pages/Register/Register';

 export const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"login",
                element:<LogIn></LogIn>
            }
            ,{
                path:"register",
                element:<Register></Register>
            }
        ]

    }
 ])
