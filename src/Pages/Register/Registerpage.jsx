import React from 'react'
import "../CityPage.css"
import { Link } from 'react-router-dom'
export default function Registerpage(){
  const validation=()=>{
    let ele=document.getElementById("uname")
    let ele1=document.getElementById("email")
    let ele2=document.getElementById("pass")
    window.localStorage.setItem("name",ele.value)
    window.localStorage.setItem("email",ele1.value)
    window.localStorage.setItem("password",ele2.value)
  }
  return(
    <>
    <div className='Rform' >
      <h1 id="rform">Registration Form</h1>
    <label htmlFor="">UserName</label>
    <input type="text" id='uname'/>
    <label htmlFor="">Email</label>
    <input type="text" id='email'/>
    <label htmlFor="" >Password</label>
    <input type="password" id='pass'/>
   <Link to="/log"> <button onClick={validation}>Register</button></Link>
    </div>
    </>
  )
}

