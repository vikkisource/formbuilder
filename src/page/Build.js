import React from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Rightsidebar from "../components/Rightsidebar";
import { useState } from "react";
import {RiDeleteBinLine} from 'react-icons/ri'

function headingcom(){
    
    return <div className="Headingblog">
                <p className="formHeadingbu">Heading</p>
                <p className="subtitlebu">Subtitle Here</p>
    </div>
}
function textboxcom(){
    return <div className="formfielBu">
        <label className="formBulabel">Label Name here</label>
        <input type="text"  className="formfieldbuInput" />

    </div>
}
function Build(props){
    const [widgets,setWidgets] = useState([]);
    function  handleDragOver(e) {
        
        e.preventDefault();
        // console.log('drag over');
    }  function handleOnDrop(e){
        const widgetType = e.dataTransfer.getData("widgetType"); 
        // console.log("widgetType",widgetType);
         setWidgets([...widgets,widgetType]);
  }
  function handle2ondrag(e){
    console.log(e);
  }
   function removethiscomp(getindex){
    var array = widgets; 
    var index = getindex;
    if (index !== -1) {
        array.splice(index, 1);
        setWidgets(array);
        
      }
   console.log(array);
    
   }
        return (<div>
            <Header></Header>
            
           <Sidebar type="build"></Sidebar>
           <div  className="mainContainer " >
            <div className="buildformpage" onDrop={handleOnDrop} onDragOver={handleDragOver}>
                {widgets.map((widget,index)=>{
                    if(widget === 'Heading'){
                       return <div className="bucompBox "> {headingcom()}   <div className="bucompaction"><span><RiDeleteBinLine  onClick={()=>removethiscomp(index)}/></span></div></div>
                    }
                    if(widget === 'TextBox'){
                        return <div className="bucompBox"> {textboxcom()}  <div className="bucompaction"><RiDeleteBinLine onClick={()=>removethiscomp(index)} /></div></div>
                    }
                  
                })}
                </div>

           </div>
           <Rightsidebar type="build" ></Rightsidebar>
        </div>
        );
    
}

export default Build;