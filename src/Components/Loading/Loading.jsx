import React from 'react'
import {  ClipLoader } from "react-spinners";

const Loading = (style) => {
  return (
    <div className=' flex justify-center items-center'>
     <ClipLoader size={40} />
    </div>
  )
}

export default Loading
