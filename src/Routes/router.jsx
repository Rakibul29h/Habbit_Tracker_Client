import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import MyHabits from "../Pages/Mybids/MyHabits";
import AddHabits from "../Pages/AddHabits/AddHabits";
import PublicHabit from "../Pages/PublicHabit/PublicHabit";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home";
import Details from "../Pages/Details/Details";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/Contact Us/ContactUs";
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../Pages/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: "true",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
      },

      {
        path: "/publicHabit",
        element: <PublicHabit></PublicHabit>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
        {
            index:true,
            element:<MyHabits></MyHabits>
        },
      {
        path: "myHabit",
        element: (
          <PrivateRoutes>
            <MyHabits></MyHabits>
          </PrivateRoutes>
        ),
      },
      {
        path: "addHabit",
        element: (
          <PrivateRoutes>
            <AddHabits></AddHabits>
          </PrivateRoutes>
        ),
      },
      {
        path:"profile",
        element:<Profile></Profile>
      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
