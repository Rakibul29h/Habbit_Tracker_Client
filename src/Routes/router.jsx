import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import LogIn from '../Pages/LogIn/LogIn';
import Register from '../Pages/Register/Register';
import PrivateRoutes from './PrivateRoutes';
import MyHabits from '../Pages/Mybids/MyHabits';
import AddHabits from '../Pages/AddHabits/AddHabits';
import PublicHabit from '../Pages/PublicHabit/PublicHabit';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/HomePage/Home';


 export const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
         errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                index:"true",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<LogIn></LogIn>
            }
            ,{
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/myHabit",
                element:<PrivateRoutes>
                    <MyHabits></MyHabits>
                </PrivateRoutes>
            },
            {
                path:"/addHabit",
                element:<PrivateRoutes>
                    <AddHabits></AddHabits>
                </PrivateRoutes>
            },
            {
                path:"/publicHabit",
                element:<PublicHabit></PublicHabit>
            }
        ]

    },
      {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
 ])
