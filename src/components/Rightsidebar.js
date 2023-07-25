import React from "react";

import {BsJustifyLeft,BsTextCenter,BsJustifyRight} from 'react-icons/bs'
import {IoIosArrowDown} from 'react-icons/io'

function Buildright(){
 return  <div> 
    <div className="sideTitle">
           <h5>Form Design</h5>
       </div>
    <div className="styleBlock ">
      <p className="styleproperName">Align</p>
      <BsJustifyLeft className="alignIcon" />
      <BsTextCenter className="alignIcon"  />
      <BsJustifyRight className="alignIcon"  />
    </div>
    <div className="styleBlock listType">
      <div>
        <p className="styleproperName">Title color</p>
        <div className="flex styleInputGroup align-center">
          <div className="leftPart">
            <input type="text"  className="styleInputField" placeholder="#000"/>
          </div>
          <div className="rightPart">
            <input type="color" className="styleInputcolor" />
          </div>
       </div>
       </div>
       <div>
       <p className="styleproperName">Heading Font</p>
        <div className="flex styleInputGroup align-center relative">
          <div className="leftPart">
            <input type="text"  className="styleInputField" placeholder="Barlow"/>
          </div>
          <div className="rightPart">
           <span><IoIosArrowDown /></span>
          </div>
          <ul className="fontsListdrop">
            <li>Poppins</li>
            <li>Arial</li>
            <li>Calibri</li>
          </ul>
       </div>
       </div>
       <div>
       <p className="styleproperName">Heading Font Size</p>
        <div className="flex styleInputGroup align-center">
          <div className="leftPart">
            <input type="text"  className="styleInputField" placeholder="24"/>
          </div>
          <div className="rightPart relative">
            <span className="scaletypename">px</span>
            <ul className="scaletypelist">
                <li>Em</li>
                <li>rem</li>

            </ul>
          </div>
       </div>
       </div>


      
    </div>
    <div className="styleBlock listType">
      <div>
       <p className="styleproperName">Subtitle Font</p>
        <div className="flex styleInputGroup align-center relative">
          <div className="leftPart">
            <input type="text"  className="styleInputField" placeholder="Barlow"/>
          </div>
          <div className="rightPart">
           <span><IoIosArrowDown /></span>
          </div>
          <ul className="fontsListdrop">
            <li>Poppins</li>
            <li>Arial</li>
            <li>Calibri</li>
          </ul>
       </div>
       </div>
       <div>
       <p className="styleproperName">Subtitle Font Size</p>
        <div className="flex styleInputGroup align-center">
          <div className="leftPart">
            <input type="text"  className="styleInputField" placeholder="16"/>
          </div>
          <div className="rightPart relative">
            <span className="scaletypename">px</span>
            <ul className="scaletypelist">
                <li>Em</li>
                <li>rem</li>

            </ul>
          </div>
       </div>
       </div>
       </div>
 </div>
}
function Settingright(){
  return <h1>Right setting</h1>
}
function Publishright(){
    return <h1>Right Publish</h1>
}
function Rightsidebar(props){
    return  <div className="Sidebar rightSidebar">
        {props.type === 'build'?<Buildright />:''}
        {props.type === 'setting'?<Settingright />:''}
        {props.type === 'publish'?<Publishright />:''}


    </div>;
}

export default Rightsidebar;