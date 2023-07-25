import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsBell,BsQuestionCircle,BsTextParagraph } from "react-icons/bs";
import {RiHeading } from 'react-icons/ri';
import {MdOutlineEmail,MdShortText,MdRadioButtonChecked,MdOutlineDateRange} from 'react-icons/md'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BiPhone,BiTimeFive} from 'react-icons/bi'
import {AiFillCheckSquare} from 'react-icons/ai'
import {IoIosArrowDropdownCircle} from 'react-icons/io';
import {PiTextbox} from 'react-icons/pi'

function Buildsidebar(){
    const [togglestate,setTogglestate] = useState(1);
    
    const elementtypename =[
        {
        id:0,
        name:'Heading',
        icon:<RiHeading/>
        },
        {
            id:1,
            name:'TextBox',
            icon:<PiTextbox/>
            
        },
        {
            id:2,
            name:'Email',
            icon:<MdOutlineEmail/>
        },
        {
            id:3,
            name:'Address',
            icon:<HiOutlineLocationMarker/>
        },
        {
             id:4,
             name:'Phone',
             icon:<BiPhone/>
        },
        {
            id:5,
            name:'Short Answer',
            icon:<MdShortText/>
        },
        {
            id:6,
            name:'Paragraph',
            icon:<BsTextParagraph/>
        },
        {
            id:7,
            name:'Multiple choise',
            icon:<MdRadioButtonChecked/>
        },
        {
            id:8,
            name:'Check box',
            icon:<AiFillCheckSquare/>
        },
        {
            id:9,
            name:'Dropdown',
            icon:<IoIosArrowDropdownCircle/>
        },
        {
            id:10,
            name:'Date',
            icon:<MdOutlineDateRange/>
        },
        {
             id:11,
             name:'Time',
             icon:<BiTimeFive />
        }
   ];
   
   function handleOnDrag(e,widgetType){
   e.dataTransfer.setData("widgetType",widgetType);
   }
 
   const listElement = elementtypename.map(elelis =>
    <li key={elelis.id} className="elementList" draggable onDragStart={(e) => handleOnDrag(e,elelis.name)}>
        <span>{elelis.icon}</span>
        <span>{elelis.name}</span>
    </li>
    );
    const toggleTab = (index) =>{
      setTogglestate(index);
    }
    return  <div className="sidebarBuild" >
    <div className="sideTitle">
        <h5>Add Your Form Elements</h5>
        
    </div>
    <div className="tabsElements">
      <div className="flex align-center tabsNav">
         <p className={togglestate === 1 ? 'tabs active':'tabs'} onClick={() => toggleTab(1)}>Basic</p>
         <p className={togglestate === 2 ? 'tabs active':'tabs'} onClick={() => toggleTab(2)}>survey</p>
      </div>
      <div className="tabscontent">
          <div className={togglestate === 1 ? 'content active':'content'}>
               <ul className="listelement">{listElement}</ul>
          </div>
          <div  className={togglestate === 2 ? 'content active':'content'}>
               <p>Survey</p>
          </div>
      </div>

    </div>
</div>
}
function Settingside(){
    return <div className="sidebarBuild" >
        <ul className="sideMenulist ">
         <li ><NavLink to='welcomepage'><div><BsBell /></div><div><p>Welcome page</p><small>Show before form submit</small></div></NavLink></li>
         <li ><NavLink to='formpage'><div><BsBell /></div><div><p>form page</p><small>Form status and properties</small></div></NavLink></li>
         <li ><NavLink to='thankspage'><div><BsBell /></div><div><p>Thanks page</p><small>Thank you page</small></div></NavLink></li>

         </ul>
        
        </div>;
}
function Publishside(){
    return <div className="sidebarBuild" >
        <ul className="sideMenulist formSettingmenu">
        <li> <NavLink to='forms'><div></div><div><p>Formsetting</p><small>Form status and propertices</small></div></NavLink></li>
        </ul>
    <ul className="sideMenulist topspace">
         <li ><NavLink to='share'><div><BsBell /></div><div><p>Quick share</p><small>Share Instant</small></div></NavLink></li>
         <li ><NavLink to='assign'><div><BsBell /></div><div><p>Assign Form</p><small>Assign Company</small></div></NavLink></li>
         <li ><NavLink to='emailverification'><div><BsBell /></div><div><p>Email</p><small>Please share with mail </small></div></NavLink></li>

         </ul>
    </div>;
}
function Sidebar(props){
   
 
    return (
        <div className="Sidebar leftSidebar">
           
           {props.type === 'build'?<Buildsidebar />:''}
           {props.type === 'setting'?<Settingside />:''}
           {props.type === 'publish'?<Publishside />:''}
        </div>
    );

}

export default Sidebar;