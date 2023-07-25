import React, { useState } from "react";

export default function PublishForm(){
    const [formtitlename,setformtitlename] = useState('form file name');
     const handletitlename = (e)=>{
        setformtitlename(e.target.value);
        console.log(formtitlename);
     }
     const [formstatus,setformstatus]=useState('');
     const handleselect = (e) =>{
      setformstatus();
      console.log(e.target.value);
      localStorage.setItem('formstatus',e.target.value);
     }
    
    return <div className="formsettingContainer">
             <h3 className="titleName">Form Setting</h3>
             <div className="formBackground">
             <form>
                <div className="formField btmLine">
                    <p className="labelName">Title</p>
                    <small className="labelInfo">Please fill the monthly feedback for tracking the problem with us</small>
                    <input type="text" placeholder="Form File Name" name="formtitlename"  onChange={handletitlename} />
                </div>
                <div className="formFieldParent" >
                <div className="formField">
                    <p className="labelName">Form Status</p>
                    <small className="labelInfo">You can disable your form now,on a specific date,or when it reaches a certain number of response</small>
                   <select onChange={handleselect} name="formstatus">
                    <option value="Enabled">Enabled</option>
                    <option value="Disable">Disable</option>
                    <option value="Disable on Date">Disable on Date</option>
                    <option value="Disable on Submission limit">Disable on Submission limit</option>
                    <option value="Disable on date and Submission limit">Disable on date and Submission limit</option>
                   </select>
                   </div>
                   
                   <div className=" fieldChild btmLine">
                   <p className="labelName">Submission Limit</p>
                    <small className="labelInfo">Limit the number of total submission(e.g1000)</small>
                    <input type="text" placeholder="Form File Name" />
                   </div>
                   <div className=" fieldChild btmLine">
                   <p className="labelName">Expire Date</p>
                    <small className="labelInfo">Disable form on a date</small>
                    <div className="flex align-center inputGroup">
                        <input type="date" />
                        <p>at</p>
                        <input type="time" />
                    </div>
                    
                   </div>
                   <div className=" fieldChild ">
                   <p className="labelName">Warning Message</p>
                    <small className="labelInfo">Set a message for form</small>
                    <input type="text" placeholder="Form File Name" />
                   </div>
                </div>
            
            
             </form>
             </div>
    </div>
}