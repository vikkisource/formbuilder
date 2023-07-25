import React from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

import { Outlet } from "react-router";

class Publish extends React.Component{
    render(){
        return (<main>
            
            <Header></Header>
            <Sidebar type='publish'></Sidebar>
            <div className="mainContainer">
                <div className="contentLayout">
                <Outlet></Outlet>
                </div>
            </div>
            
           
        </main>);
    }
}

export default Publish;