import React from 'react'
import Lottie from "lottie-react";
import Loader from "../../lotties/Loader.json"
import "../Loader/LoaderCss.css"

function LoaderCom() {
  return (
    <>
    <div className='Loader-main'>
      <div className='Loader-container'>
    <Lottie animationData={Loader} loop={true}  height={10} width={10}/>; 
    </div>
    </div>
      
      </>
  )
}

export default LoaderCom