import React from "react";
import  user  from '../assets/images/userprofile.jpg'
import { BsBell,BsQuestionCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import {FiSearch} from 'react-icons/fi'
import logo from '../assets/images/logo.png';
import {PiBellBold} from 'react-icons/pi'
class Dheader extends React.Component{
    render(){
        return(
            <div className="flex align-center justify-between dashHeader">
               <div className="flex align-center">
                  <img src={logo} alt="logo"/>
                  <nav className="navbarlink">
                    <NavLink to='../dashboard'>Dashboard</NavLink>
                    <NavLink to='../myform'>My Forms</NavLink>
                    <NavLink to='../Analytics'>Analytics</NavLink>
                  </nav>
               </div>
               <div className="flex align-center">
                <span className="headerSearchfield">
                  <input type="search" placeholder="search by any" />
                  <FiSearch />
                </span>
                 <div className="iconGroup">
                 <PiBellBold />
                 <BsQuestionCircle />
                 <div className="vLine"></div>
                 <div>
                    <img src={user} alt="user-logo" className="userImage" />
                 </div>
                 </div>
                 
               </div>
            </div>
        );
    }
}

export default Dheader;