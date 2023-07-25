import React from "react";
import {  NavLink,Link } from "react-router-dom";

import {IoCloseOutline} from "react-icons/io5";
import { BiRefresh } from "react-icons/bi";
class Header extends React.Component{
    render(){
        return (<div className="header">
                 <div className="flex align-center" >
                    <div className="formInfohead">
                        <p className="formName">Form file Name</p>
                        <small className="formChange">All changes saved at 10:40</small>
                    </div>
                    <div className="">
                    <BiRefresh  className="refreshIcon"/>
                    </div>
                 </div>
                 <div>
                    <nav className="formTabbtn">
                      
                      <NavLink to='/build'  >Build</NavLink>
                      <NavLink to='/setting' >Setting</NavLink>
                      <NavLink to='/publish/forms'>Publish</NavLink>
                    </nav>
                 </div>
                 <div className="flex align-center gap-8">
                    <button className="btn btn-pblue">Preview</button>
                    <Link to="/myform"><div className="cloRound"><IoCloseOutline className="closeIcon" /></div></Link>
                 </div>
        </div>)

    }
}

export default Header;