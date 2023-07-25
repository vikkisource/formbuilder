import React, { useState } from "react";
import Dheader from "../components/Dheader";
import {CiSearch} from 'react-icons/ci';

function Dashboard(){
    const [dashtabvalue,setdashtabvalue] = useState('all');
    const formlistdata =[{name:'Application Form'},{name:'File Upload Form'},{name:'Booking Form'},{name:'Survey Templates'},{name:'Consent Forms'},{name:'RSVP Forms'},{name:'appointment Form'},{name:'Registration Form'},{name:'Order Form'}]
    const handletab = (gettabvalue) => {
        setdashtabvalue(gettabvalue);
        
    }
   
   
    return <div className="layoutContainer">
        <div className="dashboardContainer">
        <Dheader></Dheader>
        <div className="text-center dashBanner">
            <h1 className="dashHeading"><span>1000+</span> Free Form Template</h1>
            <p>You can select the form based on your Category</p>
            <span className="dashinputgroup">
            <input type="text"  className="dashinput" placeholder="Search for template"/>
            <CiSearch />
            </span>
            </div>
            <div className="flex">
                <div className="dashsidebar">
                    <div className="dashsidetabs">
                       <p className={dashtabvalue === 'all'? 'active':''} onClick={() => handletab('all')}>All</p>
                       <p className={dashtabvalue === 'formcategory'? 'active':''} onClick={() => handletab('formcategory')}>Form category</p>
                    </div>
                    <div className="dashtabcontent">
                    <div className={dashtabvalue === 'all'? 'content active':'content'}>
                    {formlistdata.map((li) => {
                      return     <p>{li.name}</p>
                    })
                   }
                    </div>
                        
                       
                       
                    
                    </div>
                </div>
                <div></div>
            </div>
            </div>
    </div>
}
export default Dashboard;