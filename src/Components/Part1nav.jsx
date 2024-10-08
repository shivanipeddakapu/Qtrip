  import React from "react";
 import { Link } from "react-router-dom";
export default class Part1nav extends React.Component{
    render(){
        return(
            <>
            <nav>
                <ul>
                    <li>Qtrip</li>
                    
                        <ul id="ul1">
                            <li><button id="bb1"><a href="">Home</a></button></li>
                            <li><button id="bb2"><a href="">Reservations</a></button></li>
                           <Link to="/log"><button id="b1" >Login Here</button></Link>
                            <Link to="/reg"><button id="b2">Register</button></Link>
                        </ul>
                    
                </ul>
            </nav>
            </>
        )
    }
}



