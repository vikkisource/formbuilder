import React from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Rightsidebar from "../components/Rightsidebar";
import { Outlet } from "react-router";
import Welcomepage from "../components/setting/welcome_com";

class Setting extends React.Component{
    render(){
        return( <main>
            <Header></Header>
           
            <Sidebar type='setting'></Sidebar>
            <div className="mainContainer">
                <Outlet />
            </div>
            <Rightsidebar type="setting" ></Rightsidebar>
            </main>
      )
    }
}

export default Setting;