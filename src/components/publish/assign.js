import React  from "react";
import { NavLink,Link } from "react-router-dom";
import {TbWorld} from 'react-icons/tb'
import {VscLink} from 'react-icons/vsc';
import {MdOutlineMail,MdKeyboardArrowDown} from 'react-icons/md'
 import {BiLockAlt,BiSolidCheckCircle}from 'react-icons/bi';
  import {RiBuilding2Line} from 'react-icons/ri';
 
export default function AssignForm(){
  return <div className="emailshareContainer">
    <form>
    <div className="formBackground formblock">
      <div className="flex align-center justify-between assignlikheader ">
         <h4>Assign with link</h4>
        <span><NavLink>Setting</NavLink></span> 
      </div>
      <div className="linkAccess">
      <button className="btnLinktype"><TbWorld /><span>Public</span> <MdKeyboardArrowDown /></button>
      <ul className="linktypeAccess">
        <li><span className="flex align-center"><BiLockAlt /><span className="accessname">Private</span></span><span></span></li>
        <li><span className="flex align-center"><TbWorld /><span className="accessname">Public</span></span><span><BiSolidCheckCircle className="selectedtype" /></span></li>
        <li><span className="flex align-center"><RiBuilding2Line /><span className="accessname">Company access</span></span><span></span></li>
      </ul>
      </div>
      <span className="inputGroupIcon">
        <i><VscLink /></i>
        <p className="cpyText">Tap to copy</p>
      <input type="text" className="formLink " placeholder='https://form.google.com//8473939' />
      
      </span>
      <div className="textright">
      <a href='https://google.com' target="_blank()" className="tabLinkbtn">Open in New Tab</a>
      </div>
     

    </div>
    <div className="formBackground     pb-0">
      <div className="btmLine ">
    <h4>Invite By Email</h4>
    <span className="inputGroupIcon">
        <i><MdOutlineMail /></i>
       
      <input type="text" className="formLink " placeholder='Enter email address to send invitation with permissions.' />
      
      </span>
      </div>
      <div className="flex align-center justify-between formField ">
         <div>
        <h4>Assign to everyone in the organization</h4>
        <small>Make this form available to everyone in the company,even newcomers</small>
        </div>
        <div>
          <span className="togglebtn">
            <input type="checkbox" />
          </span>
        </div>
      </div>
    </div>
    </form>
    </div>
}