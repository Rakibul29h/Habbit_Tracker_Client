import React from 'react'
import {  ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
     <ClipLoader size={40} />
    </div>
  )
}

export default Loading
