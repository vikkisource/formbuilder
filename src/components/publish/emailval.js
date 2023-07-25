import React from "react";
import { BsBell,BsQuestionCircle } from "react-icons/bs";
export default function Emailshare(){
    return <div className="emailshareContainer">
       <div className="formBackground flex align-center justify-between">
           <div>
              <h4>Share On Email</h4>
              <small className="labelInfo">Share a direct link to your form via email</small>
              </div>
              <BsQuestionCircle />
       </div>
       <div className="formBackground flex align-center justify-between">
        <div>
        <h4>Scheduled a Reminder Email</h4>
        <small className="labelInfo">Share a direct link to your form via email</small>
        </div>
        <BsQuestionCircle />

        </div>
    </div>
}