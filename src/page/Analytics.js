import React from "react";
import Dheader from "../components/Dheader";

import record from '../assets/records.json'

import {
    Routes,
    Route,
    useSearchParams,
    BrowserRouter,
    NavLink
  } from "react-router-dom"

function Analytics(){
    const [queryParameters] = useSearchParams()
    return <div className="layoutContainer">
        <Dheader></Dheader>
    <div className="flex">
        <div className="anasidebar">
            <h4>My Forms</h4>
              {
                record.map(item => {
                  return(  <NavLink to={item.id}>
                        <div className="flex">
                            <div></div>
                            <div>
                                <p>{item.formname}</p>
                                <small>{item.created}</small>
                            </div>
                        </div>
                    </NavLink>)
                })
              }
        </div>
        <div className="anaContainer">

        <p>Form id:{queryParameters.get('formid')}</p>
             {
                record.map(data =>{
                    if(data.id === queryParameters.get('formid') ){
                    return (<p>{data.formname}</p>)
                    }
                })
             }
        </div>

    </div>
        </div>
    
}

export default Analytics;