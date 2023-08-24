
import './App.css';
import Build from './page/Build';
import Setting from './page/Setting';
import Publish from './page/Publish';
import {
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from './page/Dashboard';
import Analytics from './page/Analytics';
import Forms from './page/Forms';
import Errorpage from './page/Errorpage';
import Welcomepage from './components/setting/welcome_com';
import Formsettingpage from './components/setting/formsetting_com';
import Thankspage from './components/setting/thanksetting_com';
import PublishForm from './components/publish/form';
import Quickshare from './components/publish/share';
import AssignForm from './components/publish/assign';
import Emailshare from './components/publish/emailval';
function App() {
  return (
    <div className="App">
      
    <Routes>
       <Route path="/formbuilder" element={<Dashboard />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/build" element={<Build />} />

      <Route path="/setting" element={<Setting />} >
          <Route path='welcomepage' element={<Welcomepage />}></Route>
          <Route path='formpage' element={<Formsettingpage />}></Route>
           <Route path='thankspage' element={<Thankspage />}></Route>
      </Route>

      <Route path="/publish" element={<Publish />}>
        <Route path='forms' element={<PublishForm />} />
        <Route path='share' element={<Quickshare />} />
        <Route path='assign'  element={<AssignForm />} />
        <Route path='emailverification' element={<Emailshare />} />
       </Route> 

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path='/myform' element={<Forms />  } />
      <Route path='*' element={ <Errorpage />} />
      <Route path='/analytics/*' element={<Analytics />} >

      </Route>
        
      
      
    </Routes>
    
  </div>
  );
}

export default App;
