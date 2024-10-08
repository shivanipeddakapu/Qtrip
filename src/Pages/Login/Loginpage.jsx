// import React from "react";
// import "../CityPage.css"
// export default function LoginPage(){
//     const logValid=()=>{
//            let log=document.getElementById("email1") 
//            let log1=document.getElementById("pass1")
//            if((log.value)===window.localStorage.getItem("email")&&(log1.value)===window.localStorage.getItem("password"))
//             {
//            window.open("./")
//         }else{
//             alert("enter valid details")
//         }

//     }
//     return(
//         <>
//         <h1 id="lform">Login Form</h1>
//        <div className="login">
    
//        <label htmlFor="">Email</label>
//     <input type="text" id='email1'/><br></br>
//     <label htmlFor="">Password</label>
//     <input type="password" id='pass1'/><br></br>
//     <button onClick={logValid}>Login</button>
//        </div>
//         </>
//     )
// }


import React from "react";
import "../CityPage.css";

export default function LoginPage() {
  const logValid = () => {
    let log = document.getElementById("email1");
    let log1 = document.getElementById("pass1");

    // Check if fields are empty
    if (!log.value || !log1.value) {
      alert("Please enter both email and password.");
      return; // Exit function if fields are empty
    }

    try {
      const storedEmail = window.localStorage.getItem("email");
      const storedPassword = window.localStorage.getItem("password");

      // Check if email and password exist in localStorage
      if (!storedEmail || !storedPassword) {
        throw new Error("Login data not found. Please register first.");
      }

      // Validate email and password
      if (log.value === storedEmail && log1.value === storedPassword) {
        window.open("./");
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } catch (error) {
      alert(error.message);
      // Optionally, you can navigate to an error page or log the error to a server
    }
  };

  return (
    <>
      <h1 id="lform">Login Form</h1>
      <div className="login">
        <label htmlFor="email">Email</label>
        <input type="text" id="email1" /><br />
        <label htmlFor="password">Password</label>
        <input type="password" id="pass1" /><br />
        <button onClick={logValid}>Login</button>
      </div>
    </>
  );
}
