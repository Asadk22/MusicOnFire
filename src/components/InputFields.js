import React from 'react'
import "../components/Input.css"

function InputFields(props) {
    const {type, placeholder} = props
  return (
    <form>
    <input type={type} placeholder={placeholder} className="field"/>
  </form>
  )
}



export default InputFields