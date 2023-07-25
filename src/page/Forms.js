import React from "react";
import Dheader from "../components/Dheader";
import { NavLink,Link } from "react-router-dom";
import {TfiBarChart,TfiMore} from 'react-icons/tfi'
import {LuSettings,LuEdit} from 'react-icons/lu'
import {AiOutlineEdit,AiOutlineEye} from 'react-icons/ai'
import {LiaClone} from 'react-icons/lia'
import {MdDeleteForever} from 'react-icons/md'
import {BiLockAlt} from 'react-icons/bi'
import {AiFillFileText} from 'react-icons/ai'
import {TbWorld} from 'react-icons/tb';
import {RiBuilding2Line} from 'react-icons/ri'
import {PiSortDescendingThin} from 'react-icons/pi'
import {HiAdjustmentsVertical} from 'react-icons/hi2';
import formlist from '../assets/records.json'

function Forms(){
    // const formlist =[
    //     {id:'form1',color:'blue',formname:'Monthly Feedback Form',created:'feb 25,2022',response:0,status:'draft',accesstype:'private'},
    //     {id:'form2',color:'yellow',formname:'Yearly Feedback Form',created:'feb 20,2022',response:14,status:'active',accesstype:'public'},
    //     {id:'form3',color:'pink',formname:'Event Feedback',created:'feb 15,2022',response:24,status:'active',accesstype:'public'},
    //     {id:'form4',color:'blue',formname:'Product Feedback', created:'feb 01,2022',response:40,status:'expired',accesstype:'public'},
    //     {id:'form5',color:'orange',formname:'Food Feedback',created:'jan 25,2022',response:104,status:'active',accesstype:'companyaccess'},
    //     {id:'form6',color:'blue',formname:'Company Feedback',created:'jan 18,2022',response:12,status:'active',accesstype:'public'}
    // ]
     
   
    
    return <div className="layoutContainer">
        <div className="formContainer ">
        <Dheader></Dheader>
        <div className="formContent">
        
       <div className="formHeader flex align-center justify-between">
        <p>My Forms</p>
        <div className="flex align-center">
        <button className="createformbtn"><Link to='/build'>Create New Form</Link></button>
        <div className="formlistfillicon">
        <HiAdjustmentsVertical />
       <PiSortDescendingThin />
        </div>
        </div>

       </div>
       <table className="formsDatatable">
        <thead>
            <th><input type="checkbox"/></th>
            <th>My Forms</th>
            <th>Response</th>
            <th>Status</th>
            <th>Access</th>
            <th></th>
        </thead>
        <tbody>
         {formlist.map((data) => (
        <tr>
            <td><input  type="checkbox" /></td>
                <td>
                    <div className="flex align-center">
                        <div className="formiconBox">
                            <AiFillFileText className="fileIcon " style={{ color: data.color }} />
                        </div>
                        <div>
                            <p className="listformName">{data.formname}</p>
                            <p className="formCreatedate">Created On: {data.created}</p>
                        </div>
                    </div>
                </td>
                <td>
                    <p className="responceText"><span>{data.response}</span> Response</p>
                </td>
                <td>
                  {data.status === 'draft' ? <p className="batch draft">Draft</p>:''}  
                  {data.status === 'expired' ? <p className="batch expired">Expired</p>:''}
                  {data.status === 'active' ? <p className="batch active">Active</p>: ''}           
                   
                </td>
                <td>   
                    {data.accesstype === 'private' ?  <div className="accessType">
                    <span><BiLockAlt /></span><span>Private</span>
                    </div> :''}
                    {data.accesstype === 'public' ?  <div className="accessType">
                    <span><TbWorld /></span><span>Public</span>
                    </div> :''}
                    {data.accesstype === 'companyaccess' ?  <div className="accessType">
                    <span><RiBuilding2Line /></span><span>Company Access</span>
                    </div> :''}
                   
                   
                </td>
                <td className="text-center">
                    <div className="flex align-center tableActiongroup">
                    <div className="tableAction ">
                        <NavLink to={'../analytics/?formid='+data.id } >
                        <div className="iconBg"><TfiBarChart /></div>
                        <span className="tooltip">Analytics</span>
                        </NavLink>
                    </div>
                    <div className="tableAction ">
                        <div className="iconBg"><LuSettings /></div>
                        <span className="tooltip">Setting</span>
                    </div>
                    <div className="tableAction ">
                        <div className="iconBg"><AiOutlineEdit /></div>
                        <span className="tooltip">Edit Form</span>
                    </div>
                    <div className="tableAction ">
                        <div className="iconBg"><TfiMore /></div>
                        <ul className="actionMorelist">
                            <li><span><AiOutlineEye /></span><span>View</span></li>
                            <li><span><LuEdit /></span><span>Rename</span></li>
                            <li><span><LiaClone /></span><span>Clone</span></li>
                            <li><span><MdDeleteForever /></span><span>Delete</span></li>
                        </ul>
                    </div>
                    </div>
                   
                    </td>
        </tr>
         ))
}
            
        </tbody>
       </table>
       </div>
       </div>
    </div>
}

export default Forms;